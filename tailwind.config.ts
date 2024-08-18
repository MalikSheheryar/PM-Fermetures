import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        color1: '#002395',
        color2: '#0d96b5',
        color3: '#f78e05',
        red: '#ED2939',
      },
      boxShadow: {
        'glow-effect': '0 0 10px 2px rgba(102, 152, 255, 0.75)',
      },
    },
  },
  plugins: [],
}

export default config
