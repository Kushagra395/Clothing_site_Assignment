import React from "react";
import ProductListingPage from "./pages/ProductListingPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";
 


const App = () => {
  return (
    <CartProvider>
      <ProductListingPage />
    </CartProvider> 
  );
};

export default App;
