const filterTask = () => {
  const buttonTextChoise = document.querySelector('.js-button-tasks');
  const activeTextChoise = document.querySelector('.js-text-choise-filter-actve');
  const completedTextChoise = document.querySelector('.js-text-choise-filter-completed');
  const endedTextChoise = document.querySelector('.js-text-choise-filter-ended');
  const allTextChoise = document.querySelectorAll('.text-choise-filter');

  AddDn();

  buttonTextChoise.onclick = function raze(e) {
    e.preventDefault();

    _tasksFilterOpen = !_tasksFilterOpen;

    if (allTextChoise[1].classList.contains('dn')) {
      allTextChoise.forEach((item) => {
        item.classList.remove('dn');
        item.style.display = 'flex';
      });
    } else {
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

    _statusFilterTask = 'active';

    const completedBox = document.querySelectorAll('div.completed');
    const endedBox = document.querySelectorAll('div.ended');
    const barTaskBox = document.querySelectorAll('.bar-task-box');

    removeOrAddDn(barTaskBox, completedBox, endedBox);
  }

  completedTextChoise.onclick = function raze(e) {
    e.preventDefault();

    _statusFilterTask = 'completed';

    const activeBox = document.querySelectorAll('div.active');
    const endedBox = document.querySelectorAll('div.ended');
    const barTaskBox = document.querySelectorAll('.bar-task-box');

    removeOrAddDn(barTaskBox, activeBox, endedBox);
  }

  endedTextChoise.onclick = function raze(e) {
    e.preventDefault();

    _statusFilterTask = 'ended';

    const activeBox = document.querySelectorAll('div.active');
    const completeddBox = document.querySelectorAll('div.completed');
    const barTaskBox = document.querySelectorAll('.bar-task-box');

    removeOrAddDn(barTaskBox, activeBox, completeddBox);
  }

  const removeOrAddDn = (firstTaskBox, twoTaskBox, ThreeTaskBox) => {
    firstTaskBox.forEach((item) => item.classList.remove('dn'));
    twoTaskBox.forEach((item) => item.classList.add('dn'));
    ThreeTaskBox.forEach((item) => item.classList.add('dn'));

    window.barRenderTask();
  }
}

const AddDn = () => {
  const allTextChoise = document.querySelectorAll('.text-choise-filter');
  allTextChoise.forEach((item) => item.classList.add('dn'));
};

filterTask();