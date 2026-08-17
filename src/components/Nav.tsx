import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

type NavData = { to: string; text: string; exact: boolean };

const DATA: Array<NavData> = [
	{ to: '/', text: 'Home', exact: true },
	{ to: '/about', text: 'About', exact: true },
	{ to: '/articles', text: 'Articles', exact: false },
	{ to: '/contact', text: 'Contact', exact: true },
];

export const DesktopNav: React.FC = () => {
	return (
		<header className="masthead">
			<p className="mono-label masthead__issue-line">
				Winchester, UK · Dev Lead
			</p>
			<Link className="masthead__wordmark" to="/">
				Maximilian
			</Link>
			<nav className="masthead__nav" aria-label="Primary">
				<ul>
					{DATA.map((item) => (
						<li key={item.to}>
							<NavLink
								className="masthead__link"
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
				<Link
					className="mobile-bar__wordmark"
					to="/"
					onClick={() => setOpen(false)}
				>
					Maximilian
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
