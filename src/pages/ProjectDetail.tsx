import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
    app: string;
    github?: string;
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
      app: "",
      github: "",
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

  const [prevProject, setPrevProject] = useState("");
  const [nextProject, setNextProject] = useState("");
  const [animationClass, setAnimationClass] = useState("fade-out");

  const handleAnimationClass = () => {
    animationClass === "fade-in" && setAnimationClass("fade-out");
    setTimeout(() => setAnimationClass("fade-in"), 300);
  };

  const getProject = () => {
    // FIND AND LOAD PROJECT DATA INTO COMPONENT STATE
    handleAnimationClass();

    for (let i = 0; i < PROJECTS.length; i++) {
      if (PROJECTS[i].url === id) {
        // DELAY FOR ANIMATION
        setTimeout(() => {
          setProject(PROJECTS[i]);
        }, 300);

        // SET PREV & NEXT PROJECT LINKS
        if (PROJECTS[i - 1]) {
          setPrevProject(PROJECTS[i - 1].url);
        } else {
          setPrevProject(PROJECTS[PROJECTS.length - 1].url);
        }

        if (PROJECTS[i + 1]) {
          setNextProject(PROJECTS[i + 1].url);
        } else {
          setNextProject(PROJECTS[0].url);
        }
      }
    }
  };

  useEffect(() => {
    getProject();

    // SET THEME & NAVIGATION GLOBAL STATE
    if (theme !== "dark") {
      setTheme("dark");
    }
    if (!showNav) {
      setShowNav(true);
    }

    // eslint-disable-next-line
  }, [id]);

  const markup = (
    <div className={`project-detail-page ${animationClass}`}>
      {/* TOP SECTION */}
      <div className="project-detail-page__header">
        <div className="container">
          {/* LEFT COLUMN */}
          <div className="heading">
            <div className="heading__container">
              <h1 className="project-name">
                {project.name.map((word) => (
                  <>
                    {word}
                    <br />
                  </>
                ))}
              </h1>
              <p className="project-subheading">{project.subheading}</p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="description">
            <div className="description__container">
              <p className="description__text">{project.description}</p>
              <div className="description__links">
                <a
                  href={project.links.app}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link"
                >
                  Open App
                </a>
                {project.links.github !== "" && (
                  <>
                    <p> | </p>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__link"
                    >
                      GitHub
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCREEN SHOTS */}

      {/* CLOSING DIV */}
    </div>
  );

  return markup;
};
