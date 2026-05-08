import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { Phone, Envelope, Clock, FacebookLogo } from "@phosphor-icons/react";
import siteData from "@/siteData";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  const footerRef = useStaggerReveal<HTMLDivElement>(0.1, 100);

  return (
    <footer className="bg-surface border-t-4 border-secondary" role="contentinfo">
      <div className="container-content section-padding">
        {/* Columns */}
        <div ref={footerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Navigation */}
          <div className="scroll-reveal">
            <h3 className="text-sm mb-4">Navigation</h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              {["Home:/", "About:/about", "Services:/services", "Locations:/locations", "Gallery:/gallery", "Reviews:/reviews", "Blog:/blog", "Contact:/contact", "Book Estimate:/book"].map(item => {
                const [label, href] = item.split(":");
                return <Link key={href} to={href} className="block text-sm font-sans text-muted-foreground hover:text-primary transition-colors">{label}</Link>;
              })}
            </nav>
            <Link to="/" className="mt-6 hidden md:block">
              {siteData.logoUrl
                ? <img src={siteData.logoUrl} alt={`${siteData.businessName} logo`} width={220} height={88} className="h-16 w-auto object-contain" />
                : <span className="font-heading text-base font-bold text-primary">{siteData.businessName}</span>
              }
            </Link>
          </div>

          {/* Services */}
          <div className="scroll-reveal">
            <h3 className="text-sm mb-4">Services</h3>
            <nav className="space-y-2" aria-label="Footer services">
              {services.map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="block text-sm font-sans text-muted-foreground hover:text-primary transition-colors">{s.name}</Link>
              ))}
            </nav>
          </div>

          {/* Locations */}
          <div className="scroll-reveal">
            <h3 className="text-sm mb-4">Locations</h3>
            <nav className="space-y-2" aria-label="Footer locations">
              {locations.map(l => (
                <Link key={l.slug} to={`/locations/${l.slug}`} className="block text-sm font-sans text-muted-foreground hover:text-primary transition-colors">{l.name}</Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="scroll-reveal">
            <h3 className="text-sm mb-4">Contact</h3>
            <address className="not-italic space-y-3">
              <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} weight="bold" className="text-primary" /> {siteData.phone}
              </a>
              <a href={`mailto:${siteData.email}`} className="flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors">
                <Envelope size={16} weight="bold" className="text-primary" /> {siteData.email}
              </a>
              {siteData.facebookUrl && (
                <a href={siteData.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-primary transition-colors">
                  <FacebookLogo size={16} weight="bold" className="text-primary" /> Facebook
                </a>
              )}
              <div className="flex items-start gap-2 text-sm font-sans text-muted-foreground">
                <Clock size={16} weight="bold" className="text-primary mt-0.5" />
                <div>
                  <p>Mon–Fri: 06:00–18:00</p>
                  <p>Sat–Sun: 08:00–17:00</p>
                  <p>24hr Emergency Calls</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Business summary */}
        <div className="border-t border-border pt-8 mb-8">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl font-sans">
            {siteData.businessName} is a {siteData.trade.toLowerCase()} business based in {siteData.city}, serving {siteData.serviceArea}. Fully insured, free quotes, and all work guaranteed.
          </p>
        </div>

        {/* NAP + Copyright */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground font-sans space-y-1">
            <p className="font-semibold text-foreground">{siteData.businessName}</p>
            <p>{siteData.address}</p>
            <p>Tel: {siteData.phone}</p>
            <p>Email: {siteData.email}</p>
            <p>Serving: {siteData.serviceArea}</p>
          </div>
          <p className="text-xs text-muted-foreground font-sans">© {new Date().getFullYear()} {siteData.businessName}. All Rights Reserved.</p>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: siteData.businessName,
            telephone: siteData.phone.replace(/\s/g, ''),
            email: siteData.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteData.address,
              addressLocality: siteData.city,
              addressCountry: "GB"
            },
            areaServed: siteData.serviceArea,
            url: siteData.seo.canonicalUrl,
            ...(siteData.facebookUrl ? { sameAs: [siteData.facebookUrl] } : {}),
          })
        }}
      />
      <div className="border-t border-secondary-foreground/10 py-3 text-center">
        <p className="text-[12px] font-light text-muted-foreground/70">
          Built with ❤️ by{' '}
          <a
            href="https://leadplug.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline transition-colors"
            style={{ color: 'inherit' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'hsl(var(--primary))')}
            onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}
          >
            LEADPLUG
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
