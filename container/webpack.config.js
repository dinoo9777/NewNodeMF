const htmlWebpackPlugin = require('html-webpack-plugin');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        }),
        new moduleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            remotes: {
                products: 'products@http://localhost:3001/remoteEntry.js',
                cart: 'cart@http://localhost:3002/remoteEntry.js',
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
