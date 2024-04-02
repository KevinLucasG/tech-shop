import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/products'>Products</Link>
        <Link className="link" to='/Login'>Log in</Link>
        <Link className="link" to='/About'>About</Link>
        
    </nav>
  )
}

export default Navbar;