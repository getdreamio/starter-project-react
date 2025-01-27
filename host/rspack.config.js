const { withBaseRspack } = require("@dream.mf/bundlers");

const config = withBaseRspack({
	devServer: { port: 3001 },
	federationConfig: { name: "container" },
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader', // Injects CSS into the DOM
					'css-loader', // Resolves CSS imports
					{
						loader: 'postcss-loader', // Processes Tailwind CSS
						options: {
							postcssOptions: {
								plugins: [
									require('tailwindcss'),
									require('autoprefixer'),
								],
							},
						},
					},
				],
			},
		]
	}
}, true);

module.exports = config;