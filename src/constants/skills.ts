import {
  Code2,
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
  FileJson,
  Package,
  Network,
  Beaker,
  type LucideIcon,
} from "lucide-react";import restAssuredLogo from "@/assets/rest-assured.png";
import seleniumLogo from "@/assets/selenium-logo.png";
import testngLogo from "@/assets/testng-logo.webp";
import playwrightLogo from "@/assets/playwright-logo.svg";
import javaLogo from "@/assets/java-logo.svg";
import appiumLogo from "@/assets/appium-logo.png";
import wdioLogo from "@/assets/wdio-logo.png";
import dockerLogo from "@/assets/docker-logo.webp";
import nodejsLogo from "@/assets/nodejs-logo.webp";
import springLogo from "@/assets/spring-logo.png";
import jenkinsLogo from "@/assets/jenkins-logo.svg";
import teamcityLogo from "@/assets/teamcity-logo.webp";
import cucumberLogo from "@/assets/cucumber-logo.png";
import agenticAiLogo from "@/assets/agentic-ai-logo.webp";

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
      { id: "af-1", image: seleniumLogo, name: "Selenium" },
      { id: "af-2", image: appiumLogo, name: "Appium" },
      { id: "af-3", image: wdioLogo, name: "WebdriverIO" },
      { id: "af-4", image: testngLogo, name: "TestNG" },
      { id: "af-5", icon: Beaker, name: "Mocha / Chai" },
      { id: "af-7", image: restAssuredLogo, name: "REST Assured" },
      { id: "af-8", image: agenticAiLogo, name: "Agentic AI" },
      { id: "af-9", image: playwrightLogo, name: "Playwright" },
      { id: "af-10", image: cucumberLogo, name: "Cucumber" },
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
      { id: "lf-1", image: javaLogo, name: "Java" },
      { id: "lf-2", image: nodejsLogo, name: "Node.js" },
      { id: "lf-3", image: springLogo, name: "Spring" },
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
      { id: "do-1", image: dockerLogo, name: "Docker" },
      { id: "do-2", image: jenkinsLogo, name: "Jenkins" },
      { id: "do-3", image: teamcityLogo, name: "TeamCity" },
      { id: "do-4", icon: Database, name: "MySQL" },
      { id: "do-5", icon: Database, name: "Redis" },
      { id: "do-6", icon: Search, name: "Elasticsearch" },
      { id: "do-7", icon: GitBranch, name: "Kafka" },
      { id: "do-8", icon: GitBranch, name: "Bitbucket" },
    ],
  },
  {
    title: "Artificial Intelligence",
    items: [
      { id: "ai-1", icon: PenTool, name: "Prompt Engineering" },
      { id: "ai-2", icon: Network, name: "MCP" },
      { id: "ai-3", icon: BrainCircuit, name: "AI Agents" },
      { id: "ai-4", icon: Wrench, name: "Skills" },
      { id: "ai-5", icon: Package, name: "Plugins" },
      { id: "ai-6", icon: GitMerge, name: "Hooks" },
      { id: "ai-7", icon: Sparkles, name: "LLM-assisted Development" },
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