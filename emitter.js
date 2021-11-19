function Emitter () {
    this.events = {};
}

// register event handlers 
Emitter.prototype.on = function (eventName, handlerFunction) {
    // get event array from event properties, if not create an empty
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(handlerFunction);
}

// invoke registered event handlers 
Emitter.prototype.emit = function (eventName) {
    if(!this.events[eventName]) return;

    this.events[eventName].forEach(handlerFunction => {
        handlerFunction();
    });
}

module.exports = Emitter;