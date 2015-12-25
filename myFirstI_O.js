var fs = require("fs");
var fileString = fs.readFileSync(process.argv[2]).toString();
var array = fileString.split('\n');
console.log(array.length -1 );