import React from 'react';
import desktopImg from '../../images/dist/projects/insideout/insideout-desktop.png';
import tabletImg from '../../images/dist/projects/insideout/insideout-tablet.png';
import mobileImg from '../../images/dist/projects/insideout/insideout-mobile.png';
import {
	TailwindIcon,
	ReactIcon,
	NodeIcon,
	ReduxIcon,
	TypescriptIcon,
	WordpressIcon,
	AwsIcon,
	KoaIcon,
	PostgresIcon,
	PrismaIcon,
	JestIcon,
	DockerIcon,
} from '../icons';
import type { IPROJECT } from '../interfaces';

// PROJECT DATA
const DATA: IPROJECT = {
	url: 'insideout',
	name: ['INSIDE OUT'],
	tagline: 'Mental health platform',
	workShort: ['Mobile App', 'Front End', 'Back End', 'UI/UX'],
	workExpanded: [
		'Mobile App Development',
		'Infrastructure Design',
		'Front End Development',
		'Back End Development',
		'UI/UX Design',
	],
	links: {
		app: 'https://www.lettheinsideout.com',
		github: '',
	},
	tech: [
		'React Native',
		'React',
		'Redux',
		'Koa',
		'Express',
		'Prisma',
		'Postgres',
		'Tailwind',
		'Framer',
		'AWS',
		'Figma',
		'Jest',
		'Cucumber',
	],
	icons: [
		ReduxIcon,
		ReactIcon,
		DockerIcon,
		JestIcon,
		TypescriptIcon,
		NodeIcon,
		TailwindIcon,
		KoaIcon,
		AwsIcon,
		WordpressIcon,
		PostgresIcon,
		PrismaIcon,
	],
	subheading: 'Mobile App | Front End | Back End | Infrastructure Design',
	description:
		'An on-demand mental health platform comprising of an iOS and Android mobile app, several React apps for internal use, a Wordpress site, and containerised infrastructure hosted on AWS. The stack comprised of React and React Native, Typescript, Prisma, Koa, Express and Postgres with some Tailwind thrown in for good measure.',
	mobileImg: {
		src: mobileImg,
		alt: "A screen shot of The Modern Calligraphy Studio's home page on a smart phone",
	},
	tabletImg: {
		src: tabletImg,
		alt: "A screen shot of The Modern Calligraphy Studio's home page on a tablet computer",
	},
	desktopImg: {
		src: desktopImg,
		alt: "A screen shot of The Modern Calligraphy Studio's home page on a desktop computer",
	},
	content: (
		<div className="project-body">
			<div className="narrow">
				<h2>Overview</h2>
				<p>
					I was the first developer to be brought into a small engineering team
					tasked with breaking apart their monolith API into containerised
					micro-services with zero downtime, as well as refreshing and building
					new features into their iOS and Android mobile app. I worked closely
					with the CTO and UX designer to help design the UI/UX and the backend
					infrastructure, as well as help hire and onboard the rest of the team
					whom I worked closely with across the stack. I also wrote articles for
					their tech blog focusing on engineering culture and new technologies.
				</p>
			</div>

			<div className="wide">
				<div className="half-and-half">
					<div className="image">
						<img
							src={tabletImg}
							alt="A screen shot on a desktop computer of the custom login gateway for wholesale customers"
						/>
					</div>

					<div className="right-column">
						<h2>The Mobile App</h2>

						<p>
							I worked closely with the CTO and UX Designer to refresh the look
							and user experience of InsideOut's mobile app which was built on
							React Native and Redux. I was part of a team who created a
							component library from scratch, built new screens, and make a
							brand new onboarding flow for users when they first installed the
							app. I also worked specifically on building new features like
							integrating Google Fit, Apple Health Kit and Intercom for user
							support and live chat, as well as multi-factor authentication,
							push notifications with Firebase, and deep link functionality with
							metrics from Branch.io.
						</p>

						<p>
							On top of this, we converted the codebase from Javascript to
							Typescript and baked in tools like Sentry and UXCam.
						</p>
					</div>
				</div>
			</div>

			<div className="wide">
				<div className="half-and-half">
					<div className="left-column">
						<h2>The Back End</h2>

						<p>
							Alongside the CTO and a senior developer, the 3 of us designed a
							new backend infrastructure using containerised micro-services with
							Docker and AWS. Our aim was to break apart the pre-existing
							monolith API into these new micro-services with zero downtime -
							something which the 3 of us are very proud to have achieved.
						</p>

						<h3>Auth</h3>
						<p>
							I was the lead developer in charge of creating the Authentication
							micro-service which I built using Typescript, Koa, Prisma and
							Postgres, with feature and unit tests written with Cucumber, Jest
							and Sinon. All the logic was written without the use of libraries
							(except for the encryption part which I left to BCrypt) and it was
							deployed in a Docker container to AWS.
						</p>

						<h3>Bookings</h3>
						<p>
							I advocated for and led a team to build a new micro-service
							designed to replace all the pre-existing booking functionality in
							the API. The aim was to fix several large bugs that had been
							plaguing the business in one hit, whilst breaking off a large
							chunk of the monolith API. This was a large, core part of the app,
							so it was a big challenge to get right, but the result was a
							clean, modern, end-to-end tested micro-service that pushed the
							overall rebuild project further, whilst improving user experience
							and freeing up support time. It also brought much needed and
							requested features from the users including worldwide timezone
							support and calendar integration with Google, iCloud, Microsoft
							Excahgne and more.
						</p>

						<h3>Libraries</h3>
						<p>
							I wrote a series of NPM libraries to be used across all new
							backend services, including a tokens library designed to check,
							verify and refresh tokens, an 'access control' library designed to
							grant or deny access to users based on their account details, and
							a headers library designed to check and sanitize any request
							headers.
						</p>

						<h3>Maintenance + New Features</h3>
						<p>
							Alongside rebuilding the backend, we also had to build new
							features into the existing API - one of my bigger projects being
							building in multi-factor authentication. This was, of course, on
							top of day-to-day maintenance and bug fixes - my most memorable
							being correctly formatting phone numbers from around the world to
							the E.164 standard to fit in with our use of Twilio's API, linking
							users automatically to their employer's subscription based on
							their email address, and fixing a timezone bug which supported
							users making bookings in all timezones, factoring in
							country-specific daylight savings.
						</p>
					</div>
					<div className="right-column inside-out">
						<h2>Internal Dashboard</h2>

						<p>
							As part of a team of 2, I designed and developed a dashboard
							intended for internal use that tracked the progress of users'
							journeys through the platform. We used React, Tailwind and Framer
							with Typescript on the front end, and Koa, Prisma and Postgres
							with Typescript on the back end. This project also included a
							realtime alerting system that tapped into a messaging service we
							wrote with STOMP.
						</p>

						<p>
							We gathered requirements from other areas of the business in order
							to design and build it and the result was a simple, robust
							application that simplified processes and freed up a significant
							amount of time for the business. We also baked in features that
							formerly required tech-intervention to free up our time too.
						</p>

						<h2>Hiring</h2>
						<p>
							I helped the CTO hire and onboard the rest of the development
							team. This included conducting interviews and tech tests as well
							as help onboard new hires and get them set up with the codebase.
						</p>

						<h2>VR</h2>
						<p>
							I was part of a small team who put together a 'proof of concept'
							for a VR meditation experience. This included putting together 2D
							and 3D VR meditation videos using Adobe Premiere Pro, and creating
							virtual environments using Unity.
						</p>

						<h2>Honorary Mentions</h2>
						<p>
							As well as these larger projects, I maintained the Wordpress site,
							put together a proof of concept for the business' adoption of
							Terraform, wrote several JS scripts that queried data from the
							database and output a user-friendly CSV file, set up an automated
							phone line with Twilio, responded to customer support queries that
							required technical assistance, and I re-wrote the mobile-app's
							styling so it didn't break when a device's accessibility features
							were enabled with larger text sizes. On top of writing
							documentation for everything I built, as well as for areas of the
							codebase that weren't covered, I wrote documentation for getting
							the entire codebase set up with Apple Silicon as I was an early
							adopter of the new M1 architecture.
						</p>
					</div>
				</div>
			</div>
		</div>
	),
};

export default DATA;
