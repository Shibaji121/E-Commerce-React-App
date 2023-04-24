import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AllProductsPage from "./AllProductsPage";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import AddProduct from "./AddProduct";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
