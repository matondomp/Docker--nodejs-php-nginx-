const express = require("express")
const mysql = require('mysql')

const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb",

}

const connection = mysql.createConnection(config)
const sql = `INSERT INTO peaple (name) values('Matondo Pedro')`
connection.query(sql)
connection.end()

const app = express()


app.get('/', (req, res) => {
    res.send('<div> FULL CYCLE </div>')
})

app.listen(3000, () => console.log('running on port 3000'))