
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Products from "./Componentes/Products";
import Home from "./Componentes/Home/Home";
import About from "./Componentes/About/About"
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;