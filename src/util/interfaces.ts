export interface IGLOBALSTATE {
  setTheme: Function;
  setShowNav: Function;
  setShowSocial: Function;
}

export interface IPROJECT {
  url: string;
  name: string[];
  tagline: string;
  workShort: string[];
  workExpanded: string[];
  links: {
    app: string;
    github?: string;
  };
  tech: string[];
  icons: JSX.Element[];
  subheading: string;
  description: string;
  mobileImg: {
    src: string;
    alt: string;
  };
  tabletImg: {
    src: string;
    alt: string;
  };
  desktopImg: {
    src: string;
    alt: string;
  };
  content: JSX.Element;
}

export interface IALLPOSTS {
  type_of: null | string;
  id: null | number;
  title: null | string;
  description: null | string;
  readable_publish_date: null | string;
  slug: null | string;
  path: null | string;
  url: null | string;
  comments_count: null | number;
  public_reactions_count: null | number;
  collection_id: null | number;
  published_timestamp: null | string;
  positive_reactions_count: null | number;
  cover_image: string | null;
  social_image: null | string;
  canonical_url: null | string;
  created_at: null | string;
  edited_at: null | string;
  crossposted_at: null | string;
  published_at: null | string;
  last_comment_at: null | string;
  tag_list: null | string[];
  tags: null | string[];
  user: {
    name: null | string;
    username: null | string;
    twitter_username: null | string;
    github_username: null | string;
    website_url: null | string;
    profile_image: null | string;
    profile_image_90: null | string;
  };
}

export interface IPOST {
  type_of: null | string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: null | string;
  slug: null | string;
  path: null | string;
  url: string;
  comments_count: null | number;
  public_reactions_count: null | number;
  collection_id: null | number;
  published_timestamp: null | string;
  positive_reactions_count: null | number;
  cover_image: null | string;
  social_image: null | string;
  canonical_url: null | string;
  created_at: null | string;
  edited_at: null | string;
  crossposted_at: null | string;
  published_at: null | string;
  last_comment_at: null | string;
  tag_list: null | string;
  tags: string[];
  body_html: string;
  body_markdown: null | string;
  user: {
    name: null | string;
    username: null | string;
    twitter_username: null | string;
    github_username: null | string;
    website_url: null | string;
    profile_image: null | string;
    profile_image_90: null | string;
  };
}
