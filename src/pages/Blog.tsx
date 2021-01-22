import React, { useEffect } from "react";

import { Link } from "react-router-dom";

interface Props {
  setTheme: Function;
  setShowNav: Function;
  setShowSocial: Function;
}

export const Blog: React.FC<Props> = (props) => {
  const { setTheme, setShowNav, setShowSocial } = props;

  useEffect(() => {
    setTheme("light");
    setShowNav(false);
    setShowSocial(false);

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h2>Blog</h2>
      <Link to="/">Home</Link>
    </>
  );
};
