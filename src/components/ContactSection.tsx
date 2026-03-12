import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! Joseph will get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider mb-2 text-center">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3 gradient-text text-center">
            Contact Me
          </h2>
          <p className="text-muted-foreground text-center mb-8 flex items-center justify-center gap-2">
            <Mail size={16} className="text-secondary" />
            <a href="mailto:ikogho.joseph@live.com" className="hover:text-secondary transition-colors">
              ikogho.joseph@live.com
            </a>
          </p>

          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="gradient-btn w-full inline-flex items-center justify-center gap-2 text-base py-3.5 disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"} <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
