import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(`/api/products/${params.id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="lg:flex bg-gray-100 shadow-md rounded-md p-4 mb-4">
        <div className="lg:w-1/2 mb-4 lg:mb-0 lg:flex-shrink-0">
          <img
            src={product.avatar}
            className="h-50 lg:object-cover lg:object-right rounded-lg pl-80"
            alt={product.name}
          />
        </div>
        <div className="lg:w-1/2 lg:ml-4">
          <div className="text-3xl font-bold mb-2">{product.name}</div>
          <div className="text-xl font-bold mb-2">${product.price}</div>
          <div className="text-gray-700">{product.description}</div>
          <div className="pt-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline mb-2 lg:mb-0 lg:mr-2"
              type="button">
              Add to Cart
            </button>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
              type="button">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
