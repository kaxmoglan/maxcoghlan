import React, { useState } from "react";

import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// COMPONENTS
import { DesktopNav, MobileNav } from "./components/Nav";
import Social from "./components/Social";

// UTIL
import { ROUTES } from "./util/routes";

function App() {
  const [theme, setTheme] = useState("dark");
  const [showNav, setShowNav] = useState(false);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <CSSTransition
          in={showNav && theme === "dark"}
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
                timeout={1000}
                classNames="content"
                unmountOnExit
              >
                <div className="content">
                  <Component
                    theme={theme}
                    setTheme={setTheme}
                    showNav={showNav}
                    setShowNav={setShowNav}
                  />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        <Route render={() => <Redirect to="/" />} />
      </div>
    </Router>
  );
}

export default App;
