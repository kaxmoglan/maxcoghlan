import React, { useEffect } from "react";

import Social from "../components/Social";

import Particles from "react-tsparticles";
import particlesConfig from "../util/particlesjs-config.json";

import { IGLOBALSTATE } from "../util/interfaces";

export const Contact: React.FC<IGLOBALSTATE> = (props) => {
  const { setTheme, setShowNav, setShowSocial } = props;

  useEffect(() => {
    setTheme("dark");
    setShowNav(true);
    setShowSocial(false);

    // eslint-disable-next-line
  }, []);

  return (
    <main className="content__main">
      <div className="contact-page">
        <Particles id="tsparticles" options={particlesConfig} />
        <div className="contact-page__container">
          {/* LEFT COLUMN */}
          <div className="contact-page__content">
            <div className="contact-page__content-container">
              <h1 className="contact-page__title">
                Contact <span className="million">M</span>e
              </h1>
              <Social />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="contact-page__form">
            <div className="contact-page__form-container">
              <form action="#" method="post" className="contact-form">
                <fieldset className="details">
                  <div className="text-input">
                    {/* <label htmlFor="name">Name*</label> */}
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="Name*"
                    />
                  </div>
                  <div className="text-input">
                    {/* <label htmlFor="email">Email*</label> */}
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email*"
                      required
                    />
                  </div>
                </fieldset>
                <fieldset className="message-area">
                  {/* <label htmlFor="message">Message*</label> */}
                  <textarea
                    placeholder="Message*"
                    name="message"
                    id="message"
                    cols={30}
                    rows={5}
                    required
                  ></textarea>
                </fieldset>
                <input type="submit" value="Send" className="submit-btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
