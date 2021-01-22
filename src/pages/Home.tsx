import React, { useEffect } from "react";

import { HOMEPAGEANIMATIONFRAMES } from "../util/animations/animations";

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
    <main className="content__main">
      <div className="main-page-template">
        <div className="main-page-template__container">
          {/* LEFT COLUMN */}
          <div className="main-page-template__left-column">
            <div className="main-page-template__left-column-container"></div>
          </div>
          <div className="main-page-template__right-column">
            <div className="main-page-template__right-column-container">
              <div className="animation-frame__container">
                {HOMEPAGEANIMATIONFRAMES.map((frame, i) => (
                  <div className="animation-frame" key={i}>
                    {frame}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
