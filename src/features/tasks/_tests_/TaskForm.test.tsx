import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../../../store/tasksSlice";
import { TaskForm } from "../TaskForm";

//  Test case to check if the TaskForm component renders correctly
const renderWithStore = () => {
    const store=configureStore({
        reducer:{
            tasks:tasksReducer
        }
    })
   render(
    <Provider store={store}>
      <TaskForm />
    </Provider>
  );
  return store;
};

describe("TaskForm", () => { 
    it("input alanı render oluyor mu?", () => {
        renderWithStore();
        const inputElement = screen.getByPlaceholderText("Yeni Görev");
        expect(inputElement).toBeInTheDocument();
    });

    it("yazıp gönderince Redux a dispatch yapılır ve input sıfırlanır",()=> {
         const store = renderWithStore();
         const input = screen.getByPlaceholderText("Yeni Görev");
         const button = screen.getByRole("button");

         //Yazı yazıyoruz
         fireEvent.change(input,{target:{value:"Yeni Görev"}});

         // Butona tıklıyoruz
        fireEvent.click(button);

        // Redux a dispatch yapılıyor mu?
        const state = store.getState();
        
        expect(state.tasks.items).toHaveLength(1);
        expect(state.tasks.items[0].text).toBe("Yeni Görev");
        // Input sıfırlanıyor mu?
        expect((input as HTMLInputElement).value).toBe("");
    });

});
