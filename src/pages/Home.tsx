import React, { useEffect } from "react";

import { ContactBtn } from "../components/ContactBtn";

import { HOMEPAGEANIMATIONFRAMES } from "../util/animations/animations";

import { IGLOBALSTATE } from "../util/interfaces";

export const Home: React.FC<IGLOBALSTATE> = (props) => {
  const { setTheme, setShowNav, setShowSocial } = props;

  useEffect(() => {
    setTheme("dark");
    setShowNav(true);
    setShowSocial(true);
  }, [setTheme, setShowNav, setShowSocial]);

  return (
    <main className="content__main">
      <div className="main-page-template">
        <div className="main-page-template__container home">
          {/* LEFT COLUMN */}
          <div className="main-page-template__left-column flex">
            <div className="main-page-template__left-column-container">
              <h1 className="main-page-template__title archivo home-page-title">
                Hi, <br /> I'm <span className="million">M</span>aximilian.
              </h1>
              <h2 className="home-page-subtitle">
                full-stack developer. <br />
                ui / ux designer.
              </h2>
              <ContactBtn />
            </div>
          </div>
          {/* RIGHT COLUMN */}
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
