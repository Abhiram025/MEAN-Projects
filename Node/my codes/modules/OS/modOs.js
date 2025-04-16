const d=require(`../modTwoOs.js`)
console.log(d)

const os=require('os')

const osmethods={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeSpace: os.freemem()
}

console.log(osmethods)