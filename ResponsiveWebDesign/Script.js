"use strict";
var ResponsiveWebDesign;
(function (ResponsiveWebDesign) {

let counterDisplayElem = document.querySelector('.buybox--quantity__input');
let counterMinusElem = document.querySelector('.jaecon-minus');
let counterPlusElem = document.querySelector('.jaecon-plus');

let count = 1;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    if(count == 3){}
    else{
    count++;}
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    if(count == 1){}
    else{
    count--;}
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

})(ResponsiveWebDesign || (ResponsiveWebDesign = {}));