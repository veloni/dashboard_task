const asideMove = () => {
  const sidebar = document.querySelector('.js-left-sidebar');
  const mainSectionGenerallyBox = document.querySelector('.main-section-generally-box');
  const mainSection = document.querySelector('.js-main-section');
  const asideItemText = document.querySelectorAll('.js-remove-aside');
  const asideBox = document.querySelectorAll('.js-aside-change-flex-remove');

  const listener = () => {
    const toggleButton = document.querySelector('.js-toggle-sidebar');
    toggleButton.onclick = function() {
      handleToggleButtonClick();
    };
  };

  const handleToggleButtonClick = () => {
    const sidebarClasses = sidebar.classList;
    const isOpened = sidebarClasses.contains('open');

    isOpened && sidebarClasses.remove('open');
    !isOpened && sidebarClasses.add('open');

    asideStyleHandler(isOpened);

    if (isOpened) {
      sidebarClasses.remove('open');

      asideBox.forEach((item) => {
        item.style.justifyContent = 'center';
      });
      asideItemText.forEach((item) => {
        item.style.display = 'none';
      });
      return;
    }

    sidebarClasses.add('open');

    asideBox.forEach((item) => {
      item.style.justifyContent = 'left';
          item.classList.add('dn');
    });

  setTimeout(() => {
    asideItemText.forEach((item) => {
      item.style.display = 'flex';
    });
  }, 500);
  };

  asideStyleHandler = (isOpened) => {
    const titleTextAside = document.querySelector('.js-title-text-aside-box');
    const titleTextAsideBox = document.querySelector('.js-title-aside-box');

    search.style.marginLeft = isOpened ? '120px' : '365px';
    titleTextAside.innerHTML = isOpened ? 'SaaS' : 'SaaS Kit';
    mainSectionGenerallyBox.style.paddingLeft = isOpened ? '10%' : '22.5%';
    mainSection.style.width = isOpened ? '95%' : '98%';
    titleTextAsideBox.style.justifyContent = isOpened ? 'center' : 'space-between';
  };

  listener();
}

asideMove();