import React from 'react';

import {
	NodeIcon,
	TypescriptIcon,
	PostgresIcon,
	DockerIcon,
	PrismaIcon,
} from '../icons';
import aiboImg from '../../images/dist/projects/aibo/aibo-terminal.png';
import type { IPROJECT } from '../interfaces';

const DATA: IPROJECT = {
	url: 'aibo',
	name: ['Aibo'],
	tagline: 'A forex & crypto trading bot',
	workShort: ['Back End'],
	workExpanded: ['Back End Development'],
	tech: ['Node.js', 'TypeScript', 'Postgres', 'Docker'],
	icons: [NodeIcon, TypescriptIcon, PrismaIcon, PostgresIcon, DockerIcon],
	subheading: "The world's least successful trading bot.",
	description:
		'A trading bot capable of analysing previous market data and past performance to execute trades in the forex and crypto markets',
	desktopImg: {
		src: aiboImg,
		alt: 'A screen shot of a terminal window running Aibo, the trading bot',
	},
	content: (
		<div className="project-body">
			<div className="narrow">
				<h2>The Project</h2>
				<p>
					I built a Forex and Crypto trading bot named 'Aibo' after Sony's AI
					robodogs from the 90s. The premise was simple: write a computer
					program over the Christmas break that would make me a millionaire by
					New Year's Day.
				</p>
				<p>
					The financial markets are something I've always been a bit intrigued
					by, so I thought I'd try my hand at writing a bot for a bit of fun
					using freely available APIs from brokers that would give me access to
					raw, realtime price data and the ability to execute positions.
				</p>
				<p>
					It started out as a simple TypeScript project just to prove that it
					was possible, and I determined position entry and exit criteria based
					on averages which I calculated in my app, but I soon realised that I
					wanted the project to spiral out of control. I introduced a verbose
					amount of logging to the terminal and also output those logs to files
					saved on a per-session basis using Winston. One sleepless night later,
					and I had introduced a Docker instance running a Postgres database so
					that I could run multiple and more complex strategies at once on the
					same underlying markets, whilst keeping track of which position
					belonged to each strategy. Of course, Aibo reported hourly and daily
					P/L statements. One small step further, and Aibo was determining which
					strategies were worth betting more or less money on, or ditching
					entirely. It had become sentient, and I liked it.
				</p>
				<p>
					Needless to say, I never gave it any real money to trade with. It
					never fully earned my trust and rightly so as it lost a lot more money
					than it made.
				</p>
				<p>Stupid robot.</p>
				<p>🤖</p>
			</div>
		</div>
	),
};

export default DATA;
