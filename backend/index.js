import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
// const cors = require('cors')

const app = express()

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "L@mborgh!n!",
    database : "gta_count",
})

app.use(express.json())

app.use(cors())
// app.post("/signup", (req,res) => {

app.post("/signup", (req,res) => {
    const q = "insert into sign_up (`email`,`username`,`password`) values (?)"
    const values = [
        req.body.email,
        req.body.username,
        req.body.password
    ]
    db.query(q, [values], (err, data) => {
        if(err) 
            {
                console.log(err)
                return res.json('Oops, connection timeout!')
            }
        return res.json(data)
    })
})

app.listen(8000, () => {
    console.log('Connected to backend!')
})