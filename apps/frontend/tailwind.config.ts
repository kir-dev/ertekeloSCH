import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          '50': '#eef2ff',
          '100': '#e0e8ff',
          '200': '#c8d3fd',
          '300': '#a6b7fb',
          '400': '#828ff7',
          DEFAULT: '#646af0',
          '600': '#4d47e4',
          '700': '#4139c9',
          '800': '#3a35af',
          '900': '#302f80',
          '950': '#1d1b4b',
        },
        secondary: {
          '50': '#f0f6fd',
          '100': '#e4effb',
          '200': '#cee0f7',
          '300': '#b0cbf1',
          DEFAULT: '#9cb7eb',
          '500': '#7592df',
          '600': '#5b72d0',
          '700': '#4b5eb7',
          '800': '#3f4f94',
          '900': '#394676',
          '950': '#212845',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
