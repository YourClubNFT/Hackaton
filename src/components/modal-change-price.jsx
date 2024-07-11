import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";

export default function ModalChangePrice({ onSave }) {
  const [newPrice, setNewPrice] = useState("");

  const handleSave = () => {
    if (!newPrice) {
      alert("Please enter a new price for the course.");
      return;
    }

    onSave(newPrice);
    setNewPrice("");
  };

  return (
    <dialog id="change-price" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white shadow-lg rounded-lg p-6">
        <h3 className="font-bold text-xl text-gray-800">Change Course Price</h3>
        <p className="py-4 text-gray-600">
          Enter the new price for the course below and click "Save Changes" to
          update.
        </p>
        <div className="py-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="newPrice"
          >
            New Price
          </label>
          <div className="input input-bordered input-primary flex items-center bg-white p-0 pr-4">
            <CurrencyInput
              id="newPrice"
              name="newPrice"
              className="input input-bordered w-full text-[#010D7E] border-none"
              placeholder="Enter new price"
              value={newPrice}
              decimalsLimit={2}
              onValueChange={(value) => setNewPrice(value)}
              prefix="$"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-[#010D7E]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="modal-action flex justify-between">
          <form method="dialog">
            <button className="btn btn-ghost">Close</button>
          </form>
          <button
            className="btn btn-outline border-[#010D7E] text-[#010D7E] hover:bg-[#010D7E] hover:text-white"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </div>
    </dialog>
  );
}
