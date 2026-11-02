import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-darker": "var(--color-primary-darker)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-active": "var(--color-primary-active)",
        "primary-alt": "var(--color-primary-alt)",
        "primary-accent": "var(--color-primary-accent)",
        "primary-bright": "var(--color-primary-bright)",
        "primary-light": "var(--color-primary-light)",
        accent: "var(--color-accent)",
        "accent-light": "var(--color-accent-light)",
        "accent-lighter": "var(--color-accent-lighter)",
        "accent-sky": "var(--color-accent-sky)",
        "accent-soft": "var(--color-accent-soft)",
        "accent-cyan": "var(--color-accent-cyan)",
        "accent-glow": "var(--color-accent-glow)",
        "accent-pastel": "var(--color-accent-pastel)",
        heading: "var(--color-heading)",
        text: "var(--color-text)",
        "text-light": "var(--color-text-light)",
        "text-muted": "var(--color-text-muted)",
        "bg-main": "var(--color-bg-main)",
        "bg-card": "var(--color-bg-card)",
        "bg-light": "var(--color-bg-light)",
        "bg-alt": "var(--color-bg-alt)",
        border: "var(--color-border)",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'dash-anim': 'dash 20s linear infinite',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
export default config;
