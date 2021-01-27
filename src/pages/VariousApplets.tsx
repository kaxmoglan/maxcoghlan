import React, { useEffect } from "react";

import { Link } from "react-router-dom";

// IMPORT IMAGES
import toDoDesktop from "../images/dist/projects/to-do-list/to-do-list-desktop.png";
import toDoTablet from "../images/dist/projects/to-do-list/to-do-list-tablet.png";
import toDoMobile from "../images/dist/projects/to-do-list/to-do-list-mobile.png";

import calculatorMobile from "../images/dist/projects/calculator/calculator-mobile.png";

import drumMachineDesktop from "../images/dist/projects/drum-machine/drum-machine-desktop.png";

import markdownDesktop from "../images/dist/projects/markdown-previewer/markdown-previewer-desktop.png";
import markdownTablet from "../images/dist/projects/markdown-previewer/markdown-previewer-tablet.png";
import markdownMobile from "../images/dist/projects/markdown-previewer/markdown-previewer-mobile.png";

import pomodoroMobile from "../images/dist/projects/pomodoro-clock/pomodoro-clock-mobile.png";

// IMPORT PROJECTS LIST
import { PROJECTS } from "../util/projects";

import { IGLOBALSTATE } from "../util/interfaces";

export const VariousApplets: React.FC<IGLOBALSTATE> = (props) => {
  const { setTheme, setShowNav, setShowSocial } = props;

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);

    setTheme("dark");
    setShowNav(true);
    setShowSocial(true);
  }, [setTheme, setShowNav, setShowSocial]);

  return (
    <main className="content__main">
      <div className={`project-detail-page`}>
        {/* TOP SECTION */}
        <div className="various__header">
          <div className="heading">
            <div className="heading__container">
              <div className="heading__container-inner">
                <h1 className="various__title">
                  VARIOUS
                  <br />
                  APPLETS
                </h1>
              </div>
            </div>
          </div>
          <div className="description">
            <div className="description__container">
              <p className="various__description">
                A collection of small front end applications I've built.
              </p>
            </div>
          </div>
        </div>

        {/* PROJECTS */}

        {/* TO DO LIST */}

        <div className="various__screen-shots">
          <img
            src={toDoDesktop}
            alt="A screen shot of the To Do List app on a desktop computer"
            className="various__screen-shots__desktop screen-shot"
          />
          <img
            src={toDoTablet}
            alt="A screen shot of the To Do List app on a tablet computer"
            className="various__screen-shots__tablet screen-shot"
          />
          <img
            src={toDoMobile}
            alt="A screen shot of the To Do List app on a smart phone"
            className="various__screen-shots__mobile screen-shot"
          />
        </div>

        <div className="various custom-content">
          <div className="project-body">
            <div className="narrow">
              <h2>A To Do List</h2>
              <p>
                A to-do list I created using React & Sass. Users can create,
                edit and delete to-do items and mark them as completed or
                incomplete. ‘All’, ‘Active’ and ‘Completed’ lists are generated
                based on each to-do’s current state and the lists are stored in
                the browser’s local storage so users can pick up where they left
                off.
              </p>
              <p>
                Items can also be reordered with intuitive drag and drop
                functionality that also works with touch, and users can change
                the app’s colour theme with the palette picker in the bottom
                left corner.
              </p>
              <div className="links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                  href="https://github.com/kaxmoglan/to-do-list"
                >
                  GitHub
                </a>
                <p className="link-seperator"> | </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                  href="https://kaxmoglan.github.io/to-do-list/"
                >
                  Open App
                </a>
              </div>
            </div>

            {/* CALCULATOR */}
            <div className="wide">
              <div className="mobile-only">
                <div className="mobile-only__container">
                  <img
                    className="mobile-only__image"
                    src={calculatorMobile}
                    alt="A screen shot of the Calculator app on a mobile device"
                  />
                  <div className="mobile-only__text">
                    <h2>A CALCULATOR</h2>
                    <p>I made a calculator.</p>
                    <p>
                      Built with React and Sass, you can use a keyboard or mouse
                      as the input device. Your equation is shown in the top
                      part of the screen and the result and current input is
                      shown on the lower, larger screen.
                    </p>
                    <p>
                      This was a big lesson in just how much logic there is with
                      something as seemingly trivial as a calculator, but a lot
                      of fun to sit and work out. I’d like to implement
                      ‘backspace’ functionality, but apart from that, it works
                      like a calculator!
                    </p>
                    <div className="links">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="project__link"
                        href="https://github.com/kaxmoglan/react-calculator"
                      >
                        GitHub
                      </a>
                      <p className="link-seperator"> | </p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="project__link"
                        href="https://kaxmoglan.github.io/react-calculator/"
                      >
                        Open App
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DRUM MACHINE */}
            <div className="narrow">
              <div className="drum-machine">
                <img
                  className="drum-machine__image"
                  src={drumMachineDesktop}
                  alt="A screen shot of the Calculator app on a mobile device"
                />

                <div className="drum-machine__text">
                  <h2>A Drum Machine</h2>
                  <p>
                    A drum machine I created using React & Sass. There are 2
                    kits (or sound banks) which are switchable via the plus and
                    minus buttons on the module and pads are playable with a
                    mouse by clicking a pad, or via the keyboard. The ‘LED’
                    indicators on each pad are also dynamic, meaning they light
                    up when the corresponding sample is playing and turn off
                    when the sample has finished playing.
                  </p>
                  <p>
                    For the look of the drum machine, I created a version of a
                    popular sample pad, the Roland SPD-SX, entirely with CSS /
                    Sass.
                  </p>
                  <div className="links">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="project__link"
                      href="https://github.com/kaxmoglan/drum-machine/"
                    >
                      GitHub
                    </a>
                    <p className="link-seperator"> | </p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="project__link"
                      href="https://kaxmoglan.github.io/drum-machine/"
                    >
                      Open App
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MARKDOWN PREVIEWER */}
            <div className="various__screen-shots markdown-images">
              <img
                src={markdownDesktop}
                alt="A screen shot of the Markdown Previewer app on a desktop computer"
                className="various__screen-shots__desktop screen-shot"
              />
              <img
                src={markdownTablet}
                alt="A screen shot of the Markdown Previewer app on a tablet computer"
                className="various__screen-shots__tablet screen-shot"
              />
              <img
                src={markdownMobile}
                alt="A screen shot of the Markdown Previewer app on a smart phone"
                className="various__screen-shots__mobile screen-shot"
              />
            </div>

            <div className="narrow markdown-text">
              <h2>A Markdown Previewer</h2>
              <p>
                A real-time markdown previewer application I created using React
                and Sass. The two windows can be made full screen or stacked
                side-by-side horizontally and vertically.
              </p>

              <div className="links">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                  href="https://github.com/kaxmoglan/markdown-previewer"
                >
                  GitHub
                </a>
                <p className="link-seperator"> | </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                  href="https://kaxmoglan.github.io/markdown-previewer/"
                >
                  Open App
                </a>
              </div>
            </div>

            {/* POMODORO */}
            <div className="wide">
              <div className="mobile-only">
                <div className="mobile-only__container">
                  <img
                    className="mobile-only__image"
                    src={pomodoroMobile}
                    alt="A screen shot of the Pomodoro Clock app on a mobile device"
                  />
                  <div className="mobile-only__text">
                    <h2>A POMODORO CLOCK</h2>

                    <p>
                      A Pomodoro Clock made with React and Sass. Default option
                      (the Pomodoro method) is for a 25-minute / 5-minute split,
                      but users can set their own times. An alarm will sound at
                      every interval and the main ‘screen’ will show a countdown
                      for the current time period.
                    </p>
                    <div className="links">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="project__link"
                        href="https://github.com/kaxmoglan/pomodoro-clock"
                      >
                        GitHub
                      </a>
                      <p className="link-seperator"> | </p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="project__link"
                        href="https://kaxmoglan.github.io/pomodoro-clock/"
                      >
                        Open App
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEXT & PREV PROJECT */}
        <div className="more-projects">
          <div className="more-projects__container">
            <div className="more-projects__previous">
              <p className="more-projects__title">PREV</p>
              <Link
                className="project__link mirror"
                to={`/projects/${PROJECTS[PROJECTS.length - 1].url}`}
              >
                {PROJECTS[PROJECTS.length - 1].name.join(" ")}
              </Link>
            </div>
            <div className="more-projects__next">
              <p className="more-projects__title">NEXT</p>
              <Link
                className="project__link"
                to={`/projects/${PROJECTS[0].url}`}
              >
                {PROJECTS[0].name.join(" ")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
