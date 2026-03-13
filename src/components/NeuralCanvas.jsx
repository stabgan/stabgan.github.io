import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

export default function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const noise2D = createNoise2D();
    let animId;
    let mouse = { x: -1000, y: -1000 };
    let nodes = [];
    const isMobile = window.innerWidth < 768;
    const NODE_COUNT = isMobile ? 60 : 120;
    const CONNECT_DIST = isMobile ? 100 : 140;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function init() {
      resize();
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        seed: Math.random() * 1000,
      }));
    }

    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = t * 0.0003;

      for (const n of nodes) {
        n.x += n.vx + noise2D(n.seed, time) * 0.3;
        n.y += n.vy + noise2D(n.seed + 100, time) * 0.3;
        if (n.x < -20) n.x = canvas.width + 20;
        if (n.x > canvas.width + 20) n.x = -20;
        if (n.y < -20) n.y = canvas.height + 20;
        if (n.y > canvas.height + 20) n.y = -20;

        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200 * 0.02;
          n.x += dx * force;
          n.y += dy * force;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const glow = dist < 200 ? 0.8 : 0.25;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${glow})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    function onMouse(e) { mouse.x = e.clientX; mouse.y = e.clientY; }
    function onLeave() { mouse.x = -1000; mouse.y = -1000; }

    init();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      role="img"
      aria-label="Animated neural network background"
    />
  );
}