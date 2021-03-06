import React, { useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FormspreeProvider } from "@formspree/react";

// COMPONENTS
import { DesktopNav, MobileNav } from "./components/Nav";
import Social from "./components/Social";

// UTIL
import { ROUTES } from "./util/routes";

function App() {
  const [theme, setTheme] = useState("dark");
  const [showNav, setShowNav] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <div className={`background ${theme}`}></div>
        <CSSTransition
          in={showSocial}
          timeout={1000}
          classNames="social"
          unmountOnExit
        >
          <Social />
        </CSSTransition>

        <CSSTransition
          in={showNav}
          timeout={1000}
          classNames="navbar"
          unmountOnExit
        >
          <DesktopNav />
        </CSSTransition>

        <CSSTransition
          in={showNav}
          timeout={1000}
          classNames="mobile-menu"
          unmountOnExit
        >
          <MobileNav />
        </CSSTransition>

        {ROUTES.map(({ path, Component }) => (
          <Route exact key={path} path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={500}
                classNames="content"
                unmountOnExit
              >
                <div className="content">
                  <FormspreeProvider project="1610128407981457186">
                    <Component
                      setTheme={setTheme}
                      setShowNav={setShowNav}
                      setShowSocial={setShowSocial}
                    />
                  </FormspreeProvider>
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </Router>
  );
}

export default App;
