const toggleButton = document.querySelector('.js-toggle-sidebar');
const sidebar = document.querySelector('.js-left-sidebar');
const header = document.querySelector('.js-header');
const taskBar = document.querySelector('.js-bar-task');
const mainSectionGenerallyBox = document.querySelector('.main-section-generally-box');
const mainSection = document.querySelector('.js-main-section');
const titleTextAside = document.querySelector('.js-title-text-aside-box');
const titleTextAsideBox = document.querySelector('.js-title-aside-box');

toggleButton.onclick = function() {
    const sidebarClasses = sidebar.classList;
    const isOpened = sidebarClasses.contains('open');

    isOpened && sidebarClasses.remove('open');
    !isOpened && sidebarClasses.add('open');
  
    taskBar.style.width = isOpened ? '780px'  : '635px';
    titleTextAside.innerHTML = isOpened ? 'SaaS'  : 'SaaS Kit';
    mainSectionGenerallyBox.style.paddingLeft = isOpened ? '8%' : '20%';
    mainSection.style.width = isOpened ? '1280px'  : '1120px';
   


   // titleTextAsideBox.style.alignItems = isOpened ? 'center'  : 'right';
  
}
