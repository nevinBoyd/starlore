import { useEffect, useState } from "react";
import { fetchNASAImages } from "../api/fetchNASA";
import "./ZodiacCards.css";

export default function ZodiacCards({ sign, onClose }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let loaderDelay;

    async function load() {
      loaderDelay = setTimeout(() => setShowLoader(true), 350);

      const results = await fetchNASAImages(`${sign} Constellation`);
      setImages(results);
      setLoading(false);
      clearTimeout(loaderDelay);
    }

    load();
    return () => clearTimeout(loaderDelay);
  }, [sign]);

  // Loader (only shows if fetch is slow)
  if (loading && showLoader) {
    return (
      <div className="zodiac-overlay" onClick={onClose}>
        <div className="zodiac-card-content" onClick={(e) => e.stopPropagation()}>
          <div className="zodiac-loading">⏳ Fetching NASA data…</div>
        </div>
      </div>
    );
  }

  // No results
  if (!loading && !images.length) {
    return (
      <div className="zodiac-overlay fade-in" onClick={onClose}>
        <div className="zodiac-card-content" onClick={(e) => e.stopPropagation()}>
          <div className="zodiac-no-data">🚫 No NASA images found for {sign}</div>
        </div>
      </div>
    );
  }

  // 🌌 Show results
  return (
    <div className="zodiac-overlay fade-in" onClick={onClose}>
      <div className="zodiac-card-content" onClick={(e) => e.stopPropagation()}>
        <div className="zodiac-card-container">
          {images.slice(0, 3).map((img) => (
            <div key={img.image} className="zodiac-card">
              <img src={img.image} alt={img.title} />
              <h3>{img.title}</h3>
              <p>{img.center}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
