const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundColor: {
        default: '#fafafa',
        brandLightBlue: '#4bb0e7',
        brandDarkBlue: '#367bbd',
        lighterBlue: '#75C5F0',
        darkerBlue: '#1A66A6'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities, theme }) {
      const colors = theme('backgroundColor');
      const newUtilities = {
        '.gradient-text': {
          backgroundImage: `linear-gradient(to bottom right, ${colors['darkerBlue']} 0%, ${colors['brandDarkBlue']} 20%, ${colors['brandLightBlue']} 40%, ${colors['lighterBlue']} 50%, ${colors['brandLightBlue']} 60%, ${colors['brandDarkBlue']} 80%, ${colors['darkerBlue']} 100%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        },
        '.bg-gradient': {
          backgroundImage: `linear-gradient(to bottom right, ${colors['brandLightBlue']}, ${colors['brandDarkBlue']})`
        },
        '.bg-gradient-darker': {
          backgroundImage: `linear-gradient(to bottom right, ${colors['brandLightBlue']}, ${colors['darkerBlue']})`
        }
      };
      addUtilities(newUtilities, {
        variants: ['responsive']
      });
    })
  ]
};
