/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {
				'mono-mobile': ['12px', '16px']
			},
			boxShadow: {
				block: '0px 4px 14px 0px rgba(0, 0, 0, 0.25)'
			}
		}
	},

	plugins: []
};

module.exports = config;
