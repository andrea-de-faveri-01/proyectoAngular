export interface NavBarLink {
  url: NavBarUrl;
  content: string;
}

export type NavBarUrl = 'home' | 'ai-list' | 'dev-list' | 'create-element';
