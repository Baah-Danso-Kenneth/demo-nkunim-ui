import fluid, { extract, fontSize, screens, FluidThemeConfig } from "fluid-tailwind";
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  } ,
  theme: {
  	extend: {
  		fontFamily: {
  			bowlby: 'var(--font-bowlby)',
  			dmMono: 'var(--font-dmMono)',
  			playWright: 'var(--font-playWright)'
  		},
  		colors: {
  			'brand-light': '#E4E1DC',
  			'brand-beige': '#BBAA89',
  			'brand-beige-hot': '#B29B7E',
  			'brand-hot-red': '#FE191F',
  			'brand-base-color': '#cbc8b8',
  			'brand-gray': '#fffdf9',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
	screens,
	fontSize,
	  fluid: ({ theme }) => ({
		defaultScreens: ['20rem', theme('screens.lg')]
	}) satisfies FluidThemeConfig,
  },
  plugins: [fluid, require("tailwindcss-animate")],
} satisfies Config;
