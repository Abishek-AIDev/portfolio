import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  isBeacon: boolean; // Special larger glowing star
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  alpha: number;
  active: boolean;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
      targetRadius: 160,
      isDown: false,
    };

    const ripples: Ripple[] = [];
    let shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      length: 0,
      alpha: 0,
      active: false,
    };

    let nextShootingStarTime = performance.now() + 3000;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleMouseDown = (e: MouseEvent) => {
      mouse.isDown = true;
      // Add expanding interactive ripple
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: 140,
        alpha: 0.6,
      });
    };

    const handleMouseUp = () => {
      mouse.isDown = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle color palettes: Cyan, Neon Blue, Deep Violet, Electric Magenta
    const colorBases = [
      '56, 189, 248', // Cyan
      '99, 102, 241', // Indigo
      '168, 85, 247', // Purple
      '192, 132, 252', // Lavender
      '34, 211, 238', // Bright Cyan
    ];

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      // Adjust density based on screen resolution
      const count = Math.floor((width * height) / 16000);
      const clampedCount = Math.min(Math.max(count, 45), 105);

      for (let i = 0; i < clampedCount; i++) {
        const isBeacon = Math.random() < 0.12; // 12% beacon stars
        const baseRadius = isBeacon ? Math.random() * 2 + 2.5 : Math.random() * 1.6 + 0.8;
        const baseAlpha = isBeacon ? 0.45 + Math.random() * 0.4 : 0.2 + Math.random() * 0.4;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseRadius,
          baseRadius,
          color: colorBases[Math.floor(Math.random() * colorBases.length)],
          alpha: baseAlpha,
          baseAlpha,
          pulseSpeed: 0.015 + Math.random() * 0.025,
          pulsePhase: Math.random() * Math.PI * 2,
          isBeacon,
        });
      }
    };

    initParticles();

    // Trigger occasional shooting stars
    const triggerShootingStar = () => {
      shootingStar = {
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.35,
        vx: (Math.random() * 4 + 7) * (Math.random() > 0.5 ? 1 : -1),
        vy: Math.random() * 3 + 4,
        length: Math.random() * 90 + 70,
        alpha: 0.9,
        active: true,
      };
    };

    const maxDistance = 135;
    let lastTime = performance.now();

    const render = (currentTime: number) => {
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      // Check shooting star trigger
      if (!shootingStar.active && currentTime > nextShootingStarTime) {
        triggerShootingStar();
        nextShootingStarTime = currentTime + Math.random() * 9000 + 6000;
      }

      // Draw and update shooting star
      if (shootingStar.active) {
        ctx.beginPath();
        const tailX = shootingStar.x - shootingStar.vx * 3;
        const tailY = shootingStar.y - shootingStar.vy * 3;
        const grad = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          tailX,
          tailY
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.alpha})`);
        grad.addColorStop(0.3, `rgba(56, 189, 248, ${shootingStar.alpha * 0.7})`);
        grad.addColorStop(1, 'rgba(168, 85, 247, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        shootingStar.x += shootingStar.vx * 60 * delta;
        shootingStar.y += shootingStar.vy * 60 * delta;
        shootingStar.alpha -= 0.012;

        if (
          shootingStar.alpha <= 0 ||
          shootingStar.x < 0 ||
          shootingStar.x > width ||
          shootingStar.y > height
        ) {
          shootingStar.active = false;
        }
      }

      // Draw and update mouse ripples
      for (let rIdx = ripples.length - 1; rIdx >= 0; rIdx--) {
        const rip = ripples[rIdx];
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${rip.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        rip.radius += 100 * delta;
        rip.alpha -= 0.65 * delta;

        if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
          ripples.splice(rIdx, 1);
        }
      }

      // Draw subtle connecting constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Distance factor
            let lineAlpha = (1 - dist / maxDistance) * 0.22;

            // Extra glow if nearby mouse
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY = (particles[i].y + particles[j].y) / 2;
            const distToMouse = Math.sqrt((mouse.x - midX) ** 2 + (mouse.y - midY) ** 2);

            if (distToMouse < mouse.radius) {
              const mouseBoost = (1 - distToMouse / mouse.radius) * 0.35;
              lineAlpha += mouseBoost;
            }

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${Math.min(lineAlpha, 0.6)})`;
            ctx.lineWidth = distToMouse < mouse.radius ? 1.2 : 0.7;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Pulsating twinkle
        p.pulsePhase += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.2;

        // Mouse interaction
        const dxMouse = mouse.x - p.x;
        const dyMouse = mouse.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 1.8;
          p.x -= (dxMouse / distMouse) * force * 1.5;
          p.y -= (dyMouse / distMouse) * force * 1.5;
          p.radius = p.baseRadius * (1 + force * 0.4);
        } else {
          p.radius = p.baseRadius;
        }

        // Ripple interaction
        for (const rip of ripples) {
          const dRip = Math.sqrt((rip.x - p.x) ** 2 + (rip.y - p.y) ** 2);
          if (Math.abs(dRip - rip.radius) < 20) {
            const push = (20 - Math.abs(dRip - rip.radius)) * 0.2;
            p.x += ((p.x - rip.x) / (dRip || 1)) * push;
            p.y += ((p.y - rip.y) / (dRip || 1)) * push;
          }
        }

        // Move
        p.x += p.vx * 60 * delta;
        p.y += p.vy * 60 * delta;

        // Wrap around smoothly
        if (p.x < -15) p.x = width + 15;
        else if (p.x > width + 15) p.x = -15;

        if (p.y < -15) p.y = height + 15;
        else if (p.y > height + 15) p.y = -15;

        // Draw particle with luminous glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.max(0, p.alpha)})`;

        if (p.isBeacon) {
          // Double aura for beacons
          ctx.shadowColor = `rgb(${p.color})`;
          ctx.shadowBlur = 12;
          ctx.fill();

          // Core bright center
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        } else {
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 6;
          ctx.fill();
        }

        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic ambient nebula clouds */}
      <div 
        className="absolute -top-[15%] left-[8%] w-[600px] h-[600px] rounded-full bg-cyan-500/12 blur-[140px] animate-pulse-glow"
        aria-hidden="true"
      />
      <div 
        className="absolute top-[35%] -right-[12%] w-[680px] h-[680px] rounded-full bg-purple-600/12 blur-[160px] animate-pulse-glow"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-[12%] left-[20%] w-[650px] h-[650px] rounded-full bg-indigo-600/12 blur-[150px] animate-pulse-glow"
        style={{ animationDelay: '4s' }}
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
};
