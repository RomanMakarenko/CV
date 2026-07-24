import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ExternalLink, BookOpen, Github, ChevronDown, FolderGit2 } from "lucide-react";
import type { Certification, CurriculumModule } from "@/constants/certifications";

interface CertificateModalProps {
  cert: Certification;
  onClose: () => void;
}

function ModuleAccordion({ mod, index }: { mod: CurriculumModule; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const hasProjects = mod.projects && mod.projects.length > 0;

  return (
    <div className="rounded-xl border border-border/30 bg-muted/20 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left
                   transition-colors hover:bg-muted/30"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
            {index + 1}
          </span>
          <h3 className="text-sm font-semibold leading-snug">{mod.name}</h3>
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
                {mod.levels.map((level, lIdx) => (
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
                        {level.title}
                      </h4>
                    </div>
                    {level.topics.length > 0 && (
                      <ul className="mt-2 space-y-0.5">
                        {level.topics.map((topic, tIdx) => (
                          <li
                            key={tIdx}
                            className="flex gap-1.5 text-[11px] text-muted-foreground leading-relaxed"
                          >
                            <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent/40" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* GitHub projects for this module */}
              {hasProjects && (
                <div className="mt-4 border-t border-border/20 pt-4">
                  <p className="mb-2.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                    <Github className="h-3 w-3" />
                    Projects
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {mod.projects!.map((proj) => (
                      <a
                        key={proj.url}
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2.5 rounded-lg border border-border/30
                                   bg-muted/20 p-3 transition-all hover:border-accent/30
                                   hover:bg-muted/40"
                      >
                        <Github className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium">{proj.name}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {proj.description}
                          </p>
                        </div>
                        <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      </a>
                    ))}
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

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
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
          aria-label="Close"
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
              <h2 className="text-xl font-bold">{cert.name}</h2>
              <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-accent">{cert.issuer}</span>
                <span className="text-border">·</span>
                <span>{cert.date}</span>
              </div>
              {cert.description && (
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground/80 leading-relaxed">
                  {cert.description}
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
                Certificate
              </h3>
              <div className="overflow-hidden rounded-xl border border-border/30 bg-muted/20">
                <img
                  src={cert.image}
                  alt={cert.name}
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
                Study Program
                <span className="ml-auto text-xs font-normal normal-case tracking-normal text-muted-foreground/50">
                  {cert.modules!.length} modules
                </span>
              </h3>

              <div className="space-y-3">
                {cert.modules!.map((mod, mIdx) => (
                  <ModuleAccordion key={mIdx} mod={mod} index={mIdx} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 px-6 py-3 sm:px-8">
          <p className="text-center text-[10px] text-muted-foreground">
            Press{" "}
            <kbd className="rounded border border-border bg-muted px-1 py-0.5 text-[9px]">Esc</kbd>{" "}
            or click outside to close
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
