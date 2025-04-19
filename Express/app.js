const express=require('express')
const app=express()

const { products } = require('./data')

app.get('/', (req,res)=>{
    res.send(`<h1>Home Page</h1><a href="./api/products">products</a>`)
})
app.get('/api/products', (req,res)=> {
    const newProducts=products.map(p=> {
        // const id=p.id
        // const name=p.name
        // const image=p.image
        const {id,name,image}=p
        return {id, name, image}
    })
    res.json(newProducts)
})
app.get('/api/products/:pId', (req,res)=>{
    const {pId}=req.params
    const product=products.find(p=>p.id===Number(pId))
    if(product) res.json(product)
    res.status(404).send(`<h1>cannot find the product</h1>`)
})
app.get('/api/v1/query', (req,res)=> {
    const {search,limit}=req.query
    let sortedProducts=[...products]
    
    if(search) {
        sortedProducts=sortedProducts.filter(p=>p.name.startsWith(search))
    }
    if(limit) {
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000, ()=>{console.log("Server is active on port 5000: ")})
