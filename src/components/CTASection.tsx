import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding circuit-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 gradient-text">
            Let's Build Smarter Systems Together
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            If you're looking to improve manufacturing performance, build automation tools, or collaborate on advanced technology projects, let's connect.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="gradient-btn inline-flex items-center gap-2 text-base px-8 py-4">
              Contact Me <ArrowRight size={18} />
            </a>
            <a
              href="mailto:ikogho.joseph@live.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border font-heading font-semibold text-foreground hover:border-secondary hover:text-secondary transition-all duration-300"
            >
              <Calendar size={18} /> Schedule a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
