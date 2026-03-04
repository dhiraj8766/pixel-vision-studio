import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import picselLogo from "@/assets/picsel-logo.png";

const mainTabs = [
  {
    name: "Home",
    path: "/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Events",
    path: "/events",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    name: "Team",
    path: "/team",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: "More",
    path: "",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
  },
];

const moreLinks = [
  { name: "About Us", path: "/about" },
  { name: "Faculty", path: "/faculty" },
  { name: "Contact", path: "/contact" },
];

const MobileBottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* More menu overlay */}
      {showMore && (
        <div className="fixed inset-0 z-[998] bg-background/80 backdrop-blur-sm md:hidden" onClick={() => setShowMore(false)}>
          <div
            className="absolute bottom-20 left-4 right-4 rounded-2xl border border-border bg-card p-4 shadow-card animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Logo header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
              <img src={picselLogo} alt="PICSEL" className="h-8 w-8 rounded-full" />
              <div>
                <span className="block text-sm font-bold text-foreground">PICSEL</span>
                <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">KDKCE</span>
              </div>
            </div>
            {moreLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setShowMore(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-[999] border-t border-border bg-card/95 backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-around px-2 py-2">
          {mainTabs.map((tab) => {
            const active = tab.path ? isActive(tab.path) : showMore;
            return (
              <button
                key={tab.name}
                onClick={() => {
                  if (tab.name === "More") {
                    setShowMore(!showMore);
                  } else {
                    setShowMore(false);
                    // Navigate using window.location for simplicity in button
                    window.location.href = tab.path;
                  }
                }}
                className={`flex flex-col items-center gap-1 rounded-xl px-4 py-1.5 transition-colors ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {tab.icon}
                <span className="text-[10px] font-semibold uppercase tracking-wider">{tab.name}</span>
              </button>
            );
          })}
        </div>
        {/* Safe area for iOS */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </nav>
    </>
  );
};

export default MobileBottomNav;
