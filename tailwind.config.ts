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
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
