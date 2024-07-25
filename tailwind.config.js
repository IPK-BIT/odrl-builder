/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
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
			}
		]
	}
};
