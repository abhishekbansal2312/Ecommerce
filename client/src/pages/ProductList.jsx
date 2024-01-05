// ProductList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import ProductCard from "../components/ProductCard";
import { SnackbarProvider, useSnackbar } from "notistack";

const ProductList = ({ productQuantity }) => {
  const { enqueueSnackbar } = useSnackbar();
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

  const addToCart = async (productId, quantity) => {
    try {
      // Make a request to add the product to the cart
      const response = await axios.post("/api/cart/add", {
        productId,
        quantity,
      });
      enqueueSnackbar("Product added to the cart", { variant: "success" });
      setCart(response.data.items);
    } catch (error) {
      console.error("Error adding to cart:", error);
      // Display Snackbar on error
      enqueueSnackbar("Error adding to cart", { variant: "error" });
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
    <>
      <SnackbarProvider maxSnack={3}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </SnackbarProvider>
    </>
  );
};

export default ProductList;
