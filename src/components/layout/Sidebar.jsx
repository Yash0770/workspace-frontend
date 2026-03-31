import Icon from "@/components/ui/Icon/Icon";
import { sidebarSections } from "../../constants/dummyData";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 text-gray-900 p-5 border-r border-gray-200">
      {sidebarSections.map((section, index) => (
        <div key={index} className="mb-6">
          {/* Section Title */}
          <h2 className="lg:mt-3 text-base font-medium text-gray-500 mb-4 uppercase">
            {section.title}
          </h2>

          {/* Items */}
          <nav className="space-y-3 text-base">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 font-semibold hover:text-indigo-600 hover:bg-gray-100 px-4 py-2 rounded cursor-pointer"
              >
                <Icon name={item.icon} size={20} />
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
}
