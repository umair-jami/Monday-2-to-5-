import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem', // Optional padding
      screens: {
        sm: '100%',
        md: '640px',
        lg: '768px',
        xl: '1024px',
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "yellow":"#E6C744",
        "white":"#FFFFFF",
        "black":"#000000",
        "slate":"#C2C8DA",
        "offWhite":'#F4F6F5',
        "dark":'#242323'
      },
    },
  },
  plugins: [],
} satisfies Config;
