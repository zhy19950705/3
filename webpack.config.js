module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/test.js",
    output: {
        path: __dirname + "/app",
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './app',
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader',
                        options:{
                            modules:true,
                            localIdentName:'[name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    }
}
//命令行输入webpack即可运行
//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。