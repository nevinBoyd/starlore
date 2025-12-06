import { useEffect, useState } from "react";
import { fetchNASAImages } from "../api/fetchNASA";
import "./ZodiacCards.css";
import CategoryButtons from "./CategoryButtons";
import LorePanel from "./LorePanel";

// Search terms per constellation
const SEARCH_TERMS = {
  aries: "Hamal star",
  taurus: "Pleiades M45",
  gemini: "Castor Pollux constellation",
  cancer: "Beehive M44 cluster",
  leo: "Regulus star",
  virgo: "Spica star ESA",
  libra: "NGC 5897 stars",
  scorpio: "Antares star",
  sagittarius: "Lagoon Nebula M8",
  capricorn: "NGC 6903 galaxy",
  aquarius: "Helix Nebula",
  pisces: "NGC 7541 galaxy"
};

export default function ZodiacCards({ sign, onClose }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [viewerIndex, setViewerIndex] = useState(null);

  // Fetch NASA images
  useEffect(() => {
    let delay;

    async function load() {
      delay = setTimeout(() => setShowLoader(true), 350);

      const query = SEARCH_TERMS[sign.toLowerCase()] || `${sign} astronomy`;
      const results = await fetchNASAImages(query);

      setImages(results);
      setLoading(false);
      clearTimeout(delay);
    }
    load();
    return () => clearTimeout(delay);
  }, [sign]);

  // ESC closes only viewer
  useEffect(() => {
    const exit = (e) => e.key === "Escape" && setViewerIndex(null);
    window.addEventListener("keydown", exit);
    return () => window.removeEventListener("keydown", exit);
  }, []);

  // Loader Screen
  if (loading && showLoader) {
    return (
      <div className="zodiac-overlay" onClick={onClose}>
        <div className="zodiac-card-content" onClick={(e) => e.stopPropagation()}>
          <div className="zodiac-loading">Fetching NASA data...</div>
        </div>
      </div>
    );
  }

  // No Results
  if (!loading && !images.length) {
    return (
      <div className="zodiac-overlay fade-in" onClick={onClose}>
        <div className="zodiac-card-content" onClick={(e) => e.stopPropagation()}>
          <div className="zodiac-no-data">No images found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="zodiac-overlay fade-in" onClick={onClose}>
      <div className="zodiac-card-content" onClick={(e) => e.stopPropagation()}>

        {/* Single Display Card — User clicks to open viewer */}
        <div className="zodiac-card-container">
          {images.slice(0, 1).map((img, i) => (
            <div
              key={img.image}
              className="zodiac-card"
              onClick={() => setViewerIndex(i)}
            >
              <img src={img.image} alt={img.title} />
              <h3>{img.title}</h3>
              <p>NASA</p>
            </div>
          ))}
        </div>

        {/* Category Buttons */}
        <CategoryButtons
          categories={["Mythology", "Astral Lore", "Esotericism", "Alchemy", "Sacred Rites"]}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        {/* Lore Panel */}
        {activeCategory && (
          <LorePanel signKey={sign.toLowerCase()} categoryLabel={activeCategory} />
        )}

        {/* Fullscreen Viewer */}
        {viewerIndex !== null && (
          <div className="image-viewer-overlay" onClick={() => setViewerIndex(null)}>
            <img
              src={images[viewerIndex].image}
              alt=""
              className="image-viewer"
              onClick={(e) => {
                e.stopPropagation();
                setViewerIndex((viewerIndex + 1) % images.length);
              }}
            />
          </div>
        )}

      </div>
    </div>
  );
}
