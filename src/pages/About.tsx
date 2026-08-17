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
			<article className="wrap letter">
				<div className="letter__head">
					<h1 className="letter__salutation">
						Hello, I'm <span className="million">M</span>aximilian.
					</h1>

					<div className="page-illustration" aria-hidden="true">
						<div className="animation-frame__container">
							{ABOUT_PAGE_ANIMATION_FRAMES.map((frame, i) => (
								<div className="animation-frame" key={i}>
									{frame}
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="letter__body copy">
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

					<p className="letter__break">* * *</p>

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
			</article>
		</main>
	);
};
