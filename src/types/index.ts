export interface ThingToSayItem {
  id: string;
  number: string;
  quote: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: 'facebook' | 'instagram' | 'globe';
}