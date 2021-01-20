import React, { useEffect } from "react";

interface Props {
  theme: String;
  setTheme: Function;
  showNav: Boolean;
  setShowNav: Function;
  showSocial: Boolean;
  setShowSocial: Function;
}

export const Home: React.FC<Props> = (props) => {
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
      <h2>Home</h2>
    </>
  );
};
