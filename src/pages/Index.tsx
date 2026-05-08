import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { homepageGalleryImages } from "@/data/gallery";
import siteData from "@/siteData";

import heroImg from "@/assets/hero-roof.jpg";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import TrustBadges from "@/components/TrustBadges";
import ServiceCard from "@/components/ServiceCard";
import ReviewMarquee from "@/components/ReviewMarquee";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTAPanel from "@/components/CTAPanel";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef } from "react";

const Index = () => {
  const uspRef = useStaggerReveal<HTMLDivElement>(0.15, 80);
  const locationsRef = useStaggerReveal<HTMLDivElement>(0.2, 60);
  const galleryRef = useStaggerReveal<HTMLDivElement>(0.15, 80);
  const servicesRef = useStaggerReveal<HTMLDivElement>(0.15, 80);
  const reviewHeadingRef = useScrollReveal<HTMLDivElement>();
  const uspHeadingRef = useScrollReveal<HTMLDivElement>();
  const locHeadingRef = useScrollReveal<HTMLDivElement>();
  const galleryHeadingRef = useScrollReveal<HTMLDivElement>();
  const servicesHeadingRef = useScrollReveal<HTMLDivElement>();

  const heroBgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const h = () => {
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <Layout>
      <SEO title={siteData.seo.title} description={siteData.seo.description} />

      {/* Hero */}
      <section className="relative bg-secondary hero-clip overflow-hidden">
        <img ref={heroBgRef} src={heroImg} alt={`${siteData.trade} by ${siteData.businessName}`} className="absolute inset-0 w-full h-[120%] object-cover opacity-20" loading="eager" fetchPriority="high" width={1920} height={1080} style={{ willChange: "transform" }} />
        <div className="relative container-content py-24 md:py-36 lg:py-44 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary-foreground mb-6 anim-hero-h1 max-w-4xl mx-auto leading-tight">
            {siteData.hero.heading}
          </h1>
          <p className="text-secondary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-sans leading-relaxed anim-hero-sub">
            {siteData.hero.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center anim-hero-cta">
            <Link to="/book" className="btn-primary text-base">{siteData.hero.primaryCta}</Link>
            <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="btn-secondary border-secondary-foreground/30 text-secondary-foreground hover:bg-primary hover:border-primary">
              Call {siteData.phone}
            </a>
          </div>
          <div className="mt-10 anim-hero-badges">
            <TrustBadges variant="dark" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-light section-padding overflow-hidden">
        <div className="container-content">
          <div className="text-center mb-6 scroll-reveal" ref={reviewHeadingRef}>
            <h2 className="text-2xl md:text-3xl text-foreground">What Our Customers Say</h2>
            <div className="heading-rule-center anim-heading-rule" />
          </div>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-3xl mx-auto text-center mb-12 scroll-reveal" ref={useScrollReveal<HTMLDivElement>()}>
            {siteData.businessName} provides expert {siteData.trade.toLowerCase()} services across {siteData.serviceArea}. Get in touch today for a free, no-obligation quote.
          </p>
        </div>
        <ReviewMarquee />
        <div className="text-center mt-8">
          <Link to="/reviews" className="inline-block text-primary font-sans font-semibold hover:underline">View All Reviews →</Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-dark section-padding">
        <div className="container-content text-center">
          <div ref={uspHeadingRef} className="scroll-reveal">
            <h2 className="text-2xl md:text-3xl text-secondary-foreground">{siteData.whyUs.heading}</h2>
            <div className="heading-rule-center anim-heading-rule" />
          </div>
          <div ref={uspRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {siteData.whyUs.points.map(point => (
              <div key={point.heading} className="text-left p-6 scroll-reveal">
                <h3 className="text-base text-gold mb-2">{point.heading}</h3>
                <p className="text-secondary-foreground/70 font-sans text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-light section-padding">
        <div className="container-content text-center">
          <div ref={locHeadingRef} className="scroll-reveal">
            <h2 className="text-2xl md:text-3xl">Areas We Cover</h2>
            <div className="heading-rule-center anim-heading-rule" />
          </div>
          <p className="text-muted-foreground font-sans mb-8">Serving {siteData.serviceArea} and the surrounding areas. Your local {siteData.trade.toLowerCase()}.</p>
          <div ref={locationsRef} className="flex flex-wrap justify-center gap-3">
            {locations.map(l => (
              <Link key={l.slug} to={`/locations/${l.slug}`} className="scroll-reveal px-5 py-2 bg-surface text-primary font-sans font-medium rounded-sm hover:bg-primary hover:text-primary-foreground transition-all text-sm">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-surface section-padding">
        <div className="container-content text-center">
          <div ref={galleryHeadingRef} className="scroll-reveal">
            <h2 className="text-2xl md:text-3xl">Our Recent Work</h2>
            <div className="heading-rule-center anim-heading-rule" />
          </div>
          <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {homepageGalleryImages.map((img, i) => (
              <div key={i} className="scroll-reveal aspect-[4/3] rounded-lg overflow-hidden border border-border hover:border-primary transition-colors group">
                <img
                  src={img.src}
                  alt={img.alt}
                  title={img.title}
                  loading="lazy"
                  decoding="async"
                  width={img.width}
                  height={img.height}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <Link to="/gallery" className="inline-block mt-8 text-primary font-sans font-semibold hover:underline">View Full Gallery →</Link>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-light section-padding">
        <div className="container-content">
          <div className="text-center mb-6" ref={servicesHeadingRef}>
            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-3xl text-foreground">{siteData.trade} Services in {siteData.serviceArea}</h2>
              <div className="heading-rule-center anim-heading-rule" />
            </div>
          </div>
          <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.slug} className="scroll-reveal">
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmergencyBanner />
      <CTAPanel />
    </Layout>
  );
};

export default Index;
