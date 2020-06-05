const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/main/webapp/WEB-INF/js/main.js",
    output: {
        path: path.resolve(__dirname, "./target/classes/static"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
