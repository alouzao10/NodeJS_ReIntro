// Load in any external modules
const log = require('./modules/logger.js');

function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello('Jimmy');

// Use the log function from the external modules
log('Some External Module Message');

// Each Modules has access to the following
// module, exports, require, __filename, __dirname
console.log(module); // Display information about the current module
console.log(exports); // List of items the module exports
console.log(require); // List of requirements the modules uses
console.log(__filename); // Current filename with path
console.log(__dirname); // Current directory of the file
