import React from 'react';
import desktopImg from '../../images/dist/projects/humblr/humblr-desktop.png';
import tabletImg from '../../images/dist/projects/humblr/humblr-tablet.png';
import mobileImg from '../../images/dist/projects/humblr/humblr-mobile.png';
import {
	NodeIcon,
	JavascriptIcon,
	FirebaseIcon,
	MaterialIcon,
	ReactIcon,
	ReduxIcon,
} from '../icons';
import type { IPROJECT } from '../interfaces';

const DATA: IPROJECT = {
	url: 'humblr',
	name: ['HUMBLR'],
	tagline: 'Full stack social media app',
	workShort: ['UI / UX', 'Front End', 'Back End'],
	workExpanded: [
		'UI/UX Design',
		'Front End Development',
		'Back End Development',
	],
	links: {
		// app: 'https://humblr-sm.web.app/',
		github: 'https://github.com/kaxmoglan/humblr',
	},
	tech: [
		'Firebase',
		'React.js',
		'Redux',
		'Material UI',
		'Node.js',
		'Express.js',
	],
	icons: [
		MaterialIcon,
		ReactIcon,
		ReduxIcon,
		JavascriptIcon,
		NodeIcon,
		FirebaseIcon,
	],
	subheading: 'UI/UX | Front End | Back End',
	description:
		'A full stack social media platform built with Express.js, React.js, Redux, Material UI and a realtime database hosted on Firebase.',
	mobileImg: {
		src: mobileImg,
		alt: "A screen shot of Humblr's home page on a smart phone",
	},
	tabletImg: {
		src: tabletImg,
		alt: "A screen shot of Humblr's home page on a tablet computer",
	},
	desktopImg: {
		src: desktopImg,
		alt: "A screen shot of Humblr's home page on a desktop computer",
	},
	content: (
		<div className="project-body">
			<div className="narrow">
				<h2>THE PROJECT</h2>
				<p>
					Humblr, a personal project, is a full stack social media app built
					with React.js, Redux and Material-UI on the front end, and Express.js,
					Firebase and Node.js in the back.
				</p>
				<p>
					Users can create an account and a profile with a profile image, bio,
					website link and location. They can create posts (called ‘Murmurs’)
					and comment, like and unlike other users’ posts in realtime.
					Notifications are generated for new comments and likes (unread
					notifications also get deleted should a user remove their like) and
					profile pictures get deleted from the server automatically should the
					user upload a new one.
				</p>
				<p>
					Far from being the next Facebook, but a fun project to practise with a
					realtime database, Redux and making APIs!
				</p>
			</div>
		</div>
	),
};

export default DATA;
