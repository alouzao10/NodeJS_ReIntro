const path = require('path');

// Use the parse method to break up each element in the file path
// Values are set in an object defining the path
var pathObj = path.parse(__filename);
console.log(pathObj);

// Use the join method to combine path elements such as a directory and file
console.log(path.join(__dirname, 'hello.txt'));
