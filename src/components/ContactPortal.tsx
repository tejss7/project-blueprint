import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const ContactPortal = () => {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-deep-black overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 neon-glow">
            Let's Create Beyond Noise
          </h2>
          <p className="text-xl text-neon-aqua/70">
            CONTACT PORTAL
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hologram-panel p-8 md:p-12 rounded-lg"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neon-aqua mb-2">Name</label>
                <Input 
                  className="bg-void-black/50 border-neon-aqua/30 focus:border-neon-aqua text-foreground neon-border" 
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neon-aqua mb-2">Email</label>
                <Input 
                  type="email"
                  className="bg-void-black/50 border-neon-aqua/30 focus:border-neon-aqua text-foreground neon-border" 
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neon-aqua mb-2">Phone</label>
              <Input 
                type="tel"
                className="bg-void-black/50 border-neon-aqua/30 focus:border-neon-aqua text-foreground neon-border" 
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neon-aqua mb-2">Message</label>
              <Textarea 
                className="bg-void-black/50 border-neon-aqua/30 focus:border-neon-aqua text-foreground neon-border min-h-[150px]" 
                placeholder="Tell us about your project..."
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-neon-aqua text-void-black hover:bg-neon-aqua/90 portal-glow font-semibold text-lg py-6 rounded-lg"
            >
              Send Message →
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-neon-aqua/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-neon-aqua font-semibold mb-2">Email</h3>
                <p className="text-foreground/80">beakarsa@gmail.com</p>
              </div>
              <div>
                <h3 className="text-neon-aqua font-semibold mb-2">Working Hours</h3>
                <p className="text-foreground/80">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
