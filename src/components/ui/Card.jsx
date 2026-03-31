import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
      {title && (
        <h3 className="text-lg font-semibold mb-2 line-clamp-1" title={title}>
          {title}
        </h3>
      )}
      <div className="line-clamp-4">{children}</div>
    </div>
  );
}
