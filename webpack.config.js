const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'static', 'js'),
        filename: 'main.bundle.js'
    }
}