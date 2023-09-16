// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
const autoprefixer = require('autoprefixer');
const postcss = require('rollup-plugin-postcss');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config) {
    config.plugins.push(
      postcss({
        plugins: [autoprefixer()],
        sourceMap: true,
        extract: true,
        minimize: true,
      })
    );
    return config; // always return a config.
  },
};
