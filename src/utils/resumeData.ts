import { ABOUT_ME, SOCIAL_MEDIA, SKILLS_LIST, EXPERIENCES, EDUCATION_LIST, CERTIFICATIONS } from "@/constants";
import { TRANSLATIONS } from "@/constants/translations";
import { getCertNameKey } from "@/lib/i18n";
import type { Lang } from "@/constants/translations";
import type { Experience } from "@/constants/experience";

export interface PersonalData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  summary: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface PositionData {
  title: string;
  duration: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  tech: string[];
}

export interface CompanyExperience {
  company: string;
  positions: PositionData[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  note?: string; // Optional note, e.g. "15-month program"
}

export interface ResumeData {
  personal: PersonalData;
  skills: SkillCategory[];
  experience: CompanyExperience[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

type TranslateFn = (key: string) => string;
type ExpTranslateFn = (key: string) => string;

/**
 * Build a plain ResumeData object from site constants + translations.
 * This is a pure function — no React hooks.
 * Call it from inside a component that has access to useLanguage().
 */
export function buildResumeData(
  lang: Lang,
  t: TranslateFn,
  et: ExpTranslateFn
): ResumeData {
  return {
    personal: buildPersonalData(),
    skills: buildSkillsData(t),
    experience: buildExperienceData(et),
    education: buildEducationData(et),
    certifications: buildCertificationsData(),
  };
}

function buildPersonalData(): PersonalData {
  const linkedin =
    SOCIAL_MEDIA.find((s) => s.label === "LinkedIn")?.link ?? "";

  return {
    name: ABOUT_ME.name,
    title: ABOUT_ME.tagLine,
    email: ABOUT_ME.email,
    phone: ABOUT_ME.phone,
    location: ABOUT_ME.location,
    linkedin,
    summary: "", // Will be populated separately — see note below
  };
}

/**
 * Summary text is taken from profileSummary.txt.
 * Currently exposed as empty; in a future step it can be stored
 * as a translation key and passed here.
 */
export function setSummary(summary: string): void {
  // placeholder — will wire up after adding summary to constants
}

function buildSkillsData(t: TranslateFn): SkillCategory[] {
  return SKILLS_LIST.map((group) => ({
    category: t(`skills.group.${group.title}`),
    items: group.items.map((skill) => skill.name),
  }));
}

function buildExperienceData(et: ExpTranslateFn): CompanyExperience[] {
  return EXPERIENCES.map((exp, orgIdx) => ({
    company: exp.organisation,
    positions: exp.positions.map((pos, posIdx) => {
      // Build translation keys like in the existing i18n pattern
      const expKey = buildExpKey(exp, orgIdx, posIdx);

      return {
        title: et(`${expKey}.title`),
        duration: et(`${expKey}.duration`),
        description: et(`${expKey}.desc`),
        responsibilities: pos.responsibilities.map(
          (_, i) => et(`${expKey}.resp.${i}`) || pos.responsibilities[i]
        ),
        achievements: pos.achievements?.map(
          (_, i) => et(`${expKey}.ach.${i}`) || pos.achievements![i]
        ) ?? [],
        tech: pos.tech,
      };
    }),
  }));
}

function buildExpKey(_exp: Experience, orgIdx: number, posIdx: number): string {
  // Map by org index to match translation prefixes in i18n
  // 0 = Ciklum, 1 = Playtika, 2 = TotalGame, 3 = Funtime
  const prefixMap = ["ciklum", "playtika", "totalgame", "funtime"];
  const prefix = prefixMap[orgIdx] ?? `org-${orgIdx}`;
  return `pos.${prefix}-${posIdx}`;
}

function buildEducationData(et: ExpTranslateFn): EducationItem[] {
  return EDUCATION_LIST.map((edu) => {
    if (edu.id === "education-1") {
      return {
        institution: et("edu.kpi.title"),
        degree: et("edu.kpi.degree"),
        duration: et("edu.kpi.graduated"),
      };
    }
    if (edu.id === "education-2") {
      return {
        institution: et("edu.school269.title"),
        degree: et("edu.school269.degree"),
        duration: et("edu.school269.duration"),
      };
    }
    // Fallback for any future entries
    return {
      institution: edu.title,
      degree: edu.degree,
      duration: edu.duration,
    };
  });
}

function buildCertificationsData(): CertificationItem[] {
  return CERTIFICATIONS.map((cert) => {
    // Certifications are always in English — resolve English name from translations
    const certKey = getCertNameKey(cert.id);
    const englishName = certKey && TRANSLATIONS[certKey]
      ? TRANSLATIONS[certKey].en
      : cert.name;

    const item: CertificationItem = {
      name: englishName,
      issuer: cert.issuer,
      date: cert.date,
    };

    // Special handling for Java Developer Professional
    if (cert.id === "cert-4") {
      item.note = "15-month program";
    }

    return item;
  });
}