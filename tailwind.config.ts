import fluid, { extract, fontSize, screens, FluidThemeConfig } from "fluid-tailwind";
import type { Config } from "tailwindcss";

export default {
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
        bowlby: "var(--font-bowlby)",
        dmMono: "var(--font-dmMono)",
        playWright: "var(--font-playWright)",
      },
      colors: {
        "brand-light": "#E4E1DC",
        "brand-beige": "#BBAA89",
        "brand-beige-hot": "#B29B7E",
        "brand-hot-red": "#FE191F",
        "brand-base-color": "#cbc8b8"
      },
    },
    screens,
    fontSize,
    fluid: (({theme})=>({
      defaultScreens: ['20rem', theme('screens.lg')]
    })) satisfies FluidThemeConfig,
  },
  plugins: [fluid],
} satisfies Config;
