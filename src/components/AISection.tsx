import { motion } from "framer-motion";
import { Zap, BarChart3, Workflow, Brain } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const tools = [
  { icon: Brain, title: "AI Business Audit Systems", desc: "Analyze companies to identify pain points and automation opportunities." },
  { icon: Workflow, title: "Automation Workflows", desc: "Connect APIs and data sources to automate repetitive business workflows." },
  { icon: BarChart3, title: "Digital Analysis Tools", desc: "Data-driven tools that generate actionable insights for businesses." },
  { icon: Zap, title: "Productivity Systems", desc: "Intelligent systems that streamline operations and boost efficiency." },
];

const AISection = () => {
  return (
    <section id="ai" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider mb-2">
            Digital Innovation
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-heading font-bold mb-3 gradient-text">
            AI Automation & Intelligent Systems
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Joseph designs AI-powered systems that analyze businesses, identify inefficiencies, and recommend automation opportunities. His tools integrate data sources, automate analysis, and generate actionable insights.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {tools.map((t, i) => (
              <motion.div key={i} variants={fadeUp} custom={3 + i} className="glass-card-hover p-6 flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <t.icon size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{t.title}</h3>
                  <p className="text-muted-foreground text-sm">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
