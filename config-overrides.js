const path = require("path");

const { 
  override, 
  fixBabelImports, 
  addWebpackResolve,
  addWebpackAlias
} = require('customize-cra');

 module.exports = override(
   // 按需加载
     fixBabelImports('import', {
      libraryName: 'antd-mobile',
       style: 'css',
     }),
    // resolve扩展名和别名
     addWebpackResolve({
       extensions: [".js", ".json", ".jsx"]
     }),
    //  给文件夹取别名
     addWebpackAlias({      
        "@": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),      
        "@com": path.resolve(__dirname, "./src/components"),   
        "@a": path.resolve(__dirname, "./src/api"),
        "@store": path.resolve(__dirname, "/src/store")   
     })
 );