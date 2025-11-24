import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500), // Show first text
      setTimeout(() => setPhase(2), 2500), // Fade out first text
      setTimeout(() => setPhase(3), 3000), // Portal formation
      setTimeout(() => setPhase(4), 4500), // Main headline
      setTimeout(() => setPhase(5), 6000), // Subheadline
      setTimeout(() => setPhase(6), 7000), // CTA button
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void-black">
      {/* Particle background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-aqua rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Phase 1 - First text fade in */}
        {phase >= 1 && phase < 3 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 2 ? 0 : 1 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl text-neon-aqua neon-glow font-light"
          >
            Where art meets intelligence.
          </motion.p>
        )}

        {/* Phase 3+ - Portal and main content */}
        {phase >= 3 && (
          <>
            {/* Portal ring */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: 360 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-neon-aqua portal-glow opacity-30" />
              <div className="absolute w-72 h-72 md:w-[400px] md:h-[400px] rounded-full border-2 border-ultramarine portal-glow opacity-20 animate-spin" style={{ animationDuration: '20s' }} />
            </motion.div>

            {/* Phase 4 - Main headline */}
            {phase >= 4 && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 neon-glow"
              >
                We exist to create what others hesitate to imagine.
              </motion.h1>
            )}

            {/* Phase 5 - Subheadline */}
            {phase >= 5 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-lg md:text-xl lg:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto"
              >
                We build digital experiences, brands, and systems that blend human emotion with artificial precision.
              </motion.p>
            )}

            {/* Phase 6 - CTA Button */}
            {phase >= 6 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-neon-aqua text-void-black hover:bg-neon-aqua/90 portal-glow font-semibold text-lg px-8 py-6 rounded-full group relative overflow-hidden"
                >
                  <span className="relative z-10">START YOUR JOURNEY →</span>
                  <motion.div
                    className="absolute inset-0 bg-ultramarine opacity-0 group-hover:opacity-20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Button>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none" />
    </section>
  );
};
