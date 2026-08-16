import React from 'react';

// ICONS
import {
	TwitterIcon,
	DevIcon,
	GithubIcon,
	LinkedInIcon,
	GitlabIcon,
} from '../util/icons';

const DATA = [
	{ href: 'https://www.linkedin.com/in/maxcoghlan/', icon: LinkedInIcon },
	{ href: 'https://github.com/kaxmoglan', icon: GithubIcon },
	{ href: 'https://gitlab.com/kaxmoglan', icon: GitlabIcon },
	{ href: 'https://dev.to/kaxmoglan', icon: DevIcon },
	{ href: 'https://twitter.com/kaxMoglan', icon: TwitterIcon },
];

const Social: React.FC = () => {
	return (
		<div className="social">
			{DATA.map((link) => (
				<a
					key={link.href}
					href={link.href}
					target="_blank"
					rel="noreferrer"
					className="link"
				>
					{link.icon}
				</a>
			))}
		</div>
	);
};

export default Social;
