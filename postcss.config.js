module.exports = {
  plugins: {
    'postcss-import': {
      plugins: [
        'stylelint',
      ],
    },
    'postcss-preset-env': {},
    'cssnano': {},
    'autoprefixer': {},
  },
};
