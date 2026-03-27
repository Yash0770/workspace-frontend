export default function Sidebar() {
  return (
    <aside className="w-64 bg-indigo-900 text-white min-h-screen p-5">
      <h2 className="text-lg font-bold mb-6">Menu</h2>

      <nav className="space-y-3">
        <div className="hover:text-indigo-300 cursor-pointer">Agents</div>
        <div className="hover:text-indigo-300 cursor-pointer">
          Knowledge Base
        </div>
        <div className="hover:text-indigo-300 cursor-pointer">Key Store</div>
      </nav>
    </aside>
  );
}
