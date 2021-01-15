import React, { useEffect } from "react";

import { Link } from "react-router-dom";

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
      {PROJECTS.map((project) => (
        <div key={project.url} className="project-card">
          <div className="project-card__container">
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
                <Link to={`/projects/${project.url}`}>View Project</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
