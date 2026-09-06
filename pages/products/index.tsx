import ProductItem from "./components/ProductItem";

export default function ProductsPage() {
  const products = [
    {
      thumbnail:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      alt: "Front of men's Basic Tee in black.",
      title: "Basic Tee",
      price: 35,
      color: "Black",
    },
    {
      thumbnail:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
      alt: "Front of men's Basic Tee in white.",
      title: "Basic Tee",
      price: 35,
      color: "Aspen White",
    },
    {
      thumbnail:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
      alt: "Front of men's Basic Tee in dark gray.",
      title: "Basic Tee",
      price: 35,
      color: "Charcoal",
    },
    {
      thumbnail:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
      alt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
      title: "Artwork Tee",
      price: 35,
      color: "Iso Dots",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products Listing
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <ProductItem
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
              color={product.color}
              alt={product.alt}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
