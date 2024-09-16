import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const paths = [
    { label: "Description", path: "/add-product/description" },
    { label: "Variants", path: "/add-product/variants" },
    { label: "Combinations", path: "/add-product/combinations" },
    { label: "Price info", path: "/add-product/price-info" },
  ];

  const currentIndex = paths.findIndex(
    (crumb) => location.pathname === crumb.path
  );

  return (
    <nav className="flex space-x-3 font-worksans items-center">
      {paths.map((crumb, index) => (
        <span key={index} className="flex items-center">
          <span
            className={`px-3 py-1 text-sm rounded-md font-medium ${
              index <= currentIndex
                ? "bg-customBlueLight text-customBlue"
                : "text-customGrayDark"
            }`}
          >
            {crumb.label}
          </span>
          {index < paths.length - 1 && (
            <span className="text-customGrayDark text-lg ml-2 font-medium">
              {" "}
              &gt;{" "}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
