import React from "react";
import { Link } from "react-router-dom";

import { IPOST } from "../../util/interfaces";

interface Props {
  post: IPOST;
  getPostError: boolean;
}

export const BlogPost: React.FC<Props> = (props) => {
  const { post, getPostError } = props;

  const errorMarkup = (
    <p className="error-message">
      I've looked everywhere, but I can't seem to find the post you're looking
      for.
      <br />
      <br />
      Have you tried down the back of the sofa? I always lose stuff down
      there...
    </p>
  );

  const postMarkup = (
    <div className="blog-post__container">
      {post?.cover_image && (
        <img
          className="blog-post__cover-img"
          src={post?.cover_image}
          alt={post?.description}
        />
      )}
      <h1 className="blog-post__title">{post?.title}</h1>
      <p className="blog-post__tags">
        {post?.tags.map((tag, i) => (
          <span key={i}>#{tag} </span>
        ))}
      </p>
      <div
        className="blog-post__body"
        dangerouslySetInnerHTML={{ __html: post.body_html }}
      />
      <div className="blog-post__publish-date">
        <p>Published on {post.readable_publish_date}</p>
      </div>
      <div className="blog-post__footer">
        <Link to="/blog/home" className="blog-post__footer-link">
          View All Posts
        </Link>
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          className="blog-post__footer-link"
        >
          Read on Dev.to
        </a>
      </div>
    </div>
  );

  return (
    <div className="blog-post">{getPostError ? errorMarkup : postMarkup}</div>
  );
};
