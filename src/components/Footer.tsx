import React from 'react';
import Social from './Social';

export const Footer: React.FC = () => {
	return (
		<footer className="site-footer">
			<hr className="site-footer__rule" aria-hidden="true" />
			<p className="site-footer__signoff">
				Yours,
				<br />
				— Maximilian
			</p>
			<p className="site-footer__postscript">
				P.S. — reach me fastest via{' '}
				<a
					className="text-link"
					href="https://www.linkedin.com/in/maxcoghlan/"
					target="_blank"
					rel="noreferrer"
				>
					LinkedIn
				</a>
			</p>
			<div className="site-footer__social">
				<Social />
			</div>
			<p className="site-footer__legal">
				© {new Date().getFullYear()} Maximilian Coghlan
			</p>
		</footer>
	);
};
