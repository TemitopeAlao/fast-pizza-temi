module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off', // disable PropTypes rule
    'no-unused-vars': 'warn',  // warn only, don’t break
    'react/react-in-jsx-scope': 'off', // modern React doesn’t need React import
    'react/no-unescaped-entities': 'off', // ✅ fixes your apostrophe error
  },
  settings: {
    react: {
      version: 'detect', // fixes "React version not specified" warning
    },
  },
};
