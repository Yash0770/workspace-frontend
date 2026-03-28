import { useEffect, useRef } from "react";
import Icon from "@/components/ui/Icon/Icon";

export default function SearchModal({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const boxRef = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // ESC + outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-32 z-50">
      <div
        ref={boxRef}
        className="bg-gray-900 w-full max-w-lg rounded-lg shadow-xl p-4 border border-white/10"
      >
        <div className="flex items-center gap-2 border border-white/20 px-3 py-2 rounded-md bg-white/10">
          <Icon name="search" className="text-white" size={20} />

          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-sm bg-transparent text-white placeholder-gray-400"
          />

          <button onClick={onClose}>
            <Icon name="close" className="text-white cursor-pointer" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
