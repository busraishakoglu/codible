import {render,screen,fireEvent} from "@testing-library/react";
import {Checkbox} from "../Checkbox";

describe("Checkbox", () => {
    it("checkbox doğru şekilde render ediliyor", () => {
        render(<Checkbox checked={false} onChange={() => {}} />);

        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeInTheDocument();
    });

    it("checkbox tıklandığında onChange fonksiyonu çağrılıyor", () => {
        const handleChange = jest.fn();
        render(<Checkbox checked={false} onChange={handleChange} />);

        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);

        expect(handleChange).toHaveBeenCalled();
    });
});