import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const ProductCard = ({ product, onClick  }) => {
  const { addToCart, cartItems, increaseQty, decreaseQty } = useContext(CartContext);

  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <motion.div
      onClick={onClick}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl p-4 hover:scale-[1.03] transition-transform duration-300 border border-gray-700"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4 rounded-lg bg-gray-900"
      />
      <h2 className="text-lg font-semibold text-sky-300 line-clamp-2 mb-2">
        {product.title}
      </h2>
      <p className="text-xl font-bold text-white mb-4">${product.price}</p>

      {/* Cart Control */}
      {cartItem ? (
        <div className="flex items-center justify-between bg-gray-900/70 px-4 py-2 rounded-xl shadow-sm">
          <button
            onClick={() => decreaseQty(product.id)}
            className="p-1 bg-gray-700 rounded hover:bg-gray-600 transition"
          >
            <Minus size={16} className="text-white" />
          </button>
          <span className="text-white font-semibold">{cartItem.quantity}</span>
          <button
            onClick={() => increaseQty(product.id)}
            className="p-1 bg-gray-700 rounded hover:bg-gray-600 transition"
          >
            <Plus size={16} className="text-white" />
          </button>
        </div>
      ) : (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(product)}
          className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-sky-700 to-sky-500 text-white font-semibold hover:brightness-110 transition duration-300 shadow-lg hover:shadow-sky-600/40"
        >
          Add to Cart
        </motion.button>
      )}
    </motion.div>
  );
};

export default ProductCard;

