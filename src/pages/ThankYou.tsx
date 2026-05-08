import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import EmergencyBanner from "@/components/EmergencyBanner";
import { CheckCircle } from "@phosphor-icons/react";
import siteData from "@/siteData";

const ThankYou = () => {

  return (
  <Layout>
    <SEO title={`Thank You | ${siteData.businessName}`} description={`Thank you for contacting ${siteData.businessName}. We'll review your enquiry and be in touch shortly.`} robots="noindex, nofollow" />
    <section className="section-light section-padding">
      <div className="container-content text-center max-w-2xl mx-auto">
        <CheckCircle size={80} weight="duotone" className="text-primary mx-auto mb-6" />
        <h1 className="text-3xl md:text-5xl mb-6">Thank You - We'll Be in Touch Shortly</h1>
        <div className="heading-rule-center" />
        <h2 className="text-lg md:text-xl mb-6">What Happens Next</h2>
        <ol className="text-left space-y-4 mb-8">
          <li className="flex items-start gap-3 font-sans text-muted-foreground leading-relaxed">
            <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-display font-bold flex items-center justify-center shrink-0 text-sm">1</span>
            We review your enquiry within 1 hour during working hours.
          </li>
          <li className="flex items-start gap-3 font-sans text-muted-foreground leading-relaxed">
            <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-display font-bold flex items-center justify-center shrink-0 text-sm">2</span>
            One of our team calls you to discuss your roof and arrange access.
          </li>
          <li className="flex items-start gap-3 font-sans text-muted-foreground leading-relaxed">
            <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-display font-bold flex items-center justify-center shrink-0 text-sm">3</span>
            We arrange your free roof inspection and provide a full written quote.
          </li>
        </ol>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="btn-primary">Call Us Now: {siteData.phone}</a>
          <Link to="/" className="btn-secondary">Back to Home</Link>
        </div>
      </div>
    </section>
    <EmergencyBanner />
  </Layout>
  );
};
export default ThankYou;
