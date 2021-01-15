import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PROJECTS } from "../util/projects";

interface Props {
  theme: String;
  setTheme: Function;
  showNav: Boolean;
  setShowNav: Function;
}

export const ProjectDetail: React.FC<Props> = (props) => {
  const { theme, setTheme, showNav, setShowNav } = props;
  let { id } = useParams<any>();

  const [project, setProject] = useState<any>({});

  useEffect(() => {
    // FIND AND LOAD PROJECT INTO PROJECT STATE
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

  return <h1>{project.name && project.name.join(" ")}</h1>;
};
