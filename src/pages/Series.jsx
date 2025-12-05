import { Link } from "react-router-dom";

const seriesList = [
  { id: 'naruto', name: 'Naruto', img: '/imagenes/naruto.webp' },
  { id: 'onepiece', name: 'One Piece', img: '/imagenes/onepiece.webp' },
  { id: 'dragonball', name: 'Dragon Ball', img: '/imagenes/dragonball.jpg' },
  { id: 'attackontitan', name: 'Attack on Titan', img: '/imagenes/attackontitan.jpg' },
  { id: 'hellsing', name: 'Hellsing', img: '/imagenes/hellsing.webp' }
];

export default function Series() {
  return (
    <section id="series" className="container">
      <h2>Series Populares</h2>
      <div className="series-grid">
        {seriesList.map(s => (
          <div key={s.id} className="series-card">
            <img src={s.img} alt={s.name} />
            <div className="content">
              <h3>{s.name}</h3>
              {/* Botón a Trailer */}
              <Link to={`/series/${s.id}`} className="series-btn">Ver Trailer 🎥</Link>
              {/* Botón Productos */}
              <a href={`/productos?serie=${s.id}`} className="series-btn">Ver Productos 🛒</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
