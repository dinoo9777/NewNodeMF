const htmlWebpackPlugin = require('html-webpack-plugin');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3002,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        }),
        new moduleFederationPlugin({
            name: 'cart',   
            filename: 'remoteEntry.js',
            exposes: {
                './CartIndex': './src/index.js',
            },
            shared: {
                faker: {
                    singleton: true,
                    eager: true,
                    requiredVersion: '5.2.0',
                },
            },
        })
    ]
};
