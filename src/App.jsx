import React from "react";
import ProductListingPage from "./Pages/ProductListingPage";
import { CartProvider } from "./Context/CartContext";


const App = () => {
  return (
    <CartProvider>
      <ProductListingPage />
    </CartProvider>
  );
};

export default App;
