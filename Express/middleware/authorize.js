const authorize=(req,res,next)=> {//this is a middleware
    console.log("Authorization Middleware")
    next()
}

module.exports=authorize