import React, { useMemo } from "react";

// CosmicBackground — animated stars + nebula + orbital lines
// Pure CSS based for performance.
export const CosmicBackground = ({ density = 80 }) => {
    const stars = useMemo(() => {
        return Array.from({ length: density }).map((_, i) => {
            const size = Math.random() * 2 + 0.5;
            return {
                id: i,
                top: Math.random() * 100,
                left: Math.random() * 100,
                size,
                delay: Math.random() * 5,
                duration: 2 + Math.random() * 4,
                opacity: 0.3 + Math.random() * 0.7,
            };
        });
    }, [density]);

    const bigStars = useMemo(() => {
        return Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            delay: Math.random() * 4,
        }));
    }, []);

    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
            data-testid="cosmic-background"
        >
            {/* Base nebula gradient */}
            <div className="absolute inset-0 nebula-bg" />

            {/* Soft purple nebula clouds */}
            <div className="absolute top-[10%] left-[5%] w-[480px] h-[480px] rounded-full bg-[#7C3AED] opacity-[0.12] blur-[120px] animate-drift" />
            <div className="absolute bottom-[20%] right-[8%] w-[520px] h-[520px] rounded-full bg-[#4C1D95] opacity-[0.18] blur-[140px] animate-drift" style={{ animationDelay: '4s' }} />
            <div className="absolute top-[55%] left-[40%] w-[360px] h-[360px] rounded-full bg-[#A78BFA] opacity-[0.07] blur-[100px] animate-drift" style={{ animationDelay: '8s' }} />

            {/* Tiny stars */}
            {stars.map((s) => (
                <div
                    key={s.id}
                    className="absolute rounded-full bg-white animate-twinkle"
                    style={{
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        opacity: s.opacity,
                        animationDelay: `${s.delay}s`,
                        animationDuration: `${s.duration}s`,
                        boxShadow: `0 0 ${s.size * 2}px rgba(255,255,255,0.7)`,
                    }}
                />
            ))}

            {/* Bigger glowing stars */}
            {bigStars.map((s) => (
                <div
                    key={`big-${s.id}`}
                    className="absolute animate-twinkle"
                    style={{
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        animationDelay: `${s.delay}s`,
                        animationDuration: '4s',
                    }}
                >
                    <div
                        className="w-[3px] h-[3px] rounded-full bg-white"
                        style={{ boxShadow: '0 0 12px rgba(167,139,250,0.9), 0 0 24px rgba(124,58,237,0.6)' }}
                    />
                </div>
            ))}

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(167,139,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.5) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Vignette to focus content */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 40%, rgba(3,1,8,0.6) 100%)",
                }}
            />
        </div>
    );
};

export default CosmicBackground;
