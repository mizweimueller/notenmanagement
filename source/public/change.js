$( document ).ready(function() {
    console.log( "ready!" );
    load()
});

function load() {
    console.log('loaded')
    
    
    //enterGrades(grades)
} 

let grades=[
    { first:"Johannes", last:"Aigner"},
    { first:"Maximilian", last:"Reisecker"},
    { first:"Lukas", last:"Friedl"},
    { first:"Franziska", last:"Ertl"},
    { first:"Arastu", last:"Moatazedy"},
    { first:"Alexander", last:"Leimer"},
    { first:"David", last:"Diermayr"}
];

/*function enterGrades(grades){
    let divgrades = document.getElementById('noten')
    let noteneingabe ="<table><thead><tr><th>Vorname</th><th>Nachname</th><th>Punkte</th><th>Note</th><th>Kommentar</th></thead><tbody>"
    
    for(let eingabe in grades){
        
        noteneingabe += '<tr>'
        noteneingabe += '<td>'+grades[eingabe].first+'</td>'
        noteneingabe += '<td>'+grades[eingabe].last+'</td>'
        noteneingabe += '<td> <div class="input-field col s6"><input placeholder="Punkte" id="points" type="number" class="validate"></div></td>'
        noteneingabe += '<td><select class="browser-default"><option value="" disabled selected>Note</option><option value="1">gefehlt</option><option value="2">1</option><option value="3">2</option><option value="4">3</option><option value="5">4</option><option value="6">5</option></select></td>' 
        noteneingabe += '<td> <div class="input-field col s6"><input placeholder="Kommentar" id="comment" type="text" class="validate"></div></td>'

        
        noteneingabe += '</tr>'
    }
    noteneingabe+="</tbody></table>"
    divgrades.innerHTML = noteneingabe
}*/