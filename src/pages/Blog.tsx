import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import axios from "axios";
import Loader from "react-loader-spinner";

import { BlogHeader } from "../components/Blog/BlogHeader";
import { BlogAbout } from "../components/Blog/BlogAbout";
import { BlogPostAll } from "../components/Blog/BlogPostAll";
import { BlogPost } from "../components/Blog/BlogPost";

import { IGLOBALSTATE } from "../util/interfaces";
import { IPOST } from "../util/interfaces";

const api = axios.create({
  baseURL: "https://dev.to/api/",
});

export const Blog: React.FC<IGLOBALSTATE> = (props) => {
  const { setTheme, setShowNav, setShowSocial } = props;

  const { id }: any = useParams();
  const [loading, setLoading] = useState(true);
  const [isPostDetailPage, setIsPostDetailPage] = useState(false);

  const [allPosts, setAllPosts] = useState([]);
  const [post, setPost] = useState<IPOST>({
    type_of: "",
    id: 0,
    title: "",
    description: "",
    readable_publish_date: "",
    slug: "",
    path: "",
    url: "",
    comments_count: 0,
    public_reactions_count: 0,
    collection_id: 0,
    published_timestamp: "",
    positive_reactions_count: 0,
    cover_image: "",
    social_image: "",
    canonical_url: "",
    created_at: "",
    edited_at: "",
    crossposted_at: "",
    published_at: "",
    last_comment_at: "",
    tag_list: "",
    tags: [""],
    body_html: "",
    body_markdown: "",
    user: {
      name: "",
      username: "",
      twitter_username: "",
      github_username: "",
      website_url: "",
      profile_image: "",
      profile_image_90: "",
    },
  });
  const [getPostError, setGetPostError] = useState(false);

  // GLOBAL STATE
  useEffect(() => {
    setTheme("light");
    setShowNav(false);
    setShowSocial(false);
  }, [setTheme, setShowNav, setShowSocial]);

  // GET POSTS
  useEffect(() => {
    if (id !== "home" && id !== undefined) {
      setLoading(true);

      api
        // GET SINGLE POST
        .get(`/articles/${id}`)
        .then((res) => {
          setPost(res.data);
          setTimeout(() => setLoading(false), 500);
        })
        .catch(() => setGetPostError(true));

      setIsPostDetailPage(true);
      setTimeout(() => window.scrollTo(0, 0), 300);
    } else {
      if (allPosts.length === 0) {
        setLoading(true);
        api
          // GET ALL POSTS
          .get("/articles?username=kaxmoglan&state=all")
          .then((res) => {
            setAllPosts(res.data);
            setTimeout(() => setLoading(false), 2000);
          })
          .catch((err) => console.log(err));
      }
      setIsPostDetailPage(false);
      setTimeout(() => window.scrollTo(0, 0), 300);
    }
  }, [id, allPosts]);

  return (
    <div className="blog-page-template">
      <div className="blog-page-template__container">
        <div className="left-column">
          <BlogHeader />
          <BlogAbout />
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
          <CSSTransition
            in={!loading && isPostDetailPage}
            timeout={1000}
            classNames="blog-animate"
            unmountOnExit
          >
            <BlogPost post={post} getPostError={getPostError} />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};
