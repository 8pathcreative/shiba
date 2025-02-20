"use client";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const Sparkle = ({ size, color, style }: { size: number; color: string; style: any }) => {
  const path = "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z";

  return (
    <motion.svg
      style={style}
      width={size}
      height={size}
      viewBox="0 0 68 68"
      fill="none"
    >
      <motion.path
        d={path}
        fill={color}
        initial={{ scale: 0, rotate: 0 }}
        animate={{
          scale: [0, 1, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: random(1, 3),
        }}
      />
    </motion.svg>
  );
};

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export const Sparkles = ({ children, className, color = "#FFA500" }: SparklesProps) => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; size: number; style: any }>>([]);
  const controls = useAnimationControls();

  useEffect(() => {
    const generateSparkle = () => ({
      id: random(10000, 99999),
      size: random(10, 20),
      style: {
        position: "absolute",
        top: random(0, 100) + "%",
        left: random(0, 100) + "%",
        zIndex: 2,
      },
    });

    const sparkleCount = 4;
    const newSparkles = Array.from({ length: sparkleCount }, () => generateSparkle());
    setSparkles(newSparkles);

    const interval = setInterval(() => {
      setSparkles(currentSparkles => {
        const [, ...rest] = currentSparkles;
        return [...rest, generateSparkle()];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      className={cn("relative inline-block", className)}
      animate={controls}
      onHoverStart={() => {
        controls.start({
          scale: [1, 1.1, 1],
          transition: { duration: 0.3 },
        });
      }}
    >
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <motion.strong
        className="relative inline-block z-1"
        style={{ zIndex: 1 }}
      >
        {children}
      </motion.strong>
    </motion.span>
  );
};