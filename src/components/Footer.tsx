import { motion } from "framer-motion";

export const Footer = () => {
  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "Pinterest", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "X (Twitter)", href: "#" },
  ];

  return (
    <footer className="relative bg-void-black border-t border-neon-aqua/20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-neon-aqua neon-glow mb-4">
            Follow the Akarsa Frequency
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-foreground/70 hover:text-neon-aqua transition-colors duration-300 font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="border-t border-neon-aqua/20 pt-8">
          <div className="text-center text-foreground/60 text-sm">
            <p className="mb-2">© 2024 Akarsa. All rights reserved.</p>
            <p className="text-xs">Where art meets intelligence.</p>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neon-aqua rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </footer>
  );
};
