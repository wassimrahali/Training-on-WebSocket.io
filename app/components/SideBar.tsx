import { MessageCircleCode, User2 } from "lucide-react";
import React, { useState } from "react";
import { NewConversationModal } from "./NewConversationModal";



const SideBar = ({ id }: { id: string }) => {
  const [active, setActive] = useState("conversation");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [conversationData, setConversationData] = useState({ id: "", name: "" });

  const handleToggle = (option: string) => {
    setActive(option);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setConversationData({ id: "", name: "" }); // Clear form on close
  };

  const handleSubmit = () => {
    console.log("New Conversation Data: ", conversationData);
    handleCloseModal(); // Close modal after submission
  };

  return (
    <div className="flex h-screen">
      <div className="w-72 bg-slate-600 text-white flex flex-col">
        <div className="flex flex-col p-2">
          <button
            className={`p-2 mb-2 rounded-lg font-medium ${
              active === "conversation" ? "text-white" : "text-gray-300"
            }`}
            onClick={() => handleToggle("conversation")}
          >
            <MessageCircleCode className="inline-block mr-2" />
            Conversation
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium ${
              active === "contact" ? "text-white" : "text-gray-300"
            }`}
            onClick={() => handleToggle("contact")}
          >
            <User2 className="inline-block mr-2" />
            Contact
          </button>
        </div>
        <div className="flex-grow p-4 text-lg font-semibold">
          {active === "conversation"
            ? "You are viewing Conversation."
            : "You are viewing Contact."}
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <User2 />
          <p>Your Id {id}</p>
        </div>
        <div className="p-4 flex flex-col items-center space-y-5">
          <button
            className="w-72 bottom-0 fixed bg-blue-600 p-4"
            onClick={handleOpenModal}
          >
            New Conversation
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-grow bg-gray-100">
        <div className="p-4"></div>
      </div>

      {/* Modal for new conversation */}
      <NewConversationModal
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
        conversationData={conversationData}
        setConversationData={setConversationData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SideBar;
