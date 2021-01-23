import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import axios from "axios";
import Loader from "react-loader-spinner";

import { BlogHeader } from "../components/Blog/BlogHeader";
import { BlogAbout } from "../components/Blog/BlogAbout";
import { BlogLatestPosts } from "../components/Blog/BlogLatestPosts";
import { BlogPostAll } from "../components/Blog/BlogPostAll";

interface Props {
  setTheme: Function;
  setShowNav: Function;
  setShowSocial: Function;
}

const api = axios.create({
  baseURL: "https://dev.to/api/",
});

export const Blog: React.FC<Props> = (props) => {
  const { setTheme, setShowNav, setShowSocial } = props;

  const { id }: any = useParams();
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);
  const [post, setPost] = useState({});
  const [showAbout, setShowAbout] = useState(true);

  // GET REQUESTS
  const getAllPosts = () => {
    setLoading(true);
    api
      .get("/articles?username=jameswallis&state=all")
      .then((res) => {
        setAllPosts(res.data);
        setTimeout(() => setLoading(false), 2000);
      })
      .catch((err) => console.log(err));
  };

  const getSinglePost = () => {
    setLoading(true);
    api
      .get(`/articles/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  };

  // GLOBAL STATE
  useEffect(() => {
    setTheme("light");
    setShowNav(false);
    setShowSocial(false);

    getAllPosts();
  }, [setTheme, setShowNav, setShowSocial]);

  // GET SINGLE POSTS
  useEffect(() => {
    if (id !== "home" && id !== undefined) {
      getSinglePost();
    }

    console.log(id);
  }, [id]);

  // HANDLERS
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
          {loading && (
            <div className="spinner__container">
              <Loader
                type="TailSpin"
                color="#000"
                height={50}
                width={50}
                className="spinner"
              />
            </div>
          )}
          {!loading && <BlogPostAll allPosts={allPosts} />}
        </div>
      </div>
    </div>
  );
};
