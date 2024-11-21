import React from 'react';
import desktopImg from '../../images/dist/projects/mini-blog/mini-blog-desktop.png';
import tabletImg from '../../images/dist/projects/mini-blog/mini-blog-tablet.png';
import mobileImg from '../../images/dist/projects/mini-blog/mini-blog-mobile.png';
import {
	PythonIcon,
	DjangoIcon,
	HerokuIcon,
	BootstrapIcon,
	JinjaIcon,
} from '../icons';
import type { IPROJECT } from '../interfaces';

const DATA: IPROJECT = {
	url: 'mini-blog',
	name: ["MAX'S", 'MINI BLOG'],
	tagline: 'Full stack blogging platform',
	workShort: ['UI / UX', 'Front End', 'Back End'],
	workExpanded: [
		'UI/UX Design',
		'Front End Development',
		'Back End Development',
	],
	links: {
		// app: 'https://kaxmoglan-miniblog.herokuapp.com',
		github: 'https://github.com/kaxmoglan/miniblog',
	},
	tech: ['Python', 'Django', 'Bootstrap', 'Heroku', 'Jinja', 'SQL'],
	icons: [PythonIcon, DjangoIcon, HerokuIcon, BootstrapIcon, JinjaIcon],
	subheading: 'UI/UX | Front End | Back End',
	description:
		'A full stack blogging platform built with Python, Django and Bootstrap and deployed on Heroku (until they removed the free tier).',
	mobileImg: {
		src: mobileImg,
		alt: "A screen shot of Max's Mini Blog's home page on a smart phone",
	},
	tabletImg: {
		src: tabletImg,
		alt: "A screen shot of Max's Mini Blog's home page on a tablet computer",
	},
	desktopImg: {
		src: desktopImg,
		alt: "A screen shot of Max's Mini Blog's home page on a desktop computer",
	},
	content: (
		<div className="project-body">
			<div className="narrow">
				<h2>THE PROJECT</h2>
				<p>A personal project built for me to play around with Django.</p>
				<p>
					Users can create an account and a profile, write, publish and edit
					blog posts, and comment on other users’ posts.
				</p>
				<p>
					The front end was just Bootstrap to get something pretty(ish) running
					quickly.
				</p>
			</div>
		</div>
	),
};

export default DATA;
