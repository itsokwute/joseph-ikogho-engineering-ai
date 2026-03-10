import { motion } from "framer-motion";
import { Cpu, Factory, Bot } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const cards = [
  {
    icon: Cpu,
    title: "Semiconductor Process Engineering",
    items: ["Yield analysis", "SPC monitoring", "Parametric health analysis", "Root cause analysis", "Process control"],
  },
  {
    icon: Factory,
    title: "Manufacturing Optimization",
    items: ["High-volume manufacturing support", "Tool-to-tool variation analysis", "Process drift detection", "Manufacturing data analysis"],
  },
  {
    icon: Bot,
    title: "AI Automation & Digital Systems",
    items: ["AI workflow automation", "Intelligent business tools", "API integrations", "Process automation systems"],
  },
];

const ExpertiseSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-14">
          <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            What I do
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-heading font-bold gradient-text">
            Core Expertise
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 2}
              className="glass-card-hover p-7 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                <card.icon size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-foreground">{card.title}</h3>
              <ul className="space-y-2.5">
                {card.items.map((item, j) => (
                  <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
