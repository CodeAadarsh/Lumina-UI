/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme variables
        background: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)',
          tertiary: 'var(--background-tertiary)',
          overlay: 'var(--background-overlay, rgba(0, 0, 0, 0.5))',
        },
        foreground: {
          primary: 'var(--foreground-primary)',
          secondary: 'var(--foreground-secondary)',
          tertiary: 'var(--foreground-tertiary)',
          quaternary: 'var(--foreground-quaternary)',
        },
        border: {
          DEFAULT: 'var(--border-default)',
          strong: 'var(--border-strong)',
          focus: 'var(--border-focus)',
        },
        primary: {
          lighter: 'var(--primary-lighter)',
          light: 'var(--primary-light)',
          DEFAULT: 'var(--primary-base)',
          dark: 'var(--primary-dark)',
          darker: 'var(--primary-darker)',
          foreground: 'var(--primary-foreground)',
        },
        accent: {
          purple: 'var(--accent-purple, #8b5cf6)',
          blue: 'var(--accent-blue, #3b82f6)',
          cyan: 'var(--accent-cyan, #06b6d4)',
          pink: 'var(--accent-pink, #ec4899)',
        },
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'blue-glow': 'var(--shadow-blue-glow)',
        'purple-glow': 'var(--shadow-purple-glow)',
        'white-glow': 'var(--shadow-white-glow)',
        'multi-glow': 'var(--shadow-multi-glow)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      backdropBlur: {
        xs: '2px',
        sm: 'var(--backdrop-blur-sm, 8px)',
        md: 'var(--backdrop-blur-md, 12px)',
        lg: 'var(--backdrop-blur-lg, 16px)',
        xl: 'var(--backdrop-blur-xl, 24px)',
      },
      transitionDuration: {
        DEFAULT: 'var(--duration-normal, 200ms)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1))',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: 'var(--shadow-blue-glow, 0 0 15px 2px rgba(59, 130, 246, 0.3))' },
          '50%': { boxShadow: 'var(--shadow-purple-glow, 0 0 15px 2px rgba(139, 92, 246, 0.3))' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        float: 'float 3s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 1s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-border': 'var(--border-gradient-primary, linear-gradient(145deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.3)))',
        'gradient-rainbow': 'var(--border-gradient-rainbow, linear-gradient(145deg, rgba(236, 72, 153, 0.5), rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.5)))',
      },
    },
  },
  plugins: [
    // Custom gradient border plugin (optional)
    function({ addUtilities }) {
      const gradientBorders = {
        '.gradient-border-1': {
          border: 'double 1px transparent',
          backgroundImage: 'linear-gradient(var(--background-primary), var(--background-primary)), var(--border-gradient-primary)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
        '.gradient-border-2': {
          border: 'double 2px transparent',
          backgroundImage: 'linear-gradient(var(--background-primary), var(--background-primary)), var(--border-gradient-primary)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
        '.rainbow-border-1': {
          border: 'double 1px transparent',
          backgroundImage: 'linear-gradient(var(--background-primary), var(--background-primary)), var(--border-gradient-rainbow)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
        '.rainbow-border-2': {
          border: 'double 2px transparent',
          backgroundImage: 'linear-gradient(var(--background-primary), var(--background-primary)), var(--border-gradient-rainbow)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        },
      };
      
      addUtilities(gradientBorders);
    },
    // Glass effect plugin (optional)
    function({ addUtilities, theme }) {
      const glassUtilities = {
        '.glass-effect': {
          backgroundColor: 'rgba(var(--background-secondary), 0.1)',
          backdropFilter: `blur(${theme('backdropBlur.md')})`,
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-effect-strong': {
          backgroundColor: 'rgba(var(--background-secondary), 0.15)',
          backdropFilter: `blur(${theme('backdropBlur.lg')})`,
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
      };
      
      addUtilities(glassUtilities);
    },
  ],
}