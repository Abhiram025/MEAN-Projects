const express=require('express')
const router=express.Router()

const {loginPerson}=require('../controllers/loginController')

router.post('/', loginPerson)

module.exports=router