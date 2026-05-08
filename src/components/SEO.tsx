import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import siteData from "@/siteData";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
}

const SITE_ORIGIN = siteData.seo.canonicalUrl.replace(/\/$/, "");

const SEO = ({ title, description, canonical, robots = "index, follow" }: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
    else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Robots meta
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) metaRobots.setAttribute("content", robots);
    else {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = robots;
      document.head.appendChild(meta);
    }

    // Canonical URL
    const canonicalUrl = canonical
      ? (canonical.startsWith("http") ? canonical : `${SITE_ORIGIN}${canonical}`)
      : `${SITE_ORIGIN}${location.pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (link) {
      link.href = canonicalUrl;
    } else {
      link = document.createElement("link");
      link.rel = "canonical";
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }

    // OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    if (ogUrl) {
      ogUrl.setAttribute("content", canonicalUrl);
    } else {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      ogUrl.setAttribute("content", canonicalUrl);
      document.head.appendChild(ogUrl);
    }

    // OG title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    // OG description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    // Twitter title
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);

    // Twitter description
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);

  }, [title, description, canonical, location.pathname]);

  return null;
};

export default SEO;
