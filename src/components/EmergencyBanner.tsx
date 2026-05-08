import { Phone } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import siteData from "@/siteData";

const EmergencyBanner = () => {
  const ref = useScrollReveal<HTMLElement>(0.3);

  return (
    <section ref={ref} className="scroll-reveal bg-destructive py-4 md:py-5" role="alert">
      <div className="container-content flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
        <p className="font-heading font-bold uppercase tracking-wide text-destructive-foreground text-sm md:text-base flex items-center">
          <span className="emergency-blink text-destructive-foreground">●</span>
          Emergency Repair. Available 24 Hours, 7 Days a Week Across {siteData.serviceArea}
        </p>
        <a
          href={`tel:${siteData.phone.replace(/\s/g, '')}`}
          className="emergency-phone inline-flex items-center gap-2 bg-card text-destructive font-sans font-semibold px-6 py-2 rounded-sm transition-all hover:scale-[1.02] active:scale-95"
        >
          <Phone size={20} weight="bold" />
          Call Now: {siteData.phone}
        </a>
      </div>
    </section>
  );
};

export default EmergencyBanner;
