SystemJS.config({
  baseURL: 'https://unpkg.com/',
    defaultExtension: 'true',
    meta: {
      '*.jsx': {
        'babelOptions': {
          react: true
        }
      }
    },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@18/umd/react.development.js',
    'react-dom': 'react-dom@18/umd/react-dom.development.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./src/Main.jsx')
  .catch(console.error.bind(console));
