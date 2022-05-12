module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				main: {
					DEFAULT: '#ff7847',
					light: '#ff926b',
				},
				secondary: {
					DEFAULT: '#171c26',
				},
				highlight: {
					DEFAULT: '#6c7689',
				},
			},
		},
	},
	plugins: [],
};
