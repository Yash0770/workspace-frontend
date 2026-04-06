import { useState } from "react";
import Icon from "@/components/ui/Icon/Icon";
import Button from "@/components/ui/Button";

export default function AddModal({
  isOpen,
  onClose,
  title,
  description,
  fields = [],
  onSubmit,
  submitLabel = "Create",
}) {
  const initialState = fields.reduce(
    (acc, f) => ({ ...acc, [f.name]: "" }),
    {},
  );
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    return fields.reduce((acc, f) => {
      if (f.required && !form[f.name]?.toString().trim()) {
        acc[f.name] = `${f.label} is required`;
      }
      return acc;
    }, {});
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit?.(form);
    handleClose();
  };

  const handleClose = () => {
    setForm(initialState);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40" onClick={handleClose} />

      <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] lg:w-[500px] z-50 bg-white rounded-l-2xl shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="px-6 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              {title && (
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
              )}
              {description && (
                <p className="text-sm text-gray-500 mt-1">{description}</p>
              )}
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-md hover:bg-gray-100 transition text-gray-500 hover:text-gray-800 cursor-pointer mt-0.5 shrink-0"
            >
              <Icon name="closeIcon" size={24} />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200" />

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                {field.label}{" "}
                {field.required && <span className="text-red-500">*</span>}
              </label>

              {field.type === "textarea" && (
                <textarea
                  value={form[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder || ""}
                  rows={field.rows || 3}
                  className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none bg-white
                    ${errors[field.name] ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                />
              )}

              {field.type === "select" && (
                <div className="relative">
                  <select
                    value={form[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition bg-white appearance-none cursor-pointer pr-9
        ${errors[field.name] ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                  >
                    <option value="" disabled className="text-gray-400">
                      {field.placeholder || `Select ${field.label}`}
                    </option>
                    {field.options?.map((opt) => (
                      <option
                        key={opt.value ?? opt}
                        value={opt.value ?? opt}
                        className="text-gray-800 py-2"
                      >
                        {opt.label ?? opt}
                      </option>
                    ))}
                  </select>

                  {/* Chevron icon */}
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon name="chevronDown" size={20} />
                  </div>
                </div>
              )}

              {(!field.type ||
                field.type === "text" ||
                field.type === "email" ||
                field.type === "number") && (
                <input
                  type={field.type || "text"}
                  value={form[field.name]}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder || ""}
                  className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition bg-white
                    ${errors[field.name] ? "border-red-400 bg-red-50" : "border-gray-300"}`}
                />
              )}

              {errors[field.name] && (
                <p className="mt-1 text-xs text-red-500">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* submit button */}
        <div className="px-6 py-4 flex justify-end">
          <Button
            onClick={handleSubmit}
            className="flex items-center gap-2 cursor-pointer lg:py-3"
          >
            {submitLabel}
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .animate-slide-in { animation: slide-in 0.25s ease-out forwards; }
      `}</style>
    </>
  );
}
