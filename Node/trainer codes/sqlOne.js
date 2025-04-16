let mysql=require('mysql2')
let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Admin@123"
})

con.connect(function(err) {
    if(err) throw err
    console.log("Database is connected")
})