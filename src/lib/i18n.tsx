import { createContext, useContext, useEffect, useState } from "react";
import { TRANSLATIONS, EXPERIENCE_TRANSLATIONS } from "@/constants/translations";
import { CERT_CONTENT } from "@/constants/certTranslations";
import { COURSE_CONTENT } from "@/constants/courseTranslations";
import type { Lang } from "@/constants/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  et: (key: string) => string;
  ct: (key: string, fallback?: string) => string;
  cct: (key: string, fallback?: string) => string;
  tDate: (date: string) => string;
}

const CERT_NAME_KEYS: Record<string, string> = {
  "cert-1": "cert.name.genai",
  "cert-2": "cert.name.ciklumAi",
  "cert-3": "cert.name.ciklumQaAi",
  "cert-4": "cert.name.javarush",
  "cert-5": "cert.name.selenium",
  "cert-6": "cert.name.english",
  "cert-7": "cert.name.nodejs",
  "cert-8": "cert.name.javascript",
  "cert-9": "cert.name.qaautomation",
  "cert-10": "cert.name.sql",
  "cert-11": "cert.name.seleniumCucumber",
  "cert-12": "cert.name.restassured",
  "cert-13": "cert.name.playwright",
};

export function getCertNameKey(certId: string): string | undefined {
  return CERT_NAME_KEYS[certId];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang") as Lang | null;
      if (stored === "en" || stored === "uk") return stored;
      // Default to Ukrainian for Ukrainian visitors
      const browserLang = navigator.language;
      if (browserLang?.startsWith("uk")) return "uk";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
  };

  const t = (key: string): string => {
    const entry = TRANSLATIONS[key];
    if (!entry) {
      console.warn(`Missing translation key: ${key}`);
      return key;
    }
    return entry[lang];
  };

  const et = (key: string): string => {
    const entry = EXPERIENCE_TRANSLATIONS[key];
    if (!entry) {
      console.warn(`Missing experience translation key: ${key}`);
      return key;
    }
    return entry[lang];
  };

  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const tDate = (date: string): string => {
    if (lang === "en") return date;
    // Replace English month abbreviations with Ukrainian ones
    let result = date;
    for (const m of MONTHS) {
      const tr = TRANSLATIONS[`month.${m}`];
      if (tr) {
        result = result.replace(new RegExp(m, "g"), tr[lang]);
      }
    }
    return result;
  };

  const ct = (key: string, fallback?: string): string => {
    const entry = CERT_CONTENT[key];
    if (!entry) return fallback ?? key;
    return entry[lang];
  };

  const cct = (key: string, fallback?: string): string => {
    const entry = COURSE_CONTENT[key];
    if (!entry) return fallback ?? key;
    return entry[lang];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, et, ct, cct, tDate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}