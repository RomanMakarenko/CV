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
];