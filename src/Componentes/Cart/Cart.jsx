import React, { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartProvider.jsx";
import ProductsData from "../Products/productsData.jsx";

import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart, buyCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: ""
  });

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const formatPrice = (price) => {
    return price.toFixed(2).replace('.', ',');
  };

  const handleBuyButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  const handleConfirmPurchase = () => {
    const { street, number, neighborhood, city, state } = address;
    if (street && number && neighborhood && city && state) {
      window.alert("Compra Realizada com sucesso");
      buyCart();
      setIsModalOpen(false);
    } else {
      window.alert("Por favor, preencha todos os campos do endereço.");
    }
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
          <button className="buybtn" onClick={handleBuyButtonClick}>Comprar</button>
        </div>
      )}

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Digite seu endereço para finalizar a compra</h2>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleAddressChange}
              placeholder="Rua"
            />
            <input
              type="tel" 
              name="number"
              value={address.number}
              onChange={handleAddressChange}
              placeholder="Número"
            />
            <input
              type="text"
              name="neighborhood"
              value={address.neighborhood}
              onChange={handleAddressChange}
              placeholder="Bairro"
            />
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleAddressChange}
              placeholder="Cidade"
            />
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleAddressChange}
              placeholder="Estado"
            />
            <button className="confirm-button" onClick={handleConfirmPurchase}>Confirmar Compra</button>
            <button
              className="cancel-button"
              onClick={() => setIsModalOpen(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
