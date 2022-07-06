import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import mdsvexLinkWeekToProject from './mdsvexplugins/mdsvex-link-week-to-project.js';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [mdsvexLinkWeekToProject],
	rehypePlugins: []
});

export default config;
