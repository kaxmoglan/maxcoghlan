import React from 'react';

import { NavLink, Link } from 'react-router-dom';

// ICONS
import { HomeIcon, AboutIcon, SkillsIcon, ContactIcon } from '../util/icons';

type NavData = { to: string; icon: JSX.Element; text: string; exact: boolean };

// NAV DATA
const DATA: Array<NavData> = [
	{ to: '/', icon: HomeIcon, text: 'Home', exact: true },
	{ to: '/about', icon: AboutIcon, text: 'About', exact: true },
	{ to: '/skills', icon: SkillsIcon, text: 'Skills', exact: true },
	{ to: '/contact', icon: ContactIcon, text: 'Contact', exact: true },
];

export const MobileNav: React.FC = () => {
	return (
		<nav className="mobile-menu">
			<Link className="mobile-menu__logo" to="/">
				<div className="mobile-menu__logo-million"></div>
				<div className="archivo">M</div>
			</Link>

			<div className="mobile-menu__container">
				{DATA.map((item) => (
					<NavLink
						key={item.to}
						className="mobile-menu__link"
						activeClassName="active"
						to={item.to}
						exact={item.exact}
						strict
					>
						<div className="mobile-menu__icon">{item.icon}</div>
					</NavLink>
				))}
			</div>
		</nav>
	);
};

export const DesktopNav: React.FC = () => {
	return (
		<nav className="navbar">
			<Link className="navbar__logo" to="/">
				<span className="navbar__logo-million"></span>
				<span className="archivo">M</span>
			</Link>

			<div className="navbar__links">
				{DATA.map((item) => (
					<NavLink
						key={item.to}
						className="navbar__link"
						activeClassName="active"
						to={item.to}
						exact={item.exact}
					>
						{item.text}
					</NavLink>
				))}
			</div>

			<Link className="navbar__cta" to="/contact">
				Get in touch
			</Link>
		</nav>
	);
};
