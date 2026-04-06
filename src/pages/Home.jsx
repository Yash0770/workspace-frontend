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
    <MainLayout>
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
