const http=require('http')

const server=http.createServer((req,res)=> {
    if(req.url=='/') console.log("Home")
    else if(req.url=='/about') {
        for(let i=1; i<31; i++) {
            for(let j=1; j<31; j++) {
                console.log(`${i} ${j}`)
            }
        }
        console.log("about")
    }
    res.end("Bye 2")
})

server.listen(5000, ()=> {
    console.log("start the process on the port 5000: ")
})//uses event loop