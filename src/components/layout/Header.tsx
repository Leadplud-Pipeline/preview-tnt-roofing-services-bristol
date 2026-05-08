import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X, Phone } from "@phosphor-icons/react";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import siteData from "@/siteData";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); setLocationsOpen(false); }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="anim-topbar bg-primary text-primary-foreground text-xs md:text-sm font-heading uppercase tracking-wide">
        <div className="container-content flex flex-wrap items-center justify-center md:justify-between gap-2 py-2">
          <div className="flex items-center gap-4">
            <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="flex items-center gap-1 hover:underline">
              <Phone size={14} weight="bold" /> {siteData.phone}
            </a>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Mon–Fri 06:00–18:00, Sat–Sun 08:00–17:00 | 24hr Emergency</span>
          </div>
          <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="hidden md:flex items-center gap-1 font-bold hover:underline">
            24/7 Emergency: Call Now
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header className={`anim-nav sticky top-0 z-50 bg-background transition-all duration-400 ${scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : "border-b border-border"}`} style={{ transitionProperty: "box-shadow, border-color" }}>
        <div className="container-content flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/">
            {siteData.logoUrl
              ? <img src={siteData.logoUrl} alt={`${siteData.businessName} logo`} width={200} height={80} className="h-14 md:h-16 w-auto object-contain" />
              : <span className="font-heading text-lg font-bold text-primary">{siteData.businessName}</span>
            }
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            <Link to="/" className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors">Home</Link>

            {/* Services dropdown */}
            <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <Link to="/services" className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Services <span className="text-[10px]">▾</span>
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 w-72" style={{ animation: "fadeInUp 0.3s ease forwards" }}>
                    {services.map(s => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="block px-4 py-2 text-sm font-sans text-foreground hover:bg-surface hover:text-primary border-l-2 border-transparent hover:border-primary transition-all">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Locations dropdown */}
            <div className="relative group" onMouseEnter={() => setLocationsOpen(true)} onMouseLeave={() => setLocationsOpen(false)}>
              <Link to="/locations" className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Locations <span className="text-[10px]">▾</span>
              </Link>
              {locationsOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 w-56" style={{ animation: "fadeInUp 0.3s ease forwards" }}>
                    {locations.map(l => (
                      <Link key={l.slug} to={`/locations/${l.slug}`} className="block px-4 py-2 text-sm font-sans text-foreground hover:bg-surface hover:text-primary border-l-2 border-transparent hover:border-primary transition-all">
                        {l.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/gallery" className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors">Gallery</Link>
            
            <Link to="/about" className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/blog" className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/contact" className="text-sm font-sans font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="hidden lg:block">
            <Link to="/book" className="btn-primary text-sm px-6 py-3">Get a Free Estimate</Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(true)} className="lg:hidden text-primary" aria-label="Open menu">
            <List size={28} weight="bold" />
          </button>
        </div>
      </header>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-secondary/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-secondary overflow-y-auto" style={{ animation: "slide-in-right 0.3s ease forwards" }}>
            <div className="flex items-center justify-between p-4">
              <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="text-gold font-heading uppercase tracking-wide text-lg font-bold">
                {siteData.phone}
              </a>
              <button onClick={() => setMobileOpen(false)} className="text-secondary-foreground" aria-label="Close menu">
                <X size={28} weight="bold" />
              </button>
            </div>
            <nav className="px-4 space-y-1" aria-label="Mobile navigation">
              <Link to="/" className="block py-3 text-secondary-foreground font-sans border-b border-secondary-foreground/10">Home</Link>
              <div className="border-b border-secondary-foreground/10">
                <Link to="/services" className="block py-3 text-secondary-foreground font-sans font-semibold">Services</Link>
                {services.map(s => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="block py-2 pl-4 text-sm text-secondary-foreground/70 font-sans">{s.name}</Link>
                ))}
              </div>
              <div className="border-b border-secondary-foreground/10">
                <Link to="/locations" className="block py-3 text-secondary-foreground font-sans font-semibold">Locations</Link>
                {locations.map(l => (
                  <Link key={l.slug} to={`/locations/${l.slug}`} className="block py-2 pl-4 text-sm text-secondary-foreground/70 font-sans">{l.name}</Link>
                ))}
              </div>
              <Link to="/gallery" className="block py-3 text-secondary-foreground font-sans border-b border-secondary-foreground/10">Gallery</Link>
              
              <Link to="/about" className="block py-3 text-secondary-foreground font-sans border-b border-secondary-foreground/10">About</Link>
              <Link to="/blog" className="block py-3 text-secondary-foreground font-sans border-b border-secondary-foreground/10">Blog</Link>
              <Link to="/contact" className="block py-3 text-secondary-foreground font-sans border-b border-secondary-foreground/10">Contact</Link>
            </nav>
            <div className="p-4 mt-4">
              <Link to="/book" className="btn-primary w-full text-center">Get a Free Estimate</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
