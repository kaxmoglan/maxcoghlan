import React, { useEffect } from 'react';

import { ContactBtn } from '../components/ContactBtn';
import { ABOUT_PAGE_ANIMATION_FRAMES } from '../util/animations/animations';

import { IGLOBALSTATE } from '../util/interfaces';

export const About: React.FC<IGLOBALSTATE> = (props) => {
	const { setTheme, setShowNav, setShowSocial } = props;

	useEffect(() => {
		setTheme('dark');
		setShowNav(true);
		setShowSocial(true);
	}, [setTheme, setShowNav, setShowSocial]);

	return (
		<main className="content__main">
			<div className="main-page-template">
				<div className="main-page-template__container about">
					{/* LEFT COLUMN */}
					<div className="main-page-template__left-column flex">
						<div className="main-page-template__left-column-container">
							<h1 className="main-page-template__title archivo about-page-title">
								About <span className="million">M</span>e
							</h1>

							<div className="copy">
								<p>
									I'm a full stack developer based in Winchester and London,
									England. When I'm not coding, I'm usually making music,
									watching a film, ice skating, exercising, playing football,
									reading about all things tech and finance or eating and
									drinking my weight in coffee and pastries. I also have a
									Miniature Schnauzer named Logan who will happily fill up the
									rest of my time.
								</p>

								<p>
									I enjoy true full stack development and have the most
									experience with TypeScript, React & React Native on the front
									end, and Node.js, Express, Koa, Prisma, GraphQL, MongoDB,
									Postgres and Docker on the back end.
								</p>

								<p>
									I'm always looking to further my knowledge and other peoples',
									try new technologies and work on new and exciting projects, so
									feel free to get in touch!
								</p>
							</div>

							<ContactBtn />
						</div>
					</div>
					<div className="main-page-template__right-column">
						<div className="main-page-template__right-column-container">
							<div className="animation-frame__container">
								{ABOUT_PAGE_ANIMATION_FRAMES.map((frame, i) => (
									<div className="animation-frame" key={i}>
										{frame}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
