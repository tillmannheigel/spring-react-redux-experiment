const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/main/webapp/WEB-INF/js/index.js",
    output: {
        path: path.resolve(__dirname, "./target/classes/static"),
    }
};