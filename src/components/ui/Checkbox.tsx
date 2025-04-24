import React from "react";
import clsx from "clsx";

type CheckboxProps = {
    checked: boolean;
    onChange: () => void;
    label?: string;
    className?: string;
    id?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    onChange,
    label,
    className = "",
    id= "checkbox-" + Math.random().toString(36).slice(2, 8),
}) => {
 return (
    <div className={clsx("flex items-center gap-2", className)}>
        <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="peer hidden"/>
        <label
        htmlFor={id}
        className={clsx("w-5 h-5 rounded border-2 border-gray-400 flex items-center justify-center",
        "cursor-pointer transition-all peer-checked:bg-blue-600 peer-checked:border-blue-600"
      )}>
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </label>
    </div>
 )
}