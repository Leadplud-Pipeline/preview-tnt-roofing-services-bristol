import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { locations } from "@/data/locations";
import CTAPanel from "@/components/CTAPanel";
import { MapPin } from "@phosphor-icons/react";

const LocationsHub = () => (
  <Layout>
    <SEO title="TnT Roofing Services Bristol: Serving Cumbria & Bristol" description="We cover the Bristol, Ormskirk, and surrounding areas within a 30-mile radius. Expert roofing services across the North West." />
    <section className="section-dark section-padding">
      <div className="container-content">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Locations" }]} />
        <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">TnT Roofing Services Bristol: Serving Cumbria & Bristol</h1>
        <div className="heading-rule" />
        <p className="text-secondary-foreground/80 font-sans text-lg max-w-2xl leading-relaxed">We cover the Bristol, Ormskirk, and surrounding areas within a 30-mile radius.</p>
      </div>
    </section>
    <section className="section-light section-padding">
      <div className="container-content">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map(l => (
            <Link key={l.slug} to={`/locations/${l.slug}`} className="card-hover p-6 flex items-start gap-4 group">
              <MapPin size={32} weight="duotone" className="text-primary shrink-0" />
              <div>
                <h2 className="text-base font-heading uppercase tracking-wide text-foreground mb-1">{l.name}</h2>
                <p className="text-sm text-muted-foreground font-sans line-clamp-2">{l.heroDesc.substring(0, 120)}...</p>
                <span className="mt-2 inline-block text-sm font-sans font-semibold text-primary group-hover:underline">View Services →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <CTAPanel />
  </Layout>
);
export default LocationsHub;
