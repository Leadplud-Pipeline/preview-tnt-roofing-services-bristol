import { Shield, MagnifyingGlass, Medal, UsersFour, MapPin } from "@phosphor-icons/react";

const badges = [
  { icon: MagnifyingGlass, label: "Free Roof Inspection" },
  { icon: Shield, label: "24/7 Emergency Call-Outs" },
  { icon: Medal, label: "All Work Guaranteed" },
  { icon: UsersFour, label: "Fully Insured" },
  { icon: MapPin, label: "Bristol & Bristol" },
];

const TrustBadges = ({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  const isDark = variant === "dark";
  return (
    <div className={`flex flex-wrap justify-center gap-4 md:gap-6 ${isDark ? "" : ""}`}>
      {badges.map((b) => (
        <div key={b.label} className="flex items-center gap-2 px-3 py-2">
          <b.icon size={24} weight="duotone" className={isDark ? "text-gold" : "text-primary"} />
          <span className={`text-xs md:text-sm font-heading uppercase tracking-wide ${isDark ? "text-secondary-foreground" : "text-foreground"}`}>
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
