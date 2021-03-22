const asideMove = () => {
  const sidebar = document.querySelector('.js-left-sidebar');
  const mainSectionGenerallyBox = document.querySelector('.main-section-generally-box');
  const mainSection = document.querySelector('.js-main-section');
  const asideItemText = document.querySelectorAll('.js-remove-aside');
  const asideBox = document.querySelectorAll('.js-aside-change-flex-remove');
  const toggleButton = document.querySelector('.js-toggle-sidebar');
  const search = document.querySelector('.js-search');

  toggleButton.onclick = function() {
    handleToggleButtonClick();
  };

  const handleToggleButtonClick = () => {
    _asideOpen = !_asideOpen;

    if (_adideOpenForDraw) {
      document.querySelector('.js-trigger-aside').click();
      _argumentCircle = 0;
      _canvasHeight = 0;
      _canvasWidth = 0;
      window.globalRerender();
    }

    if (!_adideOpenForDraw) {
      document.querySelector('.js-trigger-aside').click();
      _argumentCircle = 2;
      _canvasHeight = 20;
      _canvasWidth = 20;
      window.globalRerender();
    }

    _adideOpenForDraw = !_adideOpenForDraw;

    DrawCircle(_argumentCircle, _canvasHeight, _canvasWidth);

    const sidebarClasses = sidebar.classList;
    const isOpened = sidebarClasses.contains('open');

    isOpened && sidebarClasses.remove('open');
    !isOpened && sidebarClasses.add('open');

    asideStyleHandler(isOpened);

    if (isOpened) {
      sidebarClasses.remove('open');
      asideBox.forEach((item) => item.style.justifyContent = 'center');
      asideItemText.forEach((item) => item.style.display = 'none');
      return;
    }

    sidebarClasses.add('open');

    asideBox.forEach((item) => {
      item.style.justifyContent = 'left';
      item.classList.add('dn');
    });

    setTimeout(() => {
      asideItemText.forEach((item) => item.style.display = 'flex');
    }, 500);
  };

  const asideStyleHandler = (isOpened) => {
    const titleTextAside = document.querySelector('.js-title-text-aside-box');
    const titleTextAsideBox = document.querySelector('.js-title-aside-box');
    const allTextChoise = document.querySelectorAll('.text-choise-filter');

    if (isOpened) {
      _tasksFilterOpen && allTextChoise.forEach((item) => item.style.display = 'none');
    } else {
      _tasksFilterOpen && allTextChoise.forEach((item) => item.style.display = 'flex');
    }

    search.style.marginLeft = isOpened ? '150px' : '22vw';
    titleTextAside.innerHTML = isOpened ? 'SaaS' : 'SaaS Kit';
    mainSectionGenerallyBox.style.paddingLeft = isOpened ? '11%' : '22.5%';
    mainSection.style.width = isOpened ? '95%' : '98%';
    titleTextAsideBox.style.justifyContent = isOpened ? 'center' : 'space-between';
  };
}

asideMove();