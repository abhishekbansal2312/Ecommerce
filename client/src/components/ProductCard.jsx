import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product._id, 1);
    enqueueSnackbar("Item added to Cart", { variant: "success" });
  };

  return (
    <div className="max-w-sm bg-gray-100 overflow-hidden shadow-md rounded-md p-4 mb-4 ">
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/product/${product._id}`)}>
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={product.avatar}
            alt={product.name}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-sm text-gray-600">
            {product.description.substring(0, 50)}...
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-lg font-bold text-slate-800">
          &#8377;{product.price}
        </span>
        <button
          className="text-rose-600 hover:text-rose-800 focus:outline-none"
          onClick={handleAddToCart}>
          <FaCartArrowDown className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
