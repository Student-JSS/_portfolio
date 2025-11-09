import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden">
      <h2 className="relative z-0 text-[20vw] font-black text-base-300 md:text-[200px]">
        SHIVAM<span className="text-primary">.</span>
      </h2>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/terminal.png"
        alt="terminal image"
        rotate="6deg"
        top="15%"
        left="10%"
        className="w-36 md:w-56"
        floatDelay={0}
      />
      <Card
        containerRef={containerRef}
        src="/jupyter.png"
        alt="vscode image"
        rotate="12deg"
        top="65%"
        left="70%"
        className="w-30 md:w-60"
        floatDelay={1.5}
      />
      <Card
        containerRef={containerRef}
        src="/react.png"
        alt="react image"
        rotate="-6deg"
        top="10%"
        left="60%"
        className="w-52 md:w-80"
        floatDelay={0.8}
      />
      <Card
        containerRef={containerRef}
        src="/node.png"
        alt="node image"
        rotate="8deg"
        top="60%"
        left="15%"
        className="w-48 md:w-72"
        floatDelay={2.2}
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className, floatDelay = 0 }) => {
  const [zIndex, setZIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZ = -Infinity;
    els.forEach((el) => {
      const z = parseInt(window.getComputedStyle(el).zIndex);
      if (!isNaN(z) && z > maxZ) maxZ = z;
    });
    setZIndex(maxZ + 1);
  };

  return (
    <motion.div
      className={twMerge(
        "drag-elements absolute cursor-grab active:cursor-grabbing select-none",
        className
      )}
      style={{ 
        top, 
        left, 
        zIndex,
        transformOrigin: "center center",
      }}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      onDragStart={() => {
        setIsDragging(true);
        updateZIndex();
      }}
      onDragEnd={() => {
        setIsDragging(false);
      }}
      onMouseDown={updateZIndex}
      animate={
        isDragging 
          ? {} 
          : {
              y: [0, -15, 0],
              rotate: [rotate, `${parseFloat(rotate) + 3}deg`, rotate],
              transition: {
                duration: 8, // Slower animation
                repeat: Infinity,
                ease: "easeInOut",
                delay: floatDelay,
              }
            }
      }
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, delay: floatDelay * 0.2 },
      }}
      whileHover={!isDragging ? { 
        scale: 1.03,
        transition: { duration: 0.3 }
      } : {}}
      whileDrag={{
        scale: 1.05,
        zIndex: 999,
        transition: { duration: 0.1 }
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-xl shadow-lg bg-base-200 p-1 pb-4 border border-base-300 pointer-events-none"
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
};
