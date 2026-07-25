import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronRight, BookOpen } from "lucide-react";
import { CERTIFICATIONS } from "@/constants";
import { useLanguage, getCertNameKey } from "@/lib/i18n";
import type { Certification } from "@/constants/certifications";
import CertificateModal from "./CertificateModal";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const { t, tDate } = useLanguage();

  return (
    <section id="certifications" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">{t("certifications.title")}</h2>
        <p className="section-subtitle">
          {t("certifications.subtitle")}
        </p>
      </motion.div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2">
        {CERTIFICATIONS.map((cert, idx) => {
          const nameKey = getCertNameKey(cert.id);
          const issuerKey = `cert.issuer.${cert.issuer}`;
          const hasIssuerTr = t(issuerKey) !== issuerKey;
          return (
          <motion.button
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            whileHover={{ y: -2 }}
            onClick={() => setSelectedCert(cert)}
            className="glass-card p-4 text-left transition-all hover:border-accent/30
                       hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Award className="h-4 w-4 text-accent" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-medium leading-snug">
                    {nameKey ? t(nameKey) : cert.name}
                  </h3>
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-accent" />
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium text-accent/80">
                    {hasIssuerTr ? t(issuerKey) : cert.issuer}
                  </span>
                  <span className="text-border">·</span>
                  <span>{tDate(cert.date)}</span>
                  {(cert.modules || cert.image) && (
                    <>
                      <span className="text-border">·</span>
                      <span className="inline-flex items-center gap-1 text-accent/60">
                        <BookOpen className="h-3 w-3" />
                        {t("certifications.viewDetails")}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.button>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
