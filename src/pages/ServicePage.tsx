import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import CTAPanel from "@/components/CTAPanel";
import ServiceCard from "@/components/ServiceCard";
import { getServiceBySlug, services } from "@/data/services";
import { locations } from "@/data/locations";
import { CheckCircle } from "@phosphor-icons/react";
import NotFound from "./NotFound";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");
  if (!service) return <NotFound />;

  const IconComp = service.icon;
  const related = service.relatedSlugs.map(s => services.find(x => x.slug === s)).filter(Boolean) as typeof services;

  return (
    <Layout>
      <SEO title={service.metaTitle} description={service.metaDesc} />
      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.name }]} />
          <div className="flex items-center gap-4 mb-4">
            <IconComp size={48} weight="duotone" className="text-gold" />
            <h1 className="text-3xl md:text-5xl text-secondary-foreground">{service.name} in the Bristol & Bristol</h1>
          </div>
          <div className="heading-rule" />
          <p className="text-secondary-foreground/80 font-sans text-lg max-w-3xl leading-relaxed mb-8">{service.heroDesc}</p>
          <Link to="/book" className="btn-primary">Get a Free {service.name} Quote</Link>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">What's Included</h2>
          <div className="heading-rule" />
          <ul className="space-y-3">
            {service.included.map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-sans text-foreground">
                <CheckCircle size={22} weight="duotone" className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Why Choose TnT Roofing Services Bristol</h2>
          <div className="heading-rule" />
          <ul className="space-y-3">
            {service.whyChoose.map((item, i) => (
              <li key={i} className="font-sans text-muted-foreground leading-relaxed">• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Service Areas</h2>
          <div className="heading-rule" />
          {slug === "emergency-roof-repairs" && (
            <p className="font-sans text-muted-foreground mb-4">
              Based in Bristol or the Bristol and Bristol? See our dedicated{" "}
              <Link to="/services" className="text-primary font-semibold hover:underline">Emergency Roof Repair Bristol page</Link>{" "}
              for local information and faster response times.
            </p>
          )}
          <p className="font-sans text-muted-foreground mb-4">We provide {service.name.toLowerCase()} across the following areas:</p>
          <div className="flex flex-wrap gap-2">
            {locations.map(l => (
              <Link key={l.slug} to={`/locations/${l.slug}`} className="px-4 py-1.5 bg-surface text-primary font-sans text-sm rounded-sm hover:bg-primary hover:text-primary-foreground transition-all">{l.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-xl md:text-2xl mb-4">Frequently Asked Questions</h2>
          <div className="heading-rule" />
          <FAQ items={service.faqs} />
        </div>
      </section>

      <section className="section-light section-padding">
        <div className="container-content">
          <h2 className="text-xl md:text-2xl mb-4">Related Services</h2>
          <div className="heading-rule" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map(s => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <CTAPanel serviceName={service.name.toLowerCase()} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "Thing", "@id": "https://preview.vercel.app/" } },
          { "@type": "ListItem", position: 2, name: "Services", item: { "@type": "Thing", "@id": "https://preview.vercel.app/services" } },
          { "@type": "ListItem", position: 3, name: service.name, item: { "@type": "Thing", "@id": `https://preview.vercel.app/services/${service.slug}` } }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service", name: service.name,
        provider: { "@type": "HomeAndConstructionBusiness", name: "TnT Roofing Services Bristol", telephone: "+447938109894", address: { "@type": "PostalAddress", streetAddress: "Bristol", addressLocality: "Bristol", postalCode: "FY4 4EF", addressRegion: "Bristol", addressCountry: "GB" } },
        areaServed: "Cumbria and Bristol, North West England", description: service.heroDesc
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: service.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      })}} />
    </Layout>
  );
};
export default ServicePage;
