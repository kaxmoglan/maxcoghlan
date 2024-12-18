import React from 'react';
import desktopImg from '../../images/dist/projects/ofa/ofa-collage.png';
import {
	ReactIcon,
	NodeIcon,
	TypescriptIcon,
	JestIcon,
	DockerIcon,
	GraphQLIcon,
	MongoIcon,
	MaterialIcon,
	NxIcon,
} from '../icons';
import type { IPROJECT } from '../interfaces';

// PROJECT DATA
const DATA: IPROJECT = {
	url: 'ofa',
	name: ['ONE FINANCIAL ADVISOR'],
	tagline: 'Full stack financial advice app.',
	workShort: ['Front End', 'Back End'],
	workExpanded: ['Front End Development', 'Back End Development'],
	links: {
		app: 'https://www.onefinancialadviser.com/',
		github: '',
	},
	tech: [
		'React',
		'Typescript',
		'GraphQL',
		'MongoDB',
		'Express',
		'Jest',
		'Cypress',
	],
	icons: [
		ReactIcon,
		GraphQLIcon,
		MongoIcon,
		DockerIcon,
		JestIcon,
		TypescriptIcon,
		NodeIcon,
		MaterialIcon,
		NxIcon,
	],
	subheading: 'Front End | Back End',
	description:
		'A full stack web app built with React, GraphQL and MongoDB and integrated with proprietary forecast modelling APIs designed to bring down the cost of retirement income advice.',
	mobileImg: undefined,
	tabletImg: undefined,
	desktopImg: {
		src: desktopImg,
		alt: "A screen shot of One Financial Advisor's home page on a desktop computer with some breakout widgets.",
	},
	content: (
		<div className="project-body">
			<div className="narrow">
				<h2>Overview</h2>
				<p>
					I was brought on to be a part of a small in-house engineering team
					that collaborated with a team of external contractors to build a
					first-of-its-kind full stack D2C app designed to bring down the cost
					of financial retirement advice.
				</p>
				<p>
					The app was built using Typescript and React with Node.js, GraphQL and
					MongoDB, and testing utilised Jest and Cypress. We built a component
					library using Storybook and built in complex integrations with
					internal and external APIs, as well as PDF document generation,
					notifications and a context-aware 3D browser-rendered avatar chatbot.
				</p>
				<p>
					Towards the end of the project, resources were (unfortunately for the
					project) reallocated so I was selected to become the senior (and
					only!) developer on the project to see it through.
				</p>
				<p></p>
			</div>
		</div>
	),
};

export default DATA;
