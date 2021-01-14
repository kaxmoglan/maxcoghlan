import React, { useEffect } from "react";

import { Link } from "react-router-dom";

interface Props {
  theme: String;
  setTheme: Function;
  showNav: Boolean;
  setShowNav: Function;
}

export const Blog: React.FC<Props> = (props) => {
  const { theme, setTheme, showNav, setShowNav } = props;

  useEffect(() => {
    if (theme !== "light") {
      setTheme("light");
    }
    if (showNav) {
      setShowNav(false);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h2>Blog</h2>
      <Link to="/">Home</Link>
    </>
  );
};
