import React from "react";

export default function Card({ title, description, children }) {
  return (
    <div className="bg-white shadow-sm border rounded-xl p-5 hover:shadow-md transition">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {description && (
        <p className="text-sm text-gray-500 mb-3">{description}</p>
      )}
      {children}
    </div>
  );
}
