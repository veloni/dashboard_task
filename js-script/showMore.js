let loadDiv = document.querySelector('.js-my-elem');

let newDiv = document.createElement("div");

let div = loadDiv.cloneNode(true);

let showMore = document.querySelector('.js-show-more');

const test = document.querySelector('.bar-task');

let bartaskbox = document.querySelectorAll('.bar-task-box');

let heightScroll = 155;

let deleteButton = document.querySelectorAll('.js-delete-task');

let editButton = document.querySelectorAll('.button-edit');

let allEditCircle  = document.querySelectorAll('.js-button-circle > .circle-icon'); 

let editIcon = document.querySelectorAll('.edit-delete-icon-value');

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
    
    editButton = document.querySelectorAll('.button-edit');

    circleOneEdit = document.querySelectorAll('.js-one-circle-task');

    circleTwoEdit = document.querySelectorAll('.js-two-circle-task');

    allEditCircle  = document.querySelectorAll('.js-button-circle > .circle-icon'); 

    editIcon = document.querySelectorAll('.edit-delete-icon-value');

    renderTasks();

    deleteRender();

    editRender();
  }
  else{
    alert('Tasks over');
    return;
  }
}

function deleteRender (){
  deleteButton.forEach(function(elem) {
    elem.onclick = function() {
      if (confirm('Delete task?'))
       {
        const myBox = this.closest('.js-box-task');
        myBox.classList.add('dn').confirm();
       }
    };
  });
}
  
function editRender() {
  let stateButton = true;
  Array.from(editButton).forEach(function(item,index) {
      item.addEventListener('click', function() {
        stateButton = true;
        circleTwoEdit[index].style.strokeWidth = 3;
        circleOneEdit[index].style.strokeWidth = 3;

        circleTwoEdit[index].style.fill = colors.secondaryColor;
        circleOneEdit[index].style.fill = colors.secondaryColor;

        editIcon[index+index].style.stroke = colors.secondaryColor;
        editIcon[index+index].style.strokeWidth = 2;
        butonCircleEdit();
      
      });
  });

  function butonCircleEdit () {
    Array.from(allEditCircle).forEach(function(item) {
      item.addEventListener('click',  function() {
        if (stateButton === true)
        {
          const thisBox = this.closest('.icon-button-box');
          const thisButtonTaskBox = thisBox.querySelector('.button-task-box > .button-task');
          const thisCircleOne = thisBox.querySelector('.two-circle > .js-button-circle > .js-one-circle-task');
          const thisCircletwo = thisBox.querySelector('.two-circle > .js-button-circle > .js-two-circle-task');
          const thisEdicIcon = thisBox.querySelector('.edit-delete-icon > .button-edit > .edit-icon');

          function reRenderCircle(colorOne, colorTwo, colorThree, text){
            thisButtonTaskBox.style.backgroundColor = colorOne;
            thisButtonTaskBox.style.borderColor = colorOne;
            thisButtonTaskBox.innerHTML = text;
    
            thisCircleOne.style.stroke = colorTwo;
            thisCircletwo.style.stroke = colorThree;

            thisEdicIcon.style.stroke = "none";

            thisCircleOne.style.fill = "none";
            thisCircletwo.style.fill = "none";
            thisCircleOne.style.strokeWidth = 2;
            thisCircletwo.style.strokeWidth = 2;
          }
    
          function removeClassCricle(){
            thisCircleOne.classList.remove('ended');
            thisCircletwo.classList.remove('ended');
            thisCircleOne.classList.remove('active');
            thisCircletwo.classList.remove('active');
            thisCircleOne.classList.remove('completed');
            thisCircletwo.classList.remove('completed');
          }

          function addClas(classOne, classTwo){
            thisCircleOne.classList.add(classOne);
            thisCircletwo.classList.add(classTwo);
          }
    
          if (item.classList.contains('ended')){
            reRenderCircle(colors.endedColor, colors.activeColor, colors.completedColor, 'ended');
            removeClassCricle();
            addClas('active','completed');
            stateButton = false;
            return;
          }
  
          if (item.classList.contains('completed')){
            reRenderCircle(colors.completedColor, colors.endedColor, colors.activeColor, 'completed', 'ended', 'active');
            removeClassCricle();
            addClas('ended','active');
            stateButton = false;
            return;
          }
  
          if (item.classList.contains('active')){
            reRenderCircle(colors.activeColor, colors.endedColor, colors.completedColor, 'active', 'ended', 'completed');
            removeClassCricle();
            addClas('ended','completed');
            stateButton = false;
            return;
          } 
        }
      }); 
    });
  }
}

editRender();
deleteRender();