const EventEmitter = require('events');
const emitter = new EventEmitter();

const Logger = require('../modules/logger');
const logger = new Logger();

// Register a listener to toggle the emitter
logger.on('messageLogged', (args) => {
  // Called when the event is raised
  console.log(`Listener Called at ID: ${args.id}`);
});

// Call an event
// Add event object arguments to pass into the listener
//emitter.emit('messageLogged', { id: 1, url: 'https://somesite.edu' }); // Signal that an event has happened under messageLogged

// Call the Log function
logger.log('Message');
