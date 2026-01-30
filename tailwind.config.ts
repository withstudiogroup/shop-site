import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d1d1f',
        secondary: '#f5f5f7',
        background: '#ffffff',
        accent: '#0071e3',
        'accent-hover': '#0077ed',
        muted: '#86868b',
        'muted-light': '#6e6e73',
        surface: {
          DEFAULT: '#f5f5f7',
          light: '#fbfbfd',
          dark: '#e8e8ed',
        },
        border: '#d2d2d7',
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'SF Pro Display', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'var(--font-pretendard)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-sm': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
