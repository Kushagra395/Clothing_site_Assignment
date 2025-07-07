import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { ShoppingBag, ShoppingBagIcon } from "lucide-react";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import SortBar from "../components/SortBar";
import CartSidebar from "../components/CartSidebar";
import ProductModal from "../components/ProductModal";

import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [cartOpen, setCartOpen] = useState(false);
  const [previewProduct, setPreviewProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { cartItems, addToCart } = useContext(CartContext);

  // Fetch products
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const clothing = res.data.filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        );
        setProducts(clothing);
        setFiltered(clothing);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // Apply search/filter/sort
  useEffect(() => {
    let updated = [...products];

    if (category !== "all") {
      updated = updated.filter((item) => item.category === category);
    }

    if (searchQuery.trim()) {
      updated = updated.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFiltered(updated);
  }, [products, searchQuery, category, sortOrder]);

  const handleCardClick = (product) => {
    setPreviewProduct(product);
    setModalOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-8 relative"
    >
      {/* Cart Badge */}
      <div
        className="absolute top-6 right-6 bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow flex items-center gap-2 cursor-pointer hover:brightness-110 transition"
        onClick={() => setCartOpen(true)}
      >
        <ShoppingCart size={18} />
        <span>{cartItems.length}</span>
      </div>

    <h1 className="text-5xl font-extrabold font-serif mb-6 text-center text-blue-400 flex items-center justify-center gap-3">
  <ShoppingBagIcon size={42} className="text-sky-400" />
  CLOSET
</h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="w-full md:w-1/2">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <FilterBar value={category} onChange={setCategory} />
          <SortBar value={sortOrder} onChange={setSortOrder} />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length ? (
          filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleCardClick(product)}
            />
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center">
            No products found.
          </p>
        )}
      </div>

      {/* Sidebar & Modal */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <ProductModal
        product={previewProduct}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddToCart={addToCart}
      />
    </motion.div>
  );
};

export default ProductListingPage;
