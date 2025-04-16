const path=require('path')
const {readFileSync, writeFileSync}=require('fs')

const first=readFileSync('../abc/def/first.txt','utf8')
const second=readFileSync('../abc/def/second.txt','utf8')

writeFileSync('../abc/def/writeResult.txt', `this is the result of this method: ${first}, ${second}`)