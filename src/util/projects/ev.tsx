import React from 'react';
import desktopImg from '../../images/dist/projects/ev/evd-desktop.png';
import tabletImg from '../../images/dist/projects/ev/evd-tablet.png';
import mobileImg from '../../images/dist/projects/ev/evd-mobile.png';
import {
	NodeIcon,
	TypescriptIcon,
	AwsIcon,
	MaterialIcon,
	ReactIcon,
	GraphQLIcon,
	MongoIcon,
	YarnIcon,
	NxIcon,
} from '../icons';
import type { IPROJECT } from '../interfaces';

const DATA: IPROJECT = {
	url: 'ev',
	name: ['EVDigital'],
	tagline: 'Award winning fintech app.',
	workShort: ['Front End', 'Back End'],
	workExpanded: [
		'Front End Development',
		'Back End Development',
		'Technical Leadership',
	],
	links: {
		app: 'https://www.ev.uk',
	},
	tech: [
		'Typescript',
		'React.js',
		'GraphQL',
		'MongoDB',
		'Node.js',
		'Material UI',
		'Express.js',
		'Cypress',
		'Jenkins',
		'Jest',
	],
	icons: [
		ReactIcon,
		TypescriptIcon,
		GraphQLIcon,
		NodeIcon,
		MaterialIcon,
		AwsIcon,
		MongoIcon,
		YarnIcon,
		NxIcon,
	],
	subheading: 'Front End | Back End',
	description:
		'A suite of award winning fintech apps built across the MERN stack used by clients including AIB, Scottish Widows, WTW and more.',
	desktopImg: {
		src: desktopImg,
		alt: "A screen shot of EV's website.",
	},
	mobileImg: {
		src: mobileImg,
		alt: '',
	},
	tabletImg: {
		src: tabletImg,
		alt: '',
	},
	content: (
		<div className="project-body">
			<div className="narrow">
				<h2>Overview</h2>
				<p>
					I was brought on as a senior developer and later made the technical
					lead of 'EVDigital' which consisted of 6 web applications and 1 shared
					backend service. They were a mixture of D2C and client apps (including
					bespoke apps for AIB) which all stemmed around financial advice and
					forecast modelling. They also made up part of omni-channel financial
					advice which was a wider financial advice journey through integrations
					with other software, services and in-person consultations.
				</p>
				<h2>My Role</h2>
				<p>
					I oversaw 3 development teams, ran daily standups and was hands on in
					writing and reviewing code. I was responsible for translating business
					requirements into technical implementations and estimates used to
					quote clients (whom I often dealt with directly), as well as mentoring
					graduate developers and running workshops for other developers. I also
					built POCs, designed and implemented a new testing strategy for all
					EVDigital apps and helped hire and onboard other developers.
				</p>
			</div>
		</div>
	),
};

export default DATA;
