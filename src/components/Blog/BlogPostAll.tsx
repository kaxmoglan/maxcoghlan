import React from "react";

interface IALLPOSTS {
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

interface Props {
  allPosts: Array<IALLPOSTS>;
}

export const BlogPostAll: React.FC<Props> = (props) => {
  const { allPosts } = props;
  return (
    <>
      <h1>ALL BLOG POSTS</h1>
    </>
  );
};
