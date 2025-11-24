import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "The End of Ordinary Branding",
    excerpt: "Why conventional brand strategies fail in a culture-first world, and what comes next.",
    category: "Strategy"
  },
  {
    title: "AI as Creative Co-Pilot",
    excerpt: "How we use artificial intelligence to enhance, not replace, human imagination.",
    category: "Technology"
  },
  {
    title: "Cultural Mapping in Practice",
    excerpt: "A deep dive into how we decode cultural shifts to position brands effectively.",
    category: "Culture"
  }
];

export const BlogsSection = () => {
  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            Akarsa Curious
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="cinematic-card p-10 rounded-sm cursor-pointer group"
            >
              <div className="mb-6">
                <span className="text-xs text-neon-aqua/60 tracking-widest font-light">
                  {post.category}
                </span>
              </div>
              <h3 className="text-2xl font-light text-foreground mb-6 group-hover:text-neon-aqua transition-colors duration-500 leading-snug">
                {post.title}
              </h3>
              <p className="text-foreground/60 font-light leading-relaxed">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
