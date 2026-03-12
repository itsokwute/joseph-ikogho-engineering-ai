import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const categories = [
  {
    title: "Engineering",
    skills: ["SPC", "Yield Analysis", "Parametric Data Analysis", "Root Cause Analysis", "Process Control"],
  },
  {
    title: "Technology",
    skills: ["Python", "SQL", "Data Analytics", "Automation Tools", "API Integration"],
  },
  {
    title: "Platforms",
    skills: ["Cloud Platforms", "AI Tools", "Workflow Automation Platforms"],
  },
];

const SkillsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider mb-2 text-center">
            Technical Toolkit
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-heading font-bold mb-8 gradient-text text-center">
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div key={i} variants={fadeUp} custom={2 + i} className="glass-card p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4 text-center">{cat.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-full border border-border bg-background text-muted-foreground hover:border-secondary hover:text-secondary transition-colors cursor-default"
                    >
                      {skill}
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

export default SkillsSection;
