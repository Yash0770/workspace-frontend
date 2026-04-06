import React, { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/Icon/Icon";

export default function Card({ title, description, createdOn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { label: "View", icon: "eyeIcon" },
    { label: "Edit", icon: "pencilIcon" },
    { label: "Delete", icon: "trashIcon", danger: true },
  ];

  return (
    <div className="relative bg-gray-50 shadow-sm border border-gray-200 rounded-xl p-5 hover:shadow-md transition flex flex-col h-full">
      {/* Top content */}
      <div>
        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-2">
          {title ? (
            <h3
              className="text-lg font-semibold line-clamp-1 flex-1"
              title={title}
            >
              {title}
            </h3>
          ) : (
            <div className="flex-1" />
          )}

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-1 rounded-md hover:bg-gray-200 transition cursor-pointer text-gray-500 hover:text-gray-800"
            >
              <Icon name="ellipsisVerticalIcon" size={18} />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setIsMenuOpen(false)}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition hover:bg-gray-100 cursor-pointer first:rounded-t-lg last:rounded-b-lg
                ${item.danger ? "text-red-500 hover:bg-red-50" : "text-gray-700"}`}
                  >
                    <Icon name={item.icon} size={15} />
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        {description ? (
          <p className="line-clamp-3 text-sm text-gray-600" title={description}>
            {description}
          </p>
        ) : (
          <p className="text-sm text-gray-400 italic">No Description</p>
        )}
      </div>

      {/* Bottom section */}
      <div className="mt-auto">
        {/* Divider */}
        <div className="border-t border-gray-200 mb-3 mt-12 md:mt-15 lg:mt-17" />

        {/* Created On */}
        <div className="flex items-center gap-1.5 text-sm text-gray-600">
          <Icon name="calendar" size={13} />
          <span>Created on:</span>
          <span className="font-medium text-gray-700">{createdOn ?? "—"}</span>
        </div>
      </div>
    </div>
  );
}
