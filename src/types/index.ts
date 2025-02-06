export interface Question {
  id: number;
  text: string;
  acceptText: string;
  rejectionText: string;
  imageUrl: string;
}

export interface DateLocation {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface Outfit {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

export type Stage = 'initial' | 'accepted' | 'location' | 'outfit' | 'declaration';