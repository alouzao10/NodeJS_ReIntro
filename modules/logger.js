// Creating a new module to use within app.js
var url = 'http://somesite.edu/log';

function log(msg) {
  // Send a request
  console.log(msg);
}

module.exports = log;
