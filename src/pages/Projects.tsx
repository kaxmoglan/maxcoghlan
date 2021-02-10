import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { PROJECTS } from "../util/projects";
import { IGLOBALSTATE } from "../util/interfaces";

// ICONS AND ARRAY FOR 'VARIOUS APPLETS' PROJECTS
import {
  ReactIcon,
  SassIcon,
  HtmlIcon,
  JavascriptIcon,
  NodeIcon,
  GulpIcon,
} from "../util/icons";

const appletIcons = [
  JavascriptIcon,
  GulpIcon,
  HtmlIcon,
  SassIcon,
  ReactIcon,
  NodeIcon,
];

export const Projects: React.FC<IGLOBALSTATE> = (props) => {
  const { setTheme, setShowNav, setShowSocial } = props;

  useEffect(() => {
    setTheme("dark");
    setShowNav(true);
    setShowSocial(true);
  }, [setTheme, setShowNav, setShowSocial]);

  return (
    <main className="content__main">
      <div className="projects-page">
        <h1 className="projects-page__title">
          <span className="million">M</span>y Work
        </h1>
        <div className="projects">
          {PROJECTS.map((project) => (
            <div key={project.url} className="project-card">
              <div className="project-card__container">
                {/* LEFT COLUMN */}
                <div className="project-card__name">
                  <p className="project-card__header">PROJECT</p>
                  <p className="project-card__name-text">
                    {project.name.map((s, i) => (
                      <span key={i}>
                        {" "}
                        {s}
                        <br />
                      </span>
                    ))}
                  </p>
                  <p className="project-card__name-tagline">
                    {project.tagline}
                  </p>
                </div>

                {/* MIDDLE COLUMN */}
                <div className="project-card__details">
                  <div className="project-card__work">
                    <p className="project-card__header">WORK</p>
                    {project.workShort.map((w, i) => (
                      <p key={i} className="project-card__text">
                        {w}
                      </p>
                    ))}
                  </div>

                  <div className="project-card__links">
                    <p className="project-card__header">LINKS</p>
                    <div>
                      <Link
                        className="project__link"
                        to={`/projects/${project.url}`}
                      >
                        View Project
                      </Link>
                    </div>
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

                {/* RIGHT COLUMN */}
                <div className="project-card__tech">
                  <p className="project-card__header">TECH</p>
                  <div className="container">
                    {project.icons.map((icon, i) => (
                      <div key={i} className="icon">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* VARIOUS APPLETS CARD */}
          <div className="project-card">
            <div className="project-card__container">
              {/* LEFT COLUMN */}
              <div className="project-card__name">
                <p className="project-card__header">PROJECT</p>
                <p className="project-card__name-text">
                  VARIOUS
                  <br />
                  APPLETS
                </p>
                <p className="project-card__name-tagline">
                  A collection of small projects
                </p>
              </div>

              {/* MIDDLE COLUMN */}
              <div className="project-card__details">
                <div className="project-card__work">
                  <p className="project-card__header">WORK</p>

                  <p className="project-card__text">UI / UX</p>
                  <p className="project-card__text">Front End</p>
                </div>

                <div className="project-card__links">
                  <p className="project-card__header">LINKS</p>
                  <div>
                    <Link
                      className="project__link"
                      to="/projects/custom/various-applets"
                    >
                      View Projects
                    </Link>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="project-card__tech">
                <p className="project-card__header">TECH</p>
                <div className="container">
                  {appletIcons.map((icon, i) => (
                    <div key={i} className="icon">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
