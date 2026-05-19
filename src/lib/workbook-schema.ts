export interface ContentBlock {
  id: string;
  type: 'text' | 'journalPrompt' | 'checklist' | 'exercise' | 'emotionalCheckIn' | 'card' | 'resource' | 'template' | 'heading';
  content: Record<string, any>;
  metadata?: {
    emotionalIntensity?: 'light' | 'medium' | 'heavy';
    printable?: boolean;
    editable?: boolean;
    downloadable?: boolean;
    estimatedTime?: number;
  };
}

export interface WorkbookSection {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  content: ContentBlock[];
  estimatedTime: number;
  isExpanded?: boolean;
  completionPercentage?: number;
}

export interface WorkbookConfig {
  id: string;
  title: string;
  description: string;
  subtitle?: string;
  collection: string;
  theme: string;
  sections: WorkbookSection[];
  estimatedTime: number;
  progressTracking: boolean;
  allowDownload: boolean;
  allowPrint: boolean;
  emotionalTone: 'gentle' | 'hopeful' | 'grounding' | 'mixed';
  targetAudience: 'caregiver' | 'family' | 'both';
}

export interface WorkbookProgress {
  workbookId: string;
  completedSections: string[];
  savedContent: Record<string, string>;
  startedAt: string;
  lastUpdatedAt: string;
  emotionalCheckIns: Array<{
    timestamp: string;
    sectionId: string;
    response: string;
  }>;
}
