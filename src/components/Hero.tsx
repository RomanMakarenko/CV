import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { ABOUT_ME, SOCIAL_MEDIA } from "@/constants";
import { useLanguage } from "@/lib/i18n";
import Magnetic from "./Magnetic";
import ResumeExport from "./ResumeExport";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="cyan__gradient absolute left-1/3 top-1/4 h-[350px] w-[350px] -translate-x-1/2 rounded-full opacity-20 dark:opacity-[0.06]" />
      </div>

      <div className="section-container relative w-full">
        <div className="grid items-center gap-10 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border
                         bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {t("hero.openToOpportunities")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {t("hero.hi")}{" "}
              <span className="gradient-text">{t("hero.firstName")}</span>
              <br />
              <span className="gradient-text">{t("hero.lastName")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 max-w-lg text-base text-muted-foreground md:text-lg"
            >
                            {t("hero.tagLine")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-3 max-w-md text-sm text-muted-foreground/70"
            >
              {t("hero.intro")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex items-center gap-3"
            >
              {SOCIAL_MEDIA.map((social) => (
                <Magnetic key={social.id} strength={0.4}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full
                               border border-border bg-card/50 text-muted-foreground
                               transition-all hover:-translate-y-0.5 hover:border-accent/50
                               hover:text-foreground hover:shadow-lg hover:shadow-accent/5"
                  >
                    <social.icon className="h-[18px] w-[18px]" />
                  </a>
                </Magnetic>
              ))}
            </motion.div>

            {/* Export buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <ResumeExport />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.2}>
                <a
                  href={SOCIAL_MEDIA[0]?.link ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5
                             text-sm font-medium text-accent-foreground transition-all
                             hover:opacity-90 hover:shadow-lg hover:shadow-accent/20"
                >
                  {t("hero.letsConnect")}
                  <Linkedin className="h-4 w-4" />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href={`mailto:${ABOUT_ME.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border
                             bg-card/50 px-6 py-2.5 text-sm font-medium text-foreground
                             transition-all hover:bg-muted"
                >
                  <Mail className="h-4 w-4" />
                  {t("hero.emailMe")}
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right — decorative QA-themed visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden md:col-span-2 md:flex md:items-center md:justify-center"
          >
            <div className="relative">
              <div className="cyan__gradient absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-25 dark:opacity-10" />
              <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-border/40 bg-card/30 p-8 backdrop-blur-sm">
                {/* QA-themed code block decoration */}
                <div className="w-full space-y-1.5 font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="mt-3 space-y-1">
                    <div className="text-blue-400">
                      <span className="text-muted-foreground">describe</span>{" "}
                      <span className="text-accent">('Login Flow', ()</span>{" "}
                      {"{"}
                    </div>
                    <div className="pl-3 text-muted-foreground/80">
                      it (<span className="text-green-400/80">'should authenticate'</span>,{" "}
                      {"{"}
                    </div>
                    <div className="pl-6 text-muted-foreground/60">
                      expect(<span className="text-accent/80">result</span>).to.be.
                      <span className="text-yellow-400/80">ok</span>;
                    </div>
                    <div className="pl-3 text-muted-foreground/80">{"}"});</div>
                    <div className="text-muted-foreground">{"}"});</div>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {["Selenium", "Appium", "Node.js", "Java", "WDIO", "Playwright", "REST Assured", "Docker"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="pill text-[11px]"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down arrow */}
        <motion.a
          href="#experience"
          aria-label="Scroll to experience section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground/50 transition-colors hover:text-accent" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}