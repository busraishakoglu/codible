import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  it("butonu render eder", () => {
    render(<Button>Test Butonu</Button>);
    expect(screen.getByText("Test Butonu")).toBeInTheDocument();
  });

  it("tıklanınca çalışır", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Tıkla</Button>);
    fireEvent.click(screen.getByText("Tıkla"));
    expect(handleClick).toHaveBeenCalled();
  });
});
