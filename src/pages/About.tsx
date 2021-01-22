import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  setTheme: Function;
  setShowNav: Function;
  setShowSocial: Function;
}

export const About: React.FC<Props> = (props) => {
  const { setTheme, setShowNav, setShowSocial } = props;

  useEffect(() => {
    setTheme("dark");
    setShowNav(true);
    setShowSocial(true);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="main content__main">
      <h2>About</h2>
      <Link className="project__link" to="/projects/custom/various-applets">
        View Projects
      </Link>
    </div>
  );
};
