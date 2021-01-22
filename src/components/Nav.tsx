import React from "react";

import { NavLink, Link } from "react-router-dom";

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
  { to: "/", icon: HomeIcon, text: "Home", exact: true },
  { to: "/about", icon: AboutIcon, text: "About", exact: true },
  { to: "/skills", icon: SkillsIcon, text: "Skills", exact: true },
  { to: "/projects", icon: ProjectsIcon, text: "Projects", exact: false },
  { to: "/contact", icon: ContactIcon, text: "Contact", exact: true },
  { to: "/blog/home", icon: BlogIcon, text: "Blog", exact: true },
];

export const MobileNav: React.FC = () => {
  return (
    <nav className="mobile-menu">
      <Link className="mobile-menu__logo" to="/">
        <div className="mobile-menu__logo-million"></div>
        <div className="archivo">M</div>
      </Link>

      <div className="mobile-menu__container">
        {DATA.map((item) => (
          <NavLink
            key={item.to}
            className="mobile-menu__link"
            activeClassName="active"
            to={item.to}
            exact={item.exact}
            strict
          >
            <div className="mobile-menu__icon">{item.icon}</div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export const DesktopNav: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo__million"></div>
        <p className="archivo">M</p>
        <p className="archivo aximilian">aximilian.</p>
      </div>
      {DATA.map((item) => (
        <NavLink
          key={item.to}
          className="navbar__link"
          activeClassName="active"
          to={item.to}
          exact={item.exact}
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
