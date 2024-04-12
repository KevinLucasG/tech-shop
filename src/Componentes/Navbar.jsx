import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cart from "../assets/cart.png";

const Navbar = () => {
  return (
    <div>
      <h2 className="title">TechShop</h2>
      <nav className="navbar">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/Products">
          Products
        </Link>
        <Link className="link" to="/signup">
          Sign up
        </Link>
        <Link className="link" to="/About">
          Sobre nós
        </Link>
        <Link className="link" to="/Cart">
          <img src={cart} alt="Cart" className="cart-icon" width={"30px"} />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
