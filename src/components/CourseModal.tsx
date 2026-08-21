import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  GraduationCap,
  BookOpen,
  CheckCircle,
  Circle,
  ExternalLink,
  Github,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import type { CourseInProgress } from "@/constants/courseInProgress";

interface CourseModalProps {
  course: CourseInProgress;
  onClose: () => void;
}

function LevelList({ course }: { course: CourseInProgress }) {
  const { t, cct } = useLanguage();
  const cid = course.id;

  return (
    <div className="space-y-1">
      {course.levels.map((level) => {
        const completed = level.number <= course.completedLevels;
        const hasProjects = level.projects && level.projects.length > 0;
        const hasTopics = level.topics && level.topics.length > 0;
        const levelTitleKey = `cc.${cid}.l${level.number}.title`;
        const levelTKey = (tIdx: number) => `cc.${cid}.l${level.number}.t${tIdx}`;
        const projNameKey = (pIdx: number) => `cc.${cid}.l${level.number}.p${pIdx}.name`;
        const projDescKey = (pIdx: number) => `cc.${cid}.l${level.number}.p${pIdx}.desc`;

        return (
          <div
            key={level.number}
            className={`rounded-lg border p-3 transition-colors ${
              completed
                ? "border-accent/15 bg-accent/[0.03]"
                : "border-border/20 bg-muted/10 opacity-60"
            }`}
          >
            <div className="flex items-start gap-3">
              {completed ? (
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              ) : (
                <Circle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[11px] font-bold ${
                      completed ? "text-accent" : "text-muted-foreground/50"
                    }`}
                  >
                    {t("inProgress.level")} {level.number}
                  </span>
                </div>
                <p className="mt-0.5 text-sm leading-snug text-foreground/80">
                  {cct(levelTitleKey, level.title)}
                </p>

                {/* Plain text topics */}
                {hasTopics && (
                  <ul className="mt-1.5 space-y-0.5">
                    {level.topics!.map((topic, tIdx) => {
                      const urlMatch = topic.match(
                        /^(https?:\/\/[^\s]+)(.*)$/
                      );
                      return (
                        <li
                          key={tIdx}
                          className="flex gap-1.5 text-[11px] text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent/40" />
                          {urlMatch ? (
                            <>
                              <a
                                href={urlMatch[1]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent/80 hover:text-accent hover:underline underline-offset-2"
                              >
                                {urlMatch[1]}
                              </a>
                              {urlMatch[2]}
                            </>
                          ) : (
                            cct(levelTKey(tIdx), topic)
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Project cards */}
                {hasProjects && (
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {level.projects!.map((project, pIdx) => (
                      <div
                        key={pIdx}
                        className="overflow-hidden rounded-xl border border-border/20 bg-card transition-all hover:border-accent/30 hover:shadow-md"
                      >
                        {/* Screenshot(s) */}
                        {project.images && project.images.length > 0 ? (
                          <div className="grid grid-cols-2 gap-1.5">
                            {project.images.map((img, i) => (
                              <div
                                key={i}
                                className="aspect-video w-full overflow-hidden bg-muted"
                              >
                                <img
                                  src={img}
                                  alt={`${project.name} ${i + 1}`}
                                  className="h-full w-full object-cover transition-transform hover:scale-105"
                                  loading="lazy"
                                />
                              </div>
                            ))}
                          </div>
                        ) : project.image ? (
                          <div className="aspect-video w-full overflow-hidden bg-muted">
                            <img
                              src={project.image}
                              alt={project.name}
                              className="h-full w-full object-cover transition-transform hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        ) : null}
                        {/* Info */}
                        <div className="p-3">
                          <h4 className="text-sm font-semibold leading-snug">
                            {cct(projNameKey(pIdx), project.name)}
                          </h4>
                          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground/80">
                            {cct(projDescKey(pIdx), project.description)}
                          </p>
                          {/* Links */}
                          <div className="mt-2.5 flex items-center gap-2.5">
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-lg bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent transition-colors hover:bg-accent/20"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Play
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
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function CourseModal({ course, onClose }: CourseModalProps) {
  const { t, cct, tDate } = useLanguage();
  const progressPct = Math.round(
    (course.completedLevels / course.totalLevels) * 100
  );

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
              <GraduationCap className="h-6 w-6 text-accent" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold">{course.name}</h2>
              <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-accent/80">
                  {t("inProgress.started")} {tDate(course.startDate)}
                </span>
                <span className="text-border">·</span>
                <span>
                  {t("inProgress.estimatedEnd")} {tDate(course.endDate)}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground/80 leading-relaxed">
                {cct(`cc.${course.id}.desc`, course.description)}
              </p>
              {/* Progress bar in header */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {t("inProgress.progress")}: {course.completedLevels}/
                    {course.totalLevels} {t("inProgress.levels")}
                  </span>
                  <span className="font-medium text-accent">{progressPct}%</span>
                </div>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className="h-full rounded-full bg-accent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-h-[70vh] overflow-y-auto">
          {/* Levels with projects */}
          <div className="px-6 py-5 sm:px-8">
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground/80">
              <BookOpen className="h-4 w-4" />
              {t("inProgress.curriculum")}
              <span className="ml-auto text-xs font-normal normal-case tracking-normal text-muted-foreground/50">
                {course.completedLevels}/{course.totalLevels}{" "}
                {t("inProgress.levels")}
              </span>
            </h3>
            <LevelList course={course} />
          </div>
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