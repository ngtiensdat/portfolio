export type BookId = 'profile' | 'skills' | 'projects' | 'contact';

export interface BookInfo {
  id: BookId;
  volNumber: string;
  title: string;
  subtitle: string;
  colorScheme: {
    coverGradient: string;
    borderColor: string;
    shadowColor: string;
    ribbonColor: string;
    badgeBg: string;
    badgeText: string;
  };
  summaryTags: string[];
  totalPages: number;
}

