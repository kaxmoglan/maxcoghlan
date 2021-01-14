import React, { useEffect } from "react";

interface Props {
  setTheme: Function;
  setShowNav: Function;
}

export const Home: React.FC<Props> = (props) => {
  const { setShowNav, setTheme } = props;

  useEffect(() => {
    setShowNav(true);
    setTheme("dark");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Home</h2>
    </>
  );
};
