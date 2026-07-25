import { motion } from "framer-motion";
import { EXPERIENCES } from "@/constants";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          10+ years in quality assurance — web, mobile, and backend
        </p>
      </motion.div>

      <div className="relative mt-12">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-border md:block" />

        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.organisation + idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-1.5 hidden h-3 w-3 rounded-full border-2 border-accent bg-background md:block" />

              <div className="glass-card p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-accent/10">
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={`${exp.organisation} logo`}
                          className="h-full w-full object-contain p-1"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-sm font-bold text-accent">
                          {exp.organisation.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="font-semibold">{exp.organisation}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  {exp.positions.map((pos, posIdx) => (
                    <div
                      key={posIdx}
                      className={
                        posIdx > 0 ? "border-t border-border/50 pt-4" : ""
                      }
                    >
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-sm font-medium">{pos.title}</h3>
                        <span className="text-xs text-muted-foreground">
                          {pos.duration}
                        </span>
                      </div>

                      {pos.description && (
                        <p className="mt-1.5 text-xs text-muted-foreground/70">
                          {pos.description}
                        </p>
                      )}

                      {pos.responsibilities.length > 0 && (
                        <div className="mt-2.5 space-y-1">
                          {pos.responsibilities.map((item, rIdx) => (
                            <div
                              key={rIdx}
                              className="flex gap-2 text-sm text-muted-foreground"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                              <p>{item}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {pos.achievements && pos.achievements.length > 0 && (
                        <div className="mt-2 space-y-0.5">
                          {pos.achievements.map((item, aIdx) => (
                            <div
                              key={aIdx}
                              className="flex gap-2 text-sm text-accent/80"
                            >
                              <span className="mt-1.5 shrink-0 text-xs">
                                &#9733;
                              </span>
                              <p>{item}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {pos.tech.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {pos.tech.map((t) => (
                            <span key={t} className="pill text-[11px]">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}