$( document ).ready(function() {
    console.log( "ready!" );
    load()
});

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false, // Close upon selecting a date,
    container: undefined // ex. 'body' will append picker to body
  });

function load() {
    console.log('loaded')
    
    enterGrades(grades)
} 

/*!let subjects=['KSN', 'FSST', 'Mathematik','DIC']

let subjectsEl = document.getElementById('subjectdropdown')
ddStr = ''
for(let c of subjects){
    ddStr+='<li><a href="#!">'
    ddStr+=c
    ddStr+='</a></li>'
}
subjectsEl.innerHTML = ddStr*/

let newTest ={
    klasse: "",
    fach: "",
    datum: "",
    thema: "",
    art: ""
};

function erstellen(){
    newTest.klasse= docment.getElementById("selectclasses").value
    newTest.fach= docment.getElementById("selectsubjects").value
    newTest.datum= docment.getElementById("selectdate").value
    newTest.thema= docment.getElementById("topic").value
    newTest.art= docment.getElementById("art").value

    let m= 'Klasse ='+klasse+' Fach= '+fach
    let xhttp = new XMLHttpRequest();
    let query = "/show/liste/" +newTest.klasse;
    console.log(query);
    xhttp.open("POST", query, true);
    xhttp.onload = function () {
    
        if (this.status == 200) {
            console.log('status=200')
            console.log(this.responseText)
            data = JSON.parse(this.responseText); 
            show();
            //console.log(JSON.parse(this.responseText))
        } else {
            console.log("buuu")
        }
    }
    xhttp.onerror = function () {
        console.log("Error")
    }
    xhttp.send();
}

//Vor- und Nachname kommt von der Datenbank
/*let grades=[
    { first:"Johannes", last:"Aigner"},
    { first:"Maximilian", last:"Reisecker"},
    { first:"Lukas", last:"Friedl"},
    { first:"Franziska", last:"Ertl"},
    { first:"Arastu", last:"Moatazedy"},
    { first:"Alexander", last:"Leimer"},
    { first:"David", last:"Diermayr"}
];*/

/*let schueler = {
    vn: "",
    nn: ""
};*/

function enterGrades(){
    let divgrades = document.getElementById('noten')
    let noteneingabe ="<table><thead><tr><th>Vorname</th><th>Nachname</th><th>Punkte</th><th>Note</th><th>Kommentar</th></thead><tbody>"
    
    for(let eingabe=0; eingabe<data.length; eingabe++){
        
        noteneingabe += '<tr>'
        noteneingabe += '<td>'+data[eingabe].first+'</td>'
        noteneingabe += '<td>'+data[eingabe].last+'</td>'
        noteneingabe += '<td> <div class="input-field col s6"><input placeholder="Punkte" id="points" type="number" class="validate"></div></td>'
        noteneingabe += '<td><select class="browser-default"><option id="note" value="" disabled selected>Note</option><option value="1">gefehlt</option><option value="2">1</option><option value="3">2</option><option value="4">3</option><option value="5">4</option><option value="6">5</option></select></td>' 
        noteneingabe += '<td> <div class="input-field col s6"><input placeholder="Kommentar" id="comment" type="text" class="validate"></div></td>'

        
        noteneingabe += '</tr>'
    }
    noteneingabe+="</tbody></table>"
    divgrades.innerHTML = noteneingabe
}

let resultat ={

    punkte: "",
    note: "",
    kommentar: ""
};

function speichern(){
  
    resultat.punkte= docment.getElementById("points").value
    resultat.note= docment.getElementById("note").value
    resultat.kommentar= docment.getElementById("comment").value

    //let m= 'Klasse ='+klasse+' Fach= '+fach
    let xhttp = new XMLHttpRequest();
    let query = "/save/resultat/" ;
    console.log(query);
    xhttp.open("GET", query, true);
    xhttp.onload = function () {
    
        if (this.status == 200) {
            console.log('status=200')
            console.log(this.responseText)
            data = JSON.parse(this.responseText);
            show();
            //console.log(JSON.parse(this.responseText))
        } else {
            console.log("buuu")
        }
    }
    xhttp.onerror = function () {
        console.log("Error")
    }
    xhttp.send();
}


