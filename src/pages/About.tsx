import React, { useEffect } from "react";

import { ContactBtn } from "../components/ContactBtn";
import { HOMEPAGEANIMATIONFRAMES } from "../util/animations/animations";

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
                  I have a passion for learning, understanding how things work
                  and making things. I’m self motivated, self disciplined and
                  well organised with a high attention to detail.
                </p>

                <p>
                  I love music, film and design, played drums and performed
                  around the world since I was 17, went to BRIT School (after
                  self-teaching my GCSEs from home) and have started several
                  entertainment businesses, all of which are running today.
                </p>

                <p>
                  My first job at 13 was working for a company repairing mobile
                  phones, my second job at 14 was for an architect’s firm
                  setting up, maintaining and repairing computers, servers and
                  render farms.
                </p>

                <p>
                  I enjoy working with Node.js, React, JavsScript, TypeScript,
                  Sass, Wordpress & PHP and Python & Django, but I’m always
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
