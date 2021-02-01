import React, { useEffect, useState } from "react";

// ICONS
import {
  ChevronIcon,
  JavascriptIcon,
  CssIcon,
  NodeIcon,
  PhpIcon,
  SassIcon,
  ReactIcon,
  ReduxIcon,
  PythonIcon,
  DjangoIcon,
  TypescriptIcon,
  FirebaseIcon,
  HtmlIcon,
  BootstrapIcon,
  MaterialIcon,
  WordpressIcon,
  MySqlIcon,
  PostgresIcon,
  MongoIcon,
  GulpIcon,
  WebpackIcon,
  IllustratorIcon,
  PhotoshopIcon,
  XdIcon,
  VsCodeIcon,
  GitIcon,
  GithubIcon,
  JinjaIcon,
  HerokuIcon,
  SublimeTextIcon,
  JqueryIcon,
} from "../util/icons";

import { SKILLSPAGEANIMATIONFRAMES } from "../util/animations/animations";
import { IGLOBALSTATE } from "../util/interfaces";
import SkillsCloud from "../components/SkillsCloud";

const FRONTENDICONS: Array<JSX.Element> = [
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  TypescriptIcon,
  BootstrapIcon,
  JqueryIcon,
  ReactIcon,
  SassIcon,
  MaterialIcon,
  ReduxIcon,
];

const BACKENDICONS: Array<JSX.Element> = [
  NodeIcon,
  FirebaseIcon,
  PythonIcon,
  WordpressIcon,
  MySqlIcon,
  PhpIcon,
  WebpackIcon,
  MongoIcon,

  DjangoIcon,

  PostgresIcon,
  GulpIcon,
];

const OTHERICONS: Array<JSX.Element> = [
  SublimeTextIcon,
  JinjaIcon,
  XdIcon,
  VsCodeIcon,
  IllustratorIcon,
  GitIcon,
  PhotoshopIcon,
  HerokuIcon,
  GithubIcon,
];

export const Skills: React.FC<IGLOBALSTATE> = (props) => {
  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [showBackEnd, setShowBackEnd] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const { setTheme, setShowNav, setShowSocial } = props;

  useEffect(() => {
    setTheme("dark");
    setShowNav(true);
    setShowSocial(true);
  }, [setTheme, setShowNav, setShowSocial]);

  const handleAccordion = (menu: string) => {
    switch (menu) {
      case "front-end":
        if (showFrontEnd) {
          return;
        } else {
          setShowFrontEnd(true);
          setShowBackEnd(false);
          setShowOther(false);
          return;
        }
      case "back-end":
        if (showBackEnd) {
          return;
        } else {
          setShowFrontEnd(false);
          setShowBackEnd(true);
          setShowOther(false);
          return;
        }
      case "other":
        if (showOther) {
          return;
        } else {
          setShowFrontEnd(false);
          setShowBackEnd(false);
          setShowOther(true);
          return;
        }
      default:
        return;
    }
  };

  return (
    <main className="content__main">
      <div className="main-page-template">
        <div className="main-page-template__container">
          {/* LEFT COLUMN */}
          <div className="main-page-template__left-column">
            <div className="main-page-template__left-column-container">
              <h1 className="skills__title">Skills</h1>
              <div className="skills">
                <div
                  className={`skills__category ${
                    showFrontEnd ? "visible" : ""
                  }`}
                >
                  <div
                    className="skills__heading"
                    onClick={() => handleAccordion("front-end")}
                  >
                    <h2 className="skills__heading-text">Front End</h2>
                    {ChevronIcon}
                  </div>

                  <div className="skills__content">
                    <p>
                      {" "}
                      HTML5, CSS3, Sass, JavaScript, TypeScript, React, Redux,
                      JQuery, Bootstrap, MaterialUI
                    </p>
                  </div>
                </div>
                <div
                  className={`skills__category ${showBackEnd ? "visible" : ""}`}
                >
                  <div
                    className="skills__heading"
                    onClick={() => handleAccordion("back-end")}
                  >
                    <h2 className="skills__heading-text">Back End</h2>
                    {ChevronIcon}
                  </div>

                  <div className="skills__content">
                    <p>
                      Node.js, Express.js, Python, Django, PHP, Wordpress &
                      WooCommerce, SQL, MongoDB & Atlas, Linux, REST, Gulp,
                      Firebase, Postgres, Webpack
                    </p>
                  </div>
                </div>
                <div
                  className={`skills__category ${showOther ? "visible" : ""}`}
                >
                  <div
                    className="skills__heading"
                    onClick={() => handleAccordion("other")}
                  >
                    <h2 className="skills__heading-text">Other</h2>
                    {ChevronIcon}
                  </div>

                  <div className="skills__content">
                    <p>
                      Git, GitHub, Linux, Pug (Jade), Jinja, Mongoose, EJS,
                      SublimeText, Heroku, Netlify
                    </p>
                    <p>
                      <strong>Adobe:</strong> XD, Photoshop, Illustrator,
                      Premiere Pro, After Effects, Lightroom, Acrobat{" "}
                    </p>
                    <p>
                      <strong>Apple:</strong> Final Cut Pro, Logic Pro, Pages,
                      Numbers{" "}
                    </p>
                    <p>
                      <strong>Microsoft:</strong> Word, Excel, VSCode (my
                      current editor of choice){" "}
                    </p>
                    <p>
                      <strong>More:</strong> DaVinci Resolve, Ableton Live, Pro
                      Tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="main-page-template__right-column">
            <div className="skills__icons">
              <div
                className={`skills__icons-container ${
                  showFrontEnd ? "visible" : ""
                }`}
              >
                <SkillsCloud icons={FRONTENDICONS} />
              </div>
              <div
                className={`skills__icons-container ${
                  showBackEnd ? "visible" : ""
                }`}
              >
                <SkillsCloud icons={BACKENDICONS} />
              </div>
              <div
                className={`skills__icons-container ${
                  showOther ? "visible" : ""
                }`}
              >
                <SkillsCloud icons={OTHERICONS} />
              </div>
            </div>
            <div className="main-page-template__right-column-container">
              <div className="animation-frame__container skills">
                {SKILLSPAGEANIMATIONFRAMES.map((frame, i) => (
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
