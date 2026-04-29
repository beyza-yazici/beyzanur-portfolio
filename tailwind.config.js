/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#00ff88',
          secondary: '#00cc66',
          muted: '#1a2e1a',
        },
        dark: {
          bg: '#0a0a0a',
          card: '#111111',
          border: '#1f1f1f',
        },
        light: {
          bg: '#f5f5f0',
          card: '#ffffff',
          border: '#e0e0e0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}