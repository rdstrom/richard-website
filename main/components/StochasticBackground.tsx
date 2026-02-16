import React, { useEffect, useRef } from 'react';

const StochasticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High DPI Setup
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
    };

    // Configuration
    const config = {
      historyRatio: 0.45,
      stepSize: 8, // Increased step size for wider visibility
      volatility: 4.0, 
      fanCount: 80,
      drift: 0,
    };

    interface Point {
      x: number;
      y: number;
    }

    // Helper to generate a random walk path
    const generateRandomWalk = (start: Point, steps: number, isHistory: boolean = false): Point[] => {
      const path: Point[] = [start];
      let currentY = start.y;

      for (let i = 1; i <= steps; i++) {
        // Box-Muller transform for normal distribution
        let u1 = Math.random();
        let u2 = Math.random();
        // Avoid log(0)
        if (u1 < 1e-6) u1 = 1e-6;
        
        const z = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
        const shock = z * config.volatility;
        
        currentY += shock + config.drift;

        // Soft boundaries
        const margin = height * 0.15;
        if (currentY < margin) currentY += Math.abs(shock) * 0.6;
        if (currentY > height - margin) currentY -= Math.abs(shock) * 0.6;

        const x = isHistory 
          ? start.x - i * config.stepSize 
          : start.x + i * config.stepSize;
        
        path.push({ x, y: currentY });
      }

      return isHistory ? path.reverse() : path;
    };

    // Data State
    let startPoint: Point;
    let historyPath: Point[];
    let fanPaths: Point[][];
    let futureSteps: number;
    let activePath: Point[];

    const initData = () => {
      // Recalculate based on current logical dimensions
      startPoint = { x: width * config.historyRatio, y: height * 0.5 };
      
      const historySteps = Math.ceil(startPoint.x / config.stepSize) + 2; // +2 to ensure off-screen
      futureSteps = Math.ceil((width - startPoint.x) / config.stepSize) + 2;

      historyPath = generateRandomWalk(startPoint, historySteps, true);

      fanPaths = [];
      for (let i = 0; i < config.fanCount; i++) {
        fanPaths.push(generateRandomWalk(startPoint, futureSteps));
      }

      activePath = generateRandomWalk(startPoint, futureSteps);
    };

    // Initial Setup
    resizeCanvas();
    initData();

    // Animation Loop
    let animationFrameId: number;
    let progress = 0;

    const draw = () => {
      // Clear with background color (logical dimensions)
      ctx.fillStyle = '#0f172a'; // slate-900
      ctx.fillRect(0, 0, width, height);

      // 1. History Path (The Past)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)'; // slate-400 with 50% opacity
      ctx.lineWidth = 2.5;
      ctx.lineJoin = 'round';
      if (historyPath.length > 0) {
        ctx.moveTo(historyPath[0].x, historyPath[0].y);
        for (let i = 1; i < historyPath.length; i++) {
          ctx.lineTo(historyPath[i].x, historyPath[i].y);
        }
      }
      ctx.stroke();

      // 2. Fan (The Probabilistic Future)
      // Screen blend mode makes overlapping lines brighter
      ctx.globalCompositeOperation = 'screen'; 
      
      fanPaths.forEach((path) => {
        ctx.beginPath();
        // Amber/Orange Gradient
        const gradient = ctx.createLinearGradient(startPoint.x, 0, width, 0);
        gradient.addColorStop(0, 'rgba(245, 158, 11, 0.2)'); // amber-500 start
        gradient.addColorStop(0.5, 'rgba(245, 158, 11, 0.1)'); 
        gradient.addColorStop(1, 'rgba(245, 158, 11, 0.0)'); // fade out
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) {
          ctx.lineTo(path[i].x, path[i].y);
        }
        ctx.stroke();
      });

      ctx.globalCompositeOperation = 'source-over';

      // 3. Active Red Line (Markov Chain Realization)
      if (activePath.length > 0) {
        ctx.beginPath();
        ctx.strokeStyle = '#ef4444'; // red-500
        ctx.lineWidth = 3;
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 15; // Glow effect

        ctx.moveTo(activePath[0].x, activePath[0].y);
        
        // Calculate partial draw
        const maxIndex = Math.min(Math.floor(progress), activePath.length - 1);
        
        for (let i = 1; i <= maxIndex; i++) {
           ctx.lineTo(activePath[i].x, activePath[i].y);
        }

        // Smooth tip interpolation
        if (maxIndex < activePath.length - 1) {
             const pCurrent = activePath[maxIndex];
             const pNext = activePath[maxIndex + 1];
             const fraction = progress - maxIndex;
             const tipX = pCurrent.x + (pNext.x - pCurrent.x) * fraction;
             const tipY = pCurrent.y + (pNext.y - pCurrent.y) * fraction;
             ctx.lineTo(tipX, tipY);
             
             // Draw leading dot
             ctx.fillStyle = '#fca5a5'; // red-300
             ctx.fillRect(tipX - 3, tipY - 3, 6, 6);
        }
        
        ctx.stroke();
        ctx.shadowBlur = 0; // Reset shadow for other elements
      }

      // 4. Center Anchor Point
      ctx.beginPath();
      ctx.fillStyle = '#fff';
      ctx.arc(startPoint.x, startPoint.y, 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Anchor Pulse Ring
      const pulse = (Math.sin(Date.now() / 400) + 1) * 0.5;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(16, 185, 129, ${0.3 + pulse * 0.3})`; // emerald
      ctx.lineWidth = 2;
      ctx.arc(startPoint.x, startPoint.y, 8 + pulse * 6, 0, Math.PI * 2);
      ctx.stroke();
    };

    const animate = () => {
      progress += 0.5; // Controls speed of the red line
      
      // Loop the animation
      if (progress > futureSteps + 10) {
        progress = 0;
        // Generate a FRESH path for the red line every time it restarts
        activePath = generateRandomWalk(startPoint, futureSteps);
      }
      
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      initData();
      progress = 0;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // z-0 ensures it is behind z-10 content, but above body background
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-slate-900"
    />
  );
};

export default StochasticBackground;