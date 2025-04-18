const http=require('http')
const {readFileSync}=require('fs')

const homePage=readFileSync('../navbar-app/index.html')
const homeStyles=readFileSync('../navbar-app/styles.css')
const homeLogo=readFileSync('../navbar-app/logo.svg')
const homeBrowser=readFileSync('../navbar-app/browser-app.js')

const server=http.createServer((req,res)=>{
    const url=req.url
    if(req.url==='/') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(req.url==='/logo.svg') {
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeLogo)
        res.end() 
    }
    else if(req.url==='/styles.css') {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end() 
    }
    else {
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeBrowser)
        res.end()
    }
    
})

server.listen(5000)