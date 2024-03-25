import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Products from "./Componentes/Products";
import Home from "./Componentes/Home";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
