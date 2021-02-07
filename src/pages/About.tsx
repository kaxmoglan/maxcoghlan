import React, { useEffect } from "react";

import { ContactBtn } from "../components/ContactBtn";
import { ABOUTPAGEANIMATIONFRAMES } from "../util/animations/animations";

import { IGLOBALSTATE } from "../util/interfaces";

export const About: React.FC<IGLOBALSTATE> = (props) => {
  const { setTheme, setShowNav, setShowSocial } = props;

  useEffect(() => {
    setTheme("dark");
    setShowNav(true);
    setShowSocial(true);
  }, [setTheme, setShowNav, setShowSocial]);

  return (
    <main className="content__main">
      <div className="main-page-template">
        <div className="main-page-template__container">
          {/* LEFT COLUMN */}
          <div className="main-page-template__left-column flex">
            <div className="main-page-template__left-column-container">
              <h1 className="main-page-template__title archivo home-page-title">
                About <span className="million">M</span>e
              </h1>

              <div className="about-me">
                <p>
                  I'm a web developer based in London, England. When I'm not
                  coding, I'm usually making music, watching a film, ice
                  skating, exercising, playing or watching football, reading
                  about all things tech and finance or eating and drinking my
                  weight in coffee and pastries.
                </p>

                <p>
                  I enjoy working with Node.js, React, JavaScript, TypeScript,
                  Sass, Wordpress, PHP, Python and Django, but I’m always
                  looking to further my knowledge and try new technologies.
                </p>

                <p>
                  I’m interested in new and exciting projects and opportunities
                  so feel free to get in touch!
                </p>
              </div>

              <ContactBtn />
            </div>
          </div>
          <div className="main-page-template__right-column">
            <div className="main-page-template__right-column-container">
              <div className="animation-frame__container">
                {ABOUTPAGEANIMATIONFRAMES.map((frame, i) => (
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
