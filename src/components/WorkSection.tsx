import { motion } from "framer-motion";
import { useState } from "react";

const workCategories = [
  {
    title: "Websites",
    items: [
      "Dynamic Websites (React, Vue, Node.js backends)",
      "Static Websites (Landing pages, portfolios)",
      "E-commerce Platforms",
      "Custom Web Applications"
    ]
  },
  {
    title: "Video Composition",
    items: [
      "Starbucks Commercial Campaign",
      "Adidas Brand Film",
      "Decathlon Product Showcase",
      "Olympia Gym Motivational Series"
    ]
  },
  {
    title: "Graphics",
    items: [
      "Brand Identity Design",
      "Social Media Content",
      "Print & Digital Collateral",
      "Motion Graphics"
    ]
  },
  {
    title: "Web Maintenance",
    items: [
      "24/7 Monitoring & Support",
      "Security Updates & Patches",
      "Performance Optimization",
      "Content Management",
      "6 Active Client Sites"
    ]
  },
  {
    title: "Branding & Strategy",
    items: [
      "Brand Identity Development",
      "Market Positioning",
      "Visual Language Systems",
      "4-Step Strategic Model: Research → Define → Design → Deploy"
    ]
  },
  {
    title: "Digital Marketing",
    items: [
      "SEO & Content Strategy",
      "Social Media Management",
      "PPC & Paid Advertising",
      "Analytics & Reporting",
      "5-Step Approach: Audit → Plan → Execute → Measure → Optimize"
    ]
  }
];

export const WorkSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

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
            Our Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
              className="cinematic-card p-12 rounded-sm cursor-pointer min-h-[300px] flex flex-col justify-center"
            >
              <h3 className="text-2xl md:text-3xl font-light text-neon-aqua mb-8 tracking-wide">
                {category.title}
              </h3>
              
              {selectedCategory === index && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  {category.items.map((item, i) => (
                    <li key={i} className="text-foreground/70 font-light leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
