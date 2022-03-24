/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = function () {
  return {
    webpack: {
      entry: './index.web.js',
      alias: {
        'react-native': 'react-native-web',
      },
      configure: config => {
        config.module.rules.push({
          test: /(@?react-(navigation|native)).*\.(ts|js)x?$/,
          exclude: [/react-native-web/, /\.(native|ios|android)\.(ts|js)x?$/],
          loader: 'babel-loader',
          options: {
            presets: [
              [
                require.resolve('babel-preset-react-app/dependencies'),
                {helpers: true},
              ],
              ['babel-preset-react-app'],
            ],
          },
        });
        config.module.rules.push({
          test: /\.ttf$/,
          loader: 'url-loader', // or directly file-loader
          include: path.resolve(
            __dirname,
            '../',
            'node_modules/react-native-vector-icons',
          ),
        });
        return config;
      },
    },
    babel: {
      presets: ['@babel/preset-react'],
    },
  };
};
