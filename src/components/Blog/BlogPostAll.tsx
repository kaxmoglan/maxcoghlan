import React from "react";
import { Link } from "react-router-dom";

import { IALLPOSTS } from "../../util/interfaces";

interface Props {
  allPosts: Array<IALLPOSTS>;
}

export const BlogPostAll: React.FC<Props> = (props) => {
  const { allPosts } = props;

  return (
    <div className="blog-post-all__container">
      {allPosts.length === 0 && (
        <p className="error-message">The blog appears to be missing =/</p>
      )}
      {allPosts.length > 0 &&
        allPosts.map((post, i) => (
          <div key={i}>
            <Link to={`/blog/${post.id}`} className="blog-post-card" key={i}>
              <h2 className="blog-post-card__title">{post.title}</h2>
              <p className="blog-post-card__description">{post.description}</p>
              <div className="blog-post-card__meta">
                <p className="blog-post-card__tags">
                  {post.tag_list?.map((tag, i) => (
                    <span key={i}>#{tag} </span>
                  ))}
                </p>
                <p className="blog-post-card__date">
                  {post.readable_publish_date}
                </p>
              </div>
            </Link>
            <hr />
          </div>
        ))}
    </div>
  );
};
