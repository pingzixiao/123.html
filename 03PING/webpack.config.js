/*
webpack配置文件，每次执行都会自动读取这里的配置
*/ 

console.log(__dirname + '\\dist')  // 当前目录（魔法 变量）
const path = require('path')  // 生成一个舒服的路径
console.log(path)
console.log(path.resolve(__dirname, './dist'))
module.export = {
    // 出口文件
    entry: './src/index.js',
    
    // 出口文件
    output: {
        // 文件名
        filename: "bundle.js",
        // 路径，必须是绝对路径
        path: path.resolve(__dirname, './dist')
    },
    // 生成模式
    mode: "development"
}