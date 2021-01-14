import React, { useEffect } from "react";

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
      <h2>Projects</h2>
    </>
  );
};
