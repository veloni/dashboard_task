const filterTask = () => {
  const buttonTextChoise = document.querySelector('.js-button-tasks');
  const activeTextChoise = document.querySelector('.js-text-choise-filter-actve');
  const completedTextChoise = document.querySelector('.js-text-choise-filter-completed');
  const endedTextChoise = document.querySelector('.js-text-choise-filter-ended');
  const allTextChoise = document.querySelectorAll('.text-choise-filter');
  
  AddDn();

  buttonTextChoise.onclick = function raze(e) {
    e.preventDefault();

    if (allTextChoise[1].classList.contains('dn')) {
      allTextChoise.forEach((item) => {
        item.classList.remove('dn');
        item.style.display = 'flex';
      });
    }
    else {
      const barTaskBox = document.querySelectorAll('.bar-task-box');

      allTextChoise.forEach((item) => { 
        item.classList.add('dn')
        item.style.display = 'none';
      });

      barTaskBox.forEach((item) => item.classList.remove('dn'));
    }
  }

  activeTextChoise.onclick = function raze(e) {
    e.preventDefault();

    const completedBox = document.querySelectorAll("div.completed");
    const endedBox = document.querySelectorAll('div.ended');
    const barTaskBox = document.querySelectorAll('.bar-task-box');
  
    barTaskBox.forEach((item) => item.classList.remove('dn'));
    completedBox.forEach((item) => item.classList.add('dn'));
    endedBox.forEach((item) => item.classList.add('dn'));
    
    renderTasks();
  }

  completedTextChoise.onclick = function raze(e) {
    e.preventDefault();

    const activeBox = document.querySelectorAll('div.active');
    const endedBox = document.querySelectorAll('div.ended');
    const barTaskBox = document.querySelectorAll('.bar-task-box');
    
    barTaskBox.forEach((item) => item.classList.remove('dn'));
    activeBox.forEach((item) => item.classList.add('dn'));
    endedBox.forEach((item) => item.classList.add('dn'));
  }

  endedTextChoise.onclick = function raze(e) {
    e.preventDefault();

    const activeBox = document.querySelectorAll('div.active');
    const completeddBox = document.querySelectorAll('div.completed');
    const barTaskBox = document.querySelectorAll('.bar-task-box');

    barTaskBox.forEach((item) => item.classList.remove('dn'));
    activeBox.forEach((item) => item.classList.add('dn'));
    completeddBox.forEach((item) => item.classList.add('dn'));
  }

}

const AddDn = () => {
  const allTextChoise = document.querySelectorAll('.text-choise-filter');

  allTextChoise.forEach((item) => item.classList.add('dn'));
};

filterTask();