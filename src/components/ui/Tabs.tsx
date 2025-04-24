import clsx from "clsx";

type TabOption={
    label:string;
    value:string;
}

type TabsProps = {
    options: TabOption[];
    active: string;
    onChange: (value: string) => void;
    className?: string;
};

export const Tabs = ({ options, active, onChange, className = ""}: TabsProps) => {
    return (
    <div className={clsx("flex gap-4  border-gray-300 dark:border-gray-700 mb-4", className)}>
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={clsx(
            "pb-2 transition-all duration-300 text-sm font-medium border-b-2",
            active === opt.value
             ? "border-blue-600 text-blue-600"
          : "border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-400"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
    );
}
