import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import OrbitIcons from "../components/OrbitIcons";

function Home() {
    const navigate = useNavigate();
    const [isHovering, setIsHovering] = useState(false);
    const [isWarping, setIsWarping] = useState(false);
    const [fadeText, setFadeText] = useState(false);
    const [isBlurring, setIsBlurring] = useState(false);
    const [isBlueShift, setIsBlueShift] = useState(false);
    const [isChargeFlash, setIsChargeFlash] = useState(false);
    const [isFlashBurst, setIsFlashBurst] = useState(false);
    const [zoomGate, setZoomGate] = useState(false);

    const handleEnter = () => {
        setFadeText(true);
        setIsWarping(true);

        // Begin zoom toward the portal
        setTimeout(() => {
            setZoomGate(true);
        }, 850);

        // Glow buildup
        setTimeout(() => {
            setIsBlurring(true);
        }, 750);

        // Pre‐ignition charge flash
        setTimeout(() => {
            setIsChargeFlash(true);
        }, 1100);

        // Blue‐shift flash
        setTimeout(() => {
            setIsBlueShift(true);
        }, 1250);

        // White burst at impact with portal
        setTimeout(() => {
            setIsFlashBurst(true);

            // Force white flash to paint browser
            requestAnimationFrame(() => {
                document.body.offsetHeight;
            });
        }, 1425);

        // Hard cut
        setTimeout(() => {
            navigate("/starmap");
        }, 1650);
    };

    return (
        <div className="home-container">

            {/*  Invisible circular button wrapper  */}
            <div
                className="astral-gate-hitbox"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => !isWarping && setIsHovering(false)}
                onClick={handleEnter}
            >

                {/* Portal content that scales inward */}
                <div className={`portal-wrapper ${zoomGate ? "portal-zoom" : ""}`}>

                    <OrbitIcons
                        isHovering={isHovering}
                        isWarping={isWarping}
                        isBlurring={isBlurring}
                        isChargeFlash={isChargeFlash}
                        isBlueShift={isBlueShift}
                    />

                    <div
                        className={`astral-gate-text ${
                            fadeText
                                ? "fade-out"
                                : isWarping
                                ? "warp"
                                : isHovering
                                ? "hover"
                                : ""
                        }`}
                >
                    THE ASTRAL GATE
                </div>

            </div>
        </div>

        {/* Full Screen White Flash Layer */}
        <div className={`flash-screen ${isFlashBurst ? "active" : ""}`}></div>

    </div>
);

}

export default Home;
