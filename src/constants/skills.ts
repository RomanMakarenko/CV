import {
  Code2,
  Globe,
  Smartphone,
  Server,
  Database,
  Container,
  Wrench,
  Sparkles,
  FlaskConical,
  ListChecks,
  Workflow,
  Gauge,
  GitMerge,
  PenTool,
  BrainCircuit,
  Hammer,
  Search,
  GitBranch,
  RefreshCcw,
  LayoutPanelLeft,
  ClipboardList,
  BarChart3,
  Bug,
  GraduationCap,
  Users,
  BookOpen,
  FileCheck,
  Coffee,
  Leaf,
  Music,
  FileJson,
  Package,
  Network,
  Monitor,
  Beaker,
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
      { id: "qa-4", icon: Workflow, name: "End-to-End" },
      { id: "qa-5", icon: Gauge, name: "Performance" },
      { id: "qa-6", icon: GitMerge, name: "Integration" },
      { id: "qa-7", icon: PenTool, name: "Test Design" },
      { id: "qa-8", icon: BrainCircuit, name: "Test Strategy" },
    ],
  },
  {
    title: "Automation Frameworks",
    items: [
      { id: "af-1", icon: Monitor, name: "Selenium" },
      { id: "af-2", icon: Smartphone, name: "Appium" },
      { id: "af-3", icon: Globe, name: "WebdriverIO" },
      { id: "af-4", icon: ListChecks, name: "TestNG" },
      { id: "af-5", icon: FlaskConical, name: "Spock" },
      { id: "af-6", icon: Beaker, name: "Mocha / Chai" },
      { id: "af-7", icon: Server, name: "REST Assured" },
      { id: "af-8", icon: Sparkles, name: "Agentic AI" },
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
      { id: "lf-1", icon: Coffee, name: "Java" },
      { id: "lf-2", icon: Server, name: "Node.js" },
      { id: "lf-3", icon: Leaf, name: "Spring" },
      { id: "lf-4", icon: Music, name: "Groovy" },
      { id: "lf-5", icon: FileJson, name: "JavaScript" },
      { id: "lf-6", icon: Package, name: "Gradle" },
      { id: "lf-7", icon: FileCheck, name: "BDD" },
      { id: "lf-8", icon: Network, name: "GraphQL" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      { id: "do-1", icon: Container, name: "Docker" },
      { id: "do-2", icon: Hammer, name: "Jenkins" },
      { id: "do-3", icon: Hammer, name: "TeamCity" },
      { id: "do-4", icon: Database, name: "MySQL" },
      { id: "do-5", icon: Database, name: "Redis" },
      { id: "do-6", icon: Search, name: "Elasticsearch" },
      { id: "do-7", icon: GitBranch, name: "Kafka" },
      { id: "do-8", icon: GitBranch, name: "Bitbucket" },
    ],
  },
  {
    title: "Methodologies",
    items: [
      { id: "m-1", icon: RefreshCcw, name: "Scrum" },
      { id: "m-2", icon: LayoutPanelLeft, name: "Kanban" },
      { id: "m-3", icon: ClipboardList, name: "Test Planning" },
      { id: "m-4", icon: BarChart3, name: "Test Reporting" },
      { id: "m-5", icon: Bug, name: "Defect Tracking" },
      { id: "m-6", icon: GraduationCap, name: "Mentoring" },
      { id: "m-7", icon: Users, name: "Team Leadership" },
      { id: "m-8", icon: BookOpen, name: "Documentation" },
    ],
  },
];