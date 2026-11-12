/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#111215',
        surface: '#17191e',
        'surface-elevated': '#1d1f26',
        border: '#272930',
        lime: {
          accent: '#a3e635', // 밝은 연두색 하나만 강조색으로 사용
          hover: '#bef264',
          subtle: 'rgba(163, 230, 53, 0.1)',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
}
