import "./Cancer.css";
import cancer from "../assets/AstroIcons/cancer.png";

export default function Cancer({ onClick }) {
  return (
    <img
      src={cancer}
      alt="Cancer Sigil"
      className="cancer-img"
      onClick={onClick}
    />
  );
}
