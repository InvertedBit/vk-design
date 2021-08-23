const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const projectPaths = {
    projectDir:         __dirname,
    projectJsPath:      path.resolve(__dirname, 'src/js'),
    projectScssPath:    path.resolve(__dirname, 'src/scss')
}

module.exports = {
    entry: {
        'theme-pack': './src/js/main.js',
        'theme-green': './src/scss/main.scss',
        'theme-pink': './src/scss/main-pink.scss'
    },
    output: {
        path: path.resolve(__dirname),
        filename: './static/js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './static/css/[name].css'
        }),
    ]
}