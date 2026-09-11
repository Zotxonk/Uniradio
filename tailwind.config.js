module.exports = {
 content: ["./**/*.html"],
  theme: {
      extend: {
          fontFamily: {
              sans: ['DM Sans', 'sans-serif'], 
          },
          colors: {
              'radio-dark': '#0f172a',
              'radio-accent': '#8b5cf6', 
              'radio-neon': '#38bdf8',   
              'radio-pink': '#f472b6',
          },
          animation: {
              'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              'equalizer': 'equalizer 1s infinite',
          },
          keyframes: {
              equalizer: {
                  '0%, 100%': { height: '20%' },
                  '50%': { height: '100%' },
              }
          }
      }
  },
  plugins: [],
}