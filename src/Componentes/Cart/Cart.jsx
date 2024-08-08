import React, { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartProvider.jsx";
import ProductsData from "../Products/productsData.jsx";

import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart, buyCart } = useContext(CartContext);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
  });
  const [card, setCard] = useState({
    number: "",
    expirationDate: "",
    cvv: "",
  });

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const formatPrice = (price) => {
    return price.toFixed(2).replace(".", ",");
  };

  const handleBuyButtonClick = () => {
    setIsAddressModalOpen(true);
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  const handleCardChange = (event) => {
    const { name, value } = event.target;
    setCard({ ...card, [name]: value });
  };

  const handleConfirmAddress = () => {
    const { street, number, neighborhood, city, state } = address;
    if (street && number && neighborhood && city && state) {
      setIsAddressModalOpen(false);
      setIsCardModalOpen(true);
    } else {
      window.alert("Por favor, preencha todos os campos do endereço.");
    }
  };

  const handleConfirmCard = () => {
    const { number, expirationDate, cvv } = card;
    if (number && expirationDate && cvv) {
      window.alert("Compra Realizada com sucesso");
      buyCart();
      setIsCardModalOpen(false);
    } else {
      window.alert("Por favor, preencha todos os campos do cartão.");
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
              <img
                className="image-product"
                src={item.imageUrl}
                alt={item.name}
                style={{ width: "100px" }}
              />
              <h3 className="item-name">{item.name} </h3>
              <p>Quantidade: {item.quantity}</p>
              <p className="product-price-cart">
                R$ {formatPrice(item.price * item.quantity)}
              </p>
              <button
                className="removebtn"
                onClick={() => removeFromCart(item.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="confirmation-section">
          <button className="cleatbtn" onClick={clearCart}>
            Limpar Carrinho
          </button>
          <h3 className="TotalPrice">
            Total do Carrinho: R$ {calculateTotal().toFixed(2)}
          </h3>
          <button className="buybtn" onClick={handleBuyButtonClick}>
            Comprar
          </button>
        </div>
      )}

      {isAddressModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Digite seu endereço</h2>
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
            <button className="confirm-button" onClick={handleConfirmAddress}>
              Confirmar Endereço
            </button>
            <button
              className="cancel-button"
              onClick={() => setIsAddressModalOpen(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {isCardModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>
              Digite as informações do seu cartão(Para finalizar a compra)
            </h2>
            <h6 className="TotalPrice">
              Total do Carrinho: R$ {calculateTotal().toFixed(2)}
            </h6>
            <input
              type="text"
              name="number"
              value={card.number}
              onChange={handleCardChange}
              placeholder="Número do Cartão"
            />
            <input
              type="text"
              name="expirationDate"
              value={card.expirationDate}
              onChange={handleCardChange}
              placeholder="Data de Expiração"
            />
            <input
              type="text"
              name="cvv"
              value={card.cvv}
              onChange={handleCardChange}
              placeholder="CVV"
            />
            <button className="confirm-button" onClick={handleConfirmCard}>
              Confirmar Cartão
            </button>
            <button
              className="cancel-button"
              onClick={() => setIsCardModalOpen(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
