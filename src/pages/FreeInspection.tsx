import { useEffect } from "react";

import logo from "@/assets/logo-hd.png";

const FreeInspection = () => {

  // Load form embed script for GHL calendar
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.leadplug.ai/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  // Meta Pixel — fires Lead event on page load
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
      fbq('track', 'Lead');
    `;
    document.head.appendChild(pixelScript);

    const noscript = document.createElement("noscript");
    noscript.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1472438861134731&ev=Lead&noscript=1" />';
    document.body.insertBefore(noscript, document.body.firstChild);

    return () => {
      pixelScript.remove();
      noscript.remove();
    };
  }, []);

  useEffect(() => {
    // Set noindex meta
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) metaRobots.setAttribute("content", "noindex, nofollow, noarchive, noodp");
    else {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex, nofollow, noarchive, noodp";
      document.head.appendChild(meta);
    }

    // Set title
    document.title = "Free Inspection | Leadplug Preview";
  }, []);

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      {/* Header — logo only */}
      <header className="w-full bg-secondary border-b border-secondary-foreground/10">
        <div className="max-w-5xl mx-auto flex items-center justify-center py-4 px-4">
          <img
            src={logo}
            alt="TnT Roofing Services Bristol logo"
            width={220}
            height={88}
            className="h-14 w-auto object-contain"
          />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-10 md:py-16">
        {/* Section 1 — Offer headline */}
        <section className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white leading-tight mb-2">
            Your Free Roof Inspection Is Confirmed
          </h1>
          <p className="text-lg md:text-xl text-primary font-sans leading-relaxed mb-3">
            You are one step away from securing your spot. Call us now or pick a time below and we will come to you.
          </p>
          <p className="text-sm md:text-base text-white/80 font-sans leading-relaxed">
            Spots are filling fast across Bristol, Bristol and the Lakes. Your offer expires when your slot is taken.
          </p>
        </section>

        {/* Section 2 — Call CTA */}
        <section className="text-center mb-10">
          <p className="text-white text-lg md:text-xl font-sans mb-4">
            📞 Call now to secure your spot instantly
          </p>
          <a
            href="tel:+447455746578"
            onClick={(e) => {
              const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
              if (isMobile) {
                setTimeout(() => { window.location.href = '/thank-you-inspection'; }, 1000);
              } else {
                e.preventDefault();
                window.location.href = '/thank-you-inspection';
              }
            }}
            className="block w-full md:w-auto md:inline-block bg-[hsl(142,71%,40%)] hover:bg-[hsl(142,71%,35%)] text-white text-xl md:text-2xl font-bold font-heading py-5 px-10 rounded-lg text-center transition-colors duration-200 active:scale-[0.97]"
          >
            Call 07455 746578
          </a>
          <p className="text-secondary-foreground/50 text-sm font-sans mt-4 max-w-lg mx-auto leading-relaxed">
            We work 24/7 — whether it's 2am or 5pm we will answer your call and confirm your free inspection in under 2 minutes
          </p>
        </section>

        {/* Section 3 — Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-secondary-foreground/20" />
          <span className="text-secondary-foreground/60 text-sm font-sans whitespace-nowrap">
            Or book yourself below
          </span>
          <div className="flex-1 h-px bg-secondary-foreground/20" />
        </div>

        {/* Section 4 — Calendar */}
        <section className="mb-0">
          <iframe
            src="https://link.leadplug.ai/widget/booking/npbOkxYzuX1UyV7TbGZN"
            title="Book your free roof inspection"
            id="npbOkxYzuX1UyV7TbGZN_1774117304356"
            width="100%"
            style={{ minHeight: "700px", border: "none", borderRadius: "8px", overflow: "hidden" }}
            scrolling="no"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-secondary border-t border-white/10 py-4">
        <p className="text-center text-white text-xs font-sans">
          © 2026 TnT Roofing Services Bristol
        </p>
      </footer>
    </div>
  );
};

export default FreeInspection;
