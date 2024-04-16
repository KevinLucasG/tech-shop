import React from "react";
import "./ProductPage.css";
import a14 from "../../assets/galaxy-a14.png";
import cart from "../../assets/cart.png";
const ProductPage = () => {
  return (
    <div className="section-product">
      <div className="product-window">
        <img
          className="img-product-window"
          src={a14}
          alt="Samsung Galaxy A14"
          width="450"
          height="340"
        />
        
        
        <div className="description">
          <h2 className="title-product">Samsung Galaxy A14</h2>
          <p className="text-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            voluptates odit ratione adipisci, ipsam iste. Hic error vitae
            tempore ea at! Eligendi explicabo consequatur aliquam, quisquam
            repudiandae vel modi inventore?
          </p>
          <button className="btn-buy" type="button">
          
            Adicionar ao Carrinho
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
