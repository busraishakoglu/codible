import { useDispatch, useSelector } from "react-redux";
import { TaskCard } from "./TaskCard";
import { AppDispatch, RootState } from "../../store";
import { deleteTask, setFilterStatus, toogleCompleted } from "../../store/tasksSlice";

import { Tabs } from "../../components/ui/Tabs";

const filterOptions = [
  { label: "Tümü", value: "all" },
  { label: "Tamamlananlar", value: "completed" },
  { label: "Tamamlanmayanlar", value: "incomplete" },
];

export const TaskList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const tasks = useSelector((state: RootState) => state.tasks.items);
  const filterStatus = useSelector((state: RootState) => state.tasks.filterStatus);
  const filterText = useSelector((state: RootState) => state.tasks.filterText);

  //duruma göre filtrele
  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(filterText.toLowerCase()))
    .filter(task => {
      if (filterStatus === "completed") return task.completed;
      if (filterStatus === "incomplete") return !task.completed;
      return true; // "all"
    });



  return (
    <div className="flex flex-col gap-2 mt-6">
      <Tabs className="justify-center" options={filterOptions} active={filterStatus} onChange={(value:any) => dispatch(setFilterStatus(value))}/>
      {filteredTasks.length === 0 && (<p className="text-gray-500 text-center">Henüz bir görev yok.</p>)}
      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          text={task.text}
          task={task}
          onDelete={() => dispatch(deleteTask(task.id))}
          onToggle={() => dispatch(toogleCompleted(task.id))} />
      ))}
    </div>
  );
};
