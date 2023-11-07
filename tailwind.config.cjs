/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'laptop': { max: '1316px' },
			'mobile': { max: '600px' },
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				'highlight-normal': {
					'from': { 'background-position': '0px' },
					'to': { 'background-position': '-3400px' }
				},
				'highlight-small': {
					'from': { 'background-position': '0px' },
					'to': { 'background-position': '-1360px' }
				}
			},
			animation: {
				'highlight-normal': 'highlight-normal .5s steps(18)',
				'highlight-small': 'highlight-small .5s steps(18)'
			}
		},
	},
	plugins: [],
}
