import React, { useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// COMPONENTS
import { DesktopNav } from "./components/Nav";

// UTIL
import { ROUTES } from "./util/routes";

function App() {
  const [theme, setTheme] = useState("light");
  const [showNav, setShowNav] = useState(false);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <CSSTransition
          in={showNav}
          timeout={1000}
          classNames="mainNav"
          unmountOnExit
        >
          <DesktopNav />
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
                  <Component setTheme={setTheme} setShowNav={setShowNav} />
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
