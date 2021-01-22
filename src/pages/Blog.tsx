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

export const Blog: React.FC<Props> = (props) => {
  const {
    theme,
    setTheme,
    showNav,
    setShowNav,
    showSocial,
    setShowSocial,
  } = props;

  useEffect(() => {
    theme !== "light" && setTheme("light");
    showNav && setShowNav(false);
    showSocial && setShowSocial(false);

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h2>Blog</h2>
      <Link to="/">Home</Link>
    </>
  );
};
