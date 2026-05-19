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
        'dark-primary': '#0f0a15',
        'dark-secondary': '#1a1226',
        'dark-tertiary': '#2d2440',
        'accent-teal': '#00d9ff',
        'accent-purple': '#b366ff',
        'accent-deep': '#7b2cbf',
        'text-primary': '#f5f5f7',
        'text-secondary': '#d0d0d0',
        'text-accent': '#00d9ff',
        'text-warm': '#ffd700',
      },
      backgroundImage: {
        'gradient-hope': 'linear-gradient(135deg, #00d9ff 0%, #b366ff 100%)',
        'gradient-calm': 'linear-gradient(135deg, #2d2440 0%, #1a1226 100%)',
        'gradient-strength': 'linear-gradient(135deg, #7b2cbf 0%, #00d9ff 100%)',
        'gradient-glow': 'radial-gradient(circle at 30% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
        'accent': ['Playfair Display', 'serif'],
      },
      animation: {
        'soft-fade-in': 'softFadeIn 0.8s ease-out',
        'gentle-glow': 'gentleGlow 3s ease-in-out infinite',
        'dna-spiral': 'dnaSpiral 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        softFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleGlow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(0, 217, 255, 0.3)' },
          '50%': { textShadow: '0 0 40px rgba(0, 217, 255, 0.6)' },
        },
        dnaSpiral: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
