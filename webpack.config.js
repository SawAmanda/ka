var htmlwp = require('html-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'build.js'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test:/\.(eot|woff2|woff|ttf|svg)/,
                use:[
                    {loader:'url-loader',
                    options:{
                        name:'[name][hash:5].min.[ext]',
                        limit:5000,
                        publicPath:'',
                        outputPath:'dist/',
                        useRelativePath:true
                    }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)@/,
                loader: 'url-loader?limit = 40000' //限制图片的大小,表示图片大小临界值为40KB
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    plugins: [
        new htmlwp({
            title: '首页',
            filename: 'index.html',
            template: 'test.html'
        }),
        new VueLoaderPlugin()
    ]
}