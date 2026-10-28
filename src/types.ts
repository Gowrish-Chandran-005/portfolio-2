export type SectionId = 'plate-01' | 'plate-02' | 'plate-03' | 'plate-04' | 'work' | 'story' | 'about' | 'contact';

export type IllustrationMode = 'original' | 'blueprint' | 'sepia' | 'studio';

export interface IllustrationHotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  description: string;
  technique: string;
}

export interface CaseStudyPlate {
  id: string;
  plateNumber: string;
  title: string;
  subtitle: string;
  category: 'social' | 'event' | 'posters' | 'identity' | 'ui';
  categoryLabel: string;
  year: string;
  dimensions: string;
  medium: string;
  tactility: string;
  description: string;
  takeaway: string;
  imageUrl: string;
  accentColor?: string;
  featured?: boolean;
}

export interface ToolchainStep {
  stepNumber: string;
  level: string;
  year: string;
  name: string;
  subtitle: string;
  heightClass: string;
  isApex?: boolean;
  accentBadge?: string;
  description: string;
  breakthrough: string;
  tools: string[];
}

export interface ChronologyNode {
  id: string;
  nodeNumber: string;
  tag: string;
  tagType: 'origin' | 'tactile' | 'tooling' | 'current';
  date: string;
  title: string;
  description: string;
}

export interface ContactDispatch {
  senderName: string;
  email: string;
  organization: string;
  inquiryType: 'commission' | 'speaking' | 'collaboration' | 'consultation';
  timeline: string;
  brief: string;
}
