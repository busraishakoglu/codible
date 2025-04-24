import React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary"| "danger" | "success";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: Variant;
    disabled?: boolean;
};

const variantStyles: Record<Variant, string>={
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className,
    variant = "primary",
    disabled = false,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx("px-4 py-2 rounded font-medium transition",
                variantStyles[variant],
                disabled && "opacity-50 cursor-not-allowed",
                className
              )}
        >
            {children}
        </button>
    );
};