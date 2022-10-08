const images = require('rollup-plugin-image-files');

module.exports = {
  rollup(config, _options) {
    config.plugins = [
      images({ incude: ['**/*.png', '**/*.jpg', '**/*.gif'] }),
      ...config.plugins,
    ];

    return config;
  },
};
