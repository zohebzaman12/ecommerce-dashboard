import React, { useState } from "react";
import ReactDOM from "react-dom";

const CategoryModal = ({
  isOpen,
  onClose,
  categoryName,
  setCategoryName,
  onSave,
}) => {
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (!categoryName.trim()) {
      setError("Category name cannot be empty");
      return;
    }
    setError("");
    onSave();
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  // Handle cancel and reset error
  const handleCancel = () => {
    setError(""); // Reset error state
    onClose(); // Close the modal
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 font-worksans bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-[560px] h-[250px] mx-auto p-5 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">Add Category</h2>
        <label className="text-sm mb-2 font-medium">Category name *</label>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          onKeyPress={handleKeyPress} // Detect Enter key
          className={`border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-md px-3 py-2 mb-2 w-full`}
          placeholder="Enter category name"
        />
        {error && <span className="text-red-500 text-sm mb-4">{error}</span>}{" "}
        {/* Show error message */}
        <div className="flex gap-2 self-end">
          <button
            onClick={handleCancel} // Update this to handleCancel
            className="px-7 py-2 text-base bg-customGrayLight text-customBlue font-semibold rounded-md hover:bg-customGrayLight-dark transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-7 py-2 text-base bg-customBlue text-white font-semibold rounded-md hover:bg-customBlue-dark transition duration-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CategoryModal;
