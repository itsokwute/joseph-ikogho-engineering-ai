import { motion } from "framer-motion";
import { GraduationCap, Linkedin, MessageCircle } from "lucide-react";
import josephHeadshot from "@/assets/joseph-headshot.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const education = [
  { degree: "M.S. Computer Engineering", school: "University of New Mexico" },
  { degree: "MBA", school: "Enugu State University of Science and Technology" },
  { degree: "B.S. Computer Science", school: "Ambrose Alli University" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding circuit-bg">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <motion.p variants={fadeUp} custom={0} className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Get to know me
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-heading font-bold mb-8 gradient-text">
            About Me
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-10 mb-12">
            {/* Photo + Social */}
            <motion.div variants={fadeUp} custom={2} className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-secondary/30 shadow-lg">
                <img
                  src={josephHeadshot}
                  alt="Joseph Ikogho - Semiconductor Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/josephikogho/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://wa.me/+1XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-green-500 hover:border-green-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div variants={fadeUp} custom={3} className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Joseph Ikogho is a Semiconductor Yield & Process Engineer with experience supporting high-volume manufacturing environments. His work focuses on yield analysis, statistical process control (SPC), parametric monitoring, and root cause analysis to identify process drift and sustain manufacturing performance.
              </p>
              <p>
                During his time at Intel, Joseph supported wafer-level parametric health monitoring, investigated tool-to-tool and chamber-to-chamber variations, and collaborated cross-functionally with process and equipment engineering teams to drive corrective actions.
              </p>
              <p>
                In addition to semiconductor engineering, Joseph builds AI-powered automation tools and digital systems that help businesses improve efficiency, reduce repetitive work, and make better data-driven decisions.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} custom={4}>
            <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2 text-foreground">
              <GraduationCap size={20} className="text-secondary" /> Education
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {education.map((e, i) => (
                <motion.div key={i} variants={fadeUp} custom={5 + i} className="glass-card-hover p-5">
                  <p className="font-heading font-semibold text-foreground text-sm">{e.degree}</p>
                  <p className="text-muted-foreground text-sm mt-1">{e.school}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
