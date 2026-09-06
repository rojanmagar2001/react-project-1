import React from "react";

interface ProductItemProps {
  thumbnail: string;
  alt: string;
  title: string;
  price: number;
  color: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  thumbnail,
  title,
  price,
  color,
  alt,
}) => {
  return (
    <div className="group relative">
      <img
        src={thumbnail}
        alt={alt}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
