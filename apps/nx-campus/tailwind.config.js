const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, '../../libs/ui-lib/src/**/*.{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        google: {
          'text-gray': '#3c4043',
          'button-blue': '#1a73e8',
          'button-blue-hover': '#5195ee',
          'button-dark': '#202124',
          'button-dark-hover': '#555658',
          'button-border-light': '#dadce0',
          'logo-blue': '#4285f4',
          'logo-green': '#34a853',
          'logo-yellow': '#fbbc05',
          'logo-red': '#ea4335',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
