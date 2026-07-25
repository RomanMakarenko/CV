export interface Education {
  id: string;
  title: string;
  degree: string;
  duration: string;
  content1: string;
  content2: string;
}

export const EDUCATION_LIST: Education[] = [
  {
    id: "education-1",
    title: "Igor Sikorsky Kyiv Polytechnic Institute",
    degree: "Master of Computer Science",
    duration: "Graduated: March 2012",
    content1: "Major: Computer Science",
    content2: "Full-time education",
  },
  {
    id: "education-2",
    title: "Specialized School № 269",
    degree: "Programmer Technologist",
    duration: "1995 – 2006",
    content1: "Specialized in programming & computer technologies",
    content2: "Secondary education",
  },
];