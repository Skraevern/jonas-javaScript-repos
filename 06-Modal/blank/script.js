'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);


const openModal = function (){
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
}
const closeModal =  function (){
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
}


for (let i = 0; i < btnsOpenModal.length; i++) {
btnsOpenModal[i].addEventListener(`click`,function(){
    btnsOpenModal [i].addEventListener(`click`, openModal);
});
};

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);



// LUKK VINDU MED ESCAPE!

document.addEventListener(`keydown`, function (e) {
// console.log(e.key); // SJEKK HVILKE KNAPP SOM BLIR TRYKKET NED

if(e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
}
}) 
    
