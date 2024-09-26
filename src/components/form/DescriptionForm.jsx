import { useAtom } from "jotai";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { categoryAtom } from "../../state/categoryAtom";
import { FiUpload } from "react-icons/fi";

const DescriptionForm = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext(); // Use form context to access form methods

  const [categories] = useAtom(categoryAtom);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setValue("image", file);
    }
  };

  return (
    <div className="max-w-md p-6 bg-white shadow-md rounded-md">
      <h2 className="text-base font-semibold mb-4">Description</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Product name *
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Product name is required" })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue sm:text-sm`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="category"
          >
            Category *
          </label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.category ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue sm:text-sm`}
          >
            {categories.map((category) => {
              return (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">
              {errors.category.message}
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="brand"
          >
            Brand *
          </label>
          <input
            type="text"
            id="brand"
            {...register("brand", { required: "Brand is required" })}
            className={`mt-1 block w-full px-3 py-2 border ${
              errors.brand ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue sm:text-sm`}
          />
          {errors.brand && (
            <span className="text-red-500 text-sm">{errors.brand.message}</span>
          )}
        </div>

        <div className="mb-4">
          {/* File input (hidden) */}
          <input
            type="file"
            id="image"
            {...register("image")}
            className="hidden"
            onChange={handleFileChange} // Handle file selection
          />

          {/* Custom styled button */}
          <label
            htmlFor="image"
            className="flex items-center justify-center max-w-44 cursor-pointer border-2 border-customBlue font-semibold text-customBlue hover:bg-blue-50 focus:ring-customBlue focus:border-customBlue px-4 py-2 rounded-md shadow-sm"
          >
            {/* Upload icon */}
            <FiUpload className="mr-2" />
            Upload Image
          </label>

          {/* Show error message */}
          {errors.image && (
            <span className="text-red-500 text-sm">{errors.image.message}</span>
          )}

          {/* Display file name if an image has been uploaded */}
          {fileName && (
            <div className="mt-2 text-sm text-green-600">
              <span className="font-medium">File Uploaded:</span> {fileName}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default DescriptionForm;
