module.exports = {
  mode: 'jit',
  content: ['./src/{pages,components}/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          'Arial',
          '"游ゴシック"',
          'YuGothic',
          '"ヒラギノ角ゴ ProN W3"',
          '"Hiragino Kaku Gothic ProN"',
          '"メイリオ"',
          'Meiryo',
          'sans-serif',
        ],
      },
      textColor: {
        default: 'var(--text-default)',
        secondary: 'var(--text-secondary)',
      },
      backgroundColor: {
        default: 'var(--bg-default)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
