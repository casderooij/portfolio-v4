/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {
				'mono-mobile': ['12px', '16px']
			}
		}
	},

	plugins: []
};

module.exports = config;
