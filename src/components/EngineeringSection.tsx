import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const highlights = [
  "Yield monitoring across high-volume manufacturing",
  "Statistical process control analysis",
  "Parametric wafer data analysis",
  "Root cause investigations",
  "Process change validation",
  "Cross-functional collaboration with process and equipment teams",
  "Data correlation across electrical and inline datasets",
];

const EngineeringSection = () => {
  return (
    <section id="engineering" className="section-padding circuit-bg">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Industry Experience
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-heading font-bold mb-10 gradient-text">
            Semiconductor Engineering Experience
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div variants={fadeUp} custom={2} className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-secondary text-lg">Intel</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Process & Yield Engineer</p>
                  <p className="text-muted-foreground text-sm">High-Volume Manufacturing</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Supported wafer-level parametric health monitoring, investigated tool-to-tool and chamber-to-chamber variations, and collaborated with process and equipment engineering teams to identify and resolve yield impacting issues.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={3}>
              <h3 className="font-heading font-semibold text-foreground mb-4">Key Contributions</h3>
              <ul className="space-y-3">
                {highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    custom={4 + i * 0.5}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringSection;
