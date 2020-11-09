const buttonTextChoise = document.querySelector('.js-button-tasks');
const activeTextChoise = document.querySelector('.js-text-choise-filter-actve');
const completedTextChoise = document.querySelector('.js-text-choise-filter-completed');
const endedTextChoise = document.querySelector('.js-text-choise-filter-ended');



function AddDn() {
  //activeTextChoise.classList.add('dn');
 // completedTextChoise.classList.add('dn');
  //endedTextChoise.classList.add('dn');
  }

AddDn();

buttonTextChoise.onclick = function () {

  //activeTextChoise.classList.remove('dn');
  
    }
    


const activeBox  = document.querySelector('.active');


activeTextChoise.onclick = function () {
  activeBox.forEach((item) => {
    console.log(yes);
    item.classList.add('dn');
  });

  }
  