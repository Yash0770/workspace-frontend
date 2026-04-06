import Icon from "@/components/ui/Icon/Icon";
import { sidebarSections } from "../../constants/dummyData";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full z-30 w-64 bg-gray-50 border-r border-gray-200
        flex flex-col transform transition-transform duration-300 ease-in-out
        lg:static lg:translate-x-0 lg:z-auto lg:h-auto lg:w-64
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Mobile header inside sidebar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 lg:hidden">
        <span className="text-base font-semibold text-gray-800">Menu</span>
        <button
          onClick={onClose}
          className="p-1 rounded-md hover:bg-gray-200 transition"
        >
          <Icon name="close" size={20} />
        </button>
      </div>

      {/* Scrollable nav content */}
      <div className="flex-1 overflow-y-auto scrollbar p-5">
        {sidebarSections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-sm font-medium text-gray-500 mb-4 uppercase">
              {section.title}
            </h2>

            <nav className="space-y-1">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  onClick={onClose} // auto-close on mobile when item clicked
                  className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
                    text-gray-700 font-medium
                    hover:bg-indigo-50 hover:text-[#4F46E5]
                    transition-colors"
                >
                  <Icon name={item.icon} size={24} />
                  <span>{item.label}</span>
                </div>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
}
