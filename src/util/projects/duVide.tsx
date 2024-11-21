import React from 'react';

// IMPORT IMAGES
import desktopImg from '../../images/dist/projects/du-vide/du-vide-desktop.png';
import tabletImg from '../../images/dist/projects/du-vide/du-vide-tablet.png';
import mobileImg from '../../images/dist/projects/du-vide/du-vide-mobile.png';

// IMPORT ICONS
import {
	AstroIcon,
	TypescriptIcon,
	NetlifyIcon,
	SassIcon,
	NpmIcon,
} from '../icons';

import type { IPROJECT } from '../interfaces';

// PROJECT DATA
const DATA: IPROJECT = {
	url: 'dj-du-vide',
	name: ['DJ', 'DU VIDE'],
	tagline: 'Clean and modern landing page',
	workShort: ['Front End'],
	workExpanded: ['Front End Development'],
	links: {
		app: 'https://www.djduvide.com',
		github: 'https://github.com/kaxmoglan/duVide',
	},
	tech: ['Astro', 'Sass', 'Typescript'],
	icons: [AstroIcon, TypescriptIcon, NetlifyIcon, SassIcon, NpmIcon],
	subheading: 'UI/UX | Front End',
	description: 'A sleek, responsive landing page with a custom SVG animation.',
	mobileImg: {
		src: mobileImg,
		alt: "A screen shot of DJ Du Vide's home page on a smart phone",
	},
	tabletImg: {
		src: tabletImg,
		alt: "A screen shot of DJ Du Vide's home page on a tablet computer",
	},
	desktopImg: {
		src: desktopImg,
		alt: "A screen shot of DJ Du Vide's home page on a desktop computer",
	},
	content: (
		<div className="project-body">
			<div className="narrow">
				<h2>THE BRIEF</h2>
				<p>
					DJ Du Vide wanted me to build and host a landing page he had designed,
					complete with a custom CSS SVG animation of his logo.
				</p>

				<h2>THE SOLUTION</h2>
				<p>
					I used Astro and Sass to create the landing page and hosted it on
					Netlify for quick and easy (and free!) CI/CD deployments. The
					animation frames were created by an animator using Adobe After Effects
					and exported as SVGs. I animated between the SVG frames using CSS
					Animations. I also dynamically imported and embedded all the frames so
					that should the animation change in the future, it's easily updatable.
				</p>
			</div>
		</div>
	),
};

export default DATA;
