// ProductListing.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import ProductListingCard from "../components/ProductListingCard";

const ProductListing = ({ productQuantity }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get("/api/products");
      if (productQuantity) {
        response.data = response.data.slice(0, 6);
      }
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (productId) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.delete(`/api/products/${productId}`);
      if (productQuantity) {
        response.data = response.data.slice(0, 6);
      }
      //   setProducts(response.data);
      const data = products.filter((item) => {
        return item._id !== productId;
      });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <>
        <div className="w-full h-96 flex justify-center items-center">
          <Spin />
        </div>
      </>
    );

  if (error)
    return (
      <>
        <div className="w-full h-96 flex justify-center items-center">
          {error.message}
        </div>
      </>
    );
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
        {products.map((product) => (
          <ProductListingCard
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
