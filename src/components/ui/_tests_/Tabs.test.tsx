import { screen, render, fireEvent } from '@testing-library/react';
import { Tabs } from '../Tabs';

describe('Tabs', () => {
    const options = [
        { label: "Tümü", value: "all" },
        { label: "Tamamlananlar", value: "completed" },
        { label: "Tamamlanmayanlar", value: "incomplete" },
    ];

    it("Tüm butonlar doğru şekilde render edilir", () => {
        render(<Tabs options={options} active="all" onChange={() => { }} />);

        options.forEach((option) => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    it("Aktif buton doğru işaretleniyor", () => {
        render(<Tabs options={options} active="completed" onChange={() => { }} />);

        const activeButton = screen.getByText("Tamamlananlar");
        expect(activeButton).toHaveClass("border-blue-600 text-blue-600");
    });

    it("Butona tıklandığında onChange fonksiyonu çağrılır", () => {
        const handleChange = jest.fn();
        render(<Tabs options={options} active="all" onChange={handleChange} />);

        const button = screen.getByText("Tamamlananlar");
        fireEvent.click(button);

        expect(handleChange).toHaveBeenCalledWith("completed");
    });
});