import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HOME_PAGE_ANIMATION_FRAMES } from '../util/animations/animations';
import type { IGLOBALSTATE } from '../util/interfaces';

export const Home: React.FC<IGLOBALSTATE> = ({ setShowNav }) => {
	useEffect(() => {
		setShowNav(true);
	}, [setShowNav]);

	return (
		<main className="content__main">
			<section className="wrap marquee">
				<h1 className="marquee__statement">
					Hi, I'm <span className="million">M</span>aximilian — I lead
					engineering teams.
				</h1>
			</section>

			<hr className="wrap marquee__rule" aria-hidden="true" />

			<section className="wrap marquee__below">
				<div className="marquee__below-text">
					<p className="mono-label">Currently</p>
					<h2 className="marquee__subtitle">
						Dev Lead, working toward Engineering Manager and,
						eventually, CTO.
					</h2>
					<Link className="text-link" to="/contact">
						Get in touch →
					</Link>
				</div>

				<div className="page-illustration" aria-hidden="true">
					<div className="animation-frame__container">
						{HOME_PAGE_ANIMATION_FRAMES.map((frame, i) => (
							<div className="animation-frame" key={i}>
								{frame}
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};
