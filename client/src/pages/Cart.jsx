import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get("/api/cart");
      setCart(response.data.items);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const response = await axios.post("/api/cart/updateQuantity", {
        productId,
        quantity,
      });
      setCart(response.data.items);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await axios.delete(`/api/cart/remove/${productId}`);
      setCart(response.data.items);
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };
  const totalAmount = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="border rounded p-4">
      <h2 className="text-center font-bold text-4xl py-3">
        Your Shopping Cart
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {cart.map((item) => (
          <div key={item.product._id} className="border rounded p-6 shadow-md">
            <div className="flex items-center justify-center">
              <img className="w-32 h-32" src={item.product.avatar} alt="" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-lg font-semibold pb-3">{item.product.name}</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    updateQuantity(item.product._id, item.quantity + 1)
                  }
                  className="bg-green-500 text-white px-2 py-1 rounded-md">
                  <FaPlus size={"10px"} />
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() =>
                    item.quantity > 1
                      ? updateQuantity(item.product._id, item.quantity - 1)
                      : removeFromCart(item.product._id)
                  }
                  className="bg-red-500 text-white px-2 py-1 rounded-md">
                  <FaMinus size={"10px"} />
                </button>
                <button
                  onClick={() => removeFromCart(item.product._id)}
                  className="bg-gray-500 text-white px-2 py-1 rounded-md">
                  <FaTrash size={"10px"} />
                </button>
              </div>
            </div>
            <div className="text-lg font-semibold text-right">
              <p>Price: ₹{item.product.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="text-lg font-semibold text-right mt-4">
          <p>Total Amount: ₹{totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
