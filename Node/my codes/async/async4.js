//generally created promise which helps with async funnctions 
const {readFile}=require('fs')

const readfile=path=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=> {
            if(err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        }) 
    })
}

const start=async()=> {
    try {
        const f1=await readfile('../content/first.txt')
        console.log(f1)
        const f2=await readfile('../content/second.txt')
        console.log(f2)
    }
    catch(err) {
        console.log(err)
    }
}

start()
// readfile('../content/first.txt')
//     .then(result=>console.log(result))
//     .catch(err=>console.log(err))