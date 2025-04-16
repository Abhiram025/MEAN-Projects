const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/') res.end('welcome to http server')
    if(req.url=='/about') res.end('here is out history')
    res.end(` 
             <h1>Oops!we failed to fetch the request</h1>
             <p>reload the page again</p>
           `)//default response
})

server.listen(3000)