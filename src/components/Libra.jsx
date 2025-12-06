import "./Libra.css";
import libra from "../assets/AstroIcons/Libra.png";

export default function Libra({ onClick }) {
  return (
    <img
      src={libra}
      alt="Libra Sigil"
      className="libra-img"
      onClick={onClick}
    />
  );
}
