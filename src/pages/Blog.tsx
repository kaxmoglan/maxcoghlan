import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { BlogHeader } from "../components/Blog/BlogHeader";
import { BlogAbout } from "../components/Blog/BlogAbout";
import { BlogLatestPosts } from "../components/Blog/BlogLatestPosts";

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
  const [showAbout, setShowAbout] = useState(true);

  // SET GLOBAL STATE ON LOAD
  useEffect(() => {
    setTheme("light");
    setShowNav(false);
    setShowSocial(false);

    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="blog-page-template">
      <div className="blog-page-template__container">
        <div className="left-column">
          <BlogHeader />
          <>
            <CSSTransition
              in={showAbout}
              timeout={1000}
              classNames="blog-second-panel"
              unmountOnExit
            >
              <BlogAbout />
            </CSSTransition>
            <CSSTransition
              in={!showAbout}
              timeout={1000}
              classNames="blog-second-panel"
              unmountOnExit
            >
              <BlogLatestPosts />
            </CSSTransition>
          </>
        </div>
        <div className="right-column">
          <p onClick={() => handleClick()}>CLICK ME</p>
        </div>
      </div>
    </div>
  );
};
