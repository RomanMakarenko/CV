import { useState } from "react";
import { FileDown, FileText, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { buildResumeData } from "@/utils/resumeData";
import Magnetic from "./Magnetic";

export default function ResumeExport() {
  const { lang, t, et } = useLanguage();
  const [pdfLoading, setPdfLoading] = useState(false);
  const [docLoading, setDocLoading] = useState(false);

  const handlePdf = async () => {
    if (pdfLoading) return;
    setPdfLoading(true);
    try {
      const data = buildResumeData(lang, t, et);
      data.personal.summary = t("export.summary");
      // Dynamic import — @react-pdf only loads when user clicks export
      const { downloadPdf } = await import("@/utils/exportPdf");
      await downloadPdf(data, `Roman_Makarenko_CV.${lang}.pdf`);
    } catch (err) {
      console.error("PDF export failed:", err);
    } finally {
      setPdfLoading(false);
    }
  };

  const handleDoc = async () => {
    if (docLoading) return;
    setDocLoading(true);
    try {
      const data = buildResumeData(lang, t, et);
      data.personal.summary = t("export.summary");
      const { downloadDoc } = await import("@/utils/exportDoc");
      downloadDoc(data, `Roman_Makarenko_CV.${lang}.doc`);
    } catch (err) {
      console.error("DOC export failed:", err);
    } finally {
      setDocLoading(false);
    }
  };

  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <Magnetic strength={0.15}>
        <button
          type="button"
          onClick={handlePdf}
          disabled={pdfLoading}
          className="inline-flex items-center gap-2 rounded-full border border-border
                     bg-card/50 px-5 py-2 text-sm font-medium text-foreground
                     transition-all hover:bg-muted disabled:cursor-wait disabled:opacity-60"
          aria-label={t("export.downloadPdf")}
        >
          {pdfLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <FileText className="h-4 w-4 text-accent" />
          )}
          {pdfLoading ? t("export.generating") : t("export.downloadPdf")}
        </button>
      </Magnetic>

      <Magnetic strength={0.15}>
        <button
          type="button"
          onClick={handleDoc}
          disabled={docLoading}
          className="inline-flex items-center gap-2 rounded-full border border-border
                     bg-card/50 px-5 py-2 text-sm font-medium text-foreground
                     transition-all hover:bg-muted disabled:cursor-wait disabled:opacity-60"
          aria-label={t("export.downloadDoc")}
        >
          {docLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <FileDown className="h-4 w-4 text-accent" />
          )}
          {docLoading ? t("export.generating") : t("export.downloadDoc")}
        </button>
      </Magnetic>
    </div>
  );
}