import themeReducer, { ThemeState, toggleTheme } from "../themeSlice";

describe("themeSlice", () => {
    it("başlangıç state'ini döndürür", () => {
        const state = themeReducer(undefined, { type: "@@INIT" });
        expect(state.mode).toBe("light");
    });

    it("temayı dark yapar", () => {
        const initialState: ThemeState = { mode: "light" };
        const action = toggleTheme();
        const state = themeReducer(initialState, action);

        expect(state.mode).toBe("dark");
    });


    it("temayı light yapar", () => {
        const initialState: ThemeState = { mode: "dark" };
        const action = toggleTheme();
        const state = themeReducer(initialState, action);

        expect(state.mode).toBe("light");
    });
});