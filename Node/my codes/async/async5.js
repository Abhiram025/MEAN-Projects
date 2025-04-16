const {readFile, writeFile}=require('fs')
const util=require('util')
const readfile=util.promisify(readFile)
const writefile=util.promisify(writeFile)

const start=async()=> {
    try {
        const f1=await readfile('../content/first.txt','utf8')
        console.log(f1)
        const f2=await readfile('../content/second.txt','utf8')
        console.log(f2)
        await writefile('../content/result.txt',`this is not a war machine` ) {
            console.log()
        }
    }
    catch(err) {
        console.log(err)
    }
}

start()