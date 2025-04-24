import React, { useState } from "react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

import { useDispatch } from "react-redux";
import { addTask } from "../../store/tasksSlice";
import { AppDispatch } from "../../store";


export const TaskForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch<AppDispatch>();
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;
        dispatch(addTask(text.trim())); // redux’a gönderiyoruz
        setText("");
    }
    
    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Yeni Görev" />
            <Button >Ekle</Button>
        </form>
    )
}
