import React from "react";
import { Link } from "react-router-dom";

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
    <div className="blog-post-all__container">
      {allPosts.length === 0 && (
        <p className="blog-post-all__error">
          The blog appears to be missing =/
        </p>
      )}
      {allPosts.length > 0 &&
        allPosts.map((post, i) => (
          <>
            <Link to={`/blog/${post.id}`} className="blog-post-card" key={i}>
              <h2 className="blog-post-card__title">{post.title}</h2>
              <p className="blog-post-card__description">{post.description}</p>
              <p className="blog-post-card__date">
                {post.readable_publish_date}
              </p>
            </Link>
            <hr />
          </>
        ))}
    </div>
  );
};
