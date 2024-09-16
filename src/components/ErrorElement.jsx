import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi';

const ErrorElement = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go to the previous page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <FiAlertCircle className="text-red-600 w-16 h-16 mx-auto" />
        <h1 className="mt-4 text-3xl font-semibold text-gray-900">Oops! Something went wrong</h1>
        <p className="mt-2 text-lg text-gray-700">
          {error?.statusText || error?.message || "An unexpected error occurred."}
        </p>
        <p className="mt-1 text-gray-500">
          {error?.status ? `Error Code: ${error.status}` : null}
        </p>
        <div className="mt-6 space-x-4">
          <button
            onClick={handleGoBack}
            className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md shadow-sm hover:bg-gray-300"
          >
            Go Back
          </button>
          <Link
            to="/"
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
