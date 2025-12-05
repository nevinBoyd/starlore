import { useState } from "react";
import StarFieldCanvas from "../components/StarFieldCanvas";
import AriesHead from "../components/AriesHead";
import ZodiacCards from "../components/ZodiacCards";
import "./StarMap.css";

export default function StarMap() {
  const [activeSign, setActiveSign] = useState(null);

  function handleSigilClick() {
    setActiveSign("Aries");
  }

  return (
    <div className="star-map-page">
      <StarFieldCanvas />

      {/* Aries Sigil Button */}
      <AriesHead onClick={handleSigilClick} />

      {/* Cards appear after selecting a sign */}
      {activeSign && (
        <ZodiacCards 
          sign={activeSign} 
          onClose={() => setActiveSign(null)} 
        />
      )}
    </div>
  );
}
