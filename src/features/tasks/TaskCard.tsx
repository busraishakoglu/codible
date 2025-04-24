import clsx from "clsx";
import { Checkbox } from "../../components/ui/Checkbox";
import { useState } from "react";
import { EditTaskModal } from "../../components/ui/EditModal";


type Props = {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  text: string;
  onDelete: () => void;
  onToggle: () => void;
};

export const TaskCard = ({ text, onDelete, task, onToggle }: Props) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-between items-center border p-3 rounded shadow-sm bg-white">
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <Checkbox checked={task.completed} onChange={onToggle} />
        <span
          className={clsx(
            "text-sm transition",
            task.completed
              ? "line-through text-gray-500 dark:text-gray-400"
              : "text-black dark:text-black"
          )}
        >
          {text}
        </span>
      </label>
      <div className="flex gap-2">
        <button
          onClick={()=>setIsModalOpen(true)}
          className="px-3 py-1.5 rounded-md  text-gray-800 transition">
            ✏️ 
        </button>

        <button
          onClick={onDelete}
          className="px-3 py-1.5 rounded-md  text-white transition">
          🗑️
        </button>
      </div>

      <EditTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={task}
      />

    </div>
  );
};
