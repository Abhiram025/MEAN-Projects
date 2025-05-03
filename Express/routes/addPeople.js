const express=require('express')
const router=express.Router()

const {addPerson}=require('../controllers/peopleAddController')

router.post('/', addPerson)

module.exports=router