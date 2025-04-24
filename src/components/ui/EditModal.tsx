// src/features/tasks/EditTaskModal.tsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../store/tasksSlice";
import { Button } from "./Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  task: { id: number; text: string };
};

export const EditTaskModal = ({ isOpen, onClose, task }: Props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(task.text);

  const handleSave = () => {     
    if (text.trim()) {
      dispatch(updateTask({ id: task.id, newText: text.trim() }));
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-white-800 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-lg font-semibold text-center">Görevi Güncelle</h2>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Yeni görev metni..."
        />
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>İptal</Button>
          <Button variant="primary" onClick={handleSave}>Kaydet</Button>
        </div>
      </div>
    </div>
  );
};
