import { Star } from "@phosphor-icons/react";

interface ReviewCardProps {
  name: string;
  text: string;
  platform: string;
  location: string;
}

const ReviewCard = ({ name, text, platform, location }: ReviewCardProps) => (
  <div className="card-hover p-6">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={20} weight="fill" className="text-gold" />
      ))}
    </div>
    <p className="text-foreground leading-relaxed mb-4 font-sans">"{text}"</p>
    <div className="flex items-center justify-between">
      <div>
        <p className="font-sans font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
      <span className="text-xs font-heading uppercase tracking-wide text-muted-foreground">{platform}</span>
    </div>
  </div>
);

export default ReviewCard;
