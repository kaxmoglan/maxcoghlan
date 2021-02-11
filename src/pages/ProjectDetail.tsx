import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { PROJECTS } from "../util/projects";

import { IGLOBALSTATE } from "../util/interfaces";
import { IPROJECT } from "../util/interfaces";

export const ProjectDetail: React.FC<IGLOBALSTATE> = (props) => {
  const { setTheme, setShowNav, setShowSocial } = props;
  let { id } = useParams<any>();

  const [project, setProject] = useState<IPROJECT>({
    url: "",
    name: [],
    tagline: "",
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

  const [prevProject, setPrevProject] = useState({ name: "", url: "" });
  const [nextProject, setNextProject] = useState({ name: "", url: "" });
  const [animationClass, setAnimationClass] = useState("fade-out");
  const [offsetY, setOffsetY] = useState(0);

  // HANDLERS
  const handleScroll = () => setOffsetY(window.pageYOffset);

  const handleAnimationClass = () => {
    animationClass === "fade-in" && setAnimationClass("fade-out");
    setTimeout(() => {
      setAnimationClass("fade-in");
      window.scrollTo(0, 0);
    }, 300);
  };

  const getProject = () => {
    handleAnimationClass();

    for (let i = 0; i < PROJECTS.length; i++) {
      if (PROJECTS[i].url === id) {
        // DELAY FOR ANIMATION
        setTimeout(() => {
          setProject(PROJECTS[i]);

          // SET PREV & NEXT PROJECT LINKS
          if (PROJECTS[i - 1]) {
            setPrevProject({
              name: PROJECTS[i - 1].name.join(" "),
              url: PROJECTS[i - 1].url,
            });
          } else {
            setPrevProject({
              name: "Various Applets",
              url: "/projects/custom/various-applets",
            });
          }

          if (PROJECTS[i + 1]) {
            setNextProject({
              name: PROJECTS[i + 1].name.join(" "),
              url: PROJECTS[i + 1].url,
            });
          } else {
            setNextProject({
              name: "Various Applets",
              url: "/projects/custom/various-applets",
            });
          }
        }, 300);
      }
    }
  };

  // INITIAL COMPONENT LOAD
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setTimeout(() => window.scrollTo(0, 0), 300);

    // SET THEME & NAVIGATION GLOBAL STATE
    setTheme("dark");
    setShowNav(true);
    setShowSocial(true);

    // UNLOAD EVENT LISTENER
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setTheme, setShowNav, setShowSocial]);

  // NEXT & PREV PROJECT LOAD
  useEffect(() => {
    getProject();

    // eslint-disable-next-line
  }, [id]);

  const markup = (
    <main className="content__main">
      <div className={`project-detail-page ${animationClass}`}>
        {/* TOP SECTION */}
        <div className="project-detail-page__header">
          <div className="container">
            {/* LEFT COLUMN */}
            <div className="heading">
              <div className="heading__container">
                <div className="heading__container-inner">
                  <h1 className="project-name">
                    {project.name.map((word, i) => (
                      <div key={i}>
                        <span>{word}</span>
                        <br />
                      </div>
                    ))}
                  </h1>
                  <p className="project-subheading">{project.subheading}</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="description">
              <div className="description__container">
                <p className="description__text">{project.description}</p>
                <div className="description__links">
                  {project.links.app !== "" && (
                    <a
                      href={project.links.app}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__link"
                    >
                      Open App
                    </a>
                  )}
                  {project.links.app !== "" && project.links.github !== "" && (
                    <p> | </p>
                  )}
                  {project.links.github !== "" && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__link"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCREEN SHOTS */}
        <div className="screen-shots">
          <img
            src={project.desktopImg.src}
            alt={project.desktopImg.alt}
            className="screen-shots__desktop screen-shot"
            style={{ transform: `translateY(-${offsetY * 0.25}px)` }}
          />
          <img
            src={project.tabletImg.src}
            alt={project.tabletImg.alt}
            style={{ transform: `translateY(-${offsetY * 0.6}px)` }}
            className="screen-shots__tablet screen-shot"
          />
          <img
            src={project.mobileImg.src}
            alt={project.mobileImg.alt}
            style={{ transform: `translateY(-${offsetY * 0.75}px)` }}
            className="screen-shots__mobile screen-shot"
          />
        </div>

        {/* CUSTOM CONTENT */}
        <div className="custom-content">{project.content}</div>

        {/* SUMMARY CARD */}
        <div className="project-details">
          <div className="project-details__container">
            {/* LEFT COLUMN */}
            <div className="project-details__tech">
              <div className="project-details__tech-container">
                <p className="project-details__header">TECH</p>
                {project.tech.map((t, i) => (
                  <p className="project-details__tech-item" key={i}>
                    {t}
                  </p>
                ))}
              </div>
            </div>

            {/* CENTRE COLUMN */}
            <div className="project-details__work">
              <div className="project-details__work-container">
                <p className="project-details__header">WORK</p>
                <p className="project-details__work-text">
                  {project.workExpanded.map((w, i) => (
                    <span key={i}>
                      {w} <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="project-details__links">
              <div className="project-details__links-container">
                <p className="project-details__header">LINKS</p>
                {project.links.app !== "" && (
                  <div>
                    <a
                      href={project.links.app}
                      target="_blank"
                      rel="noreferrer"
                      className="project__link"
                    >
                      Open App
                    </a>
                  </div>
                )}
                {project.links.github !== "" && (
                  <div>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project__link"
                    >
                      GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* NEXT & PREV PROJECT */}
        <div className="more-projects">
          <div className="more-projects__container">
            <div className="more-projects__previous">
              <p className="more-projects__title">PREV</p>
              <Link className="project__link mirror" to={prevProject.url}>
                {prevProject.name}
              </Link>
            </div>
            <div className="more-projects__next">
              <p className="more-projects__title">NEXT</p>
              <Link className="project__link" to={nextProject.url}>
                {nextProject.name}
              </Link>
            </div>
          </div>
        </div>
        {/* CLOSING DIV */}
      </div>
    </main>
  );

  return markup;
};
