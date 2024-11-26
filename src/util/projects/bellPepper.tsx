import React from 'react';

// IMPORT IMAGES
import desktopImg from '../../images/dist/projects/bell-pepper/bell-pepper-desktop.png';
import tabletImg from '../../images/dist/projects/bell-pepper/bell-pepper-tablet.png';
import mobileImg from '../../images/dist/projects/bell-pepper/bell-pepper-mobile.png';
import beforeImg from '../../images/dist/projects/bell-pepper/bell-pepper-before.png';
import afterImg from '../../images/dist/projects/bell-pepper/bell-pepper-after.png';
import menu1 from '../../images/dist/projects/bell-pepper/bell-pepper-menu-1.png';
import menu2 from '../../images/dist/projects/bell-pepper/bell-pepper-menu-2.png';

// IMPORT ICONS
import {
	HtmlIcon,
	NodeIcon,
	JavascriptIcon,
	GulpIcon,
	SassIcon,
	NpmIcon,
} from '../icons';

import type { IPROJECT } from '../interfaces';

// PROJECT DATA
const DATA: IPROJECT = {
	url: 'bell-pepper-design',
	name: ['BELL PEPPER', 'DESIGN'],
	tagline: 'Clean and modern static site',
	workShort: ['UI / UX', 'Front End'],
	workExpanded: ['UI/UX Design', 'Front End Development'],
	links: {
		app: 'https://www.bellpepperdesign.co.uk',
		github: 'https://github.com/kaxmoglan/charlieapple',
	},
	tech: ['Node.js', 'Pug', 'Sass', 'GSAP', 'Gulp', 'Javascript'],
	icons: [JavascriptIcon, GulpIcon, HtmlIcon, SassIcon, NpmIcon, NodeIcon],
	subheading: 'UI/UX | Front End',
	description:
		'A clean and modern Jamstack app for a web design, graphic design and marketing company.',
	mobileImg: {
		src: mobileImg,
		alt: "A screen shot of Bell Pepper Design's home page on a smart phone",
	},
	tabletImg: {
		src: tabletImg,
		alt: "A screen shot of Bell Pepper Design's home page on a tablet computer",
	},
	desktopImg: {
		src: desktopImg,
		alt: "A screen shot of Bell Pepper Design's home page on a desktop computer",
	},
	content: (
		<div className="project-body">
			<div className="narrow">
				<h2>Requirements</h2>
				<p>
					Bell Pepper Design (formerly Charlie Apple) wanted a complete
					re-design of their old website. They gave me free rein over the
					design, but wanted the copy and page names to stay the same for their
					SEO.
				</p>

				<h2>Solution</h2>
				<p>
					I designed the site in Adobe XD and, upon approval, built a bespoke
					site using a Node.js development environment with Gulp, Pug, Sass and
					Javascript.
				</p>
			</div>

			<div className="wide">
				<div className="two-one">
					<div className="text">
						<h2>THE CHALLENGES</h2>
						<p className="subheading">Text & Structure</p>
						<p>
							The original site made it hard to see what the business offered at
							a glance. The company offers a lot of services, all of which were
							hidden under one 'services' drop-down menu and even when you
							clicked through to different pages, you were met with large bodies
							of text that hid the main points.
						</p>

						<p>
							I restructured the site to emphasise the company's slogan,
							'Design, Marketing, Events' and created what I referred to as '3
							mini sites':
						</p>
						<ul>
							<li>- A Design mini-site to host all design-related services</li>
							<li>
								{' '}
								- A Marketing mini-site to host all marketing-related services
								and
							</li>
							<li>
								{' '}
								- An Events mini-site to host all event-management-related
								services
							</li>
						</ul>
						<p>
							Once the site was split up into more user-friendly sections, I
							restructured the text on every page so that the main points of
							each article were easy to see thus, in theory, increasing the
							company's conversion rate.
						</p>
						<p className="subheading">The Mobile Menu</p>
						<p>
							The new site structure presented a design challenge for the mobile
							menu. My solution was a bespoke JS menu that always tells you
							where you are, and allows you to see the entire site map without
							having to navigate through any other pages.
						</p>
						<p className="subheading">Show Me The Websites</p>
						<p>
							My last main challenge was finding a way to showcase Bell Pepper
							Design's previous websites without links that take users away from
							the site, or intrusive screen shots that detract from the design
							of the app itself.
						</p>
						<p>
							My solution was a scroll-based animation using GSAP where the user
							(as part of the natural page scroll) is greeted with a computer
							screen that they turn on and scroll through a selection of Bell
							Pepper Design's projects before returning to the natural page
							flow.
						</p>
					</div>
					<div className="bell-pepper-images">
						<div className="bell-pepper-images__container">
							<img
								className="bell-pepper-images__image one"
								src={menu1}
								alt="ALT"
							/>
							<img
								className="bell-pepper-images__image two"
								src={menu2}
								alt="ALT"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="wide">
				<div className="half-and-half">
					<div className="left-column">
						<img
							src={beforeImg}
							alt="A screen shot of Bell Pepper Design's home page before my redesign on a desktop computer"
						/>
						<p style={{ textAlign: 'center', marginTop: '2rem' }}>
							<strong>BEFORE</strong>
							<br />
							SEObility score: 56%
						</p>
					</div>
					<div className="right-column">
						<img
							src={afterImg}
							alt="A screen shot of Bell Pepper Design's home page before my redesign on a desktop computer"
						/>
						<p style={{ textAlign: 'center', marginTop: '2rem' }}>
							<strong>AFTER</strong>
							<br />
							SEObility score: 87%
						</p>
					</div>
				</div>
			</div>
		</div>
	),
};

export default DATA;
