import { Document, Page, View, Text, StyleSheet, Link } from "@react-pdf/renderer";
import type { ResumeData } from "@/utils/resumeData";

// ─── Styles (light theme, A4) ───────────────────────────────────────────────
const COLORS = {
  background: "#ffffff",
  text: "#334155",
  heading: "#1e293b",
  accent: "#6366f1",
  divider: "#e2e8f0",
  muted: "#94a3b8",
  sectionTitle: "#1a237e",
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 32,
    paddingBottom: 32,
    fontFamily: "Inter",
    fontSize: 9,
    color: COLORS.text,
    backgroundColor: COLORS.background,
    lineHeight: 1.4,
  },
  // ── Header ──
  header: {
    marginBottom: 16,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.divider,
    borderBottomStyle: "solid",
    paddingBottom: 14,
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    color: COLORS.heading,
    letterSpacing: 1.2,
    textTransform: "uppercase" as const,
  },
  title: {
    fontSize: 10,
    color: COLORS.accent,
    marginTop: 3,
    fontWeight: 500,
  },
  contactRow: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap: 12,
    marginTop: 8,
    fontSize: 8,
    color: COLORS.text,
  },
  contactItem: {
    flexDirection: "row" as const,
    alignItems: "center",
    gap: 3,
  },
  link: {
    color: COLORS.accent,
    textDecoration: "underline",
  },
  // ── Section ──
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: COLORS.sectionTitle,
    textTransform: "uppercase" as const,
    letterSpacing: 1.2,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
    borderBottomStyle: "solid",
    paddingBottom: 3,
  },
  // ── Experience ──
  company: {
    fontSize: 10,
    fontWeight: 700,
    color: COLORS.heading,
    marginTop: 6,
  },
  position: {
    fontSize: 9,
    fontWeight: 500,
    color: COLORS.text,
    marginTop: 3,
  },
  duration: {
    fontSize: 8,
    color: COLORS.muted,
    marginBottom: 3,
  },
  bulletList: {
    marginTop: 2,
    marginLeft: 10,
  },
  bullet: {
    fontSize: 8,
    lineHeight: 1.6,
    marginBottom: 1,
  },
  techRow: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap: 3,
    marginTop: 2,
    marginBottom: 4,
  },
  techPill: {
    fontSize: 7,
    color: COLORS.accent,
    backgroundColor: "#eef2ff",
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 2,
  },
  // ── Skills ──
  skillGroup: {
    marginBottom: 4,
  },
  skillGroupTitle: {
    fontSize: 8,
    fontWeight: 700,
    color: COLORS.heading,
    marginBottom: 1,
  },
  skillItems: {
    fontSize: 8,
    color: COLORS.text,
    lineHeight: 1.7,
  },
  // ── Education & Certifications ──
  eduBlock: {
    marginBottom: 4,
  },
  eduTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: COLORS.heading,
  },
  eduDetail: {
    fontSize: 8,
    color: COLORS.text,
  },
  certNote: {
    fontSize: 7,
    color: COLORS.muted,
    fontStyle: "italic" as const,
    marginLeft: 10,
  },
});

// ─── Component ──────────────────────────────────────────────────────────────

interface PdfDocumentProps {
  data: ResumeData;
}

export default function PdfDocument({ data }: PdfDocumentProps) {
  const { personal, skills, experience, education, certifications } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* ══════ HEADER ══════ */}
        <View style={styles.header}>
          <Text style={styles.name}>{personal.name}</Text>
          <Text style={styles.title}>{personal.title}</Text>
          <View style={styles.contactRow}>
            <View style={styles.contactItem}>
              <Text>{personal.email}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text>{personal.phone}</Text>
            </View>
            <View style={styles.contactItem}>
              <Text>{personal.location}</Text>
            </View>
            <View style={styles.contactItem}>
              <Link src={personal.linkedin} style={styles.link}>
                LinkedIn
              </Link>
            </View>
            <View style={styles.contactItem}>
              <Link src={`mailto:${personal.email}`} style={styles.link}>
                Email
              </Link>
            </View>
          </View>
        </View>

        {/* ══════ SUMMARY ══════ */}
        {personal.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={{ fontSize: 8, lineHeight: 1.6 }}>{personal.summary}</Text>
          </View>
        )}

        {/* ══════ EXPERIENCE ══════ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((company, ci) => (
            <View key={ci} wrap={false}>
              <Text style={styles.company}>{company.company}</Text>
              {company.positions.map((pos, pi) => (
                <View key={pi}>
                  <Text style={styles.position}>{pos.title}</Text>
                  <Text style={styles.duration}>{pos.duration}</Text>
                  {pos.description && (
                    <Text style={{ fontSize: 8, marginBottom: 2, color: COLORS.muted }}>
                      {pos.description}
                    </Text>
                  )}
                  {pos.responsibilities.length > 0 && (
                    <View style={styles.bulletList}>
                      {pos.responsibilities.map((r, ri) => (
                        <Text key={ri} style={styles.bullet}>• {r}</Text>
                      ))}
                    </View>
                  )}
                  {pos.achievements.length > 0 && (
                    <View style={styles.bulletList}>
                      {pos.achievements.map((a, ai) => (
                        <Text key={ai} style={{ ...styles.bullet, color: COLORS.heading }}>★ {a}</Text>
                      ))}
                    </View>
                  )}
                  {pos.tech.length > 0 && (
                    <View style={styles.techRow}>
                      {pos.tech.map((t, ti) => (
                        <Text key={ti} style={styles.techPill}>{t}</Text>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* ══════ SKILLS ══════ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {skills.map((group, gi) => (
            <View key={gi} style={styles.skillGroup}>
              <Text style={styles.skillGroupTitle}>{group.category}:</Text>
              <Text style={styles.skillItems}>{group.items.join(", ")}</Text>
            </View>
          ))}
        </View>

        {/* ══════ EDUCATION ══════ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((edu, ei) => (
            <View key={ei} style={styles.eduBlock}>
              <Text style={styles.eduTitle}>{edu.institution}</Text>
              <Text style={styles.eduDetail}>{edu.degree}</Text>
              <Text style={{ ...styles.eduDetail, color: COLORS.muted }}>
                {edu.duration}
              </Text>
            </View>
          ))}
        </View>

        {/* ══════ CERTIFICATIONS ══════ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {certifications.map((cert, ci) => (
            <View key={ci} style={{ marginBottom: 3 }}>
              <Text style={{ fontSize: 8, lineHeight: 1.6 }}>
                • {cert.name} — {cert.issuer}, {cert.date}
              </Text>
              {cert.note && (
                <Text style={styles.certNote}>{cert.note}</Text>
              )}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
