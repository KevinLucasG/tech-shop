import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Products from "./Componentes/Products/Products.jsx";
import ProductPage from "./Componentes/Products/ProductPage.jsx";
import Home from "./Componentes/Home/Home";
import About from "./Componentes/About/About";
import Cart from "./Componentes/Cart/Cart.jsx";
import Login from "./Componentes/Signup/Login.jsx";
import Register from "./Componentes/Signup/Register.jsx"
import ForgotPassword from "./Componentes/Signup/ForgotPassword.jsx";
import Dashboard from "./Componentes/Signup/Dashboard.jsx";
import { CartProvider } from "./Contexts/CartProvider.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:productId" element={<ProductPage />} />

            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="register" element={<Register/>}/>
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
