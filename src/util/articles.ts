export interface IARTICLE {
	slug: string;
	title: string;
	date: string;
	readableDate: string;
	excerpt: string;
	body: string[];
}

// Placeholder content — Max plans to self-host real writing here. Kept
// deliberately generic (no invented stats, no claimed outcomes) until
// that happens.
export const ARTICLES: Array<IARTICLE> = [
	{
		slug: 'architecture-reviews-shared-vocabulary',
		title: 'Why architecture reviews fail without a shared vocabulary',
		date: '2026-07-28',
		readableDate: '28 July 2026',
		excerpt:
			'Most review disagreements aren’t really about the diagram — they’re about two people using the same word to mean different things.',
		body: [
			'Most architecture review disagreements aren’t really about the diagram in front of the room — they’re about two people using the same word to mean different things. "Service" means one thing to someone who’s spent three years in a monolith and another thing entirely to someone who joined from a shop that had already gone all-in on microservices.',
			'The fix isn’t a stricter template. It’s spending the first ten minutes of any review agreeing on definitions before anyone defends a decision — what counts as a boundary, what "owns" a piece of data actually means here, what level of coupling the team is willing to accept for the sake of shipping faster.',
			'That sounds like overhead. In practice it’s the difference between a review that changes the design and one that just restates two people’s existing positions at each other.',
		],
	},
	{
		slug: 'first-90-days-leading-your-old-team',
		title: 'The first 90 days of leading a team you used to be on',
		date: '2026-06-12',
		readableDate: '12 June 2026',
		excerpt:
			'The hardest part isn’t the authority — it’s that everyone, including you, still expects you to answer like a peer.',
		body: [
			'Moving into a lead role on the team you were already a part of is a different problem to joining as a lead from outside. The hardest part isn’t the new authority — it’s that everyone, including you, still expects you to answer like a peer, in the same channels, at the same speed, on every thread.',
			'What actually changes is what you’re responsible for noticing. Not "is this ticket done" but "does the team have a shared understanding of why we’re doing it this way." That’s a slower kind of attention, and it took me longer than I’d like to admit to stop measuring my day by how much code I’d shipped.',
			'The useful signal, in hindsight: the weeks that felt least productive by my old metric were often the ones where the team made the most progress.',
		],
	},
	{
		slug: 'code-review-as-teaching-not-gate',
		title: 'Code review as a teaching tool, not a gate',
		date: '2026-04-30',
		readableDate: '30 April 2026',
		excerpt:
			'A review that only says "no" trains people to ask less. A review that explains the "why" trains people to need you less.',
		body: [
			'A review that only says "no, change this" trains people to submit smaller, safer, less ambitious diffs — and to ask you before they try anything unfamiliar. A review that explains the "why" behind a comment trains people to make the same call themselves next time, which is the actual goal.',
			'In practice that means slower reviews. It means leaving a comment on a pattern that’s technically fine but that I’d push back on for a maintainability reason, and explaining the reason instead of just requesting the change.',
			'The payoff shows up later, not in the PR you’re reviewing right now — in the one three months from now that already looks the way you’d have written it.',
		],
	},
	{
		slug: 'when-a-lead-should-write-the-code',
		title: 'When to write the code yourself as a lead',
		date: '2026-03-02',
		readableDate: '2 March 2026',
		excerpt:
			'Staying hands-on is easy to justify and easy to overdo. A rough rule of thumb for when it’s actually the right call.',
		body: [
			'Staying hands-on is easy to justify — "I need to keep my skills sharp," "I want to understand the codebase" — and just as easy to overdo, to the point where you’re the bottleneck on the thing you were supposed to be unblocking.',
			'The rule I’ve settled on: write the code yourself when the risk of getting it wrong is high and the cost of explaining it is higher than doing it, or when the task is small enough that delegating it would just be moving the work, not sharing it. Everything else goes to the team, even when it would be faster for me to just do it.',
			'"Faster right now" and "faster in three months" are almost never the same answer, and the lead’s job is mostly to optimise for the second one.',
		],
	},
];

export const getArticleBySlug = (slug: string): IARTICLE | undefined =>
	ARTICLES.find((article) => article.slug === slug);
