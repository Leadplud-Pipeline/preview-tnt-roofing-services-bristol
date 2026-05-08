import { Star } from "@phosphor-icons/react";
import siteData from "@/siteData";

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

const GoogleReviewCard = () => {
  const review = siteData.reviews[0];
  if (!review) return null;

  return (
    <div className="w-full bg-[#1a1a2e]/80 border border-white/10 rounded-xl p-4 font-sans">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#5C6BC0] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">{getInitials(review.name)}</span>
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">{review.name}</p>
            <p className="text-white/50 text-xs">{review.date || "Recent"}</p>
          </div>
        </div>
        <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} weight="fill" className="text-amber-400" />
        ))}
      </div>
      <p className="text-white/80 text-sm leading-relaxed mb-4">
        {review.text}
      </p>
      <p className="text-white/40 text-xs">Posted on Google</p>
    </div>
  );
};

export default GoogleReviewCard;
