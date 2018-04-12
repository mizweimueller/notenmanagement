const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

let connection = mysql.createConnection({
    host: '82.211.19.79',
    user: 'michinoten',
    password: 'michinoten',
    database: 'michinoten'
})


app.get('/api/getLastEntrys', function (req, res) {
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
        /*dict = {}
        for (let i = 0; i < results.length; i++) {
            let recordObj = results[i]
            dict[recordObj.word] = recordObj.description
        }
        console.log(dict)*/
        //res.send(dict)
    })

})

// curl --request POST --include  --header 'Content-Type: application/json' --data '{"word":"Walter","description":"Bester Schulwart ever!"}' localhost:3000/api/setword

/*app.post('/api/setword', function(req,res){
    dict[req.body.word]=req.body.description
    res.status(201).send('OK')
})*/



// curl localhost:3000/api/hello
app.listen(3000,function(){
    console.log('server running and listening on port 3000')
})

/*
    CREATE TABLE Tests (
        Id INT NOT NULL AUTO_INCREMENT, 
        PRIMARY KEY(Id),
        Date DATE, 
        Class_Id INT, 
        Subject_Id INT,
        Category_Id INT,
        Topic VARCHAR(40),
        Participated INT,
        Average INT,
    ); 
    
    CREATE TABLE Students (
        Id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY(Id),
        Name VARCHAR(20),
        Surname VARCHAR(20),
        Class_Id INT
    );

    CREATE TABLE Classes(
        Id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY(Id),
        Description VARCHAR(10)
    );
    CREATE TABLE Subjects(
        Id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY(Id),
        Description VARCHAR(10),
        Student_Id INT,
        Test_Id INT,
        Class_Id INT
    );
    CREATE TABLE Grades(
        Id INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY(Id),
        Description VARCHAR(10)
    )

    INSERT INTO Students(Name,Surname) VALUES
    ('Johannes','Aigner'),
    ('Simon','Angleitner'),
    ('Mathias','Asamer'),
    ('Julian','Bachinger'),
    ('David','Diermayr'),
    ('Franziska','Ertl'),
    ('Lukas','Fehkuehrer'),
    ('Lukas','Friedl'),
    ('Stefan','Gruenzinger'),
    ('Alexander','Krämer'),
    ('Alexander','Leimer'),
    ('Arastu','Moatazedy'),
    ('Maximilian','Reisecker'),
    ('Florian','Schachermair'),
    ('Martin','Schachl'),
    ('Wolfgang','Schwendtbauer'),
    ('Leon','Stempfer'),
    ('Matthias','Weingartner'),
    ('Philipp','Weiss'),
    ('Elias','Wollitzer'),
    ('Michael','Zweimueller')
    ;

    INSERT INTO Grades(Description) VALUES



    INSERT INTO Tests (Date,Class,Subject,Category,Topic,Participated,Average) VALUES 
    ('2018-01-01', '5AHELS', 'KSN','Test','QAM',19,3.2),  
    ('2018-02-02', '5AHELS', 'KSN','LZK','GSM',21,2.5),
    ('2018-03-03', '5AHELS', 'KSN','LZK','EDGE',18,4.0),
    ('2018-03-03', '5AHELS', 'KSN','Test','UMTS',20,3.4),
    ('2018-03-03', '5AHELS', 'KSN','LZK','LTE',21,2.6)
    ; 

    select * from Test;

    Klassen ID's
    11 1AHELS
    12 1BHELS
    13 1CHELS
    14 
    15
    16
    17
    18
    21
    22 2AHELS


 
*/