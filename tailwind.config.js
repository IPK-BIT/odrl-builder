/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					primary: '#273037',
					secondary: '#395770',
					accent: '#5785AB',
					neutral: '#F0F0F0',
					'base-100': '#FFFFFF',
					info: '#0080FF',
					success: '#40FF40',
					warning: '#FFFF40',
					error: '#FF4040'
				}
			},
			{
				dark: {
					primary: '#506371',
					secondary: '#8297a6',
					accent: '#a0b0bb',
					neutral: '#F0F0F0',
					'base-100': '#303030',
					'base-200': '#404040',
					'base-300': '#505050',
					info: '#0080FF',
					success: '#40FF40',
					warning: '#FFFF40',
					error: '#FF4040'
				}
			}
		]
	}
};
