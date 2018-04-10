$( document ).ready(function() {
    console.log( "ready!" );
    load()
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


let grades=[
    { first:"Johannes", last:"Aigner"},
    { first:"Maximilian", last:"Reisecker"},
    { first:"Lukas", last:"Friedl"},
    { first:"Franziska", last:"Ertl"},
    { first:"Arastu", last:"Moatazedy"},
    { first:"Alexander", last:"Leimer"},
    { first:"David", last:"Diermayr"}
];

function enterGrades(grades){
    let divgrades = document.getElementById('noten')
    let noteneingabe ="<table><thead><tr><th>Vorname</th><th>Nachname</th><th>Punkte</th><th>Note</th><th>Kommentar</th></thead><tbody>"
    
    for(let eingabe in grades){
        
        noteneingabe += '<tr>'
        noteneingabe += '<td>'+grades[eingabe].first+'</td>'
        noteneingabe += '<td>'+grades[eingabe].last+'</td>'
        
        noteneingabe += '<td>'+grades[eingabe].last+'</td>'
          
        noteneingabe += '</tr>'
    }
    noteneingabe+="</tbody></table>"
    divgrades.innerHTML = noteneingabe
}


