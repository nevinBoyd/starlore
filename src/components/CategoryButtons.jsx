import "./LorePanel.css";

export default function CategoryButtons({ categories, activeCategory, onSelect }) {
  return (
    <div className="lore-pill-row">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`lore-pill ${activeCategory === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
