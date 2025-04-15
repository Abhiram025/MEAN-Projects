let mysql=require('mysql2')
let con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Admin@123",
    database: "weekend"
})

con.connect(function(err) {
    if(err) throw err
    console.log("Database connected")
    // let row="insert into student values(345, 'Bruce Banner', 'New york')"
    // con.query(row,function(err,result) {
    //     if(err) throw err
    //     console.log("row inserted")
    // })
    // let row2="insert into student values(341, 'Thor', 'Asgard')"
    // con.query(row2,function(err,result) {
    //     if(err) throw err
    //     console.log("row inserted")
    // })
    let result="select * from student"
    con.query(result,function(err,results) {
        if(err) throw err
        console.log(`this is the ${JSON.stringify(results)}`)                
    })    
})



