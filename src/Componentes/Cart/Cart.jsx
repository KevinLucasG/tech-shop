import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartProvider.jsx";
import ProductsData from "../Products/productsData.jsx";

import "./Cart.css";

const Cart = () => {
  const {cart, removeFromCart, clearCart} = useContext(CartContext);
  const calculateTotal = () => {
   
    
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const formatPrice = (price) => {
    return price.toFixed(2).replace('.', ',');
  };
  
  return (
    <div>
      {cart.length === 0 ? (
        <h1 className="no-products">Você não tem nada no seu carrinho</h1>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt={item.name} style={{ width: '100px'}} />
              <h3>{item.name} </h3>
              <p>Preço: R$ {formatPrice(item.price * item.quantity)}</p>
              <p>Quantidade: {item.quantity}</p>
              <button className="removebtn" onClick={() => removeFromCart(item.id)}>X</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="confirmation-section">
          <button className="cleatbtn" onClick={clearCart}>Limpar Carrinho</button>
          <h3 className="TotalPrice">Total do Carrinho: R$ {calculateTotal().toFixed(2)}</h3>
          <button className="buybtn">Comprar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

