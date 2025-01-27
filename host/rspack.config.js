const { withBaseRspack } = require("@dream.mf/bundlers");
const { join } = require('node:path');

const config = withBaseRspack({
	devServer: { port: 3001 },
	federationConfig: { name: "container" }
}, true);

config.module.rules.push({
  test: /\.postcss$/,
  type: 'postcss',
  exclude: /node_modules\/|packages\/components/,
  use: [
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: {
            tailwindcss: {
              config: join(
                //context.context.root,
                './tailwind.config.js'
              ),
            },
            autoprefixer: {},
          },
        },
      },
    },
  ],
});

module.exports = config;