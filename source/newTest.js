let subjects=['KSN', 'FSST', 'Mathematik','DIC']

let subjectsEl = document.getElementById('subjectdropdown')
ddStr = ''
for(let c of subjects){
    ddStr+='<li><a href="#!">'
    ddStr+=c
    ddStr+='</a></li>'
}
subjectsEl.innerHTML = ddStr

