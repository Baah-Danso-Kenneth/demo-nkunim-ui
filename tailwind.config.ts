import type { Config } from "tailwindcss";
import fluid, {
	extract,
	screens,
	fontSize,
	FluidThemeConfig,
  } from "fluid-tailwind";

export default {
  darkMode: ["class"],
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    fluid: (({ theme }) => ({
		defaultScreens: ["20rem", theme("screens.lg")],
	  })) satisfies FluidThemeConfig,
	  screens,
	  fontSize,
    extend: {
      fontFamily: {
        bowlby: 'var(--font-bowlby)',
        dmMono: 'var(--font-dmMono)',
        playWright: 'var(--font-playWright)',
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
        flash: 'flash 2.5s infinite',
        'loop-scroll': 'loop-scroll 80s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
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
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },

  },
  plugins: [fluid, require("tailwindcss-animate")],
} satisfies Config;
