/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		'col-span-12',
		"!justify-start",
		"text-[56px]",
		'mb-36',
		'mb-24',
		'mt-24',
		'!mb-11',
		'text-center',
		'col-span-1',
		'col-span-2',
		'col-span-3',
		'col-span-4',
		'col-span-5',
		'col-span-6',
		'col-span-7',
		'col-span-8',
		'col-span-9',
		'col-span-10',
		'mobile:col-span-12',
		'mobile:px-0',
		'font-light',
		'text-[1.5rem]',
		'mobile:mt-18',
		'mobile:!justify-start',
		'mobile:pb-6'
  ],
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
					'from': { 'background-position': '0%' },
					'to': { 'background-position': '-1700px' }
				},
				'highlight-small': {
					'from': { 'background-position': '0px' },
					'to': { 'background-position': '-680px' }
				}
			},
			animation: {
				'highlight-normal': 'highlight-normal .5s steps(17)',
				'highlight-small': 'highlight-small .5s steps(17)'
			}
		},
	},
	plugins: [],
}
