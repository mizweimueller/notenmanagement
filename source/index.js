$( document ).ready(function() {
    console.log( "ready!" );
    load()
});

let subjects=['KSN', 'FSST', 'Mathematik','DIC']

let subjectsEl = document.getElementById('subjectdropdown')
ddStr = ''
for(let c of subjects){
    ddStr+='<li><a href="#!">'
    ddStr+=c
    ddStr+='</a></li>'
}
subjectsEl.innerHTML = ddStr


console.log('test');
let classes=['1AHELS','2AHELS','3AHELS','4AHELS','5AHELS']

let classesEl = document.getElementById('dropdown')
ddStr = ''
for(let c of classes){
    ddStr+='<li><a href="#!">'
    ddStr+=c
    ddStr+='</a></li>'
}
classesEl.innerHTML = ddStr

function load() {
    console.log('loaded')

    let httpReq=new XMLHttpRequest()
    httpReq.open('GET', '/api/getEntry')
    httpReq.onload = function() {
        let responseData = JSON.parse(this.responseText)
        loadLastEntrys(responseData)
    }
    httpReq.send()
} 

function loadLastEntrys(data){
    let divEl = document.getElementById('')
    let letzteEintraege ="<table><thead><tr><th>Test</th><th>Datum</th><th>Teilg.</th><th>Avg.</th></tr></thead><tbody>"
    for(let entrys in data){
        letzteEintraege += '<tr>'
        letzteEintraege += '<td>'+entrys+'</td>'
        letzteEintraege += '<td>'+data[entry]+'</td>' //hier müssen noch die Daten aufgeteilt werden.
        letzteEintraege += '</tr>'
    }
    letzteEintraege+="</tbody></table>"
    divEl.innerHTML = letzteEintraege
}