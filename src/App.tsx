import './App.css';
import { TaskForm } from './features/tasks/TaskForm';
import { TaskList } from './features/tasks/TaskList';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Search from './features/tasks/Search';



function App() {

  const theme = useSelector((state: RootState) => state.theme.mode);


  return (
    <>
       <div className={`min-h-screen p-8 max-w-xl mx-auto transition-colors duration-300 ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
    }`}>
      <h1 className="text-2xl font-bold mb-4 text-center">📝 GÖREV LİSTESİ</h1>
      <ThemeToggle/><br/><br/><br/>
      <Search/>
      <TaskForm/>
      <TaskList/>
    </div>
    </>
  )
}

export default App
