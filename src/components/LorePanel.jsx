import { getLoreEntries } from "../utils/getLoreEntries";
import "./LorePanel.css";

export default function LorePanel({ signKey, categoryLabel }) {
  const entries = getLoreEntries(signKey, categoryLabel);

  if (!entries || !entries.length) {
    return (
      <div className="lore-panel">
        <div className="lore-entry">
          <p>No lore entries found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lore-panel">
      {entries.map((item, index) => (
        <div className="lore-entry" key={index}>
          <h4 className="lore-title">
            {item.culture || item.system || item.tradition || item.process || "Lore"}
          </h4>
          <p className="lore-text">
            {item.summary || item.concept || item.practice || item.meaning || ""}
          </p>
        </div>
      ))}
    </div>
  );
}
