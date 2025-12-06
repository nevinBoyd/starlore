import { useState } from "react";
import StarFieldCanvas from "../components/StarFieldCanvas";
import AriesHead from "../components/AriesHead";
import Cancer from "../components/Cancer";
import Libra from "../components/Libra";
import ZodiacCards from "../components/ZodiacCards";
import "./StarMap.css";

export default function StarMap() {
  const [activeSign, setActiveSign] = useState(null);

  function handleSigilClick() {
    setActiveSign("Aries");
  }
  
  function handleCancerClick() {
    setActiveSign("Cancer");
  }

  function handleLibraClick() {
    setActiveSign("Libra")
  }

  return (
    <div className="star-map-page">
      <StarFieldCanvas />

      {/* Aries Sigil */}
      <AriesHead onClick={handleSigilClick} />
      
      {/* Cancer Sigil */}
      <Cancer onClick={handleCancerClick} />

      {/* Libra Sigil */}
      <Libra onClick={handleLibraClick} />

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
