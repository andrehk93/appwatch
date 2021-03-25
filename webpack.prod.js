const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

common.reactConfig.plugins.push(
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'report.html',
        openAnalyzer: false,
        defaultSizes: 'gzip',
    })
);

module.exports = merge(common.reactConfig, {
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
    },
});
