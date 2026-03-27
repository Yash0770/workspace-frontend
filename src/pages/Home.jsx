import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Modal from "../components/ui/Modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <MainLayout>
      {/* Header section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">All Articles</h2>

        <Button onClick={handleOpen}>Create New</Button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Getting Started" description="Basic introduction">
          <p className="text-sm text-gray-600">
            Learn how to start using the platform.
          </p>
        </Card>

        <Card title="Account Setup" description="Profile & settings">
          <p className="text-sm text-gray-600">
            Manage your account preferences.
          </p>
        </Card>
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
