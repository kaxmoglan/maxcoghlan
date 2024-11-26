import React from 'react';

// IMPORT IMAGES
import desktopImg from '../../images/dist/projects/dj92/dj92-desktop.png';
import tabletImg from '../../images/dist/projects/dj92/dj92-tablet.png';
import mobileImg from '../../images/dist/projects/dj92/dj92-mobile.png';

// IMPORT ICONS
import { ReactIcon, TypescriptIcon, NetlifyIcon } from '../icons';

import type { IPROJECT } from '../interfaces';

// PROJECT DATA
const DATA: IPROJECT = {
	url: 'dj92',
	name: ['DJ92'],
	tagline: 'Animated single page website.',
	workShort: ['Front End', 'UI/UX'],
	workExpanded: ['Front End Development', 'UI/UX'],
	links: {
		app: 'https://www.dj92.co.uk',
		github: 'https://github.com/kaxmoglan/dj92',
	},
	tech: ['React', 'Framer', 'Sass', 'Typescript'],
	icons: [ReactIcon, TypescriptIcon, NetlifyIcon],
	subheading: 'Front End | UI/UX',
	description: 'A scroll-animated single page portfolio site.',
	mobileImg: {
		src: mobileImg,
		alt: "A screen shot of DJ92's home page on a smart phone",
	},
	tabletImg: {
		src: tabletImg,
		alt: "A screen shot of DJ92's home page on a tablet computer",
	},
	desktopImg: {
		src: desktopImg,
		alt: "A screen shot of DJ92's home page on a desktop computer",
	},
	content: (
		<div className="project-body">
			<div className="narrow">
				<h2>Requirements</h2>
				<p>
					DJ92 had designed a desktop-only single page website that had scroll
					based animations that they wanted me to build and host.
				</p>

				<h2>Solution</h2>
				<p>
					I used Vite and React to create the site, Framer to implement the
					scroll-based animations, and Netlify for hosting and quick and easy
					(and free!) CI/CD deployments.
				</p>
				<p>
					I was only given a design for the desktop version of the site, so I
					had free reign on the mobile styling including the menu. Some notable
					added styling I had fun designing and building were the desktop
					buttons hover animation, the subtle 'frosted glass' appearance of the
					header, the mobile menu curtain and link animations and the
					implementation of the contact form.
				</p>
			</div>
		</div>
	),
};

export default DATA;
