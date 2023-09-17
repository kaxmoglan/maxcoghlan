import React from 'react';
import desktopImg from '../../images/dist/projects/ev/ev-desktop.png';
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
	name: ['EV'],
	tagline: 'Full stack fintech app',
	workShort: ['Front End', 'Back End'],
	workExpanded: ['Front End Development', 'Back End Development'],
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
	description: 'Coming soon.',
	desktopImg: {
		src: desktopImg,
		alt: "A screen shot of Humblr's home page on a desktop computer",
	},
	content: (
		<div className="project-body">
			<div className="narrow"></div>
		</div>
	),
};

export default DATA;
