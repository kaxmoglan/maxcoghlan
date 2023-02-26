import React from 'react';
import { Link } from 'react-router-dom';

import Social from '../Social';
import { ArrowLeftIcon } from '../../util/icons';

export const BlogHeader: React.FC = () => {
	return (
		<div className="blog-header panel">
			<Link to="/blog/home" className="blog-header__header">
				<p className="logo archivo">
					<span className="million">M</span>aximilian.
				</p>
				<p className="the-blog">The blog</p>
			</Link>

			<Social />

			<Link to="/" className="blog-header__back-to-site">
				{ArrowLeftIcon}
				<p>Back to main site</p>
			</Link>
		</div>
	);
};
