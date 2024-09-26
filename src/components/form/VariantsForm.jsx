import React, { useEffect } from "react";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { FiTrash2 } from "react-icons/fi";

const VariantsForm = () => {
  const {
    control,
    watch,
    formState: { errors },
    register,
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });

  const variants = watch("variants");

  useEffect(() => {
    if (fields.length === 0) {
      append({ option: "", values: [] });
    }
  }, [fields, append]);

  return (
    <div className="max-w-2xl p-6 bg-white drop-shadow-md rounded-md">
      <h2 className="text-base font-semibold mb-4">Variants</h2>
      <div>
        <div className="mb-2 flex space-x-3">
          <div className="flex-1 font-medium text-sm">Option *</div>
          <div className="flex-1 font-medium text-sm">Values *</div>
          <div className="w-6" />
        </div>

        {fields.map((item, index) => (
          <div key={item.id} className="mb-4 flex space-x-3 items-start">
            <div className="flex-1">
              <input
                {...register(`variants.${index}.option`, {
                  required: "Option can't be empty",
                })}
                placeholder="Option"
                className={`w-full px-3 py-2 border ${
                  errors.variants?.[index]?.option
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-customBlue focus:border-customBlue sm:text-sm`}
              />
              {errors.variants?.[index]?.option && (
                <span className="text-red-500 text-sm">
                  {errors.variants[index].option.message}
                </span>
              )}
            </div>

            <div className="flex-1">
              <Controller
                name={`variants.${index}.values`}
                control={control}
                rules={{
                  validate: (value) => value.length > 0 || "At least one value is required",
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <CreatableSelect
                    isMulti
                    placeholder="Values"
                    options={[
                      { value: "S", label: "S" },
                      { value: "M", label: "M" },
                      { value: "L", label: "L" },
                      { value: "Black", label: "Black" },
                      { value: "Red", label: "Red" },
                    ]}
                    value={value.map((v) => ({ value: v, label: v }))} // Format value for CreatableSelect
                    onChange={(selectedOptions) => {
                      const selectedValues = selectedOptions
                        ? selectedOptions.map((option) => option.value)
                        : [];
                      onChange(selectedValues); // Update React Hook Form state
                    }}
                    ref={ref} // Set ref for React Hook Form
                  />
                )}
              />
              {errors.variants?.[index]?.values && (
                <span className="text-red-500 text-sm">
                  {errors.variants[index].values.message}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500 hover:text-red-700 mt-3"
            >
              <FiTrash2 size={16} />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ option: "", values: [] })}
          className="text-customBlue hover:text-blue-700 text-sm font-medium"
        >
          + Add Option
        </button>
      </div>
    </div>
  );
};

export default VariantsForm;
