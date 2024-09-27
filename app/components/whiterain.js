import React, { useEffect, useRef } from "react";

const RainEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const raindrops = [];

    class Raindrop {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * (canvas.width + 100) - 90;
        this.y = -10;
        this.speed = 2 + Math.random() * 5;
        this.length = 10 + Math.random() * 20;
        this.opacity = 0.1 + Math.random() * 0.4;
      }

      fall() {
        this.y += this.speed;
        this.x += this.speed / 4; // Reduced diagonal movement

        if (this.y > canvas.height || this.x > canvas.width + 100) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.length / 2, this.y - this.length);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    const createRaindrops = () => {
      const raindropCount = Math.floor(canvas.width / 3);
      for (let i = 0; i < raindropCount; i++) {
        raindrops.push(new Raindrop());
      }
    };

    createRaindrops();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      raindrops.forEach((drop) => {
        drop.fall();
        drop.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
};

export default RainEffect;
