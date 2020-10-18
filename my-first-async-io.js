const fs = require('fs');
fs.readFile(process.argv[2] , (err, data) => {
    if (err) throw err;
    var lines = data.toString().split('\n').length - 1  
console.log(lines)
  });