$( document ).ready(function() {
    console.log( "ready!" );
    load()
});


// Or with jQuery

$('.dropdown-trigger').dropdown();




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
    loadLastEntrys()
} 




