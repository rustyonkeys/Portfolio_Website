// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jaro: ["Jaro", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        bebas: ["BebasNeue", "sans-serif"],
        istokweb: ["Istok Web", "sans-serif"],
      },
      keyframes: {
        switchOn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '50%': { opacity: '0.5', transform: 'scale(1.02)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowExpand: {
          '0%': { opacity: '0', transform: 'scaleY(0)' },
          '100%': { opacity: '1', transform: 'scaleY(1)' },
        },
        ambientFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        switchOn: 'switchOn 1s ease-out forwards',
        glowExpand: 'glowExpand 1.5s ease-out forwards',
        ambientFade: 'ambientFade 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
