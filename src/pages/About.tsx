import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import CTAPanel from "@/components/CTAPanel";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import siteData from "@/siteData";

const About = () => {
  const storyRef = useScrollReveal<HTMLDivElement>();
  const statsRef = useStaggerReveal<HTMLDivElement>(0.2, 100);
  const accredRef = useScrollReveal<HTMLDivElement>();

  return (
    <Layout>
      <SEO
        title={`About ${siteData.businessName} | ${siteData.trade} in ${siteData.serviceArea}`}
        description={`Learn about ${siteData.businessName}, trusted ${siteData.trade.toLowerCase()} serving ${siteData.serviceArea}.`}
      />
      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4 anim-hero-h1">{siteData.about.heading}</h1>
          <div className="heading-rule anim-heading-rule" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-2xl leading-relaxed anim-hero-sub">
            Trusted by customers across {siteData.serviceArea}.
          </p>
        </div>
      </section>

      <section className="section-light section-padding">
        <div ref={storyRef} className="container-content max-w-3xl scroll-reveal">
          <h2 className="text-xl md:text-2xl mb-4">Our Story</h2>
          <div className="heading-rule anim-heading-rule" />
          <div className="space-y-4 font-sans leading-relaxed text-muted-foreground">
            <p>{siteData.about.body}</p>
          </div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-content">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {siteData.yearsExperience > 0 && (
              <div className="p-6 scroll-reveal">
                <p className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">{siteData.yearsExperience}+</p>
                <p className="text-sm font-heading uppercase tracking-wide text-secondary-foreground">Years Experience</p>
              </div>
            )}
            <div className="p-6 scroll-reveal">
              <p className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">24/7</p>
              <p className="text-sm font-heading uppercase tracking-wide text-secondary-foreground">Emergency Cover</p>
            </div>
            <div className="p-6 scroll-reveal">
              <p className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">100%</p>
              <p className="text-sm font-heading uppercase tracking-wide text-secondary-foreground">Workmanship Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light section-padding">
        <div ref={accredRef} className="container-content text-center scroll-reveal">
          <h2 className="text-xl md:text-2xl mb-4">Our Accreditations</h2>
          <div className="heading-rule-center anim-heading-rule" />
          <TrustBadges variant="light" />
        </div>
      </section>
      <CTAPanel />
    </Layout>
  );
};

export default About;
