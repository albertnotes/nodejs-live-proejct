console.log(__dirname);
console.log(__filename);

var path = require('path');
// 抓目錄路徑
console.log(path.dirname('/data/db1/aa.js'));

// 路徑合併
console.log(path.join(__dirname, '/db1'));

// 抓檔名
console.log(path.basename('/data/db1/aa.js'));

// 抓副檔名
console.log(path.extname('/data/db1/aa.js'));

//分析路徑
console.log(path.parse('/data/db1/aa.js'));
