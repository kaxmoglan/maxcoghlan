import React from "react";

import { NavLink } from "react-router-dom";

// ICONS
import {
  HomeIcon,
  AboutIcon,
  SkillsIcon,
  ProjectsIcon,
  ContactIcon,
  BlogIcon,
} from "../util/icons";

// NAV DATA
const DATA = [
  { to: "/", icon: HomeIcon, text: "Home" },
  { to: "/about", icon: AboutIcon, text: "About" },
  { to: "/skills", icon: SkillsIcon, text: "Skills" },
  { to: "/projects", icon: ProjectsIcon, text: "Projects" },
  { to: "/contact", icon: ContactIcon, text: "Contact" },
  { to: "/blog", icon: BlogIcon, text: "Blog" },
];

export const DesktopNav: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="million"></div>
        <p className="archivo">M</p>
        <p className="archivo aximilian">aximilian.</p>
      </div>
      {DATA.map((item) => (
        <NavLink
          className="navbar__link"
          activeClassName="active"
          to={item.to}
          exact
        >
          <div className="navbar__link-icon">{item.icon}</div>

          <div className="navbar__link-text-container">
            <svg className="navbar__link-text">
              <text x="0" y="39">
                {item.text}
              </text>
            </svg>
          </div>
        </NavLink>
      ))}
    </nav>
  );
};
