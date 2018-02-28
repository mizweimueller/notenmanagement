const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dict'
})
connection.connect()

app.get('/api/getEntry', function (req, res) {
    //test für query (=select)
    let sqlTxt = 'select * from dict'
    
    connection.query(sqlTxt, function (error, results, fields) {
        if (error) {
            console.log('Fehler')
            console.log(error)
            return
        }
        console.log('Query ok')
        console.log(results)
        //Schleife über das Ergebnis
        dict = {}
        for (let i = 0; i < results.length; i++) {
            let recordObj = results[i]
            dict[recordObj.word] = recordObj.description
        }
        console.log(dict)
        res.send(dict)
    })

})