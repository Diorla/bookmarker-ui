const images = require('rollup-plugin-image-files');

module.exports = {
  rollup(config, _options) {
    config.plugins = [
      images({ include: ['**/*.png', '**/*.jpg', '**/*.gif'] }),
      ...config.plugins,
    ];

    return config;
  },
};
