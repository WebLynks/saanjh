/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Verdana"', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				iris: '#CB89DB',
				sunset: '#FF955E',
				sapphire: '#1974F9',
				mango: '#FEB715',
			},
		},
	},
	plugins: [],
};

