import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-color-light': '#D4EDEE',
      'primary-color': '#32C0C6',
      'primary-color-dark': '#329599',
      'gray-neutral': '#616161',
      'gray-dark': '#4E4E4E',
      'white-background': '#FFFFFF',
      'white-text': '#FFFFFF',
      'white-background-matte': '#F3F3F5',
      'border-and-line': '#E3E6E9',
      placeholder: '#8C8C8C',
      success: '#5CB85C',
      warning: '#FFB22B',
      danger: '#FC4B6C',
    },
    fontSize: {
      base: '1rem',
      xs: '0.75rem',
      sm: '0.875rem',
      xl: '1.313rem',
      lg: '1.125rem',
    },
  },
  plugins: [],
}
export default config
