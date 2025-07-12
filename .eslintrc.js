// .eslintrc.js
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn', // ⚠ just warn
    '@next/next/no-img-element': 'off', // optional
    'react/no-unescaped-entities': 'warn', // optional
  },
};
