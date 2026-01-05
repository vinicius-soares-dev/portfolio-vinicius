/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0E14",
        surface: "#121826",

        primary: "#2563EB",
        primaryHover: "#1D4ED8",

        textPrimary: "#E5E7EB",
        textSecondary: "#9CA3AF",

        border: "#1F2937",
      },
    },
  },
  plugins: [],
}
