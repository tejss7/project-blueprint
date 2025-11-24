import { motion } from "framer-motion";

const teamMembers = [
  { name: "Bhupendra Yadav", role: "Cinematographer" },
  { name: "Mayank Banna", role: "Video Editor" },
  { name: "Abhay Thakur", role: "Backend Dev" },
  { name: "Rishabh Mandal", role: "PPC Specialist" },
  { name: "Renu Chaturvedi", role: "CHRO" },
  { name: "Riya Karn", role: "HR" },
  { name: "Aryan Mishra", role: "AI Engineer" },
];

export const TeamPortal = () => {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-void-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.05),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 neon-glow">
            TEAM PORTAL
          </h2>
          <p className="text-xl text-neon-aqua/70">
            The people who engineer imagination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="hologram-panel p-6 rounded-lg text-center group cursor-pointer"
            >
              {/* Avatar placeholder with glow */}
              <motion.div
                className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-aqua/20 to-ultramarine/20 flex items-center justify-center border-2 border-neon-aqua/50 portal-glow"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 rounded-full bg-deep-black flex items-center justify-center">
                  <span className="text-3xl font-bold text-neon-aqua neon-glow">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </motion.div>

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon-aqua transition-colors">
                {member.name}
              </h3>
              <p className="text-neon-aqua/70">{member.role}</p>

              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-neon-aqua opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-neon-aqua opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-neon-aqua opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-neon-aqua opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
