const fs = require('fs');

// Sync Function: Return all files and folder in the set path
const files = fs.readdirSync(__dirname);
console.log(files);
const files2 = fs.readdirSync('../');
console.log(files2);

// Async Function
var path = __dirname; //$
fs.readdir(path, (err, files) => {
  if (err) {
    console.log('Bad Request');
  }
  console.log(files);
});
