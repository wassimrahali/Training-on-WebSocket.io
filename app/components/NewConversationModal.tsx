import React, { FormEvent, useRef } from "react";

interface ModelInterface {
  isModalOpen: boolean;
  onClose: () => void;
  conversationData: { id: string; name: string };
  setConversationData: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }>
  >;
  handleSubmit: (e: React.FormEvent) => void; // Update the type for handleSubmit to handle the form event
}

export const NewConversationModal: React.FC<ModelInterface> = ({
  isModalOpen,
  onClose,
  conversationData,
  setConversationData,
}) => {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  if (!isModalOpen) return null;
  const handleSubmit = (e:FormEvent) =>{
    e.preventDefault();
      console.log("hi from the model")
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">New Conversation</h2>

        {/* Pass handleSubmit to the form onSubmit */}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            ID:
            <input
              type="text"
              ref={idRef}
              className="border rounded-lg p-2 w-full mt-1"
              value={conversationData.id}
              onChange={(e) =>
                setConversationData({ ...conversationData, id: e.target.value })
              }
            />
          </label>
          <label className="block mb-4">
            Name:
            <input
              type="text"
              ref={nameRef}
              className="border rounded-lg p-2 w-full mt-1"
              value={conversationData.name}
              onChange={(e) =>
                setConversationData({
                  ...conversationData,
                  name: e.target.value,
                })
              }
            />
          </label>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" // This button should trigger form submission
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
