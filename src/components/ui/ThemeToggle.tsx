import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import { RootState } from "../../store";
import { Button } from "./Button";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <Button
      onClick={() => dispatch(toggleTheme())}
      variant="secondary"
      className="self-end"

    >
      {theme === "dark" ? "☀️ Aydınlık" : "🌙 Karanlık"}
    </Button>
  );
};
