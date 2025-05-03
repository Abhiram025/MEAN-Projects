const express=require('express')
const app=express()  //instance of a server

app.get('/', (req,res)=>{
    res.status(200).send("Home Page")
})

app.get('/about', (req,res)=>{
    res.status(200).send("About Page")
})

app.all('*', (req,res)=>{
    res.status(404).send("Page not found")
})

app.listen(5000, ()=>{
    console.log('server is listening')
})