'use strict';
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Extract CSS from bundle
const WebpackBarPlugin = require('webpackbar');

const ASSET_PATH = './src/main/resources/assets';

// Add custom babel loader with polyfills
const babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: 'last 2 versions',
                    },
                    useBuiltIns: 'usage',
                    corejs: 3,
                },
            ],
            '@babel/preset-react',
        ],
        plugins: [
            '@babel/plugin-transform-arrow-functions',
            '@babel/plugin-transform-spread',
            [
                '@babel/plugin-proposal-object-rest-spread', // Turns {...x} into Object.assign({}, x)
                {
                    useBuiltIns: true, // Use Object.assign
                },
            ], // Microsoft Edge compliant
            'transform-es2015-template-literals',
        ],
        comments: false,
    },
};

exports.reactConfig = {
    entry: {
        'appwatch': ASSET_PATH + '/react/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                sideEffects: false,
                exclude: [
                    /\.test\.(js|ts|tsx)/,
                    /[\\/]node_modules[\\/](?!(react-text-mask-hoc|dom7)[\\/])/, // We don't want to transpile node_modules, except those that are not ES5
                ],
                use: [
                    'cache-loader',
                    babelLoader,
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.client.json',
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                sideEffects: false,
                exclude: [
                    /\.test\.(js|ts|tsx)/,
                    /[\\/]node_modules[\\/](?!(react-text-mask-hoc|dom7)[\\/])/, // We don't want to transpile node_modules, except those that are not ES5
                ],
                use: [babelLoader],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                sideEffects: true,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: 'file-loader?name=assets/fonts/[name].[hash].[ext]',
            },
            {
                test: /\.(svg|jpg|png)$/,
                use: 'url-loader?name=assets/img/[name].[ext]&limit=10000',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'appwatch.css',
        }),
        new WebpackBarPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'async',
        },
        usedExports: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            react: resolve('node_modules/react'),
            'react-dom': resolve('node_modules/react-dom'),
            'react-intl': resolve('node_modules/react-intl'),
        },
        mainFields: ['webpack', 'browser', 'module', 'main'],
    },
    output: {
        path: path.resolve(__dirname, 'build/resources/main/assets/react'),
        filename: '[name].js',
        chunkFilename: '[name].[contenthash].js',
        publicPath: '/_/asset/com.klp.godeValg:[hash]/react/',
    },
};

function resolve(name) {
    return path.resolve(__dirname, name);
}
