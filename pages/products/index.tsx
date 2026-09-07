import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";

interface IProduct {
  id: string;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const productUrl = "https://dummyjson.com/products";

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(productUrl);
      const data = await response.json();

      const products = data.products as IProduct[];
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products Listing
        </h2>

        {isLoading ? (
          <p className="text-gray-700">Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => (
              <ProductItem
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.price}
                color={product.category}
                alt={product.title}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
