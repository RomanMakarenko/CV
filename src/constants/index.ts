export { SOCIAL_MEDIA } from "./socialMedia";
export type { SocialLink } from "./socialMedia";

export { SKILLS_LIST } from "./skills";
export type { Skill, SkillGroup } from "./skills";

export { EXPERIENCES } from "./experience";
export type { Experience, Position } from "./experience";

export { EDUCATION_LIST } from "./education";
export type { Education } from "./education";

export { CERTIFICATIONS } from "./certifications";
export type {
  Certification,
  GitHubProject,
  CurriculumModule,
  CurriculumLevel,
} from "./certifications";

export const ABOUT_ME = {
  name: "Roman Makarenko",
  firstName: "Roman",
  lastName: "Makarenko",
  tagLine:
    "QA Automation Engineer · 10+ Years in Quality Assurance · Web, Mobile & Backend",
  intro:
    "QA Automation Engineer based in Ukraine. Passionate about test automation, quality processes, and building reliable test frameworks.",
  email: "makarenkoroman1989@gmail.com",
  phone: "+380939490721",
  location: "Ukraine",
};

export { COURSES_IN_PROGRESS } from "./courseInProgress";
export type { CourseInProgress, CourseLevel, ProjectLink } from "./courseInProgress";

export const NAV_LINKS = [
  { link: "#in-progress", title: "In Progress" },
  { link: "#experience", title: "Experience" },
  { link: "#skills", title: "Skills" },
  { link: "#education", title: "Education" },
  { link: "#certifications", title: "Certifications" },
  { link: "#contact", title: "Contact" },
];

export const KEYWORDS = [
  "QA Automation",
  "Selenium",
  "Appium",
  "Node.js",
  "Java",
  "WebdriverIO",
  "API Testing",
  "Mobile Testing",
  "CI/CD",
  "Agentic AI",
];