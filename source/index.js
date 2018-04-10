$( document ).ready(function() {
    console.log( "ready!" );
    load()
});




console.log('test');
let classes=['1AHELS','2AHELS','3AHELS','4AHELS','5AHELS']

let tests=[
    {
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
];



/*let classesEl = document.getElementById('dropdown')
ddStr = ''
for(let c of classes){
    ddStr+='<li><a href="#!">'
    ddStr+=c
    ddStr+='</a></li>'
}
classesEl.innerHTML = ddStr*/

function load() {
    console.log('loaded')
    let divHead = document.getElementById('heading')
    divHead.innerHTML = "<h1>Die letzten Tests</h1>"
    /*let httpReq=new XMLHttpRequest()
    httpReq.open('GET', '/api/getEntry')
    httpReq.onload = function() {
        let responseData = JSON.parse(this.responseText)
        loadLastEntrys(responseData)
    }
    httpReq.send()*/
    loadLastEntrys(tests)
} 

function loadLastEntrys(tests){
    let divEl = document.getElementById('lastEntrys')
    let letzteEintraege ="<table><thead><tr><th>Datum</th><th>Klasse</th><th>Fach</th><th>Art</th><th>Thema</th><th>Teilgenommen</th><th>Durchschnitt</th></tr></thead><tbody>"
    console.log(tests[0].date)
    for(let entrys in tests){
        //console.log(entrys.date)
        letzteEintraege += '<tr>'
        letzteEintraege += '<td>'+tests[entrys].date+'</td>'
        letzteEintraege += '<td>'+tests[entrys].class+'</td>'
        letzteEintraege += '<td>'+tests[entrys].subject+'</td>'
        letzteEintraege += '<td>'+tests[entrys].category+'</td>'
        letzteEintraege += '<td>'+tests[entrys].topic+'</td>'
        letzteEintraege += '<td>'+tests[entrys].participated+'</td>'
        letzteEintraege += '<td>'+tests[entrys].avg+'</td>'
        letzteEintraege += '<td> <a href="changeTest.html"><buttonclass="btn waves-effect waves-light"><i  class="material-icons">create</i></button></a> </td>'
        letzteEintraege += '<td> <a href="changeTest.html"><buttonclass="btn waves-effect waves-light"><i class="material-icons">delete</i></button></a> </td>'
        letzteEintraege += '</tr>'
    }
    letzteEintraege+="</tbody></table>"
    divEl.innerHTML = letzteEintraege
}

