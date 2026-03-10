import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const projects = [
  {
    title: "AI Business Audit Tool",
    desc: "A system that analyzes companies using website and social data to identify pain points and recommend AI automation solutions.",
    tags: ["AI", "Automation", "Analytics"],
  },
  {
    title: "Manufacturing Data Analysis Framework",
    desc: "A system for analyzing manufacturing datasets to identify yield loss patterns and process deviations.",
    tags: ["Data Analysis", "Manufacturing", "Python"],
  },
  {
    title: "Automation Workflow Builder",
    desc: "Tools that connect APIs and data sources to automate repetitive business workflows.",
    tags: ["API", "Workflow", "Integration"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding circuit-bg">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Portfolio
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-heading font-bold mb-12 gradient-text">
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={2 + i}
                className="glass-card-hover p-6 flex flex-col group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                    <ExternalLink size={18} />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/10 text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
