const webpack = require('webpack')
const webpackConfig = require('./webpackfile.js')
webpack(webpackConfig, (err, stats) => {
    if(err){
        throw err
    }
    console.log("已经打包完成");
})