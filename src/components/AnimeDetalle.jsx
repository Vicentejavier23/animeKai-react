import { useParams } from "react-router-dom";

const trailers = {
  naruto: "https://www.youtube.com/embed/QczGoCmX-pI",
  onepiece: "https://www.youtube.com/embed/U0SECwYoqqA",
  dragonball: "https://www.youtube.com/embed/I0tZmujx5BM",
  attackontitan: "https://www.youtube.com/embed/MGRm4IzK1SQ",
  hellsing: "https://www.youtube.com/embed/JaWy0AbytoE"
};

export default function SerieDetalle() {
  const { id } = useParams();
  const trailerURL = trailers[id];

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h2>Trailer Oficial</h2>

      {trailerURL ? (
        <iframe
          width="560"
          height="315"
          src={trailerURL}
          allowFullScreen
          title="Anime Trailer"
        ></iframe>
      ) : (
        <p>No hay trailer disponible</p>
      )}
    </div>
  );
}
