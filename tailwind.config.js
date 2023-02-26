/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				primary: "#FBB725",
				"dark-primary": "#191820",
			},
		},
	},
	plugins: [],
};
