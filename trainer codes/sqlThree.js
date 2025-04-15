let mysql=require('mysql2')
let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Admin@123",
    database: "weekend"
})

con.connect(function(err) {
    if(err) throw err
    console.log("Database is connected")
    let sql="create table student(rollno int, name varchar(30), address varchar(30))"
})