import { useAtom } from 'jotai';
import { productsAtom } from '../state/ProductsAtom';


const transformProductData = (data) => {
  const { name, category, brand, image, variants, combinations, priceInr, discount, discountMethod } = data;

  // Transform the variants
  const transformedVariants = variants.map(variant => ({
    name: variant.option,
    values: variant.values,
  }));

  // Transform the combinations into keyed objects
  const transformedCombinations = combinations.reduce((acc, combination, index) => {
    const key = String.fromCharCode(97 + index); // 'a', 'b', 'c', ...
    const name = transformedVariants.map(variant => variant.values[index % variant.values.length]).join('/');

    acc[key] = {
      name,
      sku: combination.sku || '',
      quantity: combination.quantity || null,
      inStock: combination.inStock || false,
    };
    return acc;
  }, {});

  // Transform discount
  const transformedDiscount = {
    method: discountMethod === '%' ? 'pct' : 'flat',
    value: discount,
  };

  // Assuming image[0] contains the image URL or path
  const imageUrl = image[0]?.url || ''; // Change as per your data structure

  return {
    name,
    category,
    brand,
    image: imageUrl,
    variants: transformedVariants,
    combinations: transformedCombinations,
    priceInr: parseInt(priceInr, 10), // Ensure price is an integer
    discount: transformedDiscount,
  };
};

const useUpdateProducts = () => {
  const [products, setProducts] = useAtom(productsAtom);

  const updateProducts = (newData) => {
    const transformedProduct = transformProductData(newData);
    setProducts([...products, transformedProduct]);
  };

  return updateProducts;
};

export default useUpdateProducts;
