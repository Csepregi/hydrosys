import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "history-pic": "url('/history.jpg')",
      },
      colors: {
        "history-bg": "hsla(0, 0%, 100%, 0.55)",
      },
    },
  },
  plugins: [],
} satisfies Config;
