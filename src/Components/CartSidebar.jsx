import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { X, Trash2, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  return (
    <motion.div
  initial={{ x: "100%" }}
    animate={{ x: isOpen ? 0 : "100%" }}
  transition={{ duration: 0.4 }}
  className="fixed top-0 right-0 h-full w-80 bg-gray-900 text-white shadow-lg z-50"
> 
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <X onClick={onClose} className="cursor-pointer hover:text-sky-400" />
      </div>
  
      <div className="p-4 space-y-4 max-h-[85%] overflow-y-auto">
        {cartItems.length === 0 ? (
           <p className="text-gray-400 text-sm">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 border-b border-gray-800 pb-3"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-contain bg-gray-800 rounded"
              />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-sky-400 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-300">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                  >
                    <Plus size={14} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto text-red-500 hover:text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-4 border-t border-gray-700 text-right">
          <button className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg font-medium">
            Checkout
          </button>
        </div>
      )}
    </div>
    </motion.div>
  );
};

export default CartSidebar;
