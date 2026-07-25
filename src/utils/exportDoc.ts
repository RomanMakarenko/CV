import type { ResumeData, CertificationItem } from "@/utils/resumeData";

// ─── Helpers ───────────────────────────────────────────────────────────────

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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

// ─── HTML template for DOC ─────────────────────────────────────────────────

function buildDocHtml(data: ResumeData): string {
  const { personal, skills, experience, education, certifications } = data;

  const contactItems = [
    personal.email && `<a href="mailto:${escapeHtml(personal.email)}">${escapeHtml(personal.email)}</a>`,
    personal.phone && escapeHtml(personal.phone),
    personal.location && escapeHtml(personal.location),
    personal.linkedin && `<a href="${escapeHtml(personal.linkedin)}">LinkedIn</a>`,
  ].filter(Boolean);

  const contactHtml = contactItems.join(" &nbsp;|&nbsp; ");

  // ── Experience ──
  const experienceHtml = experience
    .map(
      (company) => `
    <div class="company-block">
      <h3 class="company-name">${escapeHtml(company.company)}</h3>
      ${company.positions
        .map(
          (pos) => `
        <div class="position-block">
          <div class="position-title">${escapeHtml(pos.title)}</div>
          <div class="position-duration">${escapeHtml(pos.duration)}</div>
          ${pos.description ? `<div class="position-desc">${escapeHtml(pos.description)}</div>` : ""}
          ${
            pos.responsibilities.length > 0
              ? `<ul class="bullet-list">${pos.responsibilities
                  .map((r) => `<li>${escapeHtml(r)}</li>`)
                  .join("")}</ul>`
              : ""
          }
          ${
            pos.achievements.length > 0
              ? `<ul class="bullet-list achievements">${pos.achievements
                  .map((a) => `<li>★ ${escapeHtml(a)}</li>`)
                  .join("")}</ul>`
              : ""
          }
          ${
            pos.tech.length > 0
              ? `<div class="tech-row"><strong>Technologies:</strong> ${pos.tech.map((t) => escapeHtml(t)).join(", ")}</div>`
              : ""
          }
        </div>
      `
        )
        .join("")}
    </div>
  `
    )
    .join("");

  // ── Skills ──
  const skillsHtml = skills
    .map(
      (group) => `
    <div class="skill-group">
      <strong>${escapeHtml(group.category)}:</strong>
      <span>${group.items.map((s) => escapeHtml(s)).join(", ")}</span>
    </div>
  `
    )
    .join("");

  // ── Education ──
  const educationHtml = education
    .map(
      (edu) => `
    <div class="edu-block">
      <div class="edu-title">${escapeHtml(edu.institution)}</div>
      <div class="edu-detail">${escapeHtml(edu.degree)}</div>
      <div class="edu-detail muted">${escapeHtml(edu.duration)}</div>
    </div>
  `
    )
    .join("");

  // ── Certifications ──
  const certHtml = certifications
    .map((cert) => buildCertHtml(cert))
    .join("");

  // ── Full HTML ──
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    /* ── Reset & base ── */
    body {
      font-family: 'Inter', 'Segoe UI', Arial, Helvetica, sans-serif;
      font-size: 10pt;
      color: #334155;
      background: #ffffff;
      margin: 0;
      padding: 40px;
      line-height: 1.5;
    }
    a { color: #6366f1; text-decoration: underline; }

    /* ── Header ── */
    .header {
      border-bottom: 1.5px solid #e2e8f0;
      padding-bottom: 14px;
      margin-bottom: 16px;
    }
    .header .name {
      font-size: 22pt;
      font-weight: 700;
      color: #1e293b;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      margin: 0 0 3px 0;
    }
    .header .title {
      font-size: 11pt;
      color: #6366f1;
      font-weight: 500;
      margin: 0 0 6px 0;
    }
    .header .contact {
      font-size: 8.5pt;
      color: #334155;
    }

    /* ── Sections ── */
    .section {
      margin-bottom: 14px;
    }
    .section-title {
      font-size: 11pt;
      font-weight: 700;
      color: #1a237e;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 3px;
      margin: 0 0 8px 0;
    }

    /* ── Experience ── */
    .company-name {
      font-size: 11pt;
      font-weight: 700;
      color: #1e293b;
      margin: 10px 0 0 0;
    }
    .position-block {
      margin-left: 0;
      margin-top: 4px;
    }
    .position-title {
      font-size: 10pt;
      font-weight: 600;
      color: #334155;
    }
    .position-duration {
      font-size: 8.5pt;
      color: #94a3b8;
      margin-bottom: 2px;
    }
    .position-desc {
      font-size: 9pt;
      color: #94a3b8;
      margin-bottom: 3px;
    }
    .bullet-list {
      margin: 2px 0 4px 0;
      padding-left: 20px;
    }
    .bullet-list li {
      font-size: 9pt;
      line-height: 1.55;
      margin-bottom: 1px;
    }
    .bullet-list.achievements li {
      color: #1e293b;
    }
    .tech-row {
      font-size: 8.5pt;
      margin-bottom: 6px;
      color: #6366f1;
    }

    /* ── Skills ── */
    .skill-group {
      margin-bottom: 4px;
      font-size: 9pt;
    }

    /* ── Education ── */
    .edu-block {
      margin-bottom: 6px;
    }
    .edu-title {
      font-size: 10pt;
      font-weight: 700;
      color: #1e293b;
    }
    .edu-detail {
      font-size: 9pt;
    }
    .muted {
      color: #94a3b8;
    }

    /* ── Certifications ── */
    .cert-item {
      font-size: 9pt;
      margin-bottom: 3px;
    }
    .cert-note {
      font-size: 8pt;
      color: #94a3b8;
      font-style: italic;
      margin-left: 14px;
    }

    /* ── Print ── */
    @media print {
      @page { margin: 0.6in; size: A4 portrait; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    }
  </style>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body>
  <!-- ════ HEADER ════ -->
  <div class="header">
    <h1 class="name">${escapeHtml(personal.name)}</h1>
    <div class="title">${escapeHtml(personal.title)}</div>
    <div class="contact">${contactHtml}</div>
  </div>

  <!-- ════ SUMMARY ════ -->
  ${personal.summary ? `
  <div class="section">
    <h2 class="section-title">Professional Summary</h2>
    <p style="font-size:9pt; margin:0; line-height:1.6;">${escapeHtml(personal.summary)}</p>
  </div>` : ""}

  <!-- ════ EXPERIENCE ════ -->
  <div class="section">
    <h2 class="section-title">Experience</h2>
    ${experienceHtml}
  </div>

  <!-- ════ SKILLS ════ -->
  <div class="section">
    <h2 class="section-title">Skills</h2>
    ${skillsHtml}
  </div>

  <!-- ════ EDUCATION ════ -->
  <div class="section">
    <h2 class="section-title">Education</h2>
    ${educationHtml}
  </div>

  <!-- ════ CERTIFICATIONS ════ -->
  <div class="section">
    <h2 class="section-title">Certifications</h2>
    ${certHtml}
  </div>
</body>
</html>`;
}

function buildCertHtml(cert: CertificationItem): string {
  let html = `<div class="cert-item">• ${escapeHtml(cert.name)} — ${escapeHtml(cert.issuer)}, ${escapeHtml(cert.date)}</div>`;
  if (cert.note) {
    html += `<div class="cert-note">${escapeHtml(cert.note)}</div>`;
  }
  return html;
}

// ─── Public API ────────────────────────────────────────────────────────────

/**
 * Generate a DOC (HTML) Blob from ResumeData.
 * Uses `application/msword` MIME type — Word opens HTML files natively.
 */
export function generateDocBlob(data: ResumeData): Blob {
  const html = buildDocHtml(data);
  return new Blob([html], { type: "application/msword;charset=utf-8" });
}

/**
 * Generate and immediately download a DOC file.
 */
export function downloadDoc(data: ResumeData, filename: string): void {
  const blob = generateDocBlob(data);
  downloadBlob(blob, filename.endsWith(".doc") ? filename : `${filename}.doc`);
}