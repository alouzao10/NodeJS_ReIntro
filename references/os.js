const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Totoal Memory = ${totalMemory}`);
console.log(`Free Memory = ${freeMemory}`);
