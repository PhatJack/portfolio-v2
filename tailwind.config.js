/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": "var(--theme-primary)",
				"theme-blue": "var(--theme-blue)",
				"theme-red": "var(--theme-red)",
				"theme-green": "var(--theme-green)",
				"theme-orange": "var(--theme-orange)",
				"theme-purple": "var(--theme-purple)",
				"theme-pink": "var(--theme-pink)"
			},
		},
	},
	plugins: [],
}
