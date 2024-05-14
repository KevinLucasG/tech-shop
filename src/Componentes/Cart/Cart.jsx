import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartProvider.jsx";
import ProductsData from "../Products/productsData.jsx";

import "./Cart.css";

const Cart = () => {
  const {cart, removeFromCart, clearCart} = useContext(CartContext);
  
  return (
    <div>
      {cart.length === 0 ? (
        
        <h1 className="no-products">Você não tem nada no seu carrinho</h1>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.name} style={{ width: '100px' }} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
    </div>         
  );
};

export default Cart;

