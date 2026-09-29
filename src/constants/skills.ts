import {
  Globe,
  Smartphone,
  Server,
  Database,
  Wrench,
  Sparkles,
  Workflow,
  Gauge,
  GitMerge,
  PenTool,
  BrainCircuit,
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
  Music,
  Package,
  Network,
  Beaker,
  type LucideIcon,
} from "lucide-react";
import restAssuredLogo from "@/assets/rest-assured.png";
import seleniumLogo from "@/assets/selenium-logo.png";
import testngLogo from "@/assets/testng-logo.webp";
import playwrightLogo from "@/assets/playwright-logo.svg";
import javaSpringLogo from "../../javaSpring.png";
import appiumLogo from "@/assets/appium-logo.png";
import wdioLogo from "@/assets/wdio-logo.png";
import dockerLogo from "@/assets/docker-logo.webp";
import nodejsLogo from "@/assets/nodejs-logo.webp";
import jenkinsLogo from "@/assets/jenkins-logo.svg";
import teamcityLogo from "@/assets/teamcity-logo.webp";
import cucumberLogo from "@/assets/cucumber-logo.png";
import agenticAiLogo from "@/assets/agentic-ai-logo.webp";
import javascriptLogo from "../../js.webp";
import typescriptLogo from "../../ts.webp";

export interface Skill {
  id: string;
  icon?: LucideIcon;
  image?: string;
  name: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export const SKILLS_LIST: SkillGroup[] = [
  {
    title: "Programming & Frameworks",
    items: [
      { id: "prog-1", image: javaSpringLogo, name: "Java" },
      { id: "prog-2", image: nodejsLogo, name: "Node.js" },
      { id: "prog-3", image: javaSpringLogo, name: "Spring" },
      { id: "prog-4", icon: Music, name: "Groovy" },
      { id: "prog-5", image: javascriptLogo, name: "JavaScript" },
      { id: "prog-6", image: typescriptLogo, name: "TypeScript" },
      { id: "prog-7", icon: Package, name: "Gradle" },
    ],
  },
  {
    title: "Test Automation",
    items: [
      { id: "auto-1", image: seleniumLogo, name: "Selenium" },
      { id: "auto-2", image: appiumLogo, name: "Appium" },
      { id: "auto-3", image: wdioLogo, name: "WebdriverIO (WDIO)" },
      { id: "auto-4", image: playwrightLogo, name: "Playwright" },
      { id: "auto-5", image: restAssuredLogo, name: "REST Assured" },
      { id: "auto-6", image: cucumberLogo, name: "Cucumber" },
      { id: "auto-7", image: testngLogo, name: "TestNG" },
      { id: "auto-8", icon: Beaker, name: "Mocha / Chai" },
      { id: "auto-9", icon: Bug, name: "Mockito" },
      { id: "auto-10", icon: Beaker, name: "Spock" },
    ],
  },
  {
    title: "Testing",
    items: [
      { id: "test-1", icon: Globe, name: "Web Testing" },
      { id: "test-2", icon: Smartphone, name: "Mobile Testing" },
      { id: "test-3", icon: Server, name: "API Testing" },
      { id: "test-4", icon: Workflow, name: "End-to-End Testing" },
      { id: "test-5", icon: GitMerge, name: "Integration Testing" },
      { id: "test-6", icon: Gauge, name: "Performance Testing" },
      { id: "test-7", icon: Search, name: "System Testing" },
      { id: "test-8", icon: LayoutPanelLeft, name: "UI Testing" },
      { id: "test-9", icon: PenTool, name: "Pixel-Perfect Testing" },
      { id: "test-10", icon: Database, name: "Database Testing" },
    ],
  },
  {
    title: "QA Practices",
    items: [
      { id: "qa-1", icon: PenTool, name: "Test Design" },
      { id: "qa-2", icon: ClipboardList, name: "Test Planning" },
      { id: "qa-3", icon: BrainCircuit, name: "Test Strategy" },
      { id: "qa-4", icon: BarChart3, name: "Test Reporting" },
      { id: "qa-5", icon: Bug, name: "Defect Tracking" },
      { id: "qa-6", icon: GraduationCap, name: "Mentoring" },
      { id: "qa-7", icon: Users, name: "Team Leadership" },
      { id: "qa-8", icon: BookOpen, name: "Documentation" },
      { id: "qa-9", icon: FileCheck, name: "BDD" },
    ],
  },
  {
    title: "Data & Infrastructure",
    items: [
      { id: "data-1", icon: Database, name: "MySQL" },
      { id: "data-2", icon: Database, name: "SQL" },
      { id: "data-3", icon: Database, name: "Redis" },
      { id: "data-4", icon: Search, name: "Elasticsearch" },
      { id: "data-5", icon: Network, name: "GraphQL" },
      { id: "data-6", icon: GitBranch, name: "Kafka" },
    ],
  },
  {
    title: "CI/CD & Collaboration",
    items: [
      { id: "cicd-1", image: dockerLogo, name: "Docker" },
      { id: "cicd-2", image: jenkinsLogo, name: "Jenkins" },
      { id: "cicd-3", image: teamcityLogo, name: "TeamCity" },
      { id: "cicd-4", icon: Workflow, name: "Travis CI" },
      { id: "cicd-5", icon: GitBranch, name: "GitHub Actions" },
      { id: "cicd-6", icon: GitBranch, name: "Bitbucket" },
    ],
  },
  {
    title: "Methodologies & Domains",
    items: [
      { id: "method-1", icon: RefreshCcw, name: "Scrum" },
      { id: "method-2", icon: LayoutPanelLeft, name: "Kanban" },
      { id: "method-3", icon: Users, name: "B2B" },
      { id: "method-4", icon: Users, name: "B2C" },
    ],
  },
  {
    title: "AI & LLM",
    items: [
      { id: "ai-1", icon: Sparkles, name: "Claude Code" },
      { id: "ai-2", icon: PenTool, name: "Prompt Engineering" },
      { id: "ai-3", icon: Network, name: "MCP" },
      { id: "ai-4", image: agenticAiLogo, name: "AI Agents" },
      { id: "ai-5", icon: Wrench, name: "Skills" },
      { id: "ai-6", icon: Package, name: "Plugins" },
      { id: "ai-7", icon: GitMerge, name: "Hooks" },
      { id: "ai-8", icon: Sparkles, name: "LLM-assisted Development" },
    ],
  },
];
