import React, { useEffect } from 'react';
import { ContactBtn } from '../components/ContactBtn';
import { ABOUT_PAGE_ANIMATION_FRAMES } from '../util/animations/animations';
import type { IGLOBALSTATE } from '../util/interfaces';

export const About: React.FC<IGLOBALSTATE> = ({ setShowNav }) => {
	useEffect(() => {
		setShowNav(true);
	}, [setShowNav]);

	return (
		<main className="content__main">
			<section className="page-hero">
				<div className="wrap">
					<h1 className="page-hero__title">
						About <span className="million">M</span>e
					</h1>
					<p className="page-hero__lede">
						Dev Lead, FinTech, Winchester — the short version. The rest
						is below.
					</p>
				</div>
			</section>

			<article className="longform">
				<div className="wrap longform__grid">
					<div className="longform__illustration">
						<div className="animation-frame__container" aria-hidden="true">
							{ABOUT_PAGE_ANIMATION_FRAMES.map((frame, i) => (
								<div className="animation-frame" key={i}>
									{frame}
								</div>
							))}
						</div>
					</div>

					<div>
						<div className="copy">
							<p>
								I'm a Dev Lead based in Winchester, Hampshire, currently
								working in the FinTech sector. I split my time between
								setting technical direction, mentoring the engineers on
								my team, and staying hands-on — TypeScript and React on
								the front end, Node.js, Postgres, GraphQL and MongoDB on
								the back end.
							</p>

							<p>
								Day to day that means shaping architecture decisions,
								running planning and code review, and helping the
								developers around me grow — the parts of the job that
								made me want to move from writing code to leading the
								people who write it.
							</p>

							<p>
								When I'm not working, I enjoy making music, watching
								films, ice skating, weight training, football, reading
								about tech and finance and eating and drinking my weight
								in coffee and pastries. I also have a little dog named
								Logan who will happily fill up the rest of my time.
							</p>

							<p>
								I'm always happy to talk about engineering leadership,
								team growth, or a role where I can do more of both.
							</p>
						</div>

						<ContactBtn />
					</div>
				</div>
			</article>
		</main>
	);
};
