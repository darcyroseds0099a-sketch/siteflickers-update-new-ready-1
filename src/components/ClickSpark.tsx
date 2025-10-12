import { ReactNode, useRef, useState } from "react";

interface ClickSparkProps {
  children: ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
}

const ClickSpark = ({
  children,
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
}: ClickSparkProps) => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (360 / sparkCount) * i,
    }));

    setSparks((prev) => [...prev, ...newSparks]);

    setTimeout(() => {
      setSparks((prev) => prev.filter((spark) => !newSparks.includes(spark)));
    }, duration);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="relative inline-block"
      style={{ cursor: "pointer" }}
    >
      {children}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute pointer-events-none"
          style={{
            left: spark.x,
            top: spark.y,
            width: sparkSize,
            height: sparkSize,
            backgroundColor: sparkColor,
            borderRadius: "50%",
            animation: `sparkFly ${duration}ms ease-out forwards`,
            transform: `rotate(${spark.angle}deg) translateY(-${sparkRadius}px)`,
            opacity: 1,
          }}
        />
      ))}
      <style>
        {`
          @keyframes sparkFly {
            0% {
              transform: rotate(${0}deg) translateY(0);
              opacity: 1;
            }
            100% {
              transform: rotate(var(--angle, 0deg)) translateY(-${sparkRadius * 2}px);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ClickSpark;
