export interface SiteData {
  name: string;
  role: string;
  bio: string;
  email?: string;
  url: string;
  description: string;
  links: {
    github: string;
    linkedin: string;
    resume: string;
  };
}

export const site: SiteData = {
  name: "Shakil Musthafa",
  role: "Founder and product builder",
  bio: "I build products for people the tech industry usually overlooks. I am transferring to UC San Diego to study Business Economics and Cognitive Science with a focus on machine learning, and I work across the whole thing: I dig into the problem, build the product, model the business, and pitch it. Most of what I make starts from something I have lived.",
  email: "smusthafa@ucsd.edu",
  url: "https://shakilmusthafa.com",
  description:
    "Shakil Musthafa, founder and product builder. Business Economics and Cognitive Science student at UC San Diego building accessible technology.",
  links: {
    github: "https://github.com/b1nanapeel",
    linkedin: "https://linkedin.com/in/shakilsm",
    resume: "/resume.pdf",
  },
};
