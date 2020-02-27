const Path = require("path");
const fs = require('fs');
module.exports = function (opts) {
  let { app, rules = []} = opts
  if (!app) {
    throw new Error("the app params is necessary!")
  }
  
  const appKeys = Object.keys(app)
  rules.forEach((item) => {
    let { path, name} = item
    if (appKeys.includes(name)) {
      throw new Error(`the name of ${name} already exists!`)
    }
    let content = {};
    //fs.readdir()返回一个包含“指定目录下所有文件名称”的数组对象
    fs.readdirSync(path).forEach(filename => {
      //Path.extname 返回path路径文件扩展名
      let extname = Path.extname(filename);
      if (extname === '.js') {
        //part1 要处理的path; part2 要过滤的字符
        let name = Path.basename(filename, extname);
        content[name] = require(Path.join(path, filename));
      }
    });
    app[name] = content
  })
}