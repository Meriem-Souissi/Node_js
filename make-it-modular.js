const mymodule = require('./mymodule.js');
var dir = process.argv[2]
var filterStr = process.argv[3]

mymodule(dir, filterStr,  (err, list) => {
    if (err) throw err; 

    list.forEach(function (file) {
        console.log(file)
    })
})