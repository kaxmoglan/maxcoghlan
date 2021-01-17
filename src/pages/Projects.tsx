import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import particlesConfig from "../util/particlesjs-config.json";

import { PROJECTS } from "../util/projects";

interface Props {
  theme: String;
  setTheme: Function;
  showNav: Boolean;
  setShowNav: Function;
}

export const Projects: React.FC<Props> = (props) => {
  const { theme, setTheme, showNav, setShowNav } = props;

  useEffect(() => {
    if (theme !== "dark") {
      setTheme("dark");
    }
    if (!showNav) {
      setShowNav(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Particles id="tsparticles" options={particlesConfig} />
      <h1 className="page-header">
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
              </div>

              {/* MIDDLE COLUMN */}
              <div className="project-card__details">
                <div className="project-card__work">
                  <p className="project-card__header">WORK</p>
                  {project.workShort.map((w) => (
                    <p key={w} className="project-card__text">
                      {w}
                    </p>
                  ))}
                </div>

                <div className="project-card__links">
                  <p className="project-card__header">LINKS</p>
                  <Link
                    className="project__link"
                    to={`/projects/${project.url}`}
                  >
                    View Project
                  </Link>
                  <a
                    href={project.links.app}
                    target="_blank"
                    className="project__link"
                  >
                    Open App
                  </a>
                  {project.links.github != "" && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      className="project__link"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="project-card__tech">
                <p className="project-card__header">TECH</p>
                <div className="container">
                  {project.icons.map((icon) => (
                    <div className="icon">{icon}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
