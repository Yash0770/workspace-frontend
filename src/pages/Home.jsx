import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Modal from "../components/ui/Modal";
import Icon from "@/components/ui/Icon/Icon";
import { knowledgeData } from "../constants/knowledgeDummyData";

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

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={handleClose}>
        <h3 className="text-lg font-semibold mb-4">Create New Article</h3>

        <input
          type="text"
          placeholder="Title"
          className="w-full border rounded-lg px-3 py-2 mb-3"
        />

        <textarea
          placeholder="Description"
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button>Create</Button>
        </div>
      </Modal>
    </MainLayout>
  );
}
