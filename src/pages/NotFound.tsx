import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 pb-mobile-nav pt-24">
      <div className="absolute inset-0 bg-geo-pattern opacity-70" />
      <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-border bg-card/80 p-8 text-center shadow-card backdrop-blur-xl sm:p-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary font-heading">Unavailable</p>
        <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">This page or item is not available.</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          We couldn&apos;t find <span className="text-foreground">{location.pathname}</span>. The link may be broken, removed, or not published yet.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-mobile-primary sm:min-w-[180px]">
            Go Home
          </Link>
          <Link to="/events" className="btn-mobile-outline sm:min-w-[180px]">
            Browse Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
