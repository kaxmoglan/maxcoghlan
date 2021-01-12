import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// COMPONENTS
import { DesktopNav } from "./components/Nav";

// PAGES
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";

// ALL ROUTES DATA
const ROUTES = [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/skills", Component: Skills },
  { path: "/projects", Component: Projects },
  { path: "/contact", Component: Contact },
  { path: "/blog", Component: Blog },
];

function App() {
  return (
    <Router>
      <div className="App">
        <DesktopNav />

        {/* <div className="container"> */}
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
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
