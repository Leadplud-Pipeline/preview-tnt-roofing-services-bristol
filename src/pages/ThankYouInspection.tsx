import { useEffect } from "react";

import GoogleReviewCard from "@/components/GoogleReviewCard";
import logo from "@/assets/logo-hd.png";
import jamesPhoto from "@/assets/james-team.jpg";

const ThankYouInspection = () => {
  // noindex + title
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) metaRobots.setAttribute("content", "noindex, nofollow, noarchive, noodp");
    else {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex, nofollow, noarchive, noodp";
      document.head.appendChild(meta);
    }
    document.title = "Appointment Booked | TnT Roofing Services Bristol";
  }, []);

  // Meta Pixel — fires Schedule on load
  useEffect(() => {
    const pixelScript = document.createElement("script");
    pixelScript.textContent = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1472438861134731');
      fbq('track', 'Schedule');
    `;
    document.head.appendChild(pixelScript);

    const noscript = document.createElement("noscript");
    noscript.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1472438861134731&ev=PageView&noscript=1" />';
    document.body.insertBefore(noscript, document.body.firstChild);

    return () => {
      pixelScript.remove();
      noscript.remove();
    };
  }, []);


  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      {/* SECTION 1 — Header */}
      <header className="w-full bg-secondary border-b border-white/10">
        <div className="flex items-center justify-center py-4 px-4">
          <img src={logo} alt="TnT Roofing Services Bristol logo" width={220} height={88} className="h-14 w-auto object-contain" />
        </div>
      </header>

      {/* SECTION 2 — Confirmation */}
      <main className="flex-1 w-full max-w-lg mx-auto px-5 py-10 md:py-16 flex flex-col items-center">
        <section className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-4">
            Your Appointment Is Booked
          </h1>
          <p className="text-lg md:text-xl font-heading font-bold text-primary leading-snug mb-3">
            We have emailed and texted you confirming the date and time. Please mark this in your calendar now.
          </p>
          <p className="text-base md:text-lg text-white font-sans">
            We look forward to meeting and speaking with you then
          </p>
        </section>

        {/* SECTION 3 — Divider */}
        <div className="w-16 h-0.5 bg-primary rounded-full mb-8" />

        {/* SECTION 4 — James photo */}
        <section className="flex flex-col items-center mb-8">
          <img
            src={jamesPhoto}
            alt="James Mason, Owner"
            className="w-20 h-20 rounded-full object-cover border-2 border-primary mb-2"
          />
          <span className="text-sm text-primary font-sans font-semibold">James Mason, Owner</span>
          <span className="text-sm text-white font-sans mt-1 text-center">
            He will be coming out to inspect your roof personally.
          </span>
        </section>

        {/* SECTION 5 — Google review card */}
        <div className="w-full mb-8">
          <GoogleReviewCard />
        </div>
      </main>

      {/* SECTION 6 — Footer */}
      <footer className="w-full bg-secondary border-t border-white/10 py-4">
        <p className="text-center text-white text-xs font-sans">
          © 2026 TnT Roofing Services Bristol
        </p>
      </footer>
    </div>
  );
};

export default ThankYouInspection;
