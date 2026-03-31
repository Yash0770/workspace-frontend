import Icon from "@/components/ui/Icon/Icon";
import { sidebarSections } from "../../constants/dummyData";

export default function Sidebar() {
  return (
    <aside className="w-46 lg:w-64 border-r border-gray-200 bg-gray-50 flex flex-col">
      <div className="flex-1 overflow-y-auto scrollbar p-5">
        {sidebarSections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-sm font-medium text-gray-500 mb-4 uppercase">
              {section.title}
            </h2>

            <nav className="space-y-2">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
                  text-gray-700 font-medium
                  hover:bg-indigo-50 hover:text-[#4F46E5]
                  transition-colors"
                >
                  <Icon name={item.icon} size={20} />
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
