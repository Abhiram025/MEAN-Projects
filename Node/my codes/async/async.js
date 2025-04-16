const http=require('http')

const server=http.createServer((req,res)=> {
    console.log("request event")
    res.end("Bye")
})//uses event loop

server.listen(5000, ()=> {
    console.log("start the process on the port 5000: ")
})