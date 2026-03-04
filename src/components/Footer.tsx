import { Link } from "react-router-dom";
import picselLogo from "@/assets/picsel-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={picselLogo} alt="PICSEL" className="h-10 w-10 rounded-full" />
              <div>
                <span className="block text-lg font-extrabold tracking-tight text-foreground">PICSEL</span>
                <span className="block text-[10px] uppercase tracking-[2px] text-muted-foreground">KDKCE</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Department of Computer Science & Engineering. Building the future, one pixel at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Team", path: "/team" },
                { name: "Faculty", path: "/faculty" },
              ].map((link) => (
                <Link key={link.name} to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Connect</h4>
            <div className="flex gap-3">
              {["Instagram", "LinkedIn", "GitHub", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <span className="text-xs font-bold">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PICSEL Club — KDKCE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
