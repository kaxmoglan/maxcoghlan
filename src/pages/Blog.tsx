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
  const [isPostDetailPage, setIsPostDetailPage] = useState(false);

  const [allPosts, setAllPosts] = useState([]);
  const [post, setPost] = useState({});
  const [err, setErr] = useState("");

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
        setTimeout(() => setLoading(false), 500);
      })
      .catch((err) => console.log(err));
  };

  // GLOBAL STATE
  useEffect(() => {
    setTheme("light");
    setShowNav(false);
    setShowSocial(false);
  }, [setTheme, setShowNav, setShowSocial]);

  // GET SINGLE POSTS
  useEffect(() => {
    if (id !== "home" && id !== undefined) {
      allPosts.length === 0 && getAllPosts();
      getSinglePost();
      setIsPostDetailPage(true);
      setTimeout(() => window.scrollTo(0, 0), 300);
    } else {
      allPosts.length === 0 && getAllPosts();
      setIsPostDetailPage(false);
    }
  }, [id]);

  return (
    <div className="blog-page-template">
      <div className="blog-page-template__container">
        <div className="left-column">
          <BlogHeader />
          <>
            <CSSTransition
              in={!isPostDetailPage}
              timeout={1000}
              classNames="blog-animate"
              unmountOnExit
            >
              <BlogAbout />
            </CSSTransition>
            <CSSTransition
              in={isPostDetailPage}
              timeout={1000}
              classNames="blog-animate"
              unmountOnExit
            >
              <BlogLatestPosts />
            </CSSTransition>
          </>
        </div>
        <div className="right-column">
          <CSSTransition
            in={loading}
            timeout={1000}
            classNames="blog-loading-spinner"
            unmountOnExit
          >
            <div className="spinner__container">
              <Loader
                type="TailSpin"
                color="#000"
                height={50}
                width={50}
                className="spinner"
              />
            </div>
          </CSSTransition>

          <CSSTransition
            in={!loading && !isPostDetailPage}
            timeout={1000}
            classNames="blog-animate"
            unmountOnExit
          >
            <BlogPostAll allPosts={allPosts} />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};
