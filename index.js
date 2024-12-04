//Memorizare variabili dal h1, paragrafo ed buttons

let h1 = document.getElementById('h1');
let nP = document.getElementById('nP');
let sc = document.getElementById('sc');
let ag = document.getElementById('ag');
let tg = document.getElementById('tg');
let agP = document.getElementById('agP');




//funzioni a utilizare

function sovrascrivere(){
    // alert('funziona!')
    h1.innerHTML="Nuovo testo H1";
    
};

function aggiungere(){
    h1.style.color="green";
};
function togliere(){
    h1.style.color="";
};
function aggiungeP(){
    nP.innerHTML="Questo e un paragrafo  fatto in JavaScript"
};


//ascoltatori per azionare i pulsanti

sc.addEventListener('click', sovrascrivere);
ag.addEventListener('click', aggiungere);
tg.addEventListener('click', togliere);
agP.addEventListener('click',aggiungeP)