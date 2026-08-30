'use client';

import React, { useEffect, useRef } from 'react';

export default function Canvas3DField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // 3D Nodes Particle System
    interface Node3D {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      baseRadius: number;
      color: string;
    }

    const NODE_COUNT = 45;
    const nodes: Node3D[] = [];
    const colors = ['#0284c7', '#0ea5e9', '#38bdf8', '#d97706', '#f59e0b'];

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: Math.random() * 500 + 50,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.3,
        baseRadius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const fov = 400;

    const render = () => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const tiltX = (mouse.x - width / 2) * 0.0003;
      const tiltY = (mouse.y - height / 2) * 0.0003;

      ctx.clearRect(0, 0, width, height);

      // Projected coordinates storage
      const projectedNodes: { px: number; py: number; scale: number; alpha: number; color: string }[] = [];

      // Update and project 3D nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Wrap around bounds
        if (node.z < 50) node.z = 550;
        if (node.z > 550) node.z = 50;
        if (node.x < -width) node.x = width;
        if (node.x > width) node.x = -width;
        if (node.y < -height) node.y = height;
        if (node.y > height) node.y = -height;

        // Apply mouse tilt
        const rotX = node.x * Math.cos(tiltX) - node.z * Math.sin(tiltX);
        const rotZ = node.x * Math.sin(tiltX) + node.z * Math.cos(tiltX);
        const rotY = node.y * Math.cos(tiltY) - rotZ * Math.sin(tiltY);
        const finalZ = node.y * Math.sin(tiltY) + rotZ * Math.cos(tiltY);

        const scale = fov / (fov + finalZ);
        const px = width / 2 + rotX * scale;
        const py = height / 2 + rotY * scale;
        const alpha = Math.min(1, Math.max(0.1, (1 - finalZ / 600) * 0.6));

        projectedNodes.push({ px, py, scale, alpha, color: node.color });
      }

      // Draw constellation connections between nearby 3D nodes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];
          const dx = n1.px - n2.px;
          const dy = n1.py - n2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * Math.min(n1.alpha, n2.alpha) * 0.35;
            ctx.strokeStyle = `rgba(14, 165, 233, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(n1.px, n1.py);
            ctx.lineTo(n2.px, n2.py);
            ctx.stroke();
          }
        }
      }

      // Draw glowing 3D nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        const { px, py, scale, alpha, color } = projectedNodes[i];
        const radius = Math.max(1, scale * 3.5);

        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow halo
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha * 0.25;
        ctx.beginPath();
        ctx.arc(px, py, radius * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
