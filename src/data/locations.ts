export interface LocationData {
  slug: string;
  name: string;
  heroDesc: string;
  whyChoose: string[];
  nearbyLocations: string[];
  recentWork: string;
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDesc: string;
}

export const locations: LocationData[] = [
  {
    slug: "bristol",
    name: "Bristol",
    heroDesc: "Bristol is our home base. TnT Roofing Services Bristol provides trusted roofers services to homes and businesses across Bristol and the surrounding areas.",
    whyChoose: [
      "Bristol is our home base, so we are always nearby for fast response.",
      "We have completed hundreds of jobs across Bristol and know the area well.",
      "Our team lives and works locally, so we care about our reputation here.",
      "Free, no-obligation quotes for all Bristol customers."
    ],
    nearbyLocations: [],
    recentWork: "We have recently completed a number of projects across Bristol, delivering high-quality results for both residential and commercial customers.",
    faqs: [
      { q: "Do you cover all areas of Bristol?", a: "Yes. We cover the whole of Bristol and surrounding areas." },
      { q: "How quickly can you start work in Bristol?", a: "We are locally based, so we can usually arrange a visit within a few days." },
      { q: "Do you offer free quotes in Bristol?", a: "Yes. All our quotes are free, with no obligation." }
    ],
    metaTitle: "Roofers in Bristol | TnT Roofing Services Bristol",
    metaDesc: "Looking for trusted roofers in Bristol? TnT Roofing Services Bristol offers free quotes, quality workmanship, and fully insured services."
  }
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find(l => l.slug === slug);
}
