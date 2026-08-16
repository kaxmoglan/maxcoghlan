import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

type NavData = { to: string; text: string; exact: boolean };

// NAV DATA — plain text links, no CTA button (source's own pattern: the
// content carries the asks, not the nav).
const DATA: Array<NavData> = [
	{ to: '/about', text: 'About', exact: true },
	{ to: '/skills', text: 'Skills', exact: true },
	{ to: '/articles', text: 'Articles', exact: false },
	{ to: '/contact', text: 'Contact', exact: true },
];

export const DesktopNav: React.FC = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 64);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header className={`nav-bar ${scrolled ? 'is-scrolled' : ''}`}>
			<Link className="nav-bar__logo" to="/">
				<span className="million">M</span>aximilian Coghlan
			</Link>
			<nav className="nav-bar__links" aria-label="Primary">
				<ul>
					{DATA.map((item) => (
						<li key={item.to}>
							<NavLink
								className="nav-bar__link"
								activeClassName="active"
								to={item.to}
								exact={item.exact}
							>
								{item.text}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export const MobileNav: React.FC = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	useEffect(() => {
		if (!open) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [open]);

	return (
		<>
			<header className="mobile-bar">
				<Link className="mobile-bar__logo" to="/" onClick={() => setOpen(false)}>
					<span className="million">M</span>aximilian Coghlan
				</Link>
				<button
					type="button"
					className="mobile-bar__toggle"
					aria-expanded={open}
					aria-label={open ? 'Close menu' : 'Open menu'}
					onClick={() => setOpen((v) => !v)}
				>
					<span />
					<span />
				</button>
			</header>

			<div
				className={`mobile-sheet ${open ? 'is-open' : ''}`}
				aria-hidden={!open}
			>
				<nav aria-label="Primary">
					<ul>
						{DATA.map((item) => (
							<li key={item.to}>
								<NavLink
									className="mobile-sheet__link"
									activeClassName="active"
									to={item.to}
									exact={item.exact}
									onClick={() => setOpen(false)}
								>
									{item.text}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
};
