let loadDiv = document.querySelector('.js-my-elem');

let newDiv = document.createElement("div");

let div = loadDiv.cloneNode(true);

let showMore = document.querySelector('.js-show-more');


showMore.onclick = () => {

  showMore.before(newDiv);

  newDiv.insertAdjacentHTML('beforeend', div.innerHTML);

  newDiv.classList.add('bar-task-box');
  newDiv.classList.add('js-box-task');

  window.testFunction();
  window.testFunctionTwo();

  newDiv = document.createElement("div");

  div = loadDiv.cloneNode(true);}




