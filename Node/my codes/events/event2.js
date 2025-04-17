const http=require('http')

//event api is used
const server=http.createServer()
server.on('request', (req,res)=>{
    res.end("request accepted")
})

server.listen(5000)