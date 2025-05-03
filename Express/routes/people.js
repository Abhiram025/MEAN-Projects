const express=require('express')
const router=express.Router()

const {getPeople, createPerson, updatePerson, removePerson}=require('../controllers/peopleController')

//this is one way of setting up the routes
// router.get('/', getPeople)
// router.post('/', createPerson)

//this is another way of setting the routes
router.route('/').get(getPeople).post(createPerson)
router.route('/:id').put(updatePerson).delete(removePerson)

module.exports=router