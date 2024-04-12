import React from "react";
import "./Products.css";
import a14 from "../../assets/galaxy-a14.png";
import iphone15 from "../../assets/iphone15.png"
import iphone15pro from "../../assets/iphone15pro.png"
import s23 from "../../assets/s23.png"
import note13 from "../../assets/note13.png"
import pocox6 from "../../assets/pocox6.png"
const Products = () => {
  return (
    <div className="ProductList">
      <div className="product-item">
        <img className="img-product" src={a14} alt="a14" width={"350px"} height={"250px"}></img>
        <div className="belowbar">
          <h3>Samsung Galaxy A14</h3>
          <p className="price">R$ 899</p>
        </div>
      </div>
      <div className="product-item">
        <img className="img-product" src={iphone15} alt="a14" width={"210px"} height={"200px"}></img>
        <div className="belowbar">
          <h3>Iphone 15</h3>
          <p className="price">R$ 4.999</p>
        </div>
      </div>
      <div className="product-item">
        <img className="img-product" src={iphone15pro} alt="a14" width={"210px"} height={"200px"}></img>
        <div className="belowbar">
          <h3>Iphone 15</h3>
          <p className="price">R$ 6.420</p>
        </div>
      </div>
      <div className="product-item">
        <img className="img-product" src={s23} alt="a14" width={"200px"} height={"200px"}></img>
        <div className="belowbar">
          <h3>Samsung Galaxy S23</h3>
          <p className="price">R$ 2.799 </p>
        </div>
      </div>
      <div className="product-item">
        <img className="img-product" src={note13} alt="a14" width={"180px"} height={"200px"}></img>
        <div className="belowbar">
          <h3>Redmi Note 13</h3>
          <p className="price">R$1.199</p>
        </div>
      </div>
      <div className="product-item">
        <img className="img-product" src={pocox6} alt="a14" width={"180px"} height={"200px"}></img>
        <div className="belowbar">
          <h3>POCO X6 Pro</h3>
          <p className="price">R$ 2.140</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
