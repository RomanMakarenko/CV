import { motion } from "framer-motion";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";
import { EDUCATION_LIST } from "@/constants";
import { useLanguage } from "@/lib/i18n";

const EDU_KEYS: Record<string, { title: string; degree: string; duration: string; content1: string; content2: string }> = {
  "education-1": {
    title: "edu.kpi.title",
    degree: "edu.kpi.degree",
    duration: "edu.kpi.graduated",
    content1: "education.major",
    content2: "education.fulltime",
  },
  "education-2": {
    title: "edu.school269.title",
    degree: "edu.school269.degree",
    duration: "edu.school269.duration",
    content1: "education.schoolSpecialization",
    content2: "education.secondary",
  },
};

export default function Education() {
  const { t, et } = useLanguage();
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">{t("education.title")}</h2>
        <p className="section-subtitle">{t("education.subtitle")}</p>
      </motion.div>

      <div className="mt-12 grid gap-6">
        {EDUCATION_LIST.map((edu, index) => {
          const keys = EDU_KEYS[edu.id];
          return (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
          >
            {/* Decorative background gradient */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/5 blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-sky-400/5 blur-[80px]" />
            </div>

            <div className="relative p-6 md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-accent/10">
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={`${edu.title} logo`}
                      className="h-full w-full object-contain p-1"
                      loading="lazy"
                    />
                  ) : (
                    <GraduationCap className="h-6 w-6 text-accent" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight md:text-xl">
                    {keys ? et(keys.title) : edu.title}
                  </h3>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2.5">
                <GraduationCap className="h-4 w-4 text-accent" />
                <span className="font-medium text-accent">{keys ? et(keys.degree) : edu.degree}</span>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="flex items-center gap-2.5 rounded-lg bg-muted/40 px-3 py-2.5">
                  <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm">{keys ? t(keys.content1) : edu.content1}</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-lg bg-muted/40 px-3 py-2.5">
                  <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm">{keys ? t(keys.content2) : edu.content2}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{t("education.location")}</span>
                </div>
                <span className="text-border">|</span>
                <span>{keys ? et(keys.duration) : edu.duration}</span>
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
}
