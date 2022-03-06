import React, { useEffect } from "react";

import { ContactBtn } from "../components/ContactBtn";
import { ABOUT_PAGE_ANIMATION_FRAMES } from "../util/animations/animations";

import { IGLOBALSTATE } from "../util/interfaces";

export const About: React.FC<IGLOBALSTATE> = (props) => {
	const { setTheme, setShowNav, setShowSocial } = props;

	useEffect(() => {
		setTheme("dark");
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

							<div className="about-me">
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
									experience with Typescript, React and React Native on the
									front end, with Node.js using Koa, Express, Prisma and
									Postgres on the backend with Docker and AWS. I also have
									experience and enjoy working with Wordpress, PHP, Python and
									Django but I'm always looking to further my knowledge and try
									new technologies. My latest enthusiast project is a Crypto and
									CFD algo-trading bot which is written in Typescript, but I'm
									also keen to further my knowledge in Swift, Java, Kotlin, Go
									and Rust.
								</p>

								<p>
									I mostly work remotely and have experience working freelance
									and for startups. I'm always interested in new and exciting
									projects and opportunities so feel free to get in touch!
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
