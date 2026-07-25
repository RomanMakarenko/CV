import { pdf, Font } from "@react-pdf/renderer";
import PdfDocument from "@/components/PdfDocument";
import type { ResumeData } from "@/utils/resumeData";

// ─── Font registration ────────────────────────────────────────────────────

/**
 * Google Fonts TTF URLs for Inter (v20, supports Latin + Cyrillic).
 * These are static, versioned URLs with CORS headers.
 */
const FONT_URLS = {
  regular:
    "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf",
  bold:
    "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf",
  italic:
    "https://fonts.gstatic.com/s/inter/v20/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTc2dthjQ.ttf",
  boldItalic:
    "https://fonts.gstatic.com/s/inter/v20/UcCM3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTcPtxhjQ.ttf",
};

/**
 * Register Inter font for PDF rendering.
 * Loads TTF files from Google Fonts CDN.
 * Includes Cyrillic glyphs for Ukrainian support.
 */
async function registerInterFont(): Promise<void> {
  // Check if already registered to avoid duplicate registration
  const registered = Font.getRegisteredFontFamilies();
  if (registered.includes("Inter")) return;

  Font.register({
    family: "Inter",
    fonts: [
      { src: FONT_URLS.regular, fontWeight: 400, fontStyle: "normal" },
      { src: FONT_URLS.bold, fontWeight: 700, fontStyle: "normal" },
      { src: FONT_URLS.italic, fontWeight: 400, fontStyle: "italic" },
      { src: FONT_URLS.boldItalic, fontWeight: 700, fontStyle: "italic" },
    ],
  });
}

// ─── Helpers ───────────────────────────────────────────────────────────────

/** Convert a Blob to a File and trigger download. */
function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ─── Public API ────────────────────────────────────────────────────────────

/**
 * Generate a PDF Blob from ResumeData.
 * Handles font registration internally.
 */
export async function generatePdfBlob(data: ResumeData): Promise<Blob> {
  await registerInterFont();
  const doc = pdf(<PdfDocument data={data} />);
  const blob = await doc.toBlob();
  return blob;
}

/**
 * Generate and immediately download a PDF file.
 */
export async function downloadPdf(data: ResumeData, filename: string): Promise<void> {
  const blob = await generatePdfBlob(data);
  downloadBlob(blob, filename.endsWith(".pdf") ? filename : `${filename}.pdf`);
}