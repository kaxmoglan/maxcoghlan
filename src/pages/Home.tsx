import React, { useEffect } from "react";

interface Props {
  setTheme: Function;
  setShowNav: Function;
  setShowSocial: Function;
}

export const Home: React.FC<Props> = (props) => {
  const { setTheme, setShowNav, setShowSocial } = props;

  useEffect(() => {
    setTheme("dark");
    setShowNav(true);
    setShowSocial(true);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="main content__main">
      <h2>Home</h2>
    </div>
  );
};
