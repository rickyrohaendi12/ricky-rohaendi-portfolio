export interface Project {
  id: string;
  title: string;
  category: "ui-ux" | "engineering" | "fullstack" | "dual";
  tags: string[];
  description: string;
  longDescription: string;
  image: string;
  figmaUrl?: string;
  githubUrl?: string;
  githubUrls?: Array<{ label: string; url: string }>;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: "design" | "engineering";
  level: number; // 0-100 percentage
  icon: string; // lucide icon name
  description: string;
  details: string;
}

export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
