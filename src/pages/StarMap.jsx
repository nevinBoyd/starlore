import StarFieldCanvas from "../components/StarFieldCanvas";
import "./StarMap.css";

export default function StarMap() {
    return (
        <div className="star-map-page">
            <StarFieldCanvas />

            <div className="star-map-layer">
                <h1 style={{ color: "var(--color-cloudWhite)", textAlign: "center", marginTop: "20vh" }}>
                    Star Map Placeholder
                </h1>
            </div>
        </div>
    );
}
