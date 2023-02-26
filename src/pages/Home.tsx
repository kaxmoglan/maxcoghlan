import React, { useEffect } from 'react';
import { ContactBtn } from '../components/ContactBtn';
import { HOME_PAGE_ANIMATION_FRAMES } from '../util/animations/animations';
import { IGLOBALSTATE } from '../util/interfaces';

export const Home: React.FC<IGLOBALSTATE> = (props) => {
	const { setTheme, setShowNav, setShowSocial } = props;

	useEffect(() => {
		setTheme('dark');
		setShowNav(true);
		setShowSocial(true);
	}, [setTheme, setShowNav, setShowSocial]);

	return (
		<main className="content__main">
			<div className="main-page-template">
				<div className="main-page-template__container home">
					{/* LEFT COLUMN */}
					<div className="main-page-template__left-column flex">
						<div className="main-page-template__left-column-container">
							<h1 className="main-page-template__title archivo home-page-title">
								Hi, <br /> I'm <span className="million">M</span>aximilian.
							</h1>
							<h2 className="home-page-subtitle">
								Full stack developer, <br />
								educator & tech enthusiast.
							</h2>
							<ContactBtn />
						</div>
					</div>
					{/* RIGHT COLUMN */}
					<div className="main-page-template__right-column">
						<div className="main-page-template__right-column-container">
							<div className="animation-frame__container">
								{HOME_PAGE_ANIMATION_FRAMES.map((frame, i) => (
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
