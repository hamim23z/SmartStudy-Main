"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const FloatingText = ({ text, sx }) => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const getFloatingStyle = (index, totalChars) => {
    const angle = (index / totalChars) * 2 * Math.PI;
    const radiusX = Math.min(containerSize.width, containerSize.height) * 0.3;
    const radiusY = radiusX * 0.5;

    return {
      display: "inline-block",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: `translate(-50%, -50%) rotate(${angle}rad) translate(${radiusX}px, 0) rotate(${-angle}rad)`,
      animation: `float 20s linear infinite`,
      animationDelay: `${-index * (20 / totalChars)}s`,
    };
  };

  const characters = text.replace(/\s+/g, "").split("");

  return (
    <Box sx={{ width: "100%", height: "100%", position: "relative", ...sx }}>
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(-50%, -50%) rotate(0rad)
              translate(
                ${Math.min(containerSize.width, containerSize.height) * 0.3}px,
                0
              )
              rotate(0rad);
          }
          100% {
            transform: translate(-50%, -50%) rotate(${2 * Math.PI}rad)
              translate(
                ${Math.min(containerSize.width, containerSize.height) * 0.3}px,
                0
              )
              rotate(${-2 * Math.PI}rad);
          }
        }
      `}</style>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          fontSize: "clamp(1rem, 4vw, 3rem)",
          fontWeight: "bold",
        }}
      >
        {characters.map((char, index, array) => (
          <span key={index} style={getFloatingStyle(index, array.length)}>
            {char}
          </span>
        ))}
      </Box>
    </Box>
  );
};

export default FloatingText;
