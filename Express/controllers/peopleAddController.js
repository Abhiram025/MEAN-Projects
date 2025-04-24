let {people}=require('../data')

const addPerson=(req,res)=>{
    const {name}=req.body
    if(!name) {
        return res.status(400).json({success:false,msg:"please provide new value"})
    }
    else {
        const newPerson={
            "id": people.length+1,
            "name": name
        }
        people.push(newPerson)
    }
    res.status(201).send({success:true, data:people})
}


module.exports={addPerson}