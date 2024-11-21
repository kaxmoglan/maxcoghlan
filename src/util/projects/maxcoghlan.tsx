import React from 'react';
import desktopImg from '../../images/dist/projects/maxcoghlan/maxcoghlan-desktop.png';
import tabletImg from '../../images/dist/projects/maxcoghlan/maxcoghlan-tablet.png';
import mobileImg from '../../images/dist/projects/maxcoghlan/maxcoghlan-mobile.png';
import {
	TypescriptIcon,
	ReactIcon,
	NodeIcon,
	GulpIcon,
	SassIcon,
	YarnIcon,
} from '../icons';
import type { IPROJECT } from '../interfaces';

const DATA: IPROJECT = {
	url: 'maxcoghlan',
	name: ['MY', 'PORTFOLIO'],
	tagline: 'Built with React and Typescript',
	workShort: ['UI / UX', 'Front End'],
	workExpanded: ['UI/UX Design', 'Front End Development'],
	links: {
		app: '',
		github: 'https://github.com/kaxmoglan/maxcoghlan',
	},
	tech: ['React', 'Typescript', 'Node.js', 'Sass', 'Gulp'],
	icons: [ReactIcon, TypescriptIcon, GulpIcon, SassIcon, YarnIcon, NodeIcon],
	subheading: 'UI/UX | Front End',
	description: 'This portfolio.',
	mobileImg: {
		src: mobileImg,
		alt: "A screen shot of this site's home page on a smart phone",
	},
	tabletImg: {
		src: tabletImg,
		alt: "A screen shot of this site's home page on a tablet computer",
	},
	desktopImg: {
		src: desktopImg,
		alt: "A screen shot of this site's home page on a desktop computer",
	},
	content: (
		<div className="project-body">
			<div className="narrow">
				<h2>ABOUT</h2>
				<p>
					I wanted a clean front end app to showcase my work and a bit about me.
					I designed it in Adobe XD and built it using Typescript and React.
				</p>
				<p>
					The animations, which were drawn by my brother in Adobe Animate, are
					all SVGs and animated with CSS.
				</p>
			</div>
		</div>
	),
};

export default DATA;
