const express=require('express')
const app=express()
const people=require('./routes/people')
const login=require('./routes/login')
const addPerson = require('./routes/addPeople')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/login',login)
app.use('/api/people',people)
app.use('/api/postman/people',addPerson)

app.listen(5000, ()=>{console.log("Server is active on port 5000: ")})