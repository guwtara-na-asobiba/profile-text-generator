module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 2,
      browsers: [
        '> .5% in JP or last 2 versions',
      ],
    },
    'cssnano': {},
  },
};
