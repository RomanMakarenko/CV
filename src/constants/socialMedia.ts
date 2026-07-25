import {
  Linkedin,
  Github,
  Mail,
  Send,
  Facebook,
  Instagram,
  type LucideIcon,
} from "lucide-react";

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
    link: "https://www.linkedin.com/in/roman-makarenko-36962375/",
    label: "LinkedIn",
  },
  {
    id: "social-2",
    icon: Github,
    link: "https://github.com/RomanMakarenko",
    label: "GitHub",
  },
  {
    id: "social-3",
    icon: Mail,
    link: "mailto:makarenkoroman1989@gmail.com",
    label: "Email",
  },
  {
    id: "social-4",
    icon: Send,
    link: "https://t.me/+380939490721",
    label: "Telegram",
  },
  {
    id: "social-5",
    icon: Facebook,
    link: "https://www.facebook.com/roman.makarenko.5036",
    label: "Facebook",
  },
  {
    id: "social-6",
    icon: Instagram,
    link: "https://www.instagram.com/makarenkoroman1989/",
    label: "Instagram",
  },
];