import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronRight, GraduationCap, Clock, BarChart3 } from "lucide-react";
import { COURSES_IN_PROGRESS } from "@/constants";
import { useLanguage } from "@/lib/i18n";
import type { CourseInProgress } from "@/constants/courseInProgress";
import CourseModal from "./CourseModal";

export default function CourseInProgress() {
  const [selectedCourse, setSelectedCourse] = useState<CourseInProgress | null>(null);
  const { t, tDate } = useLanguage();

  return (
    <section id="in-progress" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">{t("inProgress.title")}</h2>
        <p className="section-subtitle">
          {t("inProgress.subtitle")}
        </p>
      </motion.div>

      <div className="mt-12 grid gap-3">
        {COURSES_IN_PROGRESS.map((course, idx) => {
          const progressPct = Math.round(
            (course.completedLevels / course.totalLevels) * 100
          );
          return (
            <motion.button
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -2 }}
              onClick={() => setSelectedCourse(course)}
              className="glass-card p-4 text-left transition-all hover:border-accent/30
                         hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <GraduationCap className="h-4 w-4 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-medium leading-snug">
                      {course.name}
                    </h3>
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-accent" />
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1 text-accent/80">
                      <Clock className="h-3 w-3" />
                      {t("inProgress.started")} {tDate(course.startDate)}
                    </span>
                    <span className="text-border">·</span>
                    <span className="inline-flex items-center gap-1">
                      <BarChart3 className="h-3 w-3" />
                      {course.completedLevels}/{course.totalLevels} {t("inProgress.levels")}
                    </span>
                    <span className="text-border">·</span>
                    <span className="inline-flex items-center gap-1 text-accent/60">
                      <BookOpen className="h-3 w-3" />
                      {t("inProgress.viewCurriculum")}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progressPct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-accent"
                    />
                  </div>
                  <span className="mt-1 block text-[11px] text-muted-foreground/60">
                    {progressPct}% {t("inProgress.complete")}
                  </span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}