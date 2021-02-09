import React from "react";

// IMPORT IMAGES

import desktopImg from "../../images/dist/projects/maxcoghlan/maxcoghlan-desktop.png";
import tabletImg from "../../images/dist/projects/maxcoghlan/maxcoghlan-tablet.png";
import mobileImg from "../../images/dist/projects/maxcoghlan/maxcoghlan-mobile.png";

// IMPORT ICONS

import {
  TypescriptIcon,
  ReactIcon,
  NodeIcon,
  GulpIcon,
  SassIcon,
  NpmIcon,
} from "../icons";

// PROJECT DATA

const DATA = {
  url: "maxcoghlan",
  name: ["MY", "PORTFOLIO"],
  tagline: "Built with React and Typescript",
  workShort: ["UI / UX", "Front End"],
  workExpanded: ["UI/UX Design", "Front End Development"],
  links: {
    app: "",
    github: "https://github.com/kaxmoglan/maxcoghlan",
  },
  tech: ["React", "Typescript", "Node.js", "Sass", "Gulp"],
  icons: [ReactIcon, TypescriptIcon, GulpIcon, SassIcon, NpmIcon, NodeIcon],
  subheading: "UI/UX | Front End",
  description: "this.portfolioApp! Built with React, Typescript and Sass.",
  mobileImg: {
    src: mobileImg,
    alt: "A screen shot of this site's home page on a smart phone",
  },
  tabletImg: {
    src: tabletImg,
    alt: "A screen shot of this site's home page on a tablet computer",
  },
  desktopImg: {
    src: desktopImg,
    alt: "A screen shot of this site's home page on a desktop computer",
  },
  content: (
    <div className="project-body">
      <div className="narrow">
        <h2>THE APP</h2>
        <p>
          I wanted a clean and modern front end app to showcase my work, my blog
          and a bit about me. I designed it in Adobe XD, built it using React,
          Typescript and Sass, and used the DEV API to hook into my dev.to blog
          using Axios.
        </p>
        <h2>THE ANIMATIONS</h2>
        <p>
          The animations, which were drawn by my brother in Adobe Animate, are
          all SVGs and animated with CSS. The page transitions are all aided by
          React Transition Group.
        </p>
        <h2>THE PROJECTS</h2>
        <p>
          Each project page is derived from the same 'ProjectDetail' component.
          There's a file for each project which includes all the data needed
          (and defined by a Typescript interface). The ProjectDetail component
          then grabs the correct project's data using the URL passed to the
          component, utilising the useParams hook.
        </p>
        <h2>THE BLOG</h2>
        <p>
          I wanted the blog to feel like its own platform and I also think it's
          nicer to read black text on a white background, the (almost) inverse
          to my app's design. I used some global state to change class names in
          order to change the background colour, and componentised the social
          media icons and my navigation bar to make them disappear when going to
          the blog, and reappear when going back to the main site.
        </p>
        <p>
          Using the DEV API, I used Axios to send a GET request for an array of
          all my published blog posts, and then another GET request for
          individual posts using each article's ID, but only when the user
          clicks on one to read more.
        </p>
      </div>
    </div>
  ),
};

export default DATA;
