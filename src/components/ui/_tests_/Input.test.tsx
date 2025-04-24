import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../Input";

describe("Input", () => {
    it("placeholder'ı doğru gösterir", () => {
        render(<Input value="" onChange={() => { }} placeholder="Test Placeholder" />);
        expect(screen.getByPlaceholderText("Test Placeholder")).toBeInTheDocument();
    });
    it("değer yazılınca çalışıyor", () => {
        const handleChange = jest.fn();
        render(<Input value="" onChange={handleChange} />);
        const input = screen.getByRole("textbox");
        fireEvent.change(input, { target: { value: "Büşra" } });
        expect(handleChange).toHaveBeenCalled();
    });
});