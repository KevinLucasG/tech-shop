
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Products from "./Componentes/Products/Products.jsx";
import ProductPage from "./Componentes/Products/ProductPage.jsx";
import Home from "./Componentes/Home/Home";
import About from "./Componentes/About/About"
import Cart from "./Componentes/Cart/Cart.jsx"
import Login from "./Componentes/Signup/Login.jsx";
import Dashboard from "./Componentes/Signup/Dashboard.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter> 
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          
          <Route path="about" element={<About/>} />
          <Route path="cart" element={<Cart/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;