import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { FormspreeProvider } from '@formspree/react';

// COMPONENTS
import { DesktopNav, MobileNav } from './components/Nav';
import { Footer } from './components/Footer';

// UTIL
import { ROUTES } from './util/routes';

const ScrollToTop: React.FC = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

function App() {
	const [showNav, setShowNav] = useState(false);

	return (
		<Router>
			<ScrollToTop />
			<div className="App">
				<CSSTransition
					in={showNav}
					timeout={500}
					classNames="navbar"
					unmountOnExit
				>
					<div className="nav-group">
						<DesktopNav />
						<MobileNav />
					</div>
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
										<Component setShowNav={setShowNav} />
									</FormspreeProvider>
									<Footer />
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
