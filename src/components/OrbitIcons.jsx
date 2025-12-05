import { useEffect, useRef } from "react";
import "./OrbitIcons.css";

const zodiac = [
    { symbol: "♈︎", name: "Aries" },
    { symbol: "♉︎", name: "Taurus" },
    { symbol: "♊︎", name: "Gemini" },
    { symbol: "♋︎", name: "Cancer" },
    { symbol: "♌︎", name: "Leo" },
    { symbol: "♍︎", name: "Virgo" },
    { symbol: "♎︎", name: "Libra" },
    { symbol: "♏︎", name: "Scorpio" },
    { symbol: "♐︎", name: "Sagittarius" },
    { symbol: "♑︎", name: "Capricorn" },
    { symbol: "♒︎", name: "Aquarius" },
    { symbol: "♓︎", name: "Pisces" },
];

function OrbitIcons({ 
    isHovering, 
    isWarping, 
    isBlurring, 
    isChargeFlash, 
    isBlueShift,
    isFlashBurst
}) {
    const iconRefs = useRef([]);
    const tRef = useRef(0);
    const speedRef = useRef(0.003);

    useEffect(() => {
        let frame;

        const baseSpeed = 0.003;
        const hoverSpeed = 0.03;
        const warpSpeed = 0.26;

        let targetSpeed = baseSpeed;

        if (isWarping) targetSpeed = warpSpeed;
        else if (isHovering) targetSpeed = hoverSpeed;
        else targetSpeed = baseSpeed;

        const speed = isWarping
            ? warpSpeed
            : isHovering
                ? hoverSpeed
                : baseSpeed;

        const animate = () => {
            const smoothing = isWarping ? 0.09 : 0.06;
            speedRef.current += (targetSpeed - speedRef.current) * smoothing;

            tRef.current += speedRef.current;

            iconRefs.current.forEach((el, i) => {
                if (!el) return;

                const angle = (i / zodiac.length) * Math.PI * 2 + tRef.current;
                const x = Math.cos(angle);
                const y = Math.sin(angle);

                const radius = 18;

                el.style.setProperty("--tx", x);
                el.style.setProperty("--ty", y);
                el.style.transform = `translate(${x * radius}vmin, ${y * radius}vmin)`;
            });

            frame = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(frame);
    }, [isHovering, isWarping]);

    return (
        <div className={`orbit-container
                 ${isWarping ? "warping" : ""}
                 ${isBlurring ? "blurred" : ""}
                 ${isChargeFlash ? "charge-flash" : ""}
                 ${isBlueShift ? "blue-shift" : ""}
                 ${isFlashBurst ? "flash-burst" : ""}`}
        >

            {zodiac.map((z, i) => (
                <div
                    key={z.name}
                    className={`orbit-icon ${isWarping ? "warp-trail" : ""}`}
                    ref={(el) => (iconRefs.current[i] = el)}
                >
                    <span className="orbit-symbol">{z.symbol}</span>
                </div>
            ))}
        </div>
    );
}

export default OrbitIcons;
