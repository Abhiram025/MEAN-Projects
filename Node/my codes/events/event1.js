const Event=require('events')
const eventEmitter=new Event()//this is the object instance of the class

eventEmitter.on('response', (name, age)=> {
    console.log(`I'm ${name} and my age is ${age}`)
})

eventEmitter.on('response', ()=> {
    console.log("it is running")
})

eventEmitter.emit('response','abhiram',22)