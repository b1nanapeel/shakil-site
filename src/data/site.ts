export interface SiteData {
  name: string;
  bio: string;
  links: { label: string; url: string }[];
  email: string;
}

export const site: SiteData = {
  name: "Shakil Musthafa",
  bio: `I'm an incoming transfer at <a href="https://ucsd.edu">UC San Diego</a> studying Business Economics and Cognitive Science (Machine Learning). I'm currently building data infrastructure and dashboards for <a href="https://monolithsystematic.com">Monolith Systematic</a>, a systematic macro fund, and doing AI training work at <a href="https://handshake.com">Handshake</a>.`,
  links: [
    { label: "GitHub", url: "https://github.com/b1nanapeel" },
    { label: "LinkedIn", url: "https://linkedin.com/in/shakilmusthafa" },
    { label: "Email", url: "mailto:shakil@shakilmusthafa.com" },
  ],
  email: "shakil@shakilmusthafa.com",
};
