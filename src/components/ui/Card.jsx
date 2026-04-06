import React from "react";

export default function Card({ title, description }) {
  return (
    <div className="bg-gray-50 shadow-sm border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
      {title && (
        <h3 className="text-lg font-semibold mb-2 line-clamp-1" title={title}>
          {title}
        </h3>
      )}
      {description ? (
        <p className="line-clamp-4 text-sm text-gray-600" title={description}>
          {description}
        </p>
      ) : (
        <div className="line-clamp-1 text-sm text-gray-600">No Discription</div>
      )}
    </div>
  );
}
