const { merge } = require('webpack-merge');
const ModuleFederationPugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/container/latest/'
	},
	plugins: [
		new ModuleFederationPugin({
			name: 'container',
			remotes: {
				marketing: `marketing@${domain}/marketing/remoteEntry.js`
			},
			shared: packageJson.dependencies
		})
	]
};

module.exports = merge(commonConfig, prodConfig);
