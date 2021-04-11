(function() {
  const navigationCatalog = document.querySelector('.navigation__catalog'),
        navigationList    = document.querySelector('.navigation__list--hide'),
        navigationArrow   = document.querySelector('.navigation__arrow');

  navigationCatalog.addEventListener('click', () => {
    navigationList.classList.toggle('navigation__list--active');
    navigationArrow.classList.toggle('navigation__arrow--active');
  });

  const sliderLeftArrow   = document.querySelector('.slider__arrow-left'),
        sliderRightArrow  = document.querySelector('.slider__arrow-right'),
        slider            = document.querySelector('.slider__frame'),
        sliderItems       = document.querySelector('.slider__item');
  let   slideNumber       = 0,
        shiftPosition     = 0;

  sliderRightArrow.addEventListener('click', function() {

    if (slideNumber === 3) {
        return;
    }

    shiftPosition += -(sliderItems.offsetWidth + 40);
    slider.style.transform = `translateX(${shiftPosition}px)`;
    slideNumber ++;
  });

  sliderLeftArrow.addEventListener('click', function() {

    if (slideNumber === 0) {
        return;
    }

    shiftPosition += (sliderItems.offsetWidth + 40);
    slider.style.transform = `translateX(${shiftPosition}px)`;
    slideNumber --;
  });

  const mobileHeaderImage     = document.querySelector('.mobile__header-image'),
        mobileNavigation      = document.querySelector('.mobile__navigation'),
        mobileNavigationClose = document.querySelector('.mobile__navigation-close');

  mobileHeaderImage.addEventListener('click', (event) => {
    event.stopPropagation();
    mobileNavigation.classList.toggle('mobile__navigation--active');
  });

  mobileNavigationClose.addEventListener('click', (event) => {
    event.stopPropagation();
    mobileNavigation.classList.toggle('mobile__navigation--active');
  });

}());