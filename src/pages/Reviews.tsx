import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewCard from "@/components/ReviewCard";
import CTAPanel from "@/components/CTAPanel";
import siteData from "@/siteData";

const Reviews = () => (
  <Layout>
    <SEO
      title={`Customer Reviews | ${siteData.businessName}`}
      description={`Read what our customers say about ${siteData.businessName}. Trusted ${siteData.trade.toLowerCase()} in ${siteData.serviceArea}.`}
      robots="noindex, nofollow"
    />
    <section className="section-dark section-padding">
      <div className="container-content">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Reviews" }]} />
        <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">What Our Customers Say</h1>
        <div className="heading-rule" />
      </div>
    </section>
    <section className="section-light section-padding">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.reviews.map((r, i) => (
            <ReviewCard key={i} name={r.name} text={r.text} platform="Google" location={siteData.city} />
          ))}
        </div>
      </div>
    </section>
    <CTAPanel />
  </Layout>
);

export default Reviews;
