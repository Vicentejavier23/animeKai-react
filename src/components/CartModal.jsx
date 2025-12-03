import React from "react";
import { useCart } from "../context/CartContext";
import PropTypes from 'prop-types';

export default function CartModal({ isOpen, onClose }) {
  const { cartItems, removeItem, emptyCart, total } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart-modal show">
      <div className="cart-content">
        <button className="close-cart" onClick={onClose} aria-label="Cerrar carrito">
          &times;
        </button>
        <h3>Tu Carrito</h3>

        <div id="cart-items">
          {cartItems.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div style={{ width: 60, height: 60 }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="cart-item-details">
                  <strong>{item.name}</strong>
                  <p>
                    ${item.price} x {item.quantity} = $
                    {item.price * item.quantity}
                  </p>
                </div>
                <button
                  className="remove-item"
                  onClick={() => removeItem(item.id)}
                >
                  ✖
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <>
            <div className="cart-total">
              <strong>Total:</strong> ${total}
            </div>
            <button className="empty-cart-btn" onClick={emptyCart}>
              Vaciar Carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
}
CartModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
