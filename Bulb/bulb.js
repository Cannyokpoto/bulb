

let bulb = document.getElementById('bulb');
let on = document.getElementById('on');
let off = document.getElementById('off');
let body = document.getElementById("wrapper");

function putOn(){
    bulb.setAttribute('src', './pic_bulbon.gif');
};


function putOff(){
    bulb.setAttribute('src', './pic_bulboff.gif');
};