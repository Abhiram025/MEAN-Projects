const path=require('path')
const {readFile, writeFile}=require('fs')

readFile('../abc/defA/first.txt', 'utf8', (err,result)=>{
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
})