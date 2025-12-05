import { useEffect, useRef } from "react";
import "./StarFieldCanvas.css";

function StarFieldCanvas() {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);
    const animationRef = useRef(null);
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        function resizeCanvas() {
            const { innerWidth, innerHeight } = window;
            canvas.width = innerWidth;
            canvas.height = innerHeight;
        }

        // One-time star generation (normalized positions)
        function generateStars() {
            const STAR_COUNT = 1200;

            const colors = [
                "#A9CFFF", // blue-white (hot, young)
                "#FFFFFF", // white
                "#FFD27A", // yellow
                "#FF7F5A", // orange/red
            ];

            const weights = [0.2, 0.4, 0.25, 0.15];

            const stars = [];

            for (let i = 0; i < STAR_COUNT; i++) {
                const rand = Math.random();
                let color;
                if (rand < weights[0]) color = colors[0];
                else if (rand < weights[0] + weights[1]) color = colors[1];
                else if (rand < weights[0] + weights[1] + weights[2]) color = colors[2];
                else color = colors[3];

                // normalized coordinates 0–1, so resizing doesn't reroll the sky
                const u = Math.random();
                const v = Math.random();

                // star size slightly tied to brightness
                const size = 0.5 + Math.random() * 1.5;

                // base alpha + soft twinkle amplitude
                const baseAlpha = 0.35 + Math.random() * 0.45;
                const twinkleAmp = 0.15 + Math.random() * 0.25;

                // "breath" twinkle: slower, organic
                const slowTwinkleSpeed = 0.2 + Math.random() * 0.25; // radians per second
                const slowPhase = Math.random() * Math.PI * 2;

                // "sparkle" twinkle: faster, smaller spike
                const fastTwinkleSpeed = 2.0 + Math.random() * 2.5;
                const fastPhase = Math.random() * Math.PI * 2;

                // tiny drift for parallax feel
                const driftX = (Math.random() - 0.5) * 0.008;
                const driftY = (Math.random() - 0.5) * 0.008;

                stars.push({
                    u,
                    v,
                    color,
                    size,
                    baseAlpha,
                    twinkleAmp,
                    slowTwinkleSpeed,
                    slowPhase,
                    fastTwinkleSpeed,
                    fastPhase,
                    driftX,
                    driftY,
                });
            }

            starsRef.current = stars;
        }

        resizeCanvas();
        generateStars();

        window.addEventListener("resize", resizeCanvas);

        let lastTimestamp = performance.now();

        function drawFrame(timestamp) {
            const delta = (timestamp - lastTimestamp) / 1000; // seconds
            lastTimestamp = timestamp;

            const { width, height } = canvas;
            const ctx = canvas.getContext("2d");

            timeRef.current += delta;

            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            const stars = starsRef.current;

            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];

                // apply tiny drift for depth
                const t = timeRef.current;
                const driftedU = s.u + s.driftX * t;
                const driftedV = s.v + s.driftY * t;

                const x = (driftedU % 1 + 1) % 1 * width;  // wrap around edges
                const y = (driftedV % 1 + 1) % 1 * height;

                // soft "breath" twinkle (option 2)
                const slow = Math.sin(s.slowPhase + t * s.slowTwinkleSpeed);
                const slowComponent = slow * s.twinkleAmp;

                // sharper, fast sparkle (option 3) – smaller influence
                const fast = Math.sin(s.fastPhase + t * s.fastTwinkleSpeed);
                const fastComponent = Math.abs(fast) * 0.18; // clipped sparkle

                let alpha = s.baseAlpha + slowComponent + fastComponent;
                if (alpha < 0.05) alpha = 0.05;
                if (alpha > 1.0) alpha = 1.0;

                ctx.globalAlpha = alpha;
                ctx.fillStyle = s.color;

                // tiny circle for each star
                ctx.beginPath();
                ctx.arc(x, y, s.size, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalAlpha = 1;
            animationRef.current = requestAnimationFrame(drawFrame);
        }

        animationRef.current = requestAnimationFrame(drawFrame);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return <canvas ref={canvasRef} className="starfield-canvas" />;
}

export default StarFieldCanvas;
