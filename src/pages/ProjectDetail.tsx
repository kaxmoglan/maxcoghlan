import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PROJECTS } from "../util/projects";

interface Props {
  theme: String;
  setTheme: Function;
  showNav: Boolean;
  setShowNav: Function;
}

interface IPROJECT {
  url: string;
  name: string[];
  workShort: string[];
  workExpanded: string[];
  links: {
    project: string;
    app: string;
    github?: string;
    next: string;
    previous: string;
  };
  tech: string[];
  icons: JSX.Element[];
  subheading: string;
  description: string;
  mobileImg: {
    src: string;
    alt: string;
  };
  tabletImg: {
    src: string;
    alt: string;
  };
  desktopImg: {
    src: string;
    alt: string;
  };
  content: JSX.Element;
}

export const ProjectDetail: React.FC<Props> = (props) => {
  const { theme, setTheme, showNav, setShowNav } = props;
  let { id } = useParams<any>();

  const [project, setProject] = useState<IPROJECT>({
    url: "",
    name: [],
    workShort: [],
    workExpanded: [],
    links: {
      project: "",
      app: "",
      next: "",
      previous: "",
    },
    tech: [],
    icons: [],
    subheading: "",
    description: "",
    mobileImg: {
      src: "",
      alt: "",
    },
    tabletImg: {
      src: "",
      alt: "",
    },
    desktopImg: {
      src: "",
      alt: "",
    },
    content: <></>,
  });

  useEffect(() => {
    // FIND AND LOAD PROJECT DATA INTO COMPONENT STATE
    for (let i = 0; i < PROJECTS.length; i++) {
      if (PROJECTS[i].url === id) {
        setProject(PROJECTS[i]);
      }
    }
    // SET THEME & NAVIGATION GLOBAL STATE
    if (theme !== "dark") {
      setTheme("dark");
    }
    if (!showNav) {
      setShowNav(true);
    }

    // eslint-disable-next-line
  }, []);

  const markup = (
    <>
      <h1>{project.name.join(" ")}</h1>
      <img src={project.mobileImg.src} alt={project.mobileImg.alt} />
      <img src={project.desktopImg.src} alt="" />
      {project.content}
    </>
  );

  return markup;
};
