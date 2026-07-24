import {
  Code2,
  Globe,
  Smartphone,
  Server,
  Database,
  Container,
  Wrench,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface Skill {
  id: string;
  icon: LucideIcon;
  name: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export const SKILLS_LIST: SkillGroup[] = [
  {
    title: "Testing & QA",
    items: [
      { id: "qa-1", icon: Globe, name: "Web Testing" },
      { id: "qa-2", icon: Smartphone, name: "Mobile Testing" },
      { id: "qa-3", icon: Server, name: "API Testing" },
      { id: "qa-4", icon: Wrench, name: "End-to-End" },
      { id: "qa-5", icon: Wrench, name: "Performance" },
      { id: "qa-6", icon: Wrench, name: "Integration" },
      { id: "qa-7", icon: Wrench, name: "Test Design" },
      { id: "qa-8", icon: Wrench, name: "Test Strategy" },
    ],
  },
  {
    title: "Automation Frameworks",
    items: [
      { id: "af-1", icon: Code2, name: "Selenium" },
      { id: "af-2", icon: Code2, name: "Appium" },
      { id: "af-3", icon: Code2, name: "WebdriverIO" },
      { id: "af-4", icon: Code2, name: "TestNG" },
      { id: "af-5", icon: Code2, name: "Spock" },
      { id: "af-6", icon: Code2, name: "Mocha / Chai" },
      { id: "af-7", icon: Code2, name: "REST Assured" },
      { id: "af-8", icon: Sparkles, name: "Agentic AI" },
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
      { id: "lf-1", icon: Code2, name: "Java" },
      { id: "lf-2", icon: Code2, name: "Node.js" },
      { id: "lf-3", icon: Code2, name: "Spring" },
      { id: "lf-4", icon: Code2, name: "Groovy" },
      { id: "lf-5", icon: Code2, name: "JavaScript" },
      { id: "lf-6", icon: Code2, name: "Gradle" },
      { id: "lf-7", icon: Code2, name: "BDD" },
      { id: "lf-8", icon: Code2, name: "GraphQL" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      { id: "do-1", icon: Container, name: "Docker" },
      { id: "do-2", icon: Server, name: "Jenkins" },
      { id: "do-3", icon: Server, name: "TeamCity" },
      { id: "do-4", icon: Database, name: "MySQL" },
      { id: "do-5", icon: Database, name: "Redis" },
      { id: "do-6", icon: Database, name: "Elasticsearch" },
      { id: "do-7", icon: Database, name: "Kafka" },
      { id: "do-8", icon: Container, name: "Bitbucket" },
    ],
  },
  {
    title: "Methodologies",
    items: [
      { id: "m-1", icon: Wrench, name: "Scrum" },
      { id: "m-2", icon: Wrench, name: "Kanban" },
      { id: "m-3", icon: Wrench, name: "Test Planning" },
      { id: "m-4", icon: Wrench, name: "Test Reporting" },
      { id: "m-5", icon: Wrench, name: "Defect Tracking" },
      { id: "m-6", icon: Wrench, name: "Mentoring" },
      { id: "m-7", icon: Wrench, name: "Team Leadership" },
      { id: "m-8", icon: Wrench, name: "Documentation" },
    ],
  },
];