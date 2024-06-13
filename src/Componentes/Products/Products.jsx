import React from "react";
import "./Products.css";
import a14 from "../../assets/galaxy-a14.png";
import iphone15 from "../../assets/iphone15.png";
import iphone15pro from "../../assets/iphone15pro.png";
import s23 from "../../assets/s23.png";
import note13 from "../../assets/note13.png";
import pocox6 from "../../assets/pocox6.png";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div className="ProductList">
            
            <Link to="/product/samsung-galaxy-a14" className="product-item">
                <img className="img-product" src={a14} alt="Samsung Galaxy A14" width="150" height="200" />
                <div className="belowbar">
                    <h3>Samsung Galaxy A14</h3>
                    <p className="price">R$ 899</p>
                </div>
            </Link>

            <Link to="/product/iphone-15" className="product-item">
                <img className="img-product" src={iphone15} alt="Iphone 15" width="210" height="200" />
                <div className="belowbar">
                    <h3>Iphone 15</h3>
                    <p className="price">R$ 4.999</p>
                </div>
            </Link>

            <Link to="/product/iphone-15-pro" className="product-item">
                <img className="img-product" src={iphone15pro} alt="Iphone 15 Pro" width="210" height="200" />
                <div className="belowbar">
                    <h3>Iphone 15 Pro</h3>
                    <p className="price">R$ 6.420</p>
                </div>
            </Link>

            <Link to="/product/samsung-galaxy-s23" className="product-item">
                <img className="img-product" src={s23} alt="Samsung Galaxy S23" width="200" height="200" />
                <div className="belowbar">
                    <h3>Samsung Galaxy S23</h3>
                    <p className="price">R$ 2.799</p>
                </div>
            </Link>

            <Link to="/product/redmi-note-13" className="product-item">
                <img className="img-product" src={note13} alt="Redmi Note 13" width="180" height="200" />
                <div className="belowbar">
                    <h3>Redmi Note 13</h3>
                    <p className="price">R$ 1.199</p>
                </div>
            </Link>

            <Link to="/product/poco-x6-pro" className="product-item">
                <img className="img-product" src={pocox6} alt="POCO X6 Pro" width="180" height="200" />
                <div className="belowbar">
                    <h3>POCO X6 Pro</h3>
                    <p className="price">R$ 2.140</p>
                </div>
            </Link>
        </div>
    );
};

export default Products;
