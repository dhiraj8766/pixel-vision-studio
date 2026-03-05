import { Link } from "react-router-dom";
import { Instagram, Linkedin, Github, Twitter, Mail, MapPin, ArrowUpRight } from "lucide-react";
import picselLogo from "@/assets/picsel-logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card/30 px-6 py-16 md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={picselLogo} alt="PICSEL" className="h-12 w-12 rounded-full border border-border" />
              <div>
                <span className="block text-lg font-extrabold tracking-tight text-foreground font-heading">PICSEL</span>
                <span className="block text-[10px] uppercase tracking-[2px] text-muted-foreground">KDKCE</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mb-4">
              Department of Computer Science & Engineering. Building the future, one pixel at a time.
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin size={12} />
              <span>Nagpur, Maharashtra, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground font-heading">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Past Events", path: "/xevents" },
                { name: "Team", path: "/team" },
              ].map((link) => (
                <Link key={link.name} to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-primary flex items-center gap-1 group">
                  {link.name}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground font-heading">Resources</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "Faculty", path: "/faculty" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.name} to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-primary flex items-center gap-1 group">
                  {link.name}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground font-heading">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Instagram", icon: Instagram, url: "#" },
                { name: "LinkedIn", icon: Linkedin, url: "#" },
                { name: "GitHub", icon: Github, url: "#" },
                { name: "Twitter", icon: Twitter, url: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-glow"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            <a href="mailto:picsel@kdkce.edu" className="mt-4 flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
              <Mail size={14} /> picsel@kdkce.edu
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <span>© {new Date().getFullYear()} PICSEL Club — KDKCE. All rights reserved.</span>
          <span className="text-muted-foreground/50">Crafted with ❤️ by PICSEL Dev Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
