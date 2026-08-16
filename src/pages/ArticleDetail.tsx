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
			<section className="page-hero page-hero--article">
				<div className="wrap">
					<Link className="article-detail__back" to="/articles">
						← All articles
					</Link>
					<span className="eyebrow">{article.readableDate}</span>
					<h1 className="page-hero__title">{article.title}</h1>
				</div>
			</section>

			<article className="article-detail">
				<div className="wrap article-detail__body">
					<div className="copy">
						{article.body.map((paragraph, i) => (
							<p key={i}>{paragraph}</p>
						))}
					</div>
					<Link className="btn btn--outline" to="/articles">
						← All articles
					</Link>
				</div>
			</article>
		</main>
	);
};
