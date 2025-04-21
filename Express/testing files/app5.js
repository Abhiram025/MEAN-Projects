const express=require('express')
const app=express()
let {people}=require('../data')

//POST method
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.post('/login',(req,res)=>{
    const {name}=req.body
    if(name) return res.status(200).send(`welcome ${name}`)
    else return res.status(401).send("enter your name")
})
app.get('/api/people', (req,res)=>{
    res.status(200).send({success:true, data:people})
})
app.post('/api/people', (req,res)=>{
    const {name}=req.body
    if(!name) {
        return res.status(400).json({success:false,msg:"please provide new value"})
    }
    res.status(201).send({success:true, person:name})
})

app.listen(5000, ()=>{console.log("Server is active on port 5000: ")})