import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus } from "lucide-react";
import { CartContext } from "../context/CartContext";

const ProductModal = ({ product, isOpen, onClose }) => {
  const {
    addToCart,
    cartItems,
    increaseQty,
    decreaseQty
  } = useContext(CartContext);

  if (!product) return null;

  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.85 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 text-white rounded-xl p-6 w-[90%] max-w-xl shadow-2xl relative"
          >
            {/* Close */}
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-red-400">
              <X size={20} />
            </button>

            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="h-64 w-full object-contain bg-gray-800 rounded-lg mb-4"
            />

            {/* Content */}
            <h2 className="text-2xl font-bold text-sky-400 mb-2">{product.title}</h2>
            <p className="text-gray-300 text-sm mb-4 line-clamp-4">{product.description}</p>
            <p className="text-lg font-semibold text-white mb-2">Price: ${product.price}</p>

            {/* Coupon */}
            <div className="bg-gray-800 p-3 rounded-lg mb-4">
              <p className="text-sm text-gray-400">
                Use code <span className="text-green-400 font-bold">SAVE10</span> for 10% off!
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center gap-4">
              {/* Add to Cart Toggle */}
              {cartItem ? (
                <div className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-lg">
                  <button
                    onClick={() => decreaseQty(product.id)}
                    className="p-1 bg-gray-700 rounded hover:bg-gray-600"
                  >
                    <Minus size={16} className="text-white" />
                  </button>
                  <span className="text-white font-semibold">{cartItem.quantity}</span>
                  <button
                    onClick={() => increaseQty(product.id)}
                    className="p-1 bg-gray-700 rounded hover:bg-gray-600"
                  >
                    <Plus size={16} className="text-white" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Add to Cart
                </button>
              )}

              {/* Buy Now */}
              <button
                onClick={() => alert("Proceeding to buy...")}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium"
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
