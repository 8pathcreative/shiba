"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Spotlight = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={divRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        background: isHovered
          ? "radial-gradient(600px circle at var(--x) var(--y), rgba(255,182,255,.1), transparent 40%)"
          : "",
      }}
      style={
        {
          "--x": `${position.x}px`,
          "--y": `${position.y}px`,
        } as React.CSSProperties
      }
    >
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" style={{ opacity }}>
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 blur-2xl"
          style={{
            clipPath: "url(#spotlight-clip)",
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      </div>
      {children}
    </motion.div>
  );
};

export const Meteors = ({ number = 20 }: { number?: number }) => {
  const meteors = Array.from({ length: number });
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={`animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]`}
          style={{
            top: "0px",
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        />
      ))}
    </>
  );
};

export const TextReveal = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [scope, animate] = useState(false);

  useEffect(() => {
    animate(true);
  }, []);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 100 }}
      animate={
        scope
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      {text}
    </motion.div>
  );
};