import { motion } from "framer-motion";
import { useState } from "react";

const identityTiles = [
  {
    title: "What is Akarsa?",
    content: "We build digital experiences, brands, and systems that blend human emotion with artificial precision… We exist to create what others hesitate to imagine."
  },
  {
    title: "What makes us different?",
    content: "Our work does not follow patterns; it creates them. We combine creativity, data, and intelligence to design systems that think, adapt, and perform."
  },
  {
    title: "How we think (Philosophy)",
    content: "Rule breaking, for us, is refinement. Every project begins with understanding. We question everything that feels ordinary."
  },
  {
    title: "Why rule-breaking matters",
    content: "We do not settle for what already exists… Rule breaking is a way to find new forms of beauty and truth. Not rebellion — refinement."
  },
  {
    title: "Emotion × AI Fusion",
    content: "We build where imagination meets engineering. AI supports our decision-making and design flow, but emotion and intuition always lead."
  },
  {
    title: "Who we collaborate with",
    content: "Creators, founders, and companies who want to push beyond conventional design."
  },
  {
    title: "How we work (Process)",
    content: "Every collaboration begins with understanding… design, storytelling, and technology merge into a single process of creation."
  }
];

export const IdentityPortal = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen py-20 px-4 bg-deep-black overflow-hidden">
      {/* Particle field */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-neon-aqua rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 neon-glow">
            THE IDENTITY PORTAL
          </h2>
          <p className="text-xl text-neon-aqua/70">Where philosophy becomes experience.</p>
        </motion.div>

        {/* Central prism visual */}
        <motion.div
          className="flex justify-center mb-20"
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-40 h-40 md:w-60 md:h-60">
            <div className="absolute inset-0 border-4 border-neon-aqua/30 portal-glow" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            <div className="absolute inset-2 border-2 border-ultramarine/20" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-neon-aqua/10 to-ultramarine/10"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            />
          </div>
        </motion.div>

        {/* Hologram tiles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {identityTiles.map((tile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredTile(index)}
              onHoverEnd={() => setHoveredTile(null)}
              className="hologram-panel p-6 rounded-lg cursor-pointer transition-all duration-300"
            >
              <div className="relative">
                {/* Scanline effect on hover */}
                {hoveredTile === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-aqua/10 to-transparent"
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
                
                <h3 className="text-xl font-bold text-neon-aqua mb-4 neon-glow">
                  {tile.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {tile.content}
                </p>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-aqua" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-aqua" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-aqua" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-aqua" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rotating halo ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-ultramarine/10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};
