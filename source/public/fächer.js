var urlParams = new URLSearchParams(window.location.search)

let str=urlParams.toString()

let url = str.split('&')
a= url[0];
x= a.split('=')
klasse= x[1]

console.log('Klasse= '+klasse)


function ksn(){

let m= 'Klasse ='+klasse+' Fach= '+ksn
let xhttp = new XMLHttpRequest();
let query = "/show/test/" + m;
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

function fsst(){
    let m= 'Klasse ='+klasse+' Fach= '+fsst
let xhttp = new XMLHttpRequest();
let query = "/show/test/" + m;
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

function mathe(){
    let m= 'Klasse ='+klasse+' Fach= '+mathe
let xhttp = new XMLHttpRequest();
let query = "/show/test/" + m;
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

function dic(){
let m= 'Klasse ='+klasse+' Fach= '+dic
let xhttp = new XMLHttpRequest();
let query = "/show/test/" + m;
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


function show(){

    let divEl = document.getElementById('tests')
    let letzteEintraege ="<table><thead><tr><th>Datum</th><th>Klasse</th><th>Fach</th><th>Art</th><th>Thema</th><th>Teilgenommen</th><th>Durchschnitt</th></tr></thead><tbody>"
    console.log(tests[0].date)
    for(let entrys=0; entrys<data.length; entrys++){
        //console.log(entrys.date)
        letzteEintraege += '<tr>'
        letzteEintraege += '<td>'+data[entrys].date+'</td>'
        letzteEintraege += '<td>'+data[entrys].class+'</td>'
        letzteEintraege += '<td>'+data[entrys].subject+'</td>'
        letzteEintraege += '<td>'+data[entrys].category+'</td>'
        letzteEintraege += '<td>'+data[entrys].topic+'</td>'
        letzteEintraege += '<td>'+data[entrys].participated+'</td>'
        letzteEintraege += '<td>'+data[entrys].avg+'</td>'
        letzteEintraege += '<td> <a href="changeTest.html"><buttonclass="btn waves-effect waves-light"><i  class="material-icons">create</i></button></a> </td>'
        letzteEintraege += '<td> <a href="changeTest.html"><buttonclass="btn waves-effect waves-light"><i class="material-icons">delete_forever</i></button></a> </td>'
        letzteEintraege += '</tr>'
    }
    letzteEintraege+="</tbody></table>"
    divEl.innerHTML = letzteEintraege
}

