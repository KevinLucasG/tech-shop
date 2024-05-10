import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartProvider.jsx";


import "./Cart.css";

const Cart = () => {
  const {addToCart } = useContext(CartContext);
  console.log(addToCart.setcart)
  return (
    <div>
      {cart.length === 0 ? (
        
        <h1 className="no-products">Você não tem nada no seu carrinho</h1>
      ) : (
        <>
          <h1>Você tem {cart.length} produto(s) no seu carrinho:</h1>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </>
      )}
      <button className="renmove"></button>
        <i className="bx bx-x"></i>
    </div>
  );
};

export default Cart;

