
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Products from "./Componentes/Products/Products.jsx";
import Home from "./Componentes/Home/Home";
import About from "./Componentes/About/About"
import Cart from "./Componentes/Cart/Cart.jsx"
import "./App.css";

function App() {
  return (
    <BrowserRouter> 
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="about" element={<About/>} />
          <Route path="cart" element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;