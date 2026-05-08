import { useState, useEffect } from "react";

import logo from "@/assets/logo-hd.png";
import jamesPhoto from "@/assets/james-team.jpg";
import siteData from "@/siteData";

import GoogleReviewCard from "@/components/GoogleReviewCard";

const GetYourFreeInspection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    postcode: "",
    homeowner: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [showNotHomeowner, setShowNotHomeowner] = useState(false);

  // Load Meta Pixel (ID: 1472438861134731) for this page only — no PageView fired
  useEffect(() => {
    const script = document.createElement("script");
    script.textContent = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1472438861134731');
    `;
    document.head.appendChild(script);

    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1472438861134731&ev=PageView&noscript=1" />`;
    document.body.appendChild(noscript);

    return () => {
      script.remove();
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

    document.title = `Claim Your Free Inspection | ${siteData.businessName}`;

    // Inject global style to hide chat widgets
    const style = document.createElement("style");
    style.id = "get-inspection-hide-chat";
    style.innerHTML = `
      #tidio-chat,
      #tidio-chat-iframe,
      .tidio-mobile-chat,
      [id^="tidio"],
      [class^="tidio"],
      #crisp-chatbox,
      .crisp-client,
      #chat-widget-container,
      #hubspot-messages-iframe-container,
      .hs-shadow-container,
      iframe[title*="chat" i],
      div[id*="chat" i],
      div[class*="chat" i],
      div[id*="widget" i],
      [data-widget-id] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        width: 0 !important;
        height: 0 !important;
      }
    `;
    document.head.appendChild(style);

    const hideChat = () => {
      const selectors = [
        "#chat-widget-container",
        "#tidio-chat",
        '[data-widget-id]',
        'iframe[title*="chat"]',
        'div[id*="chat"]',
      ];
      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          (el as HTMLElement).style.setProperty("display", "none", "important");
          (el as HTMLElement).style.setProperty("visibility", "hidden", "important");
        });
      });
    };

    hideChat();
    const t1 = setTimeout(hideChat, 500);
    const t2 = setTimeout(hideChat, 1500);
    const t3 = setTimeout(hideChat, 3000);

    const observer = new MutationObserver(() => hideChat());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      observer.disconnect();
      const existingStyle = document.getElementById("get-inspection-hide-chat");
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  const handleHomeownerChange = (value: string) => {
    setFormData((prev) => ({ ...prev, homeowner: value }));
    setShowNotHomeowner(value === "no");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (showNotHomeowner || submitting) return;

    setSubmitting(true);
    try {
      await fetch(
        "https://services.leadconnectorhq.com/hooks/UaBYBY0ExccexsO7vGVG/webhook-trigger/PqkS749JpruPoDLAa0vz",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            postal_code: formData.postcode,
            homeowner: formData.homeowner === "yes" ? "Yes I am the homeowner" : "No I am not the homeowner",
            tags: ["Facebook Ad"],
            source: "Facebook Ad",
          }),
        }
      );
      // Fire Lead event on successful submission
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }
      window.location.href = "/free-inspection";
    } catch {
      window.location.href = "/free-inspection";
    }
  };

  const isYesHomeowner = formData.homeowner === "yes";

  const offerBullets = [
    "Free roof inspection",
    "20% off your repair work",
    "£1,000 off full roof replacement",
    "Same day written quote",
  ];

  const trustSignals = [
    { label: "Family run since 2014" },
    { label: "10+ years experience" },
    { label: "No sales pressure" },
    { label: "We answer 24/7" },
  ];

  const formFields = (
    <>
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-1.5">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          required
          placeholder="Your full name"
          value={formData.fullName}
          onChange={(e) => setFormData((p) => ({ ...p, fullName: e.target.value }))}
          className="w-full h-11 rounded-md border border-secondary-foreground/20 bg-secondary-foreground/5 px-3 py-2 text-white text-sm placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1.5">
          Phone Number <span className="text-red-400">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          required
          placeholder="Your phone number"
          value={formData.phone}
          onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
          className="w-full h-11 rounded-md border border-secondary-foreground/20 bg-secondary-foreground/5 px-3 py-2 text-white text-sm placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="Your email address"
          value={formData.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
          className="w-full h-11 rounded-md border border-secondary-foreground/20 bg-secondary-foreground/5 px-3 py-2 text-white text-sm placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="postcode" className="block text-sm font-medium text-white/80 mb-1.5">
          Postcode <span className="text-red-400">*</span>
        </label>
        <input
          id="postcode"
          type="text"
          required
          placeholder="Your postcode"
          value={formData.postcode}
          onChange={(e) => setFormData((p) => ({ ...p, postcode: e.target.value }))}
          className="w-full h-11 rounded-md border border-secondary-foreground/20 bg-secondary-foreground/5 px-3 py-2 text-white text-sm placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="homeowner" className="block text-sm font-medium text-white/80 mb-1.5">
          Are you the homeowner of this property? <span className="text-red-400">*</span>
        </label>
        <select
          id="homeowner"
          required
          value={formData.homeowner}
          onChange={(e) => handleHomeownerChange(e.target.value)}
          className="w-full h-11 rounded-md border border-secondary-foreground/20 bg-secondary-foreground/5 px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="" disabled>
            Please select
          </option>
          <option value="yes">Yes I am the homeowner</option>
          <option value="no">No I am not the homeowner</option>
        </select>
      </div>

      {showNotHomeowner && (
        <p className="text-red-400 text-sm leading-relaxed">
          Thank you for your interest. Our free inspection is only available to homeowners. Please speak to the
          property owner about booking a free inspection.
        </p>
      )}

      {!showNotHomeowner && (
        <button
          type="submit"
          disabled={submitting || !isYesHomeowner}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold font-heading py-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting…" : "Claim Your Free Inspection"}
        </button>
      )}
    </>
  );

  const offerBulletsSection = (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
      {offerBullets.map((item) => (
        <div
          key={item}
          className="flex items-center gap-2.5 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 px-3 py-2.5 md:px-4 md:py-3"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-xs md:text-base text-white font-sans">{item}</span>
        </div>
      ))}
    </section>
  );

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      {/* Header — logo only */}
      <header className="w-full bg-secondary border-b border-secondary-foreground/10">
        <div className="max-w-5xl mx-auto flex items-center justify-center py-2.5 md:py-4 px-4">
          <img
            src={logo}
            alt={`${siteData.businessName} logo`}
            width={220}
            height={88}
            className="h-10 md:h-14 w-auto object-contain"
          />
        </div>
      </header>

      {/* ===== MOBILE LAYOUT (hidden on md+) ===== */}
      <main className="md:hidden flex-1 w-full max-w-xl mx-auto px-4 py-4">
        {/* Mobile headline */}
        <section className="text-center mb-3">
          <h1 className="text-lg font-heading font-bold text-white leading-snug mb-1">
            Your Roof Isn't Fine.
            <br />
            It's Just Not Leaking Yet.
          </h1>
          <p className="text-xs text-primary font-sans leading-relaxed">
            Join hundreds of Bristol, Bristol, and the Lakes homeowners who have already protected their homes this spring.
          </p>
        </section>

        {/* Photo */}
        <section className="flex flex-col items-center mb-3">
          <img
            src={jamesPhoto}
            alt="James Mason, Owner"
            className="w-16 h-16 rounded-full object-cover border-2 border-primary mb-1"
          />
          <span className="text-[11px] text-primary font-sans">James Mason, Owner</span>
        </section>

        {/* Google review card */}
        <div className="mb-3">
          <GoogleReviewCard />
        </div>

        {/* Mobile trust signals — compact row */}
        <section className="flex items-center justify-center gap-2 mb-3 flex-wrap">
          {trustSignals.map((t, i) => (
            <span key={t.label} className="flex items-center gap-1 text-[10px] text-secondary-foreground/70 font-sans whitespace-nowrap">
              {t.label}
              {i < trustSignals.length - 1 && <span className="ml-2 text-primary/50">·</span>}
            </span>
          ))}
        </section>

        {/* Offer bullets */}
        <div className="mb-4">
          {offerBulletsSection}
        </div>

        {/* Mobile form */}
        <h2 className="text-lg font-heading font-bold text-white text-center mb-3">GET YOUR FREE ROOF INSPECTION</h2>
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {formFields}
        </form>
      </main>

      {/* ===== DESKTOP LAYOUT (hidden below md) ===== */}
      <main className="hidden md:block flex-1 w-full max-w-xl mx-auto px-4 py-16">
        {/* ZONE 1 — Continuity headline */}
        <section className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
            Your Roof Isn't Fine.
            <br />
            It's Just Not Leaking Yet.
          </h1>
          <p className="text-lg text-primary font-sans leading-relaxed">
            Join hundreds of Bristol, Bristol, and the Lakes homeowners who have already protected their homes this spring.
          </p>
        </section>
        {/* Photo */}
        <section className="flex flex-col items-center mb-6">
          <img
            src={jamesPhoto}
            alt="James Mason, Owner"
            className="w-20 h-20 rounded-full object-cover border-2 border-primary mb-2"
          />
          <span className="text-sm text-primary font-sans">James Mason, Owner</span>
        </section>

        {/* ZONE 2 — Offer summary */}
        <div className="mb-8">
          {offerBulletsSection}
        </div>

        {/* ZONE 3 — Trust signals */}
        <section className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-8 text-sm text-secondary-foreground/70 font-sans">
          <span>Family run since 2014</span>
          <span className="text-primary">|</span>
          <span>No sales pressure</span>
          <span className="text-primary">|</span>
          <span>We answer 24/7</span>
        </section>

        {/* Google review card */}
        <div className="mb-8">
          <GoogleReviewCard />
        </div>

        {/* Divider */}
        <div className="h-px bg-primary/40 mb-8" />

        <h2 className="text-2xl font-heading font-bold text-white text-center mb-5">GET YOUR FREE ROOF INSPECTION</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {formFields}
        </form>
      </main>
    </div>
  );
};

export default GetYourFreeInspection;
