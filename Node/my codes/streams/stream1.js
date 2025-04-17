// const {writeFileSync}=require('fs')

// for(let i=0; i<100; i++) {
//     writeFileSync('../content/big.txt', `hello world ${i}\n`, {flag: 'a'})
// }
const {createReadStream}=require('fs')


const read=createReadStream('../content/big.txt',{highWaterMark:40000})
read.on('data', (result)=>{
    console.log(result)
})
read.on('error',err=>console.log(err))