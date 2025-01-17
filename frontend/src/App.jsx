import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShopNew from "./components/ShopNew";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopNew" element={<ShopNew />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
