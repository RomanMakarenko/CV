import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ExternalLink, BookOpen, Github, ChevronDown, FolderGit2 } from "lucide-react";
import { useLanguage, getCertNameKey } from "@/lib/i18n";
import type { Certification, CurriculumModule } from "@/constants/certifications";

interface CertificateModalProps {
  cert: Certification;
  onClose: () => void;
}

function ModuleAccordion({ mod, index, certId }: { mod: CurriculumModule; index: number; certId: string }) {
  const [open, setOpen] = useState(index === 0);
  const { lang, t, ct, cct } = useLanguage();
  const hasProjects = mod.projects && mod.projects.length > 0;

  const moduleNameKey = `cc.${certId}.m${index}.name`;
  const courseLevelKey = mod.courseLevelNumber
    ? `cc.course-ai-university.l${mod.courseLevelNumber}`
    : undefined;

  return (
    <div className="rounded-xl border border-border/30 bg-muted/20 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left
                   transition-colors hover:bg-muted/30"
      >
        <div className="flex items-center gap-3">
          <span className={`flex h-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent ${mod.courseLevelNumber ? "min-w-[4.5rem] px-2" : "w-7"}`}>
            {mod.courseLevelNumber
              ? `${lang === "uk" ? "Рівень" : "Level"} ${mod.courseLevelNumber}`
              : index + 1}
          </span>
          <h3 className="text-sm font-semibold leading-snug">
            {courseLevelKey
              ? (lang === "uk" ? mod.nameUk : mod.nameEn) ?? cct(`${courseLevelKey}.title`, mod.name)
              : ct(moduleNameKey, mod.name)}
          </h3>
          {hasProjects && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
              <FolderGit2 className="h-3 w-3" />
              {mod.projects!.length}
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/20 px-5 pb-5 pt-3">
              {/* Levels grid */}
              <div className="grid gap-3 sm:grid-cols-2">
                {mod.levels.map((level, lIdx) => {
                  const levelTitleKey = `cc.${certId}.m${index}.l${lIdx}.title`;
                  return (
                  <div
                    key={lIdx}
                    className={`rounded-lg border p-3 ${
                      level.isProject
                        ? "border-accent/20 bg-accent/5"
                        : "border-border/20 bg-muted/10"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      {level.isProject && (
                        <FolderGit2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                      )}
                      <h4 className="text-xs font-semibold leading-snug text-foreground/90">
                        {ct(levelTitleKey, level.title)}
                      </h4>
                    </div>
                    {level.topics.length > 0 && (
                      <ul className="mt-2 space-y-0.5">
                        {level.topics.map((topic, tIdx) => {
                          const topicKey = `cc.${certId}.m${index}.l${lIdx}.t${tIdx}`;
                          return (
                          <li
                            key={tIdx}
                            className="flex gap-1.5 text-[11px] text-muted-foreground leading-relaxed"
                          >
                            <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent/40" />
                            {ct(topicKey, topic)}
                          </li>
                          );
                        })}
                      </ul>
                    )}
                    {level.projects && level.projects.length > 0 && (
                      <div className="mt-3 space-y-3">
                        {level.projects.map((project, pIdx) => (
                          <div
                            key={`${project.name}-${pIdx}`}
                            className="overflow-hidden rounded-lg border border-border/30 bg-card"
                          >
                            {project.images && project.images.length > 0 ? (
                              <div className="grid grid-cols-2 gap-1.5">
                                {project.images.map((image, imageIdx) => (
                                  <div key={imageIdx} className="aspect-video overflow-hidden bg-muted">
                                    <img src={image} alt={`${project.name} ${imageIdx + 1}`} className="h-full w-full object-cover" loading="lazy" />
                                  </div>
                                ))}
                              </div>
                            ) : project.image ? (
                              <div className="aspect-video overflow-hidden bg-muted">
                                <img src={project.image} alt={project.name} className="h-full w-full object-cover" loading="lazy" />
                              </div>
                            ) : null}
                            <div className="p-3">
                              <p className="text-xs font-semibold">{project.name}</p>
                              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                                {project.description}
                              </p>
                              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                                <a
                                  href={lang === "uk" && project.urlUk ? project.urlUk : project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 rounded-lg bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent transition-colors hover:bg-accent/20"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  {project.isDocument ? t("inProgress.viewWork") : t("inProgress.play")}
                                </a>
                                {project.sourceUrl && (
                                  <a
                                    href={project.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 rounded-lg bg-muted/30 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                                  >
                                    <Github className="h-3 w-3" />
                                    Code
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  );
                })}
              </div>

              {courseLevelKey && mod.courseTitle && (
                <div className="mt-4 rounded-lg border border-border/20 bg-muted/10 p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {lang === "uk" ? "Назва рівня в програмі" : "Course outline title"}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {cct(`${courseLevelKey}.title`, mod.courseTitle)}
                  </p>
                </div>
              )}

              {mod.topics && mod.topics.length > 0 && (
                <div className="mt-4 rounded-lg border border-border/20 bg-muted/10 p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {lang === "uk" ? "Ключові теми" : "Key topics"}
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {mod.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                        <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                        {courseLevelKey
                          ? cct(`${courseLevelKey}.t${topicIdx}`, topic)
                          : topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {mod.lessons && mod.lessons.length > 0 && (
                <div className="mt-4 rounded-lg border border-border/20 bg-muted/10 p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                    {lang === "uk" ? "Уроки рівня" : "Level lessons"}
                  </h4>
                  <ol className="mt-2 list-inside list-decimal space-y-1">
                    {mod.lessons.map((lesson, lessonIdx) => (
                      <li key={lessonIdx} className="text-xs leading-relaxed text-muted-foreground">
                        {lesson[lang]}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* GitHub projects for this module */}
              {hasProjects && (
                <div className="mt-4 border-t border-border/20 pt-4">
                  <p className="mb-2.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                    <Github className="h-3 w-3" />
                    {t("modal.projects")}
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {mod.projects!.map((proj, pIdx) => {
                      const projNameKey = `cc.${certId}.m${index}.p${pIdx}.name`;
                      const projDescKey = `cc.${certId}.m${index}.p${pIdx}.desc`;
                      const projectName = courseLevelKey
                        ? cct(`${courseLevelKey}.p${pIdx}.name`, proj.name)
                        : ct(projNameKey, proj.name);
                      const projectDescription = courseLevelKey
                        ? cct(`${courseLevelKey}.p${pIdx}.desc`, proj.description)
                        : ct(projDescKey, proj.description);
                      return (
                      <article
                        key={`${proj.name}-${pIdx}`}
                        className="overflow-hidden rounded-lg border border-border/30 bg-muted/20"
                      >
                        {proj.images && proj.images.length > 0 ? (
                          <div className="grid grid-cols-2 gap-1.5">
                            {proj.images.map((image, imageIdx) => (
                              <div key={imageIdx} className="aspect-video overflow-hidden bg-muted">
                                <img src={image} alt={`${projectName} ${imageIdx + 1}`} className="h-full w-full object-cover" loading="lazy" />
                              </div>
                            ))}
                          </div>
                        ) : proj.image ? (
                          <div className="aspect-video overflow-hidden bg-muted">
                            <img src={proj.image} alt={projectName} className="h-full w-full object-cover" loading="lazy" />
                          </div>
                        ) : null}
                        <div className="p-3">
                          <p className="text-sm font-medium">{projectName}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {projectDescription}
                          </p>
                          <div className="mt-2.5 flex flex-wrap items-center gap-2">
                            <a
                              href={lang === "uk" && proj.urlUk ? proj.urlUk : proj.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-lg bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent transition-colors hover:bg-accent/20"
                            >
                              <ExternalLink className="h-3 w-3" />
                              {proj.isDocument ? t("inProgress.viewWork") : t("inProgress.play")}
                            </a>
                            {proj.sourceUrl && (
                              <a
                                href={proj.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-lg bg-muted/30 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                              >
                                <Github className="h-3 w-3" />
                                Code
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const CERT_DESC_KEYS: Record<string, string> = {
  "cert-1": "cert.desc.genai",
  "cert-2": "cert.desc.ciklumAi",
  "cert-3": "cert.desc.ciklumQaAi",
  "cert-4": "cert.desc.javarush",
  "cert-5": "cert.desc.selenium",
  "cert-11": "cert.desc.seleniumCucumber",
  "cert-12": "cert.desc.restassured",
  "cert-13": "cert.desc.playwright",
  "cert-14": "cert.desc.qaFromScratch2026",
  "cert-15": "cert.desc.deepEval",
  "cert-16": "cert.desc.playwrightTypeScript",
};

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  const { t, tDate, cct } = useLanguage();
  const certNameKey = getCertNameKey(cert.id);
  const issuerKey = `cert.issuer.${cert.issuer}`;
  const hasIssuerTr = t(issuerKey) !== issuerKey;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const hasModules = cert.modules && cert.modules.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-background/85 backdrop-blur-md" />

      {/* Modal card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative my-8 w-full max-w-5xl overflow-hidden rounded-2xl border border-border/50
                   bg-card shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center
                     rounded-full border border-border bg-card/80 text-muted-foreground
                     backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent"
          aria-label={t("modal.close")}
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="border-b border-border/50 px-6 py-5 sm:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{certNameKey ? t(certNameKey) : cert.name}</h2>
              <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-accent">{hasIssuerTr ? t(issuerKey) : cert.issuer}</span>
                <span className="text-border">·</span>
                <span>{tDate(cert.date)}</span>
              </div>
              {(cert.description || CERT_DESC_KEYS[cert.id]) && (
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground/80 leading-relaxed">
                  {cert.id === "cert-17"
                    ? cct("cc.course-ai-university.desc", cert.description ?? "")
                    : CERT_DESC_KEYS[cert.id]
                      ? t(CERT_DESC_KEYS[cert.id])
                      : cert.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-h-[70vh] overflow-y-auto">
          {/* Certificate image */}
          {cert.image && (
            <div className="border-b border-border/30 px-6 py-5 sm:px-8">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground/80">
                <Award className="h-4 w-4" />
                {t("modal.certificate")}
              </h3>
              <div className="overflow-hidden rounded-xl border border-border/30 bg-muted/20">
                <img
                  src={cert.image}
                  alt={certNameKey ? t(certNameKey) : cert.name}
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* Modules — accordion */}
          {hasModules && (
            <div className="px-6 py-5 sm:px-8">
              <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground/80">
                <BookOpen className="h-4 w-4" />
                {t("modal.studyProgram")}
                <span className="ml-auto text-xs font-normal normal-case tracking-normal text-muted-foreground/50">
                  {cert.modules!.length} {cert.id === "cert-17" ? t("inProgress.levels") : t("modal.modules")}
                </span>
              </h3>

              <div className="space-y-3">
                {cert.modules!.map((mod, mIdx) => (
                  <ModuleAccordion key={mIdx} mod={mod} index={mIdx} certId={cert.id} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 px-6 py-3 sm:px-8">
          <p className="text-center text-[10px] text-muted-foreground">
            {t("modal.closeHint")}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
