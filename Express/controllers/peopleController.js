let {people}=require('../data')
const getPeople=(req,res)=>{
    res.status(200).send({success:true, data:people})
}

const createPerson=(req,res)=>{
    const {name}=req.body
    if(!name) {
        return res.status(400).json({success:false,msg:"please provide new value"})
    }
    res.status(201).send({success:true, person:name})
}


const updatePerson=(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    if(!name) {
        return res.status(400).json({success:false,msg:"please provide new value"})
    }
    let person=people.find(p=>p.id===Number(id))
    if(person) {        
        person.name=name
        res.status(200).json({success:true, data:people})
    }    
    else {
        return res.status(400).json({success:false,msg:"Person not found"})
    }
}

const removePerson=(req,res)=>{
    const {id}=req.params
    let person=people.findIndex(p=>p.id===Number(id))
    if(person!=-1) {
        people.splice(person,1)
        return res.status(200).json({success:true, data:people})
    }
    res.status(400).json({success:false,msg:`${id} not found`})
}

module.exports={getPeople, createPerson, updatePerson, removePerson}