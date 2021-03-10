let loadDiv = document.querySelector('.js-my-elem');
let newDiv = document.createElement("div");
let div = loadDiv.cloneNode(true);
let showMore = document.querySelector('.js-show-more');
let barTaskScroll = document.querySelector('.bar-task');
let barTaskBox = document.querySelectorAll('.bar-task-box');
let taskBoxForScroll;
let deleteButton = document.querySelectorAll('.js-delete-task');
let editButton = document.querySelectorAll('.button-edit');
let allEditCircle  = document.querySelectorAll('.js-button-circle > .circle-icon'); 
let editIcon = document.querySelectorAll('.edit-delete-icon-value');

const addListenerShowMore = () => { 
  showMore.addEventListener('click', function() {
    [...Array(10)].forEach(() => { 
      clickShowMore();
    });

    taskBoxForScroll = document.querySelectorAll('.bar-task-box');
    [].slice.call(taskBoxForScroll).pop().scrollIntoView();
  });
}

addListenerShowMore();

const clickShowMore = () => {
  taskBoxForScroll = document.querySelectorAll('.bar-task-box');

  [].slice.call(taskBoxForScroll).pop().after(newDiv);

  newDiv.insertAdjacentHTML('beforeend', div.innerHTML);
  newDiv.classList.add('bar-task-box');
  newDiv.classList.add('js-box-task');

  window.barRenderTask();
  window.barTaskFunction();
  newDiv = document.createElement("div");
  div = loadDiv.cloneNode(true);

  deleteButton = document.querySelectorAll('.js-delete-task');
  editButton = document.querySelectorAll('.button-edit');
  circleOneEdit = document.querySelectorAll('.js-one-circle-task');
  circleTwoEdit = document.querySelectorAll('.js-two-circle-task');
  allEditCircle  = document.querySelectorAll('.js-button-circle > .circle-icon'); 
  editIcon = document.querySelectorAll('.edit-delete-icon-value');

  editRender();
  deleteRender ();
  findItems();
}

const deleteRender = () => {
  deleteButton.forEach(function(elem) {
    elem.onclick = function() {
      if (confirm('Delete task?')) {
        const myBox = this.closest('.js-box-task');
        myBox.classList.add('dn');
      }
    };
  });
}
  
let stateButton = true;

const editRender = () => {
  Array.from(editButton).forEach(function(item,index) {
      item.addEventListener('click', function() {
        stateButton = true;

        circleTwoEdit[index].style.strokeWidth = 5;
        circleOneEdit[index].style.strokeWidth = 5;

        editIcon[index+index].style.stroke = colors.secondaryColor;
        editIcon[index+index].style.strokeWidth = 2;
        butonCircleEdit();
      
      });
  }); 
}

const butonCircleEdit = () => {
  Array.from(allEditCircle).forEach(function(item) {
    item.addEventListener('click',  function() {
      if (stateButton === true) {
        const thisBox = this.closest('.icon-button-box');
        const thisButtonTaskBox = thisBox.querySelector('.button-task-box > .button-task');
        const thisCircleOne = thisBox.querySelector('.two-circle > .js-button-circle > .js-one-circle-task');
        const thisCircleTwo = thisBox.querySelector('.two-circle > .js-button-circle > .js-two-circle-task');
        const thisEdicIcon = thisBox.querySelector('.edit-delete-icon > .button-edit > .edit-icon');

        const reRenderCircle = (colorOne, colorTwo, colorThree, text) =>{
          thisButtonTaskBox.style.backgroundColor = colorOne;
          thisButtonTaskBox.style.borderColor = colorOne;
          thisButtonTaskBox.innerHTML = text;
          thisCircleOne.style.stroke = colorTwo;
          thisCircleTwo.style.stroke = colorThree;
          thisEdicIcon.style.stroke = "none";
          thisCircleOne.style.strokeWidth = 2;
          thisCircleTwo.style.strokeWidth = 2;
        }
  
        const removeClassCricle = () => {
          thisCircleOne.classList.remove('ended');
          thisCircleTwo.classList.remove('ended');
          thisCircleOne.classList.remove('active');
          thisCircleTwo.classList.remove('active');
          thisCircleOne.classList.remove('completed');
          thisCircleTwo.classList.remove('completed');;
        }

        const addClass = (classOne, classTwo) => {
          thisCircleOne.classList.add(classOne);
          thisCircleTwo.classList.add(classTwo);
        }

  
        if (item.classList.contains('ended')){
          reRenderCircle(colors.endedColor, colors.activeColor, colors.completedColor, 'ended');
          removeClassCricle();
          addClass('active','completed');
          stateButton = false;
          return;
        }

        if (item.classList.contains('completed')){
          reRenderCircle(colors.completedColor, colors.endedColor, colors.activeColor, 'completed');
          removeClassCricle();
          addClass('ended','active');
          stateButton = false;
          return;
        }

        if (item.classList.contains('active')){
          reRenderCircle(colors.activeColor, colors.endedColor, colors.completedColor, 'active');
          removeClassCricle();
          addClass('ended','completed');
          stateButton = false;
          return;
        } 
      }
    }); 
  });
}

editRender();
deleteRender();