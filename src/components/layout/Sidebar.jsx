export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 text-gray-900 p-5 border-r border-gray-200">
      <h2 className="text-base font-medium text-gray-500 mb-4 uppercase">
        My projects
      </h2>

      <nav className="space-y-3 text-base">
        <div className="font-semibold hover:text-indigo-600 hover:bg-gray-100 px-4 py-1 rounded cursor-pointer">
          Agents
        </div>
        <div className="font-semibold hover:text-indigo-600 hover:bg-gray-100 px-4 py-1 rounded cursor-pointer">
          Knowledge Base
        </div>
        <div className="font-semibold hover:text-indigo-600 hover:bg-gray-100 px-4 py-1 rounded cursor-pointer">
          Key Store
        </div>
      </nav>
    </aside>
  );
}
