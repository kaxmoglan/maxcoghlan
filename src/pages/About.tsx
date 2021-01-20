import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  theme: String;
  setTheme: Function;
  showNav: Boolean;
  setShowNav: Function;
  showSocial: Boolean;
  setShowSocial: Function;
}

export const About: React.FC<Props> = (props) => {
  const {
    theme,
    setTheme,
    showNav,
    setShowNav,
    showSocial,
    setShowSocial,
  } = props;

  useEffect(() => {
    if (theme !== "dark") {
      setTheme("dark");
    }
    if (!showNav) {
      setShowNav(true);
    }
    if (!showSocial) {
      setShowSocial(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2>About</h2>
      <Link className="project__link" to="/projects/custom/various-applets">
        View Projects
      </Link>
    </>
  );
};
