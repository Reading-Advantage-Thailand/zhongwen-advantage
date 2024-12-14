export interface MainNavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  link: {
    github: string;
  };
}

export interface SidebarNavItem {
  id?: string;
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
}
