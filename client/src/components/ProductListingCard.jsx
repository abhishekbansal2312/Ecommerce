import React from "react";
import { FaTrash } from "react-icons/fa";

const ProductCard = ({ product, deleteProduct }) => {
  return (
    <div className="max-w-sm bg-gray-100 overflow-hidden shadow-md rounded-md p-4 mb-4">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={product.avatar} // Assuming there's an imageUrl property in your product object
          alt={product.name}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600">
          {product.description.substring(0, 50)}...
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-slate-800">
            &#8377;{product.price}
          </span>
          <button
            className="text-rose-600 hover:text-rose-800 focus:outline-none"
            onClick={() => deleteProduct(product._id)}>
            <FaTrash className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
