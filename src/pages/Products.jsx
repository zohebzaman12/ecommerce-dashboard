import React, { useMemo, useState } from "react";
import CategoryModal from "../components/CategoryModal";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { categoryAtom } from "../state/categoryAtom";
import { productsAtom } from "../state/ProductsAtom";

const Products = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const [categories, setCategories] = useAtom(categoryAtom);
  const [products] = useAtom(productsAtom);

  const navigate = useNavigate();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    setNewCategoryName("");
  };

  const handleSaveCategory = () => {
    setCategories([
      ...categories,
      { id: crypto.randomUUID(), name: newCategoryName },
    ]);
    closeModal();
  };

  const combinedCategories = useMemo(() => {
    return categories.map((category) => {
      const categoryProducts = products
        .filter((product) => product.category === category.name)
        .map((product, index) => ({
          id: index + 1,
          name: product.name,
          price: `₹${product.priceInr}`,
          brand: product.brand,
          image: product.image,
        }));

      return {
        name: category.name,
        products: categoryProducts,
      };
    });
  }, [categories, products]);


  return (
    <div className="font-worksans">
      <div className="flex justify-between pb-4">
        <h1 className="font-semibold text-2xl">Products</h1>
        <div className="flex gap-3">
          <button
            className="px-7 py-2 text-base bg-customGrayLight text-customBlue font-semibold rounded-md hover:bg-customGrayLight-dark transition duration-300"
            onClick={openModal}
          >
            Add Category
          </button>
          <button
            onClick={() => {
              navigate("/add-product");
            }}
            className="px-7 py-2 text-base bg-customBlue text-white font-semibold rounded-md hover:bg-customBlue-dark transition duration-300"
          >
            Add Product
          </button>
        </div>
      </div>
      <div>
        <div className="flex space-x-4 ">
          {combinedCategories.map((category, index) => (
            <div
              key={index}
              className="w-80 min-h-[803px] bg-customGrayLighter p-4 rounded-md flex-shrink-0"
            >
              <h3 className="text-lg font-semibold mb-4">{category.name}</h3>
              <div className="h-full space-y-4">
                {category.products.length > 0 ? (
                  category.products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white w-72 flex gap-4 shadow-sm p-2 rounded-md"
                    >
                      <img
                        src={
                          product.image ||
                          `https://via.placeholder.com/150?text=${encodeURIComponent(
                            product.name.charAt(0).toUpperCase()
                          )}`
                        }
                        alt={product.name}
                        className="h-20 w-20 object-cover rounded-md"
                      />
                      <div className="flex flex-col gap-1">
                        <div>
                          <h4 className="font-medium text-[16px]">
                            {product.name}
                          </h4>
                          <p className="font-normal text-sm">{product.price}</p>
                        </div>
                        <div className="text-customBlue text-xs h-7 w-11 font-medium bg-customBlueLight rounded-md flex justify-center items-center">
                          {product.brand}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500"></p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CategoryModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        categoryName={newCategoryName}
        setCategoryName={setNewCategoryName}
        onSave={handleSaveCategory}
      />
    </div>
  );
};

export default Products;
