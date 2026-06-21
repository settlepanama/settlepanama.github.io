/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Segoe UI'],
        serif: ['Segoe UI'],
        mono: ['Segoe UI']
      },
      colors: {
        navy: 'rgb(13,31,45)',
        sage: 'rgb(122,145,129)',
        taupe: 'rgb(174,160,140)',
        warm: 'rgb(247,245,241)',
        sand: 'rgb(239,233,224)',
        sandDeep: 'rgb(222,211,195)',
        gold: 'rgb(190,154,94)',
        ink: 'rgb(18,18,18)'
      },
      maxWidth: {
        site: '1180px'
      },
      boxShadow: {
        soft: '0 18px 50px rgba(13,31,45,.08)',
        lift: '0 24px 70px rgba(13,31,45,.12)'
      },
      letterSpacing: {
        tightest2: '-.07em'
      }
    }
  },
  plugins: []
};
