import { useEffect, useRef } from "react";

const FloatingHearts = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Heart {
      x: number; y: number; size: number; speed: number;
      opacity: number; rotation: number; rotSpeed: number; sway: number; swaySpeed: number; t: number;
    }

    const hearts: Heart[] = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      size: 8 + Math.random() * 16,
      speed: 0.3 + Math.random() * 0.7,
      opacity: 0.15 + Math.random() * 0.35,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      sway: 30 + Math.random() * 40,
      swaySpeed: 0.005 + Math.random() * 0.01,
      t: Math.random() * Math.PI * 2,
    }));

    const drawHeart = (cx: number, cy: number, size: number) => {
      ctx.beginPath();
      const s = size / 15;
      ctx.moveTo(cx, cy + 5 * s);
      ctx.bezierCurveTo(cx, cy + 2 * s, cx - 7 * s, cy - 5 * s, cx - 14 * s, cy - 2 * s);
      ctx.bezierCurveTo(cx - 20 * s, cy + 4 * s, cx - 10 * s, cy + 15 * s, cx, cy + 20 * s);
      ctx.bezierCurveTo(cx + 10 * s, cy + 15 * s, cx + 20 * s, cy + 4 * s, cx + 14 * s, cy - 2 * s);
      ctx.bezierCurveTo(cx + 7 * s, cy - 5 * s, cx, cy + 2 * s, cx, cy + 5 * s);
      ctx.closePath();
      ctx.fill();
    };

    let frame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach(h => {
        h.y -= h.speed;
        h.t += h.swaySpeed;
        h.rotation += h.rotSpeed;
        const sx = h.x + Math.sin(h.t) * h.sway;
        if (h.y < -30) {
          h.y = canvas.height + 20;
          h.x = Math.random() * canvas.width;
        }
        ctx.save();
        ctx.translate(sx, h.y);
        ctx.rotate(h.rotation);
        ctx.globalAlpha = h.opacity;
        ctx.fillStyle = `hsl(346, 77%, ${62 + Math.random() * 10}%)`;
        drawHeart(0, 0, h.size);
        ctx.restore();
      });
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};

export default FloatingHearts;
