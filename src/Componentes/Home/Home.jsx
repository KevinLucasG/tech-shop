import React from "react";
import './Home.css';
import Products from "../Products/Products";
const Home = () => {
  return(
  <div className="container">
    <h2 className="title-offer">ITENS EM OFERTA</h2>
    
    <Products/>
  </div>
  
)};

export default Home;
