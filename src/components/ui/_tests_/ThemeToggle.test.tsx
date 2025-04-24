import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer, { toggleTheme } from "../../../store/themeSlice";
import { ThemeToggle } from "../ThemeToggle";

// Yardımcı: test için mock store hazırlayan fonksiyon
const renderWithStore = (initialMode: "light" | "dark" = "light") => {
  const store = configureStore({
    reducer: {
      theme: themeReducer,
    },
    preloadedState: {
      theme: { mode: initialMode },
    },
  });

  render(
    <Provider store={store}>
      <ThemeToggle />
    </Provider>
  );

  return store;
};

describe("ThemeToggle", () => {
  it("başlangıçta doğru temayı gösterir (light)", () => {
    renderWithStore("light");
    expect(screen.getByRole("button")).toHaveTextContent("🌙 Karanlık");
  });

  it("başlangıçta doğru temayı gösterir (dark)", () => {
    renderWithStore("dark");
    expect(screen.getByRole("button")).toHaveTextContent("☀️ Aydınlık");
  });

  it("tıklanınca tema değişir (light -> dark)", () => {
    const store = renderWithStore("light");
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(store.getState().theme.mode).toBe("dark");
  });
});
    