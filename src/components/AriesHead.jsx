import "./AriesHead.css";
import ariesHead from "../assets/AstroIcons/AriesHead.png";

export default function AriesHead({ onClick }) {
  return (
    <img
      src={ariesHead}
      alt="Aries Sigil"
      className="aries-head-img"
      onClick={onClick}
    />
  );
}
