import React, { useEffect } from 'react';

// ICONS
import {
	AndroidIcon,
	AwsIcon,
	BootstrapIcon,
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
import type { IGLOBALSTATE } from '../util/interfaces';

const SERVICES: Array<{
	heading: string;
	text: string;
	icons: Array<JSX.Element> | null;
}> = [
	{
		heading: 'Leadership & Delivery',
		text: 'Technical direction and architecture decisions, mentoring and 1:1s, sprint planning and delivery, code review and quality bar, hiring and interviewing, stakeholder communication, roadmap input.',
		icons: null,
	},
	{
		heading: 'Front End',
		text: 'TypeScript, React, React Native, Redux, Sass, Bootstrap, Tailwind, Material UI.',
		icons: [
			JavascriptIcon,
			TypescriptIcon,
			ReactIcon,
			ReduxIcon,
			SassIcon,
			BootstrapIcon,
			TailwindIcon,
			MaterialIcon,
			IosIcon,
			AndroidIcon,
		],
	},
	{
		heading: 'Back End',
		text: 'Node.js, Postgres, Prisma, GraphQL, MongoDB, Docker, AWS, Terraform, Python, Django.',
		icons: [
			NodeIcon,
			PostgresIcon,
			PrismaIcon,
			GraphQLIcon,
			MongoIcon,
			DockerIcon,
			AwsIcon,
			TerraformIcon,
			PythonIcon,
			DjangoIcon,
			FirebaseIcon,
			WordpressIcon,
		],
	},
	{
		heading: 'Tools & Workflow',
		text: 'Git, GitHub, GitLab, Heroku, VS Code.',
		icons: [GitIcon, GithubIcon, GitlabIcon, HerokuIcon, VsCodeIcon],
	},
	{
		heading: 'Testing & Design',
		text: 'Jest, Figma, Adobe XD, Photoshop, Illustrator.',
		icons: [JestIcon, FigmaIcon, XdIcon, PhotoshopIcon, IllustratorIcon],
	},
];

export const Skills: React.FC<IGLOBALSTATE> = ({ setShowNav }) => {
	useEffect(() => {
		setShowNav(true);
	}, [setShowNav]);

	return (
		<main className="content__main">
			<section className="page-hero">
				<div className="wrap">
					<h1 className="page-hero__title">How I usually help</h1>
					<p className="page-hero__lede">
						The split between leading and building, and the stack I'm
						still hands-on in.
					</p>
				</div>
			</section>

			<section className="services">
				<div className="wrap services__grid">
					{SERVICES.map((service, i) => (
						<div
							className={`service-tile reveal ${
								service.icons ? '' : 'service-tile--lead'
							}`}
							style={{ '--i': i } as React.CSSProperties}
							key={service.heading}
						>
							<h2>{service.heading}</h2>
							<p>{service.text}</p>
							{service.icons && (
								<div className="service-tile__icons">
									{service.icons.map((icon, j) => (
										<span className="service-tile__icon" key={j}>
											{icon}
										</span>
									))}
								</div>
							)}
						</div>
					))}
				</div>

				<div className="services__illustration">
					<div className="animation-frame__container" aria-hidden="true">
						{SKILLS_PAGE_ANIMATION_FRAMES.map((frame, i) => (
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
