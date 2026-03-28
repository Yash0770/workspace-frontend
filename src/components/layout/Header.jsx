import { useEffect, useState, useRef } from "react";
import logo from "@/assets/vite.svg";
import bgImage from "@/assets/header-background.png";
import Icon from "@/components//ui/Icon/Icon";

export default function Header() {
  const [workspace, setWorkspace] = useState("Workspace 1");
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const searchBoxRef = useRef(null);
  const workspaceRef = useRef(null);
  const profileRef = useRef(null);

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

  // Search Dialogbox close functionlity
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      window.addEventListener("keydown", handleEsc);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  // Dropdown close functionlity
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (workspaceRef.current && !workspaceRef.current.contains(e.target)) {
        setIsWorkspaceOpen(false);
      }

      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const workspaces = ["Workspace 1", "Workspace 2", "Workspace 3"];

  return (
    <>
      <header
        className="h-16 flex items-center justify-between px-6 bg-cover bg-center text-white backdrop-blur-md"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

        {/* Workspace Section */}
        <div className="flex items-center gap-3 relative z-10">
          <img src={logo} alt="logo" className="h-8 w-8 object-contain" />

          <span className="text-lg font-semibold tracking-wide">Workspace</span>

          {/* Dropdown */}
          <div className="relative" ref={workspaceRef}>
            <button
              onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}
              className="flex items-center gap-1 text-sm font-medium border border-white/20 px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition cursor-pointer"
            >
              {workspace}
              <Icon name="chevronDown" size={16} />
            </button>

            {isWorkspaceOpen && (
              <div className="absolute mt-2 w-44 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-20">
                {workspaces.map((ws) => (
                  <div
                    key={ws}
                    onClick={() => {
                      setWorkspace(ws);
                      setIsWorkspaceOpen(false);
                    }}
                    className="px-3 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer transition"
                  >
                    {ws}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Search Bar*/}
        <div className="flex-1 flex justify-center relative z-10">
          <div
            onClick={() => setIsSearchOpen(true)}
            className="w-full max-w-md flex items-center gap-2 border border-white/20 rounded-md px-3 py-2 cursor-pointer bg-white/10 hover:bg-white/20 transition"
          >
            <Icon name="search" size={18} />
            <span className="text-gray-300 text-sm flex-1">Search...</span>

            <span className="text-xs border border-white/20 px-2 py-0.5 rounded bg-white/10 text-gray-300">
              Ctrl + K
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 relative z-10">
          {/* Notification */}
          <button className="relative hover:scale-105 transition">
            <Icon name="bell" size={22} />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="h-9 w-9 rounded-full bg-white/20 text-white flex items-center justify-center text-sm font-semibold hover:bg-white/30 transition cursor-pointer"
            >
              YS
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
                <div className="px-3 py-2 text-white hover:bg-gray-700 flex items-center gap-2 cursor-pointer transition">
                  <Icon name="settings" size={16} />
                  Settings
                </div>
                <div className="px-3 py-2 text-white hover:bg-gray-700 flex items-center gap-2 cursor-pointer transition">
                  <Icon name="logout" size={16} />
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-32 z-50">
          <div
            ref={searchBoxRef}
            className="bg-gray-900 w-full max-w-lg rounded-lg shadow-xl p-4 border border-white/10"
          >
            <div className="flex items-center gap-2 border border-white/20 px-3 py-2 rounded-md bg-white/10">
              <Icon name="search" className="text-white" size={18} />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="w-full outline-none text-sm bg-transparent text-white placeholder-gray-400"
              />
              <button onClick={() => setIsSearchOpen(false)}>
                <Icon name="close" className="text-white" size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
