import { Linkedin, Github, Mail, type LucideIcon } from "lucide-react";

export interface SocialLink {
  id: string;
  icon: LucideIcon;
  link: string;
  label: string;
}

export const SOCIAL_MEDIA: SocialLink[] = [
  {
    id: "social-1",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/roman-makarenko-qa/",
    label: "LinkedIn",
  },
  {
    id: "social-2",
    icon: Github,
    link: "https://github.com/",
    label: "GitHub",
  },
  {
    id: "social-3",
    icon: Mail,
    link: "mailto:roman.makarenko.qa@gmail.com",
    label: "Email",
  },
];