import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../util/articles';
import type { IGLOBALSTATE } from '../util/interfaces';

export const Articles: React.FC<IGLOBALSTATE> = ({ setShowNav }) => {
	useEffect(() => {
		setShowNav(true);
	}, [setShowNav]);

	return (
		<main className="content__main">
			<section className="wrap article-index">
				<h1 className="article-index__title">Articles</h1>
				<p className="article-index__lede copy">
					Notes on engineering leadership, architecture, and growing
					teams. Self-hosted — placeholder posts while I get the real
					ones written.
				</p>

				<ol className="article-list">
					{ARTICLES.map((article, i) => (
						<li
							className="article-list__item reveal"
							style={{ '--i': i } as React.CSSProperties}
							key={article.slug}
						>
							<Link
								className="article-list__link"
								to={`/articles/${article.slug}`}
							>
								<span className="mono-label article-list__date">
									{article.readableDate}
								</span>
								<h2 className="article-list__title">
									{article.title}
								</h2>
								<p className="article-list__excerpt">
									{article.excerpt}
								</p>
							</Link>
						</li>
					))}
				</ol>
			</section>
		</main>
	);
};
