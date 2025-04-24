import { screen, render, fireEvent } from '@testing-library/react';
import { EditTaskModal } from "../EditModal";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer, { } from "../../../store/tasksSlice";


describe('EditModal', () => {


    const task = {
        id: 1,
        text: "Test Görevi"
    };

    const renderModal = (overrideProps = {}) => {
        const store = configureStore({
            reducer: {
                tasks: tasksReducer,
            },
        });


        const onCloseMock = jest.fn();

        render(
            <Provider store={store}>
                <EditTaskModal
                    isOpen={true}
                    onClose={onCloseMock}
                    task={task}
                    {...overrideProps}
                />
            </Provider>)
        return { store, onCloseMock };
    }

    it("modal render ediliyor mu?", () => {
        renderModal();
        expect(screen.getByText("Görevi Güncelle")).toBeInTheDocument();

    });

    it("input alanı başlangıçta görev metni ile doldurulmuş mu?", () => {
        renderModal();
        const input = screen.getByPlaceholderText("Yeni görev metni...");
        expect(input).toHaveValue(task.text);
    });

    it("Kaydet butonuna tiklayinca görev güncellenir ve modal kapanir", () => { 
        const { store, onCloseMock } = renderModal();
        const input = screen.getByPlaceholderText("Yeni görev metni...");
        const saveButton = screen.getByText("Kaydet");

        fireEvent.change(input, { target: { value: "Güncellenmiş Görev" } });
        fireEvent.click(saveButton);

        const updatedTask = store.getState().tasks.items.find((t:any) => t.id === 1);
        expect(updatedTask?.text).toBe("Güncellenmiş Görev");
        expect(onCloseMock).toHaveBeenCalled();
    });

    it("İptal butonuna tiklayinca modal kapanir", () => {
        const { onCloseMock } = renderModal();
        const cancelButton = screen.getByText("İptal");

        fireEvent.click(cancelButton);
        expect(onCloseMock).toHaveBeenCalled();
    });

})