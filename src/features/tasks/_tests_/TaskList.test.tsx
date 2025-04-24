import {  render,screen, fireEvent} from "@testing-library/react";
import { TaskList } from "../TaskList";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer,{addTask} from "../../../store/tasksSlice";

//Mock the TaskCard component
const renderWithStore = (initialTasks: string[]) => {
    const store = configureStore({
        reducer: {
        tasks: taskReducer,
        },
    });
    
    initialTasks.forEach((task) => {
        store.dispatch(addTask(task));
    });
    
    render(
        <Provider store={store}>
        <TaskList />
        </Provider>
    );
    return store;
}

describe("TaskList", () => {

    it("görevleri listeler",()=> {
        renderWithStore(["Görev 1", "Görev 2", "Görev 3"]);

        expect(screen.getByText("Görev 1")).toBeInTheDocument();
        expect(screen.getByText("Görev 2")).toBeInTheDocument();
        expect(screen.getByText("Görev 3")).toBeInTheDocument();
    });

    it("silme butonuna tıklandığında görevi siler", () => {
        const store = renderWithStore(["Silinecek Görev"]);
        
        const deleteButton = screen.getByRole("button", { name: /sil/i });
        fireEvent.click(deleteButton);

        const state = store.getState();
        expect(state.tasks.items).toHaveLength(0);
    });

    it("görev yoksa mesaj gösterir", () => {
        renderWithStore([]);

        expect(screen.getByText(/henüz bir görev yok/i)).toBeInTheDocument();
    });
});