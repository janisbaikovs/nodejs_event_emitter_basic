const Emitter = require('./emitter');

const eventEmitter = new Emitter;

eventEmitter.on('greet', () => {
    console.log('Hello!');
});

eventEmitter.on('greet', () => {
    console.log('Hi!');
});

console.log('Greet happend!');
eventEmitter.emit('greet');

