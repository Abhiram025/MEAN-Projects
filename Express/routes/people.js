const express=require('express')
const router=express.Router()
let {people}=require('../data')

router.get('/', (req,res)=>{
    res.status(200).send({success:true, data:people})
})
router.post('/', (req,res)=>{
    const {name}=req.body
    if(!name) {
        return res.status(400).json({success:false,msg:"please provide new value"})
    }
    res.status(201).send({success:true, person:name})
})

module.exports=router