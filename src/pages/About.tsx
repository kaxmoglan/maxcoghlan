import React, { useEffect } from "react";

interface Props {
  theme: String;
  setTheme: Function;
  showNav: Boolean;
  setShowNav: Function;
}

export const About: React.FC<Props> = (props) => {
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
      <h2>About</h2>
    </>
  );
};