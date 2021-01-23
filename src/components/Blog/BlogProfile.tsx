import React from "react";
import { Link } from "react-router-dom";

import Social from "../Social";
import { ArrowLeftIcon } from "../../util/icons";

export const BlogProfile: React.FC = () => {
  return (
    <div className="blog-profile">
      <Link to="/blog/home" className="blog-profile__header">
        <p className="logo archivo">
          <span className="million">M</span>aximilian.
        </p>
        <p className="the-blog">The blog</p>
      </Link>

      <Social />

      <Link to="/" className="blog-profile__back-to-site">
        {ArrowLeftIcon}
        <p>Back to main site</p>
      </Link>
    </div>
  );
};
