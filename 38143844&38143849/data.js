var data = 5;

exports.data = 6;

// 會蓋掉上一個 exports
module.exports = data;
