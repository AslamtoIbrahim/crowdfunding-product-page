import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "moderate-cyan": "hsl(176, 50%, 47%)",
        "dark-cyan": "hsl(176, 72%, 28%)",
        "dark-gray": "hsl(0, 0%, 48%)",
      },
      fontFamily: {
        commissioner: ['Commissioner', 'sans-serif'],
      },
      backgroundImage: {
        'hero-desktop' : "url('../../images/image-hero-desktop.jpg')",
        'hero-mobile' : "url('../../images/image-hero-mobile.jpg')",
      },
      
    },
  },
  plugins: [],
} satisfies Config;
