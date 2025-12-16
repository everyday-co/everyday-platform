import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // Placeholder token set (replace with exact Everyday palette later)
        brand: {
          navy: "#1E2A44",
          green: "#2F7D3B",
          khaki: "#C8B38B"
        }
      }
    },
  },
  plugins: [],
} satisfies Config;


