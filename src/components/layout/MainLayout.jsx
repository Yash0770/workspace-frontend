import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({ children, pagination }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50">
      <Header
        onMenuToggle={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex flex-1 overflow-hidden relative">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col overflow-y-auto">
          <main className="flex flex-col flex-1 p-4 md:p-6">
            <div className="container">{children}</div>
            {pagination && (
              <div className="mt-auto pt-6">
                <div className="container mx-auto">{pagination}</div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
