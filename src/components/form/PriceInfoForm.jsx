import React from 'react';
import { useFormContext } from 'react-hook-form';
import Switch from 'react-switch';

const PriceInfoForm = () => {
  const { register, watch, setValue, formState: { errors } } = useFormContext();
  
  const discountMethod = watch('discountMethod', '%');

  const handleSwitchChange = (checked) => {
    setValue('discountMethod', checked ? '%' : '$');
  };

  return (
    <div className="max-w-md p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Price Info</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Price *
          </label>
          <input
            type="number"
            {...register('priceInr', { required: 'Price is required' })}
            className={`w-full px-3 py-2 border ${
              errors.priceInr ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            defaultValue="12000"
          />
          {errors.priceInr && (
            <span className="text-red-500 text-sm">{errors.priceInr.message}</span>
          )}
        </div>

        <div className="mb-4 flex items-center">
          <div className="flex-grow">
            <label className="block text-gray-700 font-semibold mb-2">
              Discount
            </label>
            <input
              type="number"
              {...register('discount')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              defaultValue="12"
            />
          </div>

          <div className="ml-4 flex items-center self-end">
            <Switch
              onChange={handleSwitchChange}
              checked={discountMethod === '%'}
              offColor="#e5e7eb"
              onColor="#e5e7eb"
              uncheckedIcon={
                <div className="flex items-center justify-center h-full w-full text-black font-semibold">
                  $
                </div>
              }
              checkedIcon={
                <div className="flex items-center justify-center h-full w-full text-black font-semibold">
                  %
                </div>
              }
              uncheckedHandleIcon={false}
              checkedHandleIcon={false}
              width={64}
              height={32}
              handleDiameter={28}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PriceInfoForm;
