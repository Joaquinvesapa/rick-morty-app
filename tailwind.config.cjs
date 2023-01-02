/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dk-violet': '#262175',
				'pink': '#ED63F2',
				'lt-green': '#6DD68B',
				'dk-grey': '#212121',
				'lt-white': '#E1E5CE'
			  },
			  width: {
				'84': '350px',
			  },
			  height:{
				'100': '100vh'
			  },
			  dropShadow:{
				'df': '5px 10px 5px rgba(0,0,0,0.8)'
			  }
		},
	},
	plugins: [],
}
