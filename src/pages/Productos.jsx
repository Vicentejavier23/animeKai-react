import { useEffect, useState } from "react";
import { obtenerProductos } from "../services/firestoreProductos";
import { useCart } from "../context/CartContext";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const { addToCart } = useCart(); // 👈 Usar carrito real

  useEffect(() => {
    const cargarProductos = async () => {
      const data = await obtenerProductos();
      setProductos(data);
    };
    cargarProductos();
  }, []);

  return (
    <section id="productos" className="container">
      <h2>Productos Disponibles</h2>

      {productos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-grid">
          {productos.map((prod) => (
            <div key={prod.id} className="product-card">
              <img src={prod.imagenUrl} alt={prod.nombre} />
              <h3>{prod.nombre}</h3>
              <p>${prod.precio}</p>

              <button
                className="add-to-cart"
                onClick={() => addToCart(prod)} 
              >
                Añadir al carrito 🛒
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
