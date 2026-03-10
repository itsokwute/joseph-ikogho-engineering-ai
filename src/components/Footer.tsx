import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-border">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-heading font-bold text-foreground">Joseph Ikogho</p>
          <p className="text-muted-foreground text-sm">Semiconductor Engineer | AI Automation Builder</p>
        </div>

        <div className="flex items-center gap-4">
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
            href="mailto:ikogho.joseph@live.com"
            className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-muted-foreground text-sm">© 2026 Joseph Ikogho. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
