import React, { useEffect } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { getArticleBySlug } from '../util/articles';
import type { IGLOBALSTATE } from '../util/interfaces';

export const ArticleDetail: React.FC<IGLOBALSTATE> = ({ setShowNav }) => {
	const { slug } = useParams<{ slug: string }>();
	const article = getArticleBySlug(slug);

	useEffect(() => {
		setShowNav(true);
	}, [setShowNav]);

	if (!article) {
		return <Redirect to="/articles" />;
	}

	return (
		<main className="content__main">
			<article className="wrap article-detail">
				<Link className="text-link article-detail__back" to="/articles">
					← All articles
				</Link>
				<span className="mono-label">{article.readableDate}</span>
				<h1 className="article-detail__title">{article.title}</h1>

				<div className="article-detail__body copy">
					{article.body.map((paragraph, i) => (
						<p key={i}>{paragraph}</p>
					))}
				</div>

				<Link className="text-link" to="/articles">
					← All articles
				</Link>
			</article>
		</main>
	);
};
