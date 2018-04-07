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
    database: 'tests'
})
connection.connect()

app.get('/api/getEntry', function (req, res) {
    //test für query (=select)
    let sqlTxt = 'select * from tests'
    
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

// curl --request POST --include  --header 'Content-Type: application/json' --data '{"word":"Walter","description":"Bester Schulwart ever!"}' localhost:3000/api/setword

app.post('/api/setword', function(req,res){
    dict[req.body.word]=req.body.description
    res.status(201).send('OK')
})



// curl localhost:3000/api/hello
app.listen(3000,function(){
    console.log('server running and listening on port 3000')
})

/*
    CREATE TABLE Test (
        Id INT, 
        Date DATE, 
        Class VARCHAR(), 
        Subject VARCHAR(20),
        Category VARCHAR(15),
        Topic VARCHAR(40),
        Participated INT,
        Average INT,
    ); 
*/