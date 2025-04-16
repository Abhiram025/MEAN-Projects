let mysql=require('mysql2')
let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Admin@123"
})

con.connect(function(err) {
    if(err) throw err
    console.log("Database is connected")
    con.query("create database weekend",function(err,result) {
        if(err) throw err
        console.log("database created")
    })
})