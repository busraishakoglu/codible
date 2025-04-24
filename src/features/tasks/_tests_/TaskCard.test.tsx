import { render, screen, fireEvent } from "@testing-library/react";
import { TaskCard } from "../TaskCard";

const defaultTask = {
  id: 1,
  text: "Test Görevi",
  completed: false,
};

const setup = (overrides = {}) => {
  const props = {
    task: defaultTask,
    onDelete: jest.fn(),
    onToggle: jest.fn(),
    ...overrides,
  };

  render(<TaskCard text={""} {...props} />);
  return props;
};

describe("TaskCard", () => {
  it("görev metnini ekranda gösterir", () => {
    setup();
    expect(screen.getByText("Test Görevi")).toBeInTheDocument();
  });

  it("Sil butonuna tıklandığında onDelete fonksiyonu çağrılır", () => {
    const { onDelete } = setup();
    fireEvent.click(screen.getByText("Sil"));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it("Checkbox tıklandığında onToggle fonksiyonu çağrılır", () => {
    const { onToggle } = setup();
    fireEvent.click(screen.getByRole("checkbox"));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
  it("tamamlanmış görev metni çizgili görünür",()=>{
    setup({
      task: {
        ...defaultTask,
        completed: true,
      },})

      const text =screen.getByText("Test Görevi");
      expect(text).toHaveClass("line-through");
  })
});

// it("görev metnini gösterir",()=>{
//     render(<TaskCard text="Test Görevi" onDelete={() => { } } task={{
//         id: 0,
//         text: '',
//         completed: false
//     }} onToggle={function (): void {
//         throw new Error('Function not implemented.');
//     } }/>);
//     expect(screen.getByText("Test Görevi")).toBeInTheDocument();
// });

// it("sil butonuna tıklandığında onDelete fonksiyonunu çağırır", () => {
//     const onDeleteMock = jest.fn();
//     render(<TaskCard text="Test Görevi" onDelete={onDeleteMock} task={{
//         id: 0,
//         text: '',
//         completed: false
//     }} onToggle={function (): void {
//         throw new Error('Function not implemented.');
//     } } />);
    
//     const deleteButton = screen.getByText("Sil");
//     fireEvent.click(deleteButton);
    
//     expect(onDeleteMock).toHaveBeenCalledTimes(1);
//   });

//   it("checkbox tıklandığında onToggle fonksiyonunu çağırır", () => {
//     const onToggleMock = jest.fn();
//     render(<TaskCard text="Test Görevi" onDelete={() => { }} task={{
//         id: 0,
//         text: '',
//         completed: false
//     }} onToggle={onToggleMock} />);
    
//     const checkbox = screen.getByRole("checkbox");
//     fireEvent.click(checkbox);
    
//     expect(onToggleMock).toHaveBeenCalledTimes(1);
//   });