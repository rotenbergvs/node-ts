const merge = require('webpack-merge');
const NodemonPlugin = require('nodemon-webpack-plugin');
const commonConfig = require('./common.config');

const devConfig = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                use: [{
                    loader: 'tslint-loader',
                    options: {
                        configFile: 'tslint.json',
                        tsConfigFile: 'tsconfig.json',
                        emitErrors: false,
                        failOnHint: false,
                        typeCheck: true,
                        fix: true,
                    },
                }]
            },
        ],
    },
    optimization: {
        minimize: false
    },
    watch: true,
    plugins: [
        new NodemonPlugin()
    ],
};

module.exports = merge([commonConfig, devConfig]);
