// Creating a new module to use within app.js

// Using the external emitter
const EventEmitter = require('events');

var url = 'http://somesite.edu/log';

// Create a class to access the emitter with additional items
class Logger extends EventEmitter {
  log(msg) {
    // Send a request
    console.log(msg);

    // Call an event from the extended class directly
    // Add event object arguments to pass into the listener
    this.emit('messageLogged', { id: 1, url: 'https://somesite.edu' }); // Signal that an event has happened under messageLogged
  }
}

module.exports = Logger;
