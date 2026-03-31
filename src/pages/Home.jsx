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
      <div className="flex justify-between items-center mt-1 mb-6">
        <h2 className="text-2xl font-bold">Knowledge Base</h2>

        <Button onClick={handleOpen} className="cursor-pointer">
          Create New
        </Button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Test Learn how to start using the platform. Learn how to start using the platform.">
          <p className="text-sm text-gray-600">
            Learn how to start using the platform.
          </p>
        </Card>

        <Card title="Account Setup">
          <p className="text-sm text-gray-600">
            Manage your account preferences. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cumque nesciunt unde officiis ipsam
            cupiditate numquam dolorum distinctio expedita. Animi corrupti iure
            dolores non nobis aspernatur esse enim consequuntur accusantium
            ullam. Quidem possimus magni adipisci facere laboriosam eius. Eaque
            tempore suscipit, commodi, similique rem deleniti ex itaque pariatur
            eum inventore voluptatem hic obcaecati maiores saepe dolores
            quisquam harum vero neque culpa. Non veritatis amet voluptates sint
            libero fugiat. Doloribus atque eius esse minima ratione modi illo
            qui beatae quas, optio repudiandae sequi at impedit obcaecati
            explicabo? Amet dicta temporibus rerum modi? A ipsum qui dicta
            dolore porro ipsa dolorem ratione. Ducimus, debitis animi?
            Perspiciatis veniam qui labore minima fugit officiis aliquid rem
            ullam placeat quia, id delectus reiciendis atque. Amet, harum!
          </p>
        </Card>
        <Card title="Account Setup">
          <p className="text-sm text-gray-600">
            Manage your account preferences.
          </p>
        </Card>
        <Card title="Account Setup">
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
