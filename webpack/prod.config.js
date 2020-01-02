const merge = require('webpack-merge');
const commonConfig = require('./common.config');

const prodConfig = {
    mode: 'production',
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
                        emitErrors: true,
                        failOnHint: true,
                        typeCheck: true,
                        fix: false
                    },
                }]
            },
        ],
    },
    optimization: {
        minimize: true
    },
};

module.exports = merge([commonConfig, prodConfig]);
