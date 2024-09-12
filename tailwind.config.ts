import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ["Montserrat", "sans-serif"],
        'noto-sans': ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
