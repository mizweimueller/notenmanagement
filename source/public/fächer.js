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

