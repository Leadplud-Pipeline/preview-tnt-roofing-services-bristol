import type { Icon } from "@phosphor-icons/react";
import { ArrowsClockwise, Drop, House, HouseLine, MagnifyingGlass, Shield } from "@phosphor-icons/react";

export interface ServiceData {
  slug: string;
  name: string;
  shortDesc: string;
  heroDesc: string;
  icon: Icon;
  included: string[];
  whyChoose: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDesc: string;
}

export const services: ServiceData[] = [
  {
    slug: "roof-repairs",
    name: "Roof Repairs",
    shortDesc: "We fix all types of roof damage including missing tiles, leaks, and storm damage. Our prompt response ensures your property stays protected from the elements.",
    heroDesc: "We fix all types of roof damage including missing tiles, leaks, and storm damage. Our prompt response ensures your property stays protected from the elements. TnT Roofing Services Bristol provides professional roof repairs services across Bristol.",
    icon: HouseLine,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof repairs cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Repairs in Bristol | TnT Roofing Services Bristol",
    metaDesc: "Professional roof repairs in Bristol and Bristol. TnT Roofing Services Bristol offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortDesc: "Complete roof replacement using quality materials and expert installation techniques. We handle everything from planning to completion with minimal disruption to your daily routine.",
    heroDesc: "Complete roof replacement using quality materials and expert installation techniques. We handle everything from planning to completion with minimal disruption to your daily routine. TnT Roofing Services Bristol provides professional roof replacement services across Bristol.",
    icon: ArrowsClockwise,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof replacement cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Replacement in Bristol | TnT Roofing Services Bristol",
    metaDesc: "Professional roof replacement in Bristol and Bristol. TnT Roofing Services Bristol offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    shortDesc: "Professional leak detection and repair services to protect your property from water damage. We use advanced techniques to locate and fix leaks quickly and effectively.",
    heroDesc: "Professional leak detection and repair services to protect your property from water damage. We use advanced techniques to locate and fix leaks quickly and effectively. TnT Roofing Services Bristol provides professional leak detection services across Bristol.",
    icon: Drop,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does leak detection cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Leak Detection in Bristol | TnT Roofing Services Bristol",
    metaDesc: "Professional leak detection in Bristol and Bristol. TnT Roofing Services Bristol offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "roof-maintenance",
    name: "Roof Maintenance",
    shortDesc: "Regular maintenance services to keep your roof in excellent condition year-round. Our preventative approach helps avoid costly repairs and extends your roof\'s lifespan.",
    heroDesc: "Regular maintenance services to keep your roof in excellent condition year-round. Our preventative approach helps avoid costly repairs and extends your roof\'s lifespan. TnT Roofing Services Bristol provides professional roof maintenance services across Bristol.",
    icon: Shield,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof maintenance cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Maintenance in Bristol | TnT Roofing Services Bristol",
    metaDesc: "Professional roof maintenance in Bristol and Bristol. TnT Roofing Services Bristol offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "guttering-services",
    name: "Guttering Services",
    shortDesc: "Complete gutter installation, repair, and cleaning services to protect your property\'s foundations. We ensure proper water drainage and prevent damage from blocked or damaged gutters.",
    heroDesc: "Complete gutter installation, repair, and cleaning services to protect your property\'s foundations. We ensure proper water drainage and prevent damage from blocked or damaged gutters. TnT Roofing Services Bristol provides professional guttering services services across Bristol.",
    icon: House,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does guttering services cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Guttering Services in Bristol | TnT Roofing Services Bristol",
    metaDesc: "Professional guttering services in Bristol and Bristol. TnT Roofing Services Bristol offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "roof-inspections",
    name: "Roof Inspections",
    shortDesc: "Thorough roof inspections to assess condition and identify potential issues before they become major problems. We provide detailed reports with recommendations and cost estimates.",
    heroDesc: "Thorough roof inspections to assess condition and identify potential issues before they become major problems. We provide detailed reports with recommendations and cost estimates. TnT Roofing Services Bristol provides professional roof inspections services across Bristol.",
    icon: MagnifyingGlass,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof inspections cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Inspections in Bristol | TnT Roofing Services Bristol",
    metaDesc: "Professional roof inspections in Bristol and Bristol. TnT Roofing Services Bristol offers free quotes, quality workmanship, and fully insured services."
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
