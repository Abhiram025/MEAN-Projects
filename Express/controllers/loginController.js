const loginPerson=(req,res)=>{
    const {name}=req.body
    if(name) return res.status(200).send(`welcome ${name}`)
    else return res.status(401).send("enter your name")
}

module.exports={loginPerson}