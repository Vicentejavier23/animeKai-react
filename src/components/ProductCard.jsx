import React from 'react';
import { useCart } from "../context/CartContext";
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.imagenUrl} alt={product.nombre} />
      <div className="content">
        <h3>{product.nombre}</h3>
        <p className="price">${product.precio}</p>
        <button
          className="add-to-cart"
          onClick={() => addToCart(product)}
        >
          Añadir al carrito 🛒
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    nombre: PropTypes.string.isRequired,
    imagenUrl: PropTypes.string,
    precio: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func,
};
