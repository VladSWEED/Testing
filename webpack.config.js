const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: "production",
    context: __dirname,
    entry: {
        roomViewer: "./src/Pages/RoomViewerPage.tsx"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    watch: false,
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [new ESLintPlugin({ extensions: [".js", ".ts", ".tsx"]})],
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", // Creates `style` nodes from JS strings
                    "css-loader", // Translates CSS into CommonJS
                    "sass-loader" // Compiles Sass to CSS
                ]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}