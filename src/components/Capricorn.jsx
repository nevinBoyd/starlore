import "./Capricorn.css";
import capricorn from "../assets/AstroIcons/Capricorn.png";

export default function Capricorn({ onClick }) {
  return (
    <img
      src={capricorn}
      alt="Capricorn Sigil"
      className="capricorn-img"
      onClick={onClick}
    />
  );
}
