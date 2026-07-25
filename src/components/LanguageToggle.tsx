import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import type { Lang } from "@/constants/translations";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const toggleLang = () => {
    setLang(lang === "en" ? "uk" : "en");
  };

  return (
    <button
      onClick={toggleLang}
      className="relative flex h-9 w-9 items-center justify-center rounded-full
                 border border-border bg-card text-xs font-semibold
                 transition-colors hover:bg-muted"
      aria-label={lang === "en" ? "Switch to Ukrainian" : "Переключити на англійську"}
    >
      <motion.span
        key={lang}
        initial={{ opacity: 0, y: -8, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-muted-foreground"
      >
        {lang === "en" ? "EN" : "UA"}
      </motion.span>
    </button>
  );
}