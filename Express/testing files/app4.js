const express=require('express')
const app=express()
const logger=require('../middleware/logger')
const authorize=require('../middleware/authorize')

//app.use('/api',logger)
app.use([logger,authorize])

app.get('/', (req,res)=>{
    res.send("Home page")
})

app.get('/about', (req,res)=>{
    res.send("About page")
})

app.get('/api/products', (req,res)=>{
    res.send("Products")
})

app.get('/api/item', (req,res)=>{
    res.send("Items")
})

app.listen(5000, ()=>{console.log("Server is active on port 5000: ")})