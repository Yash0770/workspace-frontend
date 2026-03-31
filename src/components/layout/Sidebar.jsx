import Icon from "@/components/ui/Icon/Icon";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 text-gray-900 p-5 border-r border-gray-200">
      <h2 className="lg:mt-3 text-base font-medium text-gray-500 mb-4 uppercase">
        My projects
      </h2>

      <nav className="space-y-3 text-base">
        <div className="flex items-center gap-3 font-semibold hover:text-indigo-600 hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">
          <Icon name="agentIcon" size={20} />
          <span>Agents</span>
        </div>

        <div className="flex items-center gap-3 font-semibold hover:text-indigo-600 hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">
          <Icon name="knowledgeIcon" size={20} />
          <span>Knowledge Base</span>
        </div>

        <div className="flex items-center gap-3 font-semibold hover:text-indigo-600 hover:bg-gray-100 px-4 py-2 rounded cursor-pointer">
          <Icon name="libraryIcon" size={20} />
          <span>Library</span>
        </div>
      </nav>
    </aside>
  );
}
