/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": "#001b5e",
				"theme-blue": "#14c5fd",
				"theme-red": "#f31313",
				"theme-green": "#28e98c",
				"theme-orange": "#fe6f1d",
				"theme-purple": "#C084FC",
				"theme-pink": "#ff99cc"
			},
		},
	},
	plugins: [],
}
