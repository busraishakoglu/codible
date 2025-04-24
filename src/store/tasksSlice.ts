import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type Task = {
    id:number;
    text:string;
    completed:boolean;
}
type TasksState = {
    items:Task[];
    filterText: string;
    filterStatus: string;
}
const initialState:TasksState = {
    items:[
        { id: 1, text: "1. Görev", completed: false },
        { id: 2, text: "2. Görev", completed: true },
        { id: 3, text: "3. Görev", completed: false },
    ],
    filterText: "",
    filterStatus: "all",
}
const tasksSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask:(state,action:PayloadAction<string>)=>{
            const newTask:Task = {
                id:Date.now(),
                text:action.payload,
                completed:false
            }
            state.items.push(newTask);
        },
        deleteTask:(state,action:PayloadAction<number>)=>{
            state.items = state.items.filter((task)=>task.id !== action.payload);
        },
        updateTask:(state,action)=>{
            const task = state.items.find((task)=>task.id === action.payload.id);
            
            if(task){
                console.log(action.payload);
                task.text = action.payload.newText;
            }   
        },
        toogleCompleted:(state,action)=>{
            const task = state.items.find((task)=>task.id === action.payload);
            if(task){
                task.completed = !task.completed;
            }
        },
        setFilterStatus:(state,action:PayloadAction<any>)=>{
            state.filterStatus = action.payload;
        },
        setFilterText:(state,action:PayloadAction<string>)=>{
            state.filterText = action.payload;
        },
        getTasks:(state,action:PayloadAction<Task[]>)=>{
            state.items = action.payload;
        }
    }
})
export const {addTask,deleteTask,updateTask,toogleCompleted, setFilterStatus, setFilterText} = tasksSlice.actions;
export default tasksSlice.reducer;
