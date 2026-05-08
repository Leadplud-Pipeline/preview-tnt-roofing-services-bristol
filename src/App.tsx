import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteTheme } from "@/siteData";
import Index from "./pages/Index";
import About from "./pages/About";
import ServicesHub from "./pages/ServicesHub";
import ServicePage from "./pages/ServicePage";
import LocationsHub from "./pages/LocationsHub";
import LocationPage from "./pages/LocationPage";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import BlogHub from "./pages/BlogHub";
import BlogPostPage from "./pages/BlogPostPage";
import ThankYou from "./pages/ThankYou";
import FreeInspection from "./pages/FreeInspection";
import ThankYouInspection from "./pages/ThankYouInspection";
import GetYourFreeInspection from "./pages/GetYourFreeInspection";
import NotFound from "./pages/NotFound";

function hexToHsl(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let hue = 0, sat = 0;
  const lit = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    sat = lit > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: hue = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: hue = ((b - r) / d + 2) / 6; break;
      case b: hue = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(hue * 360), Math.round(sat * 100), Math.round(lit * 100)];
}

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (!siteTheme.accent) return;
    const [h, s, l] = hexToHsl(siteTheme.accent);
    const hsl = `${h} ${s}% ${l}%`;
    const root = document.documentElement;
    root.style.setProperty("--primary", hsl);
    root.style.setProperty("--ring", hsl);
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/locations" element={<LocationsHub />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/blog" element={<BlogHub />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/free-inspection" element={<FreeInspection />} />
          <Route path="/thank-you-inspection" element={<ThankYouInspection />} />
          <Route path="/get-your-free-inspection" element={<GetYourFreeInspection />} />
          <Route path="/our-services" element={<Navigate to="/services" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
