import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import productsData from "./productsData";
import { CartContext } from "../../Contexts/CartProvider";

const ProductPage = () => {
  const { productId } = useParams();
  const product = productsData[productId];
  const { addToCart } = useContext(CartContext); 

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <div className="section-product">
      <div className="product-window">
        <img
          className="img-product-window"
          src={product.imageUrl}
          alt={product.name}
          width="450"
          height="340"
        />
        <div className="description">
          <h2 className="title-product">{product.name}</h2>
          <p className="text-description">{product.description}</p>
        </div>
        <div className="buy-section">
          <p className="price-product">
            R${" "}
            {Number.isInteger(product.price)
              ? product.price
              : product.price.toFixed(3)}
          </p>
          <button
            className="btn-buy"
            type="button"
            onClick={handleAddToCart} 
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
