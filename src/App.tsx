import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "@/lib/i18n";
import Loading from "@/components/Loading";
import GradientOrbs from "@/components/GradientOrbs";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const hash = window.location.hash;
    if (!hash) return;
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView();
    });
  }, [loading]);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {loading && <Loading key="loading" />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen">
          <CustomCursor />
          <GradientOrbs />
          <Navbar />
          <ScrollToTop />
          <main>
            <Hero />
            <MarqueeStrip />
            <Experience />
            <Skills />
            <Education />
            <Certifications />
            <Footer />
          </main>
        </div>
      )}
    </LanguageProvider>
  );
}
