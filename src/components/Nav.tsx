import React from "react";

import { NavLink, useLocation } from "react-router-dom";

export const DesktopNav: React.FC = () => {
  let location = useLocation();

  return (
    <nav id="sidebar" className={location.pathname === "/about" ? "blog" : ""}>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about" exact>
        About
      </NavLink>
      <NavLink to="/skills" exact>
        Skills
      </NavLink>
      <NavLink to="/projects" exact>
        Projects
      </NavLink>
      <NavLink to="/contact" exact>
        Contact
      </NavLink>
      <NavLink to="/blog" exact>
        Blog
      </NavLink>
    </nav>
  );
};
