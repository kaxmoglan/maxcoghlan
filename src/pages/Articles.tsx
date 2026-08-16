import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../util/articles';
import { CONTACT_PAGE_ANIMATION_FRAMES } from '../util/animations/animations';
import type { IGLOBALSTATE } from '../util/interfaces';

const TAG_VARIANTS = ['tag-a', 'tag-b', 'tag-c'];

export const Articles: React.FC<IGLOBALSTATE> = ({ setShowNav }) => {
	useEffect(() => {
		setShowNav(true);
	}, [setShowNav]);

	const [featured, ...rest] = ARTICLES;

	return (
		<main className="content__main">
			<section className="page-hero">
				<div className="wrap">
					<h1 className="page-hero__title">Articles</h1>
					<p className="page-hero__lede">
						Notes on engineering leadership, architecture, and growing
						teams. Self-hosted — placeholder posts while I get the real
						ones written.
					</p>
				</div>
			</section>

			<section className="article-index">
				<div className="wrap">
					<Link
						className="article-feature"
						to={`/articles/${featured.slug}`}
					>
						<div className="article-feature__text">
							<span className="eyebrow">{featured.readableDate}</span>
							<h2>{featured.title}</h2>
							<p>{featured.excerpt}</p>
						</div>
						<div className="article-feature__visual tag-a">
							<div className="animation-frame__container" aria-hidden="true">
								{CONTACT_PAGE_ANIMATION_FRAMES.map((frame, i) => (
									<div className="animation-frame" key={i}>
										{frame}
									</div>
								))}
							</div>
							<span className="article-feature__go" aria-hidden="true">
								→
							</span>
						</div>
					</Link>

					<div className="article-grid">
						{rest.map((article, i) => (
							<Link
								className="article-card reveal"
								style={{ '--i': i } as React.CSSProperties}
								to={`/articles/${article.slug}`}
								key={article.slug}
							>
								<div
									className={`article-card__visual ${
										TAG_VARIANTS[i % TAG_VARIANTS.length]
									}`}
								>
									<span className="article-card__go" aria-hidden="true">
										→
									</span>
								</div>
								<span className="eyebrow">{article.readableDate}</span>
								<h3>{article.title}</h3>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};
