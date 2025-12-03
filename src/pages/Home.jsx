import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const featured = [
    { id: 1, name: "Figura Naruto", price: 20000, img: "/imagenes/figura_naruto.png" },
    { id: 2, name: "One Piece Vol. 100", price: 40000, img: "/imagenes/manga_onepiece.jpg" },
    { id: 3, name: "Poster Attack on Titan", price: 25000, img: "/imagenes/poster_attackontitan.webp" },
    { id: 4, name: "Poleron Alucard", price: 25000, img: "/imagenes/poleronalucard.avif" }
  ];

  return (
    <main>
      <section id="inicio">
        <div className="hero">
          <h2>Bienvenido a AnimeKai Store</h2>
          <p>Encuentra los mejores productos de anime y manga</p>
          <Link to="/productos" className="cta-button">Ver Productos</Link>
        </div>

        <div className="featured-Productos">
          <h2>Productos Destacados</h2>
          <div className="Productos-grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
