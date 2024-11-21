import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

// IMPORT IMAGES
import toDoDesktop from '../images/dist/projects/to-do-list/to-do-list-desktop.png';
import toDoTablet from '../images/dist/projects/to-do-list/to-do-list-tablet.png';
import toDoMobile from '../images/dist/projects/to-do-list/to-do-list-mobile.png';

import chordGeneratorTablet from '../images/dist/projects/chord-generator/chord-generator-tablet.png';

import calculatorMobile from '../images/dist/projects/calculator/calculator-mobile.png';

import drumMachineDesktop from '../images/dist/projects/drum-machine/drum-machine-desktop.png';

import markdownDesktop from '../images/dist/projects/markdown-previewer/markdown-previewer-desktop.png';
import markdownTablet from '../images/dist/projects/markdown-previewer/markdown-previewer-tablet.png';
import markdownMobile from '../images/dist/projects/markdown-previewer/markdown-previewer-mobile.png';

import pomodoroMobile from '../images/dist/projects/pomodoro-clock/pomodoro-clock-mobile.png';

// IMPORT PROJECTS LIST
import { PROJECTS } from '../util/projects';

import { IGLOBALSTATE } from '../util/interfaces';

export const VariousApplets: React.FC<IGLOBALSTATE> = (props) => {
	const { setTheme, setShowNav, setShowSocial } = props;

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 300);

		setTheme('dark');
		setShowNav(true);
		setShowSocial(true);
	}, [setTheme, setShowNav, setShowSocial]);

	return (
		<main className="content__main">
			<div className={`project-detail-page`}>
				{/* TOP SECTION */}
				<div className="various__header">
					<div className="heading">
						<div className="heading__container">
							<div className="heading__container-inner">
								<h1 className="various__title">
									VARIOUS
									<br />
									APPLETS
								</h1>
							</div>
						</div>
					</div>
					<div className="description">
						<div className="description__container">
							<p className="various__description">
								A collection of small front end applications I've built.
							</p>
						</div>
					</div>
				</div>

				{/* PROJECTS */}

				{/* TO DO LIST */}

				<div className="various__screen-shots">
					<img
						src={toDoDesktop}
						alt="A screen shot of the To Do List app on a desktop computer"
						className="various__screen-shots__desktop screen-shot"
					/>
					<img
						src={toDoTablet}
						alt="A screen shot of the To Do List app on a tablet computer"
						className="various__screen-shots__tablet screen-shot"
					/>
					<img
						src={toDoMobile}
						alt="A screen shot of the To Do List app on a smart phone"
						className="various__screen-shots__mobile screen-shot"
					/>
				</div>

				<div className="various custom-content">
					<div className="project-body">
						<div className="narrow">
							<h2>A To Do List</h2>
							<p>
								A rite of passage to-do list created using React. Lists are
								stored in the browser’s local storage so users can pick up where
								they left off.
							</p>
							<p>
								I played around with some libraries to make this touch-enabled
								with draggable items and also built a theme switcher because why
								not.
							</p>
							<div className="links">
								<a
									target="_blank"
									rel="noreferrer"
									className="project__link"
									href="https://github.com/kaxmoglan/to-do-list"
								>
									GitHub
								</a>
								<p className="link-separator"> | </p>
								<a
									target="_blank"
									rel="noreferrer"
									className="project__link"
									href="https://kaxmoglan.github.io/to-do-list/"
								>
									Open App
								</a>
							</div>
						</div>

						{/* CHORD GENERATOR */}
						<div className="wide">
							<div className="tablet-only">
								<div className="tablet-only__container">
									<div className="tablet-only__text">
										<h2>A CHORD GENERATOR</h2>
										<p>Before you judge those hideous colours, hear me out:</p>
										<p>
											This was a project my brother asked me to build for him
											when I was initially learning Javascript. Needless to say,
											I made it as ugly as possible for him to look at,
											because... well... he's my brother.
										</p>
										<p>
											The brief was to create an app that randomly generates a
											key and an interval, and then gives the user a chord to
											play that contains the interval to practice music theory.
										</p>
										<p>
											If the user hovers over the interval or the chord, it
											reveals the answers: the name of the interval note, and
											the notes in the chord along with the chord formula. It
											also has an autoplay feature where the user can set an
											interval time for the app to refresh every (n) seconds.
										</p>
										<p>
											This was actually a fun project to sit and work out. I
											ended up making a keyboard using Javascript arrays, so the
											browser is actually working out the chords for itself
											based on chord formulas.
										</p>
										<p>
											To make the app better, besides making it nice to look at,
											I'd include the ability to play the notes and the chords
											that the app generates so the user can hear the answers to
											help with their ear training.
										</p>
										<div className="links">
											<a
												target="_blank"
												rel="noreferrer"
												className="project__link"
												href="https://github.com/kaxmoglan/joels-chord-generator"
											>
												GitHub
											</a>
											<p className="link-separator"> | </p>
											<a
												target="_blank"
												rel="noreferrer"
												className="project__link"
												href="https://kaxmoglan.github.io/joels-chord-generator/"
											>
												Open App
											</a>
										</div>
									</div>
									<div className="tablet-only__image-container">
										<img
											className="tablet-only__image"
											src={chordGeneratorTablet}
											alt="A screen shot of the Chord Generator app on a tablet device"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* CALCULATOR */}
						<div className="wide">
							<div className="mobile-only">
								<div className="mobile-only__container">
									<div className="mobile-only__image-container">
										<img
											className="mobile-only__image"
											src={calculatorMobile}
											alt="A screen shot of the Calculator app on a mobile device"
										/>
									</div>
									<div className="mobile-only__text">
										<h2>A CALCULATOR</h2>
										<p>I made a calculator.</p>
										<div className="links">
											<a
												target="_blank"
												rel="noreferrer"
												className="project__link"
												href="https://github.com/kaxmoglan/react-calculator"
											>
												GitHub
											</a>
											<p className="link-separator"> | </p>
											<a
												target="_blank"
												rel="noreferrer"
												className="project__link"
												href="https://kaxmoglan.github.io/react-calculator/"
											>
												Open App
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* DRUM MACHINE */}
						<div className="narrow">
							<div className="drum-machine">
								<img
									className="drum-machine__image"
									src={drumMachineDesktop}
									alt="A screen shot of the Calculator app on a mobile device"
								/>

								<div className="drum-machine__text">
									<h2>A Drum Machine</h2>
									<p>
										A drum machine I created using React. There are 2 kits (or
										sound banks) which are switchable via the plus and minus
										buttons on the module and pads are playable with a mouse by
										clicking a pad, or via the keyboard. The ‘LED’ indicators on
										each pad are also dynamic, meaning they light up when the
										corresponding sample is playing and turn off when the sample
										has finished playing.
									</p>
									<p>
										For the look of the drum machine, I created a version of a
										popular sample pad, the Roland SPD-SX, with CSS.
									</p>
									<div className="links">
										<a
											target="_blank"
											rel="noreferrer"
											className="project__link"
											href="https://github.com/kaxmoglan/drum-machine/"
										>
											GitHub
										</a>
										<p className="link-separator"> | </p>
										<a
											target="_blank"
											rel="noreferrer"
											className="project__link"
											href="https://kaxmoglan.github.io/drum-machine/"
										>
											Open App
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* MARKDOWN PREVIEWER */}
						<div className="various__screen-shots markdown-images">
							<img
								src={markdownDesktop}
								alt="A screen shot of the Markdown Previewer app on a desktop computer"
								className="various__screen-shots__desktop screen-shot"
							/>
							<img
								src={markdownTablet}
								alt="A screen shot of the Markdown Previewer app on a tablet computer"
								className="various__screen-shots__tablet screen-shot"
							/>
							<img
								src={markdownMobile}
								alt="A screen shot of the Markdown Previewer app on a smart phone"
								className="various__screen-shots__mobile screen-shot"
							/>
						</div>

						<div className="narrow markdown-text">
							<h2>A Markdown Previewer</h2>
							<p>A real-time markdown previewer.</p>

							<div className="links">
								<a
									target="_blank"
									rel="noreferrer"
									className="project__link"
									href="https://github.com/kaxmoglan/markdown-previewer"
								>
									GitHub
								</a>
								<p className="link-separator"> | </p>
								<a
									target="_blank"
									rel="noreferrer"
									className="project__link"
									href="https://kaxmoglan.github.io/markdown-previewer/"
								>
									Open App
								</a>
							</div>
						</div>

						{/* POMODORO */}
						<div className="wide">
							<div className="mobile-only">
								<div className="mobile-only__container">
									<div className="mobile-only__image-container">
										<img
											className="mobile-only__image"
											src={pomodoroMobile}
											alt="A screen shot of the Pomodoro Clock app on a mobile device"
										/>
									</div>
									<div className="mobile-only__text">
										<h2>A POMODORO CLOCK</h2>
										<div className="links">
											<a
												target="_blank"
												rel="noreferrer"
												className="project__link"
												href="https://github.com/kaxmoglan/pomodoro-clock"
											>
												GitHub
											</a>
											<p className="link-separator"> | </p>
											<a
												target="_blank"
												rel="noreferrer"
												className="project__link"
												href="https://kaxmoglan.github.io/pomodoro-clock/"
											>
												Open App
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* NEXT & PREV PROJECT */}
				<div className="more-projects">
					<div className="more-projects__container">
						<div className="more-projects__previous">
							<p className="more-projects__title">PREV</p>
							<Link
								className="project__link mirror"
								to={`/projects/${PROJECTS[PROJECTS.length - 1].url}`}
							>
								{PROJECTS[PROJECTS.length - 1].name.join(' ')}
							</Link>
						</div>
						<div className="more-projects__next">
							<p className="more-projects__title">NEXT</p>
							<Link
								className="project__link"
								to={`/projects/${PROJECTS[0].url}`}
							>
								{PROJECTS[0].name.join(' ')}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
