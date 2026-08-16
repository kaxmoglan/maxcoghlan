import React from 'react';
import { Link } from 'react-router-dom';
import Social from './Social';

export const Footer: React.FC = () => {
	return (
		<footer className="site-footer">
			<div className="site-footer__band">
				<h2 className="site-footer__statement">
					Need a technical leader in the room?
				</h2>
				<p>
					I can take on the architecture calls, run the roadmap
					conversation, or grow the team that has to live with both.
				</p>
				<Link className="btn btn--outline-on-band" to="/contact">
					Get in touch
				</Link>
			</div>

			<div className="site-footer__index">
				<div className="site-footer__col">
					<p className="eyebrow">Site</p>
					<ul>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/skills">Skills</Link>
						</li>
						<li>
							<Link to="/articles">Articles</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="site-footer__col">
					<p className="eyebrow">Contact</p>
					<ul>
						<li>
							<a
								href="https://www.linkedin.com/in/maxcoghlan/"
								target="_blank"
								rel="noreferrer"
							>
								linkedin.com/in/maxcoghlan
							</a>
						</li>
					</ul>
				</div>

				<div className="site-footer__social">
					<Social />
				</div>
			</div>

			<div className="site-footer__legal">
				<p className="wordmark">
					<span className="million">M</span>C
				</p>
				<p>
					© {new Date().getFullYear()} Maximilian Coghlan. Redesigned
					every so often.
				</p>
			</div>
		</footer>
	);
};
