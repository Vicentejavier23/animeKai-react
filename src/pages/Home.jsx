import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home() {
const featured = [
  { id: "RIxpgIBOFgiEFxNOAx2T", nombre: "Figura Naruto", precio: 20000, imagenUrl: "/imagenes/figura_naruto.png" },
  { id: "MkTBfBDnBiCm87DMvDqd", nombre: "One Piece Vol. 100", precio: 40000, imagenUrl: "/imagenes/manga_onepiece.jpg" },
  { id: "eTZgm1kF6TNN0lDurJ9y", nombre: "Poster Attack on Titan", precio: 25000, imagenUrl: "/imagenes/poster_attackontitan.webp" },
  { id: "FSWN2hzBjvDCPcMlLkuR", nombre: "Poleron Alucard", precio: 25000, imagenUrl: "/imagenes/poleronalucard.avif" }
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
