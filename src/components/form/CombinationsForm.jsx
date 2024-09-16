import React from 'react';
import { useFormContext } from 'react-hook-form';
import Switch from 'react-switch';

const CombinationsForm = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext();

  const variants = getValues('variants') || [];
  
  const generateCombinations = (data) => {
    const options = data.map(item => item.values);
    const combinations = options.reduce((acc, values) => {
      return acc.flatMap(accValue => values.map(value => accValue ? `${accValue}/${value}` : value));
    }, ['']);
    return combinations;
  };

  const titles = generateCombinations(variants);

  const checkDuplicateSKUs = (sku, index) => {
    const combinations = getValues('combinations');
    const duplicate = combinations.some(
      (item, idx) => item.sku === sku && idx !== index
    );
    return duplicate ? 'Duplicate SKU' : true;
  };

  return (
    <div className="max-w-2xl p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Combinations</h2>
      <form>
        <div className="mb-1 grid grid-cols-4 gap-4">
          <div></div>
          <div className="font-normal text-xs">SKU *</div>
          <div className="font-normal text-xs text-center">In Stock</div>
          <div className="font-normal text-xs">Quantity</div>
        </div>

        {titles.map((title, index) => {
          const inStock = watch(`combinations[${index}].inStock`, false);

          return (
            <div key={index} className="mb-4 grid grid-cols-4 gap-4 items-center">
              <div className="text-gray-700">{title}</div>

              <div className="relative">
                <input
                  {...register(`combinations[${index}].sku`, {
                    required: 'SKU is required',
                    validate: (value) => checkDuplicateSKUs(value, index),
                  })}
                  className={`w-full px-3 py-2 border my-1 ${
                    errors.combinations?.[index]?.sku ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                />
                {errors.combinations?.[index]?.sku && (
                  <span className="text-red-500 text-sm absolute -bottom-5 left-0">
                    {errors.combinations[index].sku.message}
                  </span>
                )}
              </div>

              <div className="flex justify-center">
                <Switch
                  onChange={(checked) => setValue(`combinations[${index}].inStock`, checked)}
                  checked={inStock}
                  className="react-switch"
                  onColor="#0F172A"
                  offColor="#e5e7eb"
                  uncheckedIcon={false}
                  checkedIcon={false}
                  width={48}
                  height={24}
                  handleDiameter={18}
                />
              </div>

              <div>
                <input
                  type="number"
                  {...register(`combinations[${index}].quantity`, {
                    required: inStock && 'Quantity is required if in stock',
                    min: {
                      value: 1,
                      message: 'Quantity must be at least 1',
                    },
                  })}
                  disabled={!inStock}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    inStock ? 'bg-white border-gray-300' : 'bg-gray-100 border-gray-300 text-gray-400'
                  }`}
                />
                {errors.combinations?.[index]?.quantity && (
                  <span className="text-red-500 text-sm">
                    {errors.combinations[index].quantity.message}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default CombinationsForm;
