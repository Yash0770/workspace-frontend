import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container flex flex-col flex-1">
        <Header />

        <div className="flex flex-1">
          <Sidebar />

          <main className="flex-1 bg-gray-50 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
