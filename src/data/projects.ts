export interface ProjectItem {
  name: string;
  blurb: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectItem[] = [];
