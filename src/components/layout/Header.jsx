import { useEffect, useState, useRef } from "react";
import logo from "@/assets/vite.svg";
import Icon from "@/components/ui/Icon/Icon";
import SearchModal from "@/components/Modal/SearchModal";

export default function Header({ onMenuToggle, isSidebarOpen }) {
  const [workspace, setWorkspace] = useState("Workspace 1");
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const workspaceRef = useRef(null);
  const profileRef = useRef(null);

  const workspaces = ["Workspace 1", "Workspace 2", "Workspace 3"];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (workspaceRef.current && !workspaceRef.current.contains(e.target))
        setIsWorkspaceOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
        setIsWorkspaceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="relative z-50 lg:mx-4 h-16 flex items-center justify-between px-4 md:px-6 text-white lg:rounded-xl backdrop-blur-md bg-[radial-gradient(circle_at_center,_#3b82f6,_#211d50)]">
        <div className="absolute inset-0 lg:rounded-xl bg-black/50 backdrop-blur-sm" />

        {/* LEFT */}
        <div className="flex items-center gap-3 relative z-10">
          {/* Hamburger — mobile only */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-1.5 rounded-md hover:bg-white/20 transition"
            aria-label="Toggle sidebar"
          >
            <Icon name={isSidebarOpen ? "closeIcon" : "menuIcon"} size={22} />
          </button>

          <img src={logo} alt="logo" className="h-8 w-8 object-contain" />
          <span className="text-lg font-semibold tracking-wide">Workspace</span>

          {/* Desktop Workspace Dropdown */}
          <div className="relative hidden md:block" ref={workspaceRef}>
            <button
              onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}
              className="flex items-center gap-2 text-sm font-medium border border-white/20 pl-3 pr-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
            >
              {workspace}
              <Icon name="chevronDown" size={22} className="mt-0.5 ml-2" />
            </button>

            {isWorkspaceOpen && (
              <div className="absolute mt-2 w-44 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-20 overflow-hidden">
                {workspaces.map((ws) => (
                  <div
                    key={ws}
                    onClick={() => {
                      setWorkspace(ws);
                      setIsWorkspaceOpen(false);
                    }}
                    className="px-3 py-2 text-sm hover:bg-gray-700 cursor-pointer"
                  >
                    {ws}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* DESKTOP SEARCH */}
        <div className="hidden md:flex flex-1 justify-center relative z-10">
          <div
            onClick={() => setIsSearchOpen(true)}
            className="w-full max-w-xs lg:max-w-md flex items-center gap-2 border border-white/20 rounded-lg px-3 py-2 cursor-pointer bg-white/10 hover:bg-white/20 transition"
          >
            <Icon name="searchIcon" size={18} />
            <span className="text-gray-300 text-sm flex-1">Search...</span>
            <span className="text-xs border border-white/20 px-2 py-0.5 rounded bg-white/10 text-gray-300">
              Ctrl + K
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 md:gap-6 relative z-10">
          <button className="relative cursor-pointer">
            <Icon name="bellIcon" size={20} />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
          </button>

          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="h-9 w-9 rounded-full bg-[#aba6e8] flex items-center justify-center text-sm font-bold border border-[#1E1B4B] hover:bg-[#8c76c5] transition cursor-pointer text-black"
            >
              YS
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 lg:w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-20 overflow-hidden">
                <div className="md:hidden">
                  <div
                    onClick={() => {
                      setIsSearchOpen(true);
                      setIsProfileOpen(false);
                    }}
                    className="px-3 py-2 hover:bg-gray-700 flex items-center gap-2 cursor-pointer"
                  >
                    <Icon name="searchIcon" size={17} />
                    Search
                  </div>

                  <div className="relative" ref={workspaceRef}>
                    <div
                      onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}
                      className="px-3 py-1 hover:bg-gray-700 flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Icon name="chevronDown" size={22} className="mt-2" />
                        Workspaces
                      </div>
                    </div>

                    {isWorkspaceOpen && (
                      <div className="ml-4 mb-2">
                        {workspaces.map((ws) => (
                          <div
                            key={ws}
                            onClick={() => {
                              setWorkspace(ws);
                              setIsWorkspaceOpen(false);
                              setIsProfileOpen(false);
                            }}
                            className="px-3 py-2 text-sm hover:bg-gray-700 rounded cursor-pointer"
                          >
                            {ws}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-700 my-2" />
                </div>

                <div className="px-3 py-2 hover:bg-gray-700 flex gap-2 cursor-pointer">
                  <Icon name="settingIcon" size={18} className="mt-1" />
                  Settings
                </div>
                <div className="px-3 py-2 hover:bg-gray-700 flex gap-2 cursor-pointer">
                  <Icon name="logoutIcon" size={18} className="mt-1" />
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
