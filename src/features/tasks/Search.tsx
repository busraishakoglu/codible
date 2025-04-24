import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { RootState } from "../../store";
import { setFilterText } from "../../store/tasksSlice";


const Search = () => {
    const filter = useSelector((state: RootState) => state.tasks.filterText);

    const dispatch = useDispatch();
    return (
        <div className="flex justify-between items-center mb-4">
            <Input value={filter} onChange={(e) => dispatch(setFilterText(e.target.value))} placeholder="Görev Ara..." className='w-[80%]' />
            <Button onClick={() => dispatch(setFilterText(""))}>Temizle</Button>
        </div>
    )
}
export default Search;
