/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors } = require('tailwindcss/defaultTheme')
const primaryColor = 'purple'
const accentColor = 'yellow'

module.exports = {
  theme: {
    colors: {
      primary: {
        ...colors[primaryColor],
      },
      accent: {
        ...colors[accentColor],
      },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
  },
  variants: {},
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.ts',
      'nuxt.config.js',
    ],
  },
}
