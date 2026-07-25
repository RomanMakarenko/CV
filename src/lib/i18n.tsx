import { createContext, useContext, useEffect, useState } from "react";
import { TRANSLATIONS, EXPERIENCE_TRANSLATIONS } from "@/constants/translations";
import type { Lang } from "@/constants/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  et: (key: string) => string;
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

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, et }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}