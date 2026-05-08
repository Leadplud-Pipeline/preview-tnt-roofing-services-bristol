import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import siteData from "@/siteData";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Book = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.leadplug.ai/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <SEO title={`Book a Free Estimate | ${siteData.businessName}`} description={`Book a free inspection and estimate with ${siteData.businessName}. No obligation, completely free.`} robots="noindex, nofollow" />
      <section className="section-dark section-padding">
        <div className="container-content text-center">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Book a Free Estimate" }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">Book Your Free Roof Inspection & Estimate</h1>
          <div className="heading-rule-center" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-2xl mx-auto leading-relaxed">Completely free. No obligation. We'll inspect your roof, assess the work, and provide a full written quote.</p>
        </div>
      </section>
      <section className="section-light section-padding">
        <div className="container-content text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Book Online", desc: "Choose a date and time that suits you." },
              { step: "2", title: "We Inspect Your Roof", desc: "We thoroughly survey your roof in detail." },
              { step: "3", title: "Receive a Written Quote", desc: "A full, no-obligation quote delivered to you." },
            ].map(s => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display text-xl font-bold flex items-center justify-center mx-auto mb-3">{s.step}</div>
                <h3 className="text-sm mb-1">{s.title}</h3>
                <p className="text-sm font-sans text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ width: '100%', margin: '0 auto' }}>
            <iframe
              src="https://link.leadplug.ai/widget/booking/T6Ja3zVOPxXclzMq9CDo"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '900px', display: 'block' }}
              scrolling="no"
              id="lKaIZr4OnacaMi8ZD1yg_1777705916352"
              title="Book an appointment"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Book;
