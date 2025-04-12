/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        primary: {
          950: '#0a0000',
          900: '#1a0505',
          800: '#2d0a0a',
          700: '#410f0f',
          600: '#541414',
          500: '#E63946',
          400: '#ff4d4d',
          300: '#ff6666',
          200: '#ff8080',
          100: '#ff9999',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink .75s step-end infinite',
        'card-hover': 'cardHover 0.3s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': {
            'box-shadow': '0 0 5px #E63946, 0 0 25px #E63946, 0 0 50px #E63946',
            'text-shadow': '0 0 5px #E63946, 0 0 25px #E63946, 0 0 50px #E63946',
          },
          '50%': {
            'box-shadow': '0 0 10px #E63946, 0 0 50px #E63946, 0 0 100px #E63946',
            'text-shadow': '0 0 10px #E63946, 0 0 50px #E63946, 0 0 100px #E63946',
          },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#E63946' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
