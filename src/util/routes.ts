// PAGES
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Skills } from '../pages/Skills';
import { Articles } from '../pages/Articles';
import { ArticleDetail } from '../pages/ArticleDetail';
import { Contact } from '../pages/Contact';

// ROUTES DATA
export const ROUTES = [
	{ path: '/', Component: Home },
	{ path: '/about', Component: About },
	{ path: '/skills', Component: Skills },
	{ path: '/articles', Component: Articles },
	{ path: '/articles/:slug', Component: ArticleDetail },
	{ path: '/contact', Component: Contact },
];
