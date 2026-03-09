"use client";

import { useEffect, useRef } from "react";

class Raindrop {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight - canvasHeight;
    this.length = Math.random() * 20 + 10;
    this.speed = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.1;
  }

  update(canvasHeight: number) {
    this.y += this.speed;
    if (this.y > canvasHeight) {
      this.y = -this.length;
      this.speed = Math.random() * 2 + 1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.length);
    ctx.strokeStyle = `rgba(0, 229, 255, ${this.opacity})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

export default function RainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let raindrops: Raindrop[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Re-initialize raindrops on resize
      const dropCount = Math.floor(window.innerWidth / 15);
      raindrops = Array.from({ length: dropCount }, () => new Raindrop(canvas.width, canvas.height));
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      raindrops.forEach((drop) => {
        drop.update(canvas.height);
        drop.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-60"
    />
  );
}
