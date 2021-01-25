import React from "react";

// IMPORT IMAGES

import desktopImg from "../../images/dist/projects/mini-blog/mini-blog-desktop.png";
import tabletImg from "../../images/dist/projects/mini-blog/mini-blog-tablet.png";
import mobileImg from "../../images/dist/projects/mini-blog/mini-blog-mobile.png";

// IMPORT ICONS

import {
  PythonIcon,
  DjangoIcon,
  HerokuIcon,
  BootstrapIcon,
  JinjaIcon,
} from "../icons";

// PROJECT DATA

const DATA = {
  url: "mini-blog",
  name: ["MAX'S", "MINI BLOG"],
  tagline: "Full stack blogging platform",
  workShort: ["UI / UX", "Front End", "Back End"],
  workExpanded: [
    "UI/UX Design",
    "Front End Development",
    "Back End Development",
  ],
  links: {
    app: "https://kaxmoglan-miniblog.herokuapp.com",
    github: "https://github.com/kaxmoglan/miniblog",
  },
  tech: ["Python", "Django", "Bootstrap", "Heroku", "Jinja", "SQL"],
  icons: [PythonIcon, DjangoIcon, HerokuIcon, BootstrapIcon, JinjaIcon],
  subheading: "UI/UX | Front End | Back End",
  description:
    "A full stack blogging platform built with Python, Django and Bootstrap and deployed on Heroku.",
  mobileImg: {
    src: mobileImg,
    alt: "A screen shot of Max's Mini Blog's home page on a smart phone",
  },
  tabletImg: {
    src: tabletImg,
    alt: "A screen shot of Max's Mini Blog's home page on a tablet computer",
  },
  desktopImg: {
    src: desktopImg,
    alt: "A screen shot of Max's Mini Blog's home page on a desktop computer",
  },
  content: (
    <div className="project-body">
      <div className="narrow">
        <h2>THE PROJECT</h2>
        <p>
          Max’s Mini Blog, a personal project, is a full stack blogging app
          built with Python & Django and deployed on Heroku.
        </p>
        <p>
          Users can create an account and a profile, write, publish and edit
          blog posts, and comment on other users’ posts.
        </p>
        <p>
          The front end wasn’t my focus on this project so I used Bootstrap for
          a quick and easy responsive design.
        </p>
      </div>
    </div>
  ),
};

export default DATA;
