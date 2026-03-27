import React from "react";

const variants = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg font-medium transition ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
