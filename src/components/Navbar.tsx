import { useState } from "react";
import picselLogo from "@/assets/picsel-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Faculty", href: "#faculty" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={picselLogo} alt="PICSEL Club" className="h-12 w-12 rounded-full object-cover" />
        <div className="hidden sm:block">
          <span className="text-lg font-bold tracking-wider text-foreground">PICSEL</span>
          <span className="block text-[10px] uppercase tracking-[3px] text-muted-foreground">CLUB</span>
        </div>
      </div>

      {/* Center pill nav */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-4 rounded-full border border-border bg-secondary/80 px-6 py-2.5 backdrop-blur-md transition-all hover:border-primary/30"
        >
          <span className="text-sm font-semibold tracking-wider text-foreground">PICSEL</span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">KDKCE</span>
          <span className="ml-2 text-sm text-foreground">{isOpen ? "✕" : "MENU"}</span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded-2xl border border-border bg-secondary/95 px-2 py-2 backdrop-blur-xl">
            <div className="flex gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-20" /> {/* Spacer for balance */}
    </nav>
  );
};

export default Navbar;
