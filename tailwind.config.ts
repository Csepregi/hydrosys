import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "history-pic": "url('/history.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
