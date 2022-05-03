const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', ()=>{
    console.log('started');
})

eventEmitter.on('message', (msg)=>{
    console.log(msg)
})

eventEmitter.once('end', ()=>{
    console.log('end')
})

eventEmitter.emit('start'); // started
eventEmitter.emit('end'); //end
eventEmitter.emit('message', 'hello world') //hello world

eventEmitter.emit('start'); // started
eventEmitter.emit('end'); //no output

eventEmitter.removeAllListeners();

eventEmitter.emit('start'); //no output

