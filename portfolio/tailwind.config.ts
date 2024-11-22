import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center:true
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "yellow":"#FEA609",
        "slate":"#9B968B",
        "white":"#FFFFFF",
        "boxbg":"#39392D",
        "Inp":"#373733"
      },
    },
  },
  plugins: [],
} satisfies Config;
