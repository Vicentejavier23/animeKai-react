import React from 'react';
import { useCart } from "../context/CartContext";
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <div className="content">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <button
          className="add-to-cart"
          onClick={() => addToCart(product)}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
    price: PropTypes.number.isRequired,
    category: PropTypes.string,
  }).isRequired,
};
