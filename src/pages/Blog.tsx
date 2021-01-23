import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { BlogProfile } from "../components/Blog/BlogProfile";

interface Props {
  setTheme: Function;
  setShowNav: Function;
  setShowSocial: Function;
}

export const Blog: React.FC<Props> = (props) => {
  const { setTheme, setShowNav, setShowSocial } = props;

  const { id }: any = useParams();
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState();
  const [post, setPost] = useState();
  const [page, setPage] = useState<"ALL" | "SINGLE">("ALL");

  // SET GLOBAL STATE ON LOAD
  useEffect(() => {
    setTheme("light");
    setShowNav(false);
    setShowSocial(false);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="blog-page-template">
      <div className="blog-page-template__container">
        <div className="left-column">
          <BlogProfile />
        </div>
        <div className="right-column"></div>
      </div>
    </div>
  );
};
