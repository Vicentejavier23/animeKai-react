import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import PropTypes from "prop-types";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header({ onCartClick }) {
  const { itemCount } = useCart();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>AnimeKai Store</h1>
        </div>

        <nav>
          <ul>
            <li><Link to="/" className="nav-link">Inicio</Link></li>
            <li><Link to="/productos" className="nav-link">Productos</Link></li>
            <li><Link to="/series" className="nav-link">Series</Link></li>
            <li><Link to="/about" className="nav-link">Quiénes Somos</Link></li>
          </ul>
        </nav>

        {/* 🛒 CARRITO */}
        <button
          className="cart-icon"
          onClick={onCartClick}
          aria-label={`Abrir carrito de compras, ${itemCount} items`}
        >
          🛒 <span className="cart-count">{itemCount}</span>
        </button>

        {/* 👤 LOGIN / LOGOUT */}
        {!user ? (
          <Link to="/login" className="nav-link login-button">
            <strong>Iniciar Sesión👤</strong>
          </Link>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span className="nav-link">
              Hola, {user.displayName || user.email}
            </span>
            <button onClick={logout} className="nav-link login-button">
              <strong>Cerrar Sesión </strong>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
Header.propTypes = {
  onCartClick: PropTypes.func.isRequired,
};
