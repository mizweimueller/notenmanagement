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


app.get('/api/getEntry', function (req, res) {
    //test für query (=select)
    let sqlTxt = 'select * from Tests'
    
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
    CREATE TABLE Tests (
        Id INT NOT NULL AUTO_INCREMENT, 
        Date DATE, 
        Class VARCHAR(), 
        Subject VARCHAR(20),
        Category VARCHAR(15),
        Topic VARCHAR(40),
        Participated INT,
        Average INT,
    ); 
    INSERT INTO Tests (Date,Class,Subject,Category,Topic,Participated,Average) VALUES 
    ('2018-01-01', '5AHELS', 'KSN','Test','QAM',19,3.2),  
    ('2018-02-02', '5AHELS', 'KSN','LZK','GSM',21,2.5),
    ('2018-03-03', '5AHELS', 'KSN','LZK','EDGE',18,4.0),
    ('2018-03-03', '5AHELS', 'KSN','Test','UMTS',20,3.4),
    ('2018-03-03', '5AHELS', 'KSN','LZK','LTE',21,2.6)
    ; 

    select * from Test;


    date:"01.01.2018", class:"5AHELS", subject:"KSN", category:"Test", topic:"QAM", participated: 19, avg:3.2
    },
    {
        date:"02.02.2018", class:"5AHELS", subject:"KSN", category:"LZK", topic:"GSM", participated: 21, avg:2.5
    },
    {
        date:"03.03.2018", class:"5AHELS", subject:"KSN", category:"LZK", topic:"EDGE", participated: 18, avg:4.0
    },
    {
        date:"04.04.2018", class:"5AHELS", subject:"KSN", category:"Test", topic:"UMTS", participated: 20, avg:3.4
    },
    {
        date:"05.05.2018", class:"5AHELS", subject:"KSN", category:"LZK", topic:"LTE", participated: 21, avg:2.6
    }
*/