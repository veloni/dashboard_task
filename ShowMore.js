let loadDiv = document.querySelector('.js-my-elem');

let newDiv = document.createElement("div");

let div = loadDiv.cloneNode(true);

let showMore = document.querySelector('.js-show-more');

const test = document.querySelector('.bar-task');

let bartaskbox = document.querySelectorAll('.bar-task-box');

let heightScroll = 135;




showMore.onclick = () => {
  let bartaskbox = document.querySelectorAll('.bar-task-box');
 
if (bartaskbox.length < task.id.length)
{
  showMore.before(newDiv);

  newDiv.insertAdjacentHTML('beforeend', div.innerHTML);

  newDiv.classList.add('bar-task-box');

  newDiv.classList.add('js-box-task');

  window.testFunction();
  window.testFunctionTwo();

  newDiv = document.createElement("div");
  div = loadDiv.cloneNode(true);

  test.scroll(0,heightScroll);

  //console.log(bartaskbox.length);
  //console.log(task.id.length);

  heightScroll += 160;
}
else{
  alert('Tasks over');
  return;
}
}






