import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import CTAPanel from "@/components/CTAPanel";

const ServicesHub = () => (
  <Layout>
    <SEO title="Our Roofing Services | TnT Roofing Services Bristol" description="Complete roofing services across the Bristol & Bristol: emergency repairs, replacements, flat roofing, guttering, and more. Free roof inspections." />
    <section className="section-dark section-padding">
      <div className="container-content">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
        <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">Our Roofing Services</h1>
        <div className="heading-rule" />
        <p className="text-secondary-foreground/80 font-sans text-lg max-w-2xl leading-relaxed">From emergency repairs to full roof replacements, we handle it all across the North West.</p>
      </div>
    </section>
    <section className="section-light section-padding">
      <div className="container-content">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </div>
    </section>
    <CTAPanel />
  </Layout>
);
export default ServicesHub;
