import { useEffect, useState, useRef } from "react";
import logo from "../../assets/vite.svg"
import Icon from "../ui/Icon/Icon";

export default function Header() {
  const [workspace, setWorkspace] = useState("Workspace 1");
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchInputRef = useRef(null);

  // Ctrl + K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const workspaces = ["Workspace 1", "Workspace 2", "Workspace 3"];

  return (
    <>
      <header className="h-16 border-b flex items-center justify-between px-6 bg-white">
        
        {/* LEFT SECTION */}
        <div className="flex items-center gap-3 relative">
          <img
            src={logo}
            alt="logo"
            className="h-8 w-8 object-contain"
          />

          <span className="text-lg font-semibold">Workspace</span>

          {/* Workspace Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}
              className="flex items-center gap-1 text-sm font-medium border px-2 py-1 rounded-md hover:bg-gray-100"
            >
              {workspace}
              <Icon name="chevronDown" size={16} />
            </button>

            {isWorkspaceOpen && (
              <div className="absolute mt-2 w-40 bg-white border rounded-md shadow-md z-10">
                {workspaces.map((ws) => (
                  <div
                    key={ws}
                    onClick={() => {
                      setWorkspace(ws);
                      setIsWorkspaceOpen(false);
                    }}
                    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {ws}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CENTER SEARCH */}
        <div className="flex-1 flex justify-center">
          <div
            onClick={() => setIsSearchOpen(true)}
            className="w-full max-w-md flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:border-gray-400"
          >
            <Icon name="search" size={18} />
            <span className="text-gray-400 text-sm flex-1">
              Search...
            </span>

            <span className="text-xs border px-2 py-0.5 rounded bg-gray-100 text-gray-500">
              Ctrl + K
            </span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 relative">
          {/* Notification */}
          <button className="relative">
            <Icon name="bell" size={22} />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold"
            >
              RS
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-md">
                <div className="px-3 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                  <Icon name="settings" size={16} />
                  Settings
                </div>
                <div className="px-3 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                  <Icon name="logout" size={16} />
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* SEARCH MODAL */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-start justify-center pt-32 z-50">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
              <Icon name="search" size={18} />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="w-full outline-none text-sm"
              />
              <button onClick={() => setIsSearchOpen(false)}>
                <Icon name="close" size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}