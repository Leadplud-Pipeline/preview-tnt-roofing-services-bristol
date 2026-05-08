import { Link } from "react-router-dom";
import type { ServiceData } from "@/data/services";
import { useMagneticHover } from "@/hooks/useMagneticHover";

const ServiceCard = ({ service }: { service: ServiceData }) => {
  const IconComp = service.icon;
  const { ref, onMouseMove, onMouseLeave } = useMagneticHover<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      to={`/services/${service.slug}`}
      className="card-hover p-6 flex flex-col items-start group"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <IconComp size={32} weight="duotone" className="text-primary mb-4 transition-transform duration-300 group-hover:scale-115" />
      <h3 className="text-base font-heading uppercase tracking-wide text-foreground mb-2">{service.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1 font-sans">{service.shortDesc}</p>
      <span className="mt-4 text-sm font-sans font-semibold text-primary group-hover:underline">Learn More →</span>
    </Link>
  );
};

export default ServiceCard;
