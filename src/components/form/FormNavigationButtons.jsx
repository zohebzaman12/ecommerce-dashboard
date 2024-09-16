import { useNavigate, useLocation } from 'react-router-dom';
import { useFormContext } from 'react-hook-form'; 
import useUpdateProducts from '../../utils/transformProductData';

const FormNavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { trigger, handleSubmit } = useFormContext();
  const updateProducts = useUpdateProducts();

  const navigateTo = async (path, isSubmit = false) => {
    const isValid = await trigger(); // Trigger validation for the current form
    if (isValid) {
      if (isSubmit) {
        handleSubmit((data) => {
          console.log('Form Data:', data);
          updateProducts(data);
          navigate(path);
        })(); // This will trigger the submission and then navigate
      } else {
        navigate(path); // Navigate without submission
      }
    }
  };

  return (
    <div className="flex gap-3">
      {location.pathname === "/add-product/description" && (
        <>
          <button
            className="h-11 w-40 text-base bg-customGrayLight text-customBlue font-semibold rounded-md hover:bg-customGrayLight-dark transition duration-300"
            onClick={() => navigate("/products")}
          >
            Cancel
          </button>
          <button
            className="h-11 w-40 text-base bg-customBlue text-white font-semibold rounded-md hover:bg-customBlue-dark transition duration-300"
            onClick={() => navigateTo("/add-product/variants")}
          >
            Next
          </button>
        </>
      )}

      {location.pathname === "/add-product/variants" && (
        <>
          <button
            className="h-11 w-40 text-base bg-customGrayLight text-customBlue font-semibold rounded-md hover:bg-customGrayLight-dark transition duration-300"
            onClick={() => navigateTo("/add-product/description")}
          >
            Back
          </button>
          <button
            className="h-11 w-40 text-base bg-customBlue text-white font-semibold rounded-md hover:bg-customBlue-dark transition duration-300"
            onClick={() => navigateTo("/add-product/combinations")}
          >
            Next
          </button>
        </>
      )}

      {location.pathname === "/add-product/combinations" && (
        <>
          <button
            className="h-11 w-40 text-base bg-customGrayLight text-customBlue font-semibold rounded-md hover:bg-customGrayLight-dark transition duration-300"
            onClick={() => navigateTo("/add-product/variants")}
          >
            Back
          </button>
          <button
            className="h-11 w-40 text-base bg-customBlue text-white font-semibold rounded-md hover:bg-customBlue-dark transition duration-300"
            onClick={() => navigateTo("/add-product/price-info")}
          >
            Next
          </button>
        </>
      )}

      {location.pathname === "/add-product/price-info" && (
        <>
          <button
            className="h-11 w-40 text-base bg-customGrayLight text-customBlue font-semibold rounded-md hover:bg-customGrayLight-dark transition duration-300"
            onClick={() => navigateTo("/add-product/combinations")}
          >
            Back
          </button>
          <button
            type="button"
            className="h-11 w-40 text-base bg-customBlue text-white font-semibold rounded-md hover:bg-customBlue-dark transition duration-300"
            onClick={() => navigateTo("/products", true)} // Pass true to handle submit
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default FormNavigationButtons;
