import mysql from 'mysql2'

const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'Tanu@0214',
    database:'reset_fitness_db'
}).promise()

async function getEmployee(){
const result  = await pool.query("select * from employee")
return result[0]
}
const employee = await getEmployee()
console.log(employee)