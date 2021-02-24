const filterTask = () => {
  const buttonTextChoise = document.querySelector('.js-button-tasks');
  const activeTextChoise = document.querySelector('.js-text-choise-filter-actve');
  const completedTextChoise = document.querySelector('.js-text-choise-filter-completed');
  const endedTextChoise = document.querySelector('.js-text-choise-filter-ended');
  const allTextChoise = document.querySelectorAll('.text-choise-filter');
  
  const AddDn = () => {
    allTextChoise.forEach((item) => {
      item.classList.add('dn');
    });
  }
  AddDn();


  buttonTextChoise.onclick = function raze(e) {
    e.preventDefault();

    if (allTextChoise[1].classList.contains('dn')){
      allTextChoise.forEach((item) => {
        item.classList.remove('dn');
        item.style.display = 'flex';
      });
    }
    else {
      const barTaskBox = document.querySelectorAll('.bar-task-box');
      allTextChoise.forEach((item) => {
        item.classList.add('dn');
      });
      barTaskBox.forEach((item) => {
        item.classList.remove('dn');
      });
    }
  }

 /*  const activeBox = document.querySelectorAll('.active'); */

  activeTextChoise.onclick = function raze(e) {
    e.preventDefault();
    const completedBox = document.querySelectorAll('.completed');
    const endedBox = document.querySelectorAll('.ended');
    const barTaskBox = document.querySelectorAll('.bar-task-box');
  
    barTaskBox.forEach((item) => {
      item.classList.remove('dn');
    });

    completedBox.forEach((item) => {
      item.classList.add('dn');
    });

    endedBox.forEach((item) => {
      item.classList.add('dn');
    });
  }

  completedTextChoise.onclick = function raze(e) {
    e.preventDefault();
    const activeBox = document.querySelectorAll('.active');
    const endedBox = document.querySelectorAll('.ended');
    const barTaskBox = document.querySelectorAll('.bar-task-box');
    
    barTaskBox.forEach((item) => {
      item.classList.remove('dn');
    });

    activeBox.forEach((item) => {
      item.classList.add('dn');
    });

    endedBox.forEach((item) => {
      item.classList.add('dn');
    });
  }

  endedTextChoise.onclick = function raze(e) {
    e.preventDefault();
    const activeBox = document.querySelectorAll('.active');
    const completeddBox = document.querySelectorAll('.completed');
    const barTaskBox = document.querySelectorAll('.bar-task-box');

    barTaskBox.forEach((item) => {
      item.classList.remove('dn');
    });
    activeBox.forEach((item) => {
      item.classList.add('dn');
    });
    completeddBox.forEach((item) => {
      item.classList.add('dn');
    });
  }
}

filterTask();