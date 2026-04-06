import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import AddModal from "../components/ui/AddModal";
import Icon from "@/components/ui/Icon/Icon";
import { knowledgeData } from "../constants/knowledgeDummyData";
import { KNOWLEDGE_BASE_FIELDS } from "../constants/fieldData";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <MainLayout
      pagination={
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-600">
          <span className="font-bold">{knowledgeData.length} rows</span>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="whitespace-nowrap font-bold">Rows per page</span>
              <div className="relative">
                <select className="appearance-none border border-gray-300 rounded-lg pl-3 pr-7 py-1.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
                <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                  <Icon name="chevronDown" size={14} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="whitespace-nowrap font-bold">Page 1 of 1</span>
              <div className="flex items-center gap-1">
                {[
                  { icon: "chevronsLeftIcon", label: "First" },
                  { icon: "chevronLeftIcon", label: "Previous" },
                  { icon: "chevronRightIcon", label: "Next" },
                  { icon: "chevronsRightIcon", label: "Last" },
                ].map(({ icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="p-1.5 rounded-md border border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 transition cursor-pointer"
                  >
                    <Icon name={icon} size={15} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-1 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">Knowledge Base</h2>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Icon name="searchIcon" size={18} />
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-600"
            />
          </div>

          <Button
            onClick={handleOpen}
            className="w-full sm:w-auto flex justify-center items-center gap-2 cursor-pointer"
          >
            <Icon name="plusIcon" size={16} />
            Create New
          </Button>
        </div>
      </div>

      {/* Cards */}
      <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-gray-200 rounded-xl p-4 overflow-hidden">
        {knowledgeData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            createdOn={item.createdOn}
          />
        ))}
      </div>

      {/* AddModal */}
      <AddModal
        isOpen={isOpen}
        onClose={handleClose}
        title="Create New Knowledge Base"
        description="Best for quick answers from documents, websites and text files."
        fields={KNOWLEDGE_BASE_FIELDS}
        submitLabel="Create"
        onSubmit={(data) => console.log("Submitted:", data)}
      />
    </MainLayout>
  );
}
