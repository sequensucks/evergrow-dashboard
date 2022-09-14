export interface Tab {
  id: string;
  title: string;
  hash: string;
}

export type TabsInterface = Tab[];

export interface NavLink {
  id: string;
  icon?: string;
  name: string;
  to: string;
}

export type NavInterface = NavLink[];
