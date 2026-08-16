import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	HOME_PAGE_ANIMATION_FRAMES,
	SKILLS_PAGE_ANIMATION_FRAMES,
} from '../util/animations/animations';
import type { IGLOBALSTATE } from '../util/interfaces';

export const Home: React.FC<IGLOBALSTATE> = ({ setShowNav }) => {
	useEffect(() => {
		setShowNav(true);
	}, [setShowNav]);

	return (
		<main className="content__main">
			<section className="hero hero--home">
				<div className="hero__inner">
					<div className="hero__grid">
						<div>
							<h1 className="hero__title">
								Technical lead
								<br />
								&amp; engineering manager
							</h1>
							<h2 className="hero__subtitle">
								I build teams that build things well.
							</h2>
							<p className="hero__lede">
								I set technical direction, grow the engineers around me,
								and stay hands-on enough to know whether the roadmap I'm
								signing off on is actually buildable.
							</p>
							<div className="hero__actions">
								<Link className="btn btn--filled-on-band" to="/contact">
									Get in touch
								</Link>
								<Link className="btn btn--outline-on-band" to="/about">
									More about me
								</Link>
							</div>
						</div>

						<div className="hero__illustration">
							<div className="animation-frame__container" aria-hidden="true">
								{HOME_PAGE_ANIMATION_FRAMES.map((frame, i) => (
									<div className="animation-frame" key={i}>
										{frame}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="pitch">
				<div className="wrap pitch__grid">
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
								running planning and code review, and helping the people
								around me grow — the parts of the job that made me want
								to move from writing code to leading the people who
								write it.
							</p>
						</div>
					</div>

					<div className="pitch__aside">
						<ul className="pitch__highlights">
							<li>Sets technical direction and owns architecture decisions</li>
							<li>Mentors and grows the developers on the team</li>
							<li>Hands-on across the full TypeScript / Node stack</li>
							<li>Based in Winchester, UK — working in FinTech</li>
						</ul>
						<Link className="btn btn--filled" to="/about">
							More about me
						</Link>
					</div>
				</div>
			</section>

			<section className="proof-band">
				<div className="wrap proof-band__grid">
					<div className="proof-band__text">
						<h3>Architecture is a people problem first</h3>
						<p>
							The technical direction only sticks if the team
							understands it and can carry it forward without me in the
							room — so I spend as much time on documentation, review,
							and 1:1s as I do on the diagrams themselves.
						</p>
					</div>
					<div className="proof-band__visual">
						<div className="animation-frame__container" aria-hidden="true">
							{SKILLS_PAGE_ANIMATION_FRAMES.map((frame, i) => (
								<div className="animation-frame" key={i}>
									{frame}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};
