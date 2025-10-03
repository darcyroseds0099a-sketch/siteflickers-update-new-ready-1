import { useRef, useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagicBentoProps {
  children?: ReactNode;
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  glowColor?: string;
  className?: string;
}

const MagicBento = ({
  children,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  spotlightRadius = 300,
  particleCount = 12,
  glowColor = "0, 199, 255",
  className = "",
}: MagicBentoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [stars, setStars] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    if (enableStars) {
      const newStars = Array.from({ length: particleCount }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setStars(newStars);
    }
  }, [enableStars, particleCount]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 5;
      const rotateY = ((x - centerX) / centerX) * 5;

      containerRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (containerRef.current && enableTilt) {
      containerRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Spotlight Effect */}
      {enableSpotlight && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(${spotlightRadius}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${glowColor}, 0.15), transparent 80%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Border Glow Effect */}
      {enableBorderGlow && isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `linear-gradient(to right, transparent, rgba(${glowColor}, 0.3), transparent)`,
            backgroundSize: "200% 100%",
            animation: isHovered ? "shimmer 2s infinite" : "none",
          }}
        />
      )}

      {/* Animated Stars/Particles */}
      {enableStars && isHovered && (
        <div className="pointer-events-none absolute inset-0">
          {stars.map((star, index) => (
            <motion.div
              key={index}
              className="absolute h-1 w-1 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [star.x + "%", star.x + Math.random() * 20 - 10 + "%"],
                y: [star.y + "%", star.y + Math.random() * 20 - 10 + "%"],
              }}
              transition={{
                duration: 1.5,
                delay: star.delay,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              style={{
                backgroundColor: `rgb(${glowColor})`,
                boxShadow: `0 0 8px 2px rgba(${glowColor}, 0.6)`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Click Ripple Effect */}
      {clickEffect && (
        <style>
          {`
            @keyframes shimmer {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `}
        </style>
      )}
    </div>
  );
};

export default MagicBento;
