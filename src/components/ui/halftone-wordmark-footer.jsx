import React, { useEffect, useRef } from "react";

/**
 * HalftoneWordmarkFooter
 * Interactive Halftone Wordmark Canvas Banner
 * Full-bleed canvas rendering the hospital wordmark in an interactive halftone dot matrix.
 * Dots displace on mouse proximity with spring tension and warm terracotta glow interpolation.
 */
export function HalftoneWordmarkFooter({
  wordmark = "surya hospital",
  height = "clamp(90px, 10.5vw, 150px)",
  dotGap = 6,
  radius = 85,
  crop = 0.2,
  grain = 0.4,
  interactive = true,
  palette = {
    background: "#0D1728",
    ink: "#B2CEE2",
    warm: "#E94B1C",
  },
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let width = container.clientWidth || window.innerWidth;
    // Derive pixel height from container height or clamp estimation
    let hVal = container.clientHeight || 130;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setupDimensions = () => {
      width = container.clientWidth || window.innerWidth;
      hVal = container.clientHeight || 130;

      canvas.width = width * dpr;
      canvas.height = hVal * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${hVal}px`;
    };

    setupDimensions();

    // Helper: Hex color to RGB
    const hexToRgb = (hex) => {
      const sanitized = hex.replace("#", "");
      const bigint = parseInt(sanitized, 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    };

    const inkRgb = hexToRgb(palette.ink || "#B2CEE2");
    const warmRgb = hexToRgb(palette.warm || "#E94B1C");

    // Off-screen canvas text stencil
    const offscreen = document.createElement("canvas");
    const offCtx = offscreen.getContext("2d", { willReadFrequently: true });

    const createTextGrid = () => {
      offscreen.width = width;
      offscreen.height = hVal;

      offCtx.fillStyle = "#000000";
      offCtx.fillRect(0, 0, width, hVal);

      // Optimal font sizing to stretch nicely across width with bottom crop
      const fontSize = Math.floor(Math.max(width * 0.138, 55));
      offCtx.font = `900 ${fontSize}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.fillStyle = "#ffffff";
      offCtx.letterSpacing = "-0.04em";

      // Vertical position with slight crop offset
      const textY = hVal * (0.5 + (crop ? crop * 0.15 : 0.05));
      offCtx.fillText(wordmark.toLowerCase(), width / 2, textY);

      const imgData = offCtx.getImageData(0, 0, width, hVal).data;
      const dots = [];
      const gap = dotGap || 6;
      const maxRadius = gap * 0.56;

      for (let y = gap / 2; y < hVal; y += gap) {
        for (let x = gap / 2; x < width; x += gap) {
          const px = Math.floor(x);
          const py = Math.floor(y);
          const idx = (py * width + px) * 4;
          const brightness = imgData[idx] / 255;

          if (brightness > 0.08) {
            dots.push({
              origX: x,
              origY: y,
              x: x,
              y: y,
              vx: 0,
              vy: 0,
              baseRadius: brightness * maxRadius,
            });
          }
        }
      }
      return dots;
    };

    let dots = createTextGrid();

    // Mouse Tracking
    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const handleResize = () => {
      setupDimensions();
      dots = createTextGrid();
    };

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Render & Physics Loop
    const animate = () => {
      ctx.save();
      ctx.scale(dpr, dpr);

      // Background fill
      ctx.fillStyle = palette.background || "#0D1728";
      ctx.fillRect(0, 0, width, hVal);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const repRadius = radius || 85;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        if (interactive) {
          const dx = dot.x - mx;
          const dy = dot.y - my;
          const dist = Math.hypot(dx, dy);

          // Repulsion force
          if (dist < repRadius && dist > 0) {
            const force = (1 - dist / repRadius) * 14;
            dot.vx += (dx / dist) * force;
            dot.vy += (dy / dist) * force;
          }

          // Spring restoration to home coordinates
          const spring = 0.09;
          const damping = 0.82;
          dot.vx = (dot.vx + (dot.origX - dot.x) * spring) * damping;
          dot.vy = (dot.vy + (dot.origY - dot.y) * spring) * damping;
          dot.x += dot.vx;
          dot.y += dot.vy;
        }

        // Color warmth interpolation
        const disp = Math.hypot(dot.x - dot.origX, dot.y - dot.origY);
        const warmthT = Math.min(disp / 15, 1);

        const r = Math.round(inkRgb.r + (warmRgb.r - inkRgb.r) * warmthT);
        const g = Math.round(inkRgb.g + (warmRgb.g - inkRgb.g) * warmthT);
        const b = Math.round(inkRgb.b + (warmRgb.b - inkRgb.b) * warmthT);

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(dot.baseRadius, 0.75), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [wordmark, dotGap, radius, crop, interactive, palette]);

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden select-none cursor-pointer flex items-center justify-center"
      style={{ height, backgroundColor: palette.background || "#0D1728" }}
      title="Surya Hospital Halftone Wordmark"
    >
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-auto" />
    </div>
  );
}

export default HalftoneWordmarkFooter;

