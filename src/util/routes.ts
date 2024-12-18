// PAGES
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Skills } from '../pages/Skills';
import { Projects } from '../pages/Projects';
import { ProjectDetail } from '../pages/ProjectDetail';
import { Contact } from '../pages/Contact';
import { Blog } from '../pages/Blog';

// ROUTES DATA
export const ROUTES = [
	{ path: '/', Component: Home },
	{ path: '/about', Component: About },
	{ path: '/skills', Component: Skills },
	{ path: '/projects', Component: Projects },
	{ path: '/projects/:id', Component: ProjectDetail },
	{ path: '/contact', Component: Contact },
	{ path: '/blog/:id', Component: Blog },
];
