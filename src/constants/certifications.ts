export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    name: "GenAI & AI Agents for QA Automation | Copilot & Claude Code",
    issuer: "Udemy",
    date: "May 2026",
  },
  {
    id: "cert-2",
    name: "Java Developer Professional",
    issuer: "JavaRush",
    date: "May 2024",
  },
  {
    id: "cert-3",
    name: "English INTERMEDIATE / B1",
    issuer: "Green Forest",
    date: "Nov 2023",
  },
  {
    id: "cert-4",
    name: "Node.js",
    issuer: "ITEA",
    date: "Mar 2020",
  },
  {
    id: "cert-5",
    name: "JavaScript",
    issuer: "Coursera",
    date: "Dec 2018",
  },
  {
    id: "cert-6",
    name: "QA Automation",
    issuer: "Hillel",
    date: "Jun 2018",
  },
  {
    id: "cert-7",
    name: "SQL Essential",
    issuer: "CyberBionic Systematics",
    date: "Nov 2014",
  },
];