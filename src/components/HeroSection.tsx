import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center circuit-bg overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-secondary/5 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        {/* Circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 50 40 M 50 60 L 50 100 M 0 50 L 40 50 M 60 50 L 100 50" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="3" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 text-sm font-medium text-secondary">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for consulting & engineering roles
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            <span className="gradient-text">Semiconductor Process Engineer</span>
            <br />
            <span className="text-foreground">| AI Automation Builder</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-4 max-w-2xl leading-relaxed">
            Helping organizations optimize manufacturing processes, analyze yield data, and build AI-powered automation systems that eliminate inefficiencies.
          </p>

          <p className="text-base text-muted-foreground/80 mb-8 max-w-2xl leading-relaxed">
            Joseph Ikogho is a semiconductor engineer with hands-on experience in high-volume manufacturing (HVM), yield analysis, process control, and data-driven engineering decisions. He also builds AI automation systems and intelligent digital tools that streamline workflows and increase productivity.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="gradient-btn inline-flex items-center gap-2 text-base">
              Contact Me <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border font-heading font-semibold text-foreground hover:border-secondary hover:text-secondary transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
