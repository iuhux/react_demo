var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

var alias = {
  'react': 'react/dist/react.min.js',
  'react-dom': 'react-dom/dist/react-dom.min.js'
};
Object.keys(alias).forEach(function(name) {
  alias[name] = path.resolve(path.join(__dirname, 'node_modules', alias[name]));
});

var config = {
    entry: [path.resolve(__dirname, 'app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }],
        noParse: ['react'].map(name => alias[name])
    },
    devServer: {
        //contentBase: "./build",
        noInfo: true, //  --no-info option
        hot: true,
        port: process.env.PORT || 8080
    }
};

module.exports = config;