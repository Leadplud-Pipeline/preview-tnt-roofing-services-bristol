import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import CTAPanel from "@/components/CTAPanel";
import ServiceCard from "@/components/ServiceCard";
import { getLocationBySlug, locations } from "@/data/locations";
import { services } from "@/data/services";
import NotFound from "./NotFound";

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const loc = getLocationBySlug(slug || "");
  if (!loc) return <NotFound />;

  const nearby = loc.nearbyLocations.map(s => locations.find(l => l.slug === s)).filter(Boolean) as typeof locations;

  return (
    <Layout>
      <SEO title={loc.metaTitle} description={loc.metaDesc} />
      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: loc.name }]} />
          <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">Roofing Services in {loc.name}</h1>
          <div className="heading-rule" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-3xl leading-relaxed mb-8">{loc.heroDesc}</p>
          <Link to="/book" className="btn-primary">Get a Free Quote in {loc.name}</Link>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl mb-4">Services in {loc.name}</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground mb-6">We provide the following roofing services to homeowners and businesses in {loc.name}:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Why TnT Roofing Services Bristol in {loc.name}</h2>
          <div className="heading-rule" />
          <ul className="space-y-3">{loc.whyChoose.map((item, i) => <li key={i} className="font-sans text-muted-foreground leading-relaxed">• {item}</li>)}</ul>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Nearby Areas We Cover</h2>
          <div className="heading-rule" />
          <div className="flex flex-wrap gap-3">
            {nearby.map(n => (
              <Link key={n.slug} to={`/locations/${n.slug}`} className="px-4 py-2 bg-surface text-primary font-sans text-sm rounded-sm hover:bg-primary hover:text-primary-foreground transition-all">{n.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Recent Work in {loc.name}</h2>
          <div className="heading-rule" />
          <p className="font-sans text-muted-foreground leading-relaxed">{loc.recentWork}</p>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Frequently Asked Questions</h2>
          <div className="heading-rule" />
          <FAQ items={loc.faqs} />
        </div>
      </section>

      <CTAPanel serviceName={`roofing services in ${loc.name}`} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "Thing", "@id": "https://preview.vercel.app/" } },
          { "@type": "ListItem", position: 2, name: "Locations", item: { "@type": "Thing", "@id": "https://preview.vercel.app/locations" } },
          { "@type": "ListItem", position: 3, name: loc.name, item: { "@type": "Thing", "@id": `https://preview.vercel.app/locations/${loc.slug}` } }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: loc.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      })}} />
    </Layout>
  );
};
export default LocationPage;
