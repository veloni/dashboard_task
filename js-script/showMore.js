let loadDiv = document.querySelector('.js-my-elem');

let newDiv = document.createElement("div");

let div = loadDiv.cloneNode(true);

let showMore = document.querySelector('.js-show-more');

const test = document.querySelector('.bar-task');

let bartaskbox = document.querySelectorAll('.bar-task-box');

let heightScroll = 155;

let deleteButton = document.querySelectorAll('.js-delete-task');

let editButton = document.querySelectorAll('.button-edit');

showMore.onclick = () => {
  
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

  heightScroll += 160;

  deleteButton = document.querySelectorAll('.js-delete-task');
  
  deleteRender();
}
else{
  alert('Tasks over');
  return;
}
}

function deleteRender (){
  deleteButton.forEach(function(elem) {
    elem.onclick = function() {
        const myBox = this.closest('.js-box-task');
        myBox.classList.add('dn');
    };
  });
  }
  
  deleteRender();

/*   const buttonEdit = document.querySelectorAll('.js-delete-task');

  Array.from(buttonEdit).forEach(function(item){
    item.addEventlistener('click', function()
      {
        item.classList.add('dn')
      });
  }); */
  
  const buttonEdit = document.querySelectorAll('.button-edit');
  const circleEdit = document.querySelectorAll('.js-two-circle-task');

  console.log(circleEdit);

  Array.from(buttonEdit).forEach(function(item,index) {
      item.addEventListener('click', function() {
      
        circleEdit[index+index].classList.add('dn');
        circleEdit[index+index+1].classList.add('dn');
       
      });
  });
