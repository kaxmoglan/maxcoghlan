import React, { useEffect, useState } from 'react';

// ICONS
import {
	AndroidIcon,
	AwsIcon,
	BootstrapIcon,
	ChevronIcon,
	DjangoIcon,
	DockerIcon,
	FigmaIcon,
	FirebaseIcon,
	GitIcon,
	GithubIcon,
	GitlabIcon,
	GraphQLIcon,
	HerokuIcon,
	IllustratorIcon,
	IosIcon,
	JavascriptIcon,
	JestIcon,
	MaterialIcon,
	MongoIcon,
	NodeIcon,
	PhotoshopIcon,
	PostgresIcon,
	PrismaIcon,
	PythonIcon,
	ReactIcon,
	ReduxIcon,
	SassIcon,
	TailwindIcon,
	TerraformIcon,
	TypescriptIcon,
	VsCodeIcon,
	WordpressIcon,
	XdIcon,
} from '../util/icons';

import { SKILLS_PAGE_ANIMATION_FRAMES } from '../util/animations/animations';
import SkillsCloud from '../components/SkillsCloud';
import type { IGLOBALSTATE } from '../util/interfaces';

const FRONT_END_ICONS: Array<JSX.Element> = [
	JavascriptIcon,
	TypescriptIcon,
	BootstrapIcon,
	SassIcon,
	ReduxIcon,
	ReactIcon,
	IosIcon,
	MaterialIcon,
	AndroidIcon,
	TailwindIcon,
];

const BACK_END_ICONS: Array<JSX.Element> = [
	NodeIcon,
	FirebaseIcon,
	PythonIcon,
	WordpressIcon,
	AwsIcon,
	GraphQLIcon,
	DjangoIcon,
	PostgresIcon,
	MongoIcon,
	TerraformIcon,
	PrismaIcon,
];

const OTHER_ICONS: Array<JSX.Element> = [
	XdIcon,
	PhotoshopIcon,
	IllustratorIcon,
	HerokuIcon,
	VsCodeIcon,
	GitIcon,
	GithubIcon,
	JestIcon,
	FigmaIcon,
	GitlabIcon,
	DockerIcon,
];

export const Skills: React.FC<IGLOBALSTATE> = (props) => {
	const [showFrontEnd, setShowFrontEnd] = useState(true);
	const [showBackEnd, setShowBackEnd] = useState(false);
	const [showOther, setShowOther] = useState(false);

	const { setTheme, setShowNav, setShowSocial } = props;

	useEffect(() => {
		setTheme('dark');
		setShowNav(true);
		setShowSocial(true);
	}, [setTheme, setShowNav, setShowSocial]);

	const handleAccordion = (menu: 'FRONT_END' | 'BACK_END' | 'OTHER') => {
		switch (menu) {
			case 'FRONT_END':
				if (showFrontEnd) {
					return;
				} else {
					setShowFrontEnd(true);
					setShowBackEnd(false);
					setShowOther(false);
					return;
				}
			case 'BACK_END':
				if (showBackEnd) {
					return;
				} else {
					setShowFrontEnd(false);
					setShowBackEnd(true);
					setShowOther(false);
					return;
				}
			case 'OTHER':
				if (showOther) {
					return;
				} else {
					setShowFrontEnd(false);
					setShowBackEnd(false);
					setShowOther(true);
					return;
				}
			default:
				console.error('Unknown menu type.');
				return;
		}
	};

	return (
		<main className="content__main">
			<div className="main-page-template">
				<div className="main-page-template__container skills">
					{/* LEFT COLUMN */}
					<div className="main-page-template__left-column">
						<div className="main-page-template__left-column-container">
							<h1 className="skills__title">Skills</h1>
							<div className="skills">
								<div
									className={`skills__category ${
										showFrontEnd ? 'visible' : ''
									}`}
								>
									<div
										className="skills__heading"
										onClick={() => handleAccordion('FRONT_END')}
									>
										<h2 className="skills__heading-text">Front End</h2>
										{ChevronIcon}
									</div>

									<div className="skills__content">
										<p>
											TypeScript, JavaScript, React, React Native, Astro, Redux,
											Recoil, MobX, Tailwind, MaterialUI, Sass.
										</p>
									</div>
								</div>
								<div
									className={`skills__category ${showBackEnd ? 'visible' : ''}`}
								>
									<div
										className="skills__heading"
										onClick={() => handleAccordion('BACK_END')}
									>
										<h2 className="skills__heading-text">Back End</h2>
										{ChevronIcon}
									</div>

									<div className="skills__content">
										<p>
											Node.js, Koa, Express, Postgres, Prisma, GraphQL, MongoDB,
											Docker, AWS, Kubernetes, Jenkins, Python, Django, PHP,
											Wordpress, Firebase.
										</p>
									</div>
								</div>
								<div
									className={`skills__category ${showOther ? 'visible' : ''}`}
								>
									<div
										className="skills__heading"
										onClick={() => handleAccordion('OTHER')}
									>
										<h2 className="skills__heading-text">Other</h2>
										{ChevronIcon}
									</div>

									<div className="skills__content">
										<p>
											Git, GitHub, Gitlab, BitBucket, Vim, Linux, MacOS, Windows
											& WSL.
										</p>
										<p>
											<strong>Testing: </strong>Jest, Cypress, Playwright,
											Cucumber.
										</p>
										<p>
											<strong>Adobe: </strong>XD, Photoshop, Illustrator,
											Premiere Pro, After Effects.
										</p>
										<p>
											<strong>Apple: </strong>Final Cut Pro, Logic Pro, Pages,
											Numbers.
										</p>
										<p>
											<strong>Microsoft: </strong>Word, Excel, VSCode (my
											current editor of choice).
										</p>
										<p>
											<strong>Other: </strong>Confluence, Jira, Branch.io,
											Twilio, Figma, Sentry, Intercom, Notion, DaVinci Resolve,
											Ableton Live, Pro Tools.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT COLUMN */}
					<div className="main-page-template__right-column">
						<div className="skills__icons">
							<div
								className={`skills__icons-container ${
									showFrontEnd ? 'visible' : ''
								}`}
							>
								<SkillsCloud icons={FRONT_END_ICONS} />
							</div>
							<div
								className={`skills__icons-container ${
									showBackEnd ? 'visible' : ''
								}`}
							>
								<SkillsCloud icons={BACK_END_ICONS} />
							</div>
							<div
								className={`skills__icons-container ${
									showOther ? 'visible' : ''
								}`}
							>
								<SkillsCloud icons={OTHER_ICONS} />
							</div>
						</div>
						<div className="main-page-template__right-column-container">
							<div className="animation-frame__container skills">
								{SKILLS_PAGE_ANIMATION_FRAMES.map((frame, i) => (
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
