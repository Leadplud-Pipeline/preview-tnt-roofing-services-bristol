import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import siteData from "@/siteData";

const CTAPanel = ({ serviceName }: { serviceName?: string }) => {
  const ref = useScrollReveal<HTMLElement>(0.2);

  return (
    <section ref={ref} className="scroll-reveal section-dark section-padding">
      <div className="container-content text-center">
        <h2 className="text-2xl md:text-3xl text-secondary-foreground mb-4">
          {serviceName
            ? `Need ${serviceName} in ${siteData.serviceArea}?`
            : "Ready to Get Started?"}
        </h2>
        <div className="heading-rule-center anim-heading-rule" />
        <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
          Get your free, no-obligation quote today. We'll assess the job, provide a full written quote, and there's absolutely no pressure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book" className="btn-primary">
            {siteData.hero.primaryCta}
          </Link>
          <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="btn-secondary border-primary-foreground text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
            Call {siteData.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAPanel;
