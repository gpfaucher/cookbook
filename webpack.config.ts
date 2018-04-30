const path = require('path');

const config = {
    devServer: {
        contentBase: 'dist/',
        port: 8080,
        proxy: {
            '/api': 'localhost:3000',
        },
    },
    entry: path.join(process.cwd(), 'src/client/index.tsx'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: 'ts-loader',
            },
        ],
    },
    output: {
        filename: 'client[dev].bundle.js',
        path: path.join(process.cwd(), 'dist/bundles/'),
    },
    resolve: {
        extensions: ['.jsx', '.js', '.css', '.ts', '.tsx'],
    },
};

module.exports = (env) => {
    if (process.env.NODE_ENV === 'production') {
        config.mode = 'production';
    }
    if (process.env.NODE_ENV === 'testing') {
        config.mode = 'testing';
    }
    return config;
};
