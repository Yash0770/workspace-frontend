import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      {/* modal */}
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-md p-6 z-10">
        {children}
      </div>
    </div>
  );
}
