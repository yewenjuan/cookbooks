// 启动服务的时候调取接口 需要下载json-server 才能使用服务器
module.exports = function() {
  return {
    list: require("./list.json"),
    category: require("./category.json")
  }
}