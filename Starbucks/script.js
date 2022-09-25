'use strict';

const none = document.getElementsByClassName('none');
const closeMenu = document.getElementsByClassName('closeMenu');
const downArrow = document.getElementsByClassName('fa-angle-down');
const rotate = document.getElementsByClassName('rotate');
const bars = document.getElementsByClassName('fa-bars');
const xMark = document.getElementsByClassName('fa-xmark');
const mobileMenu = document.getElementsByClassName('mobile__menu');

// HAKKIMIZDA KISMININ ARROWLARININ ÇALIŞMASI
for (let i = 0; i < downArrow.length; i++) {
  downArrow[i].addEventListener('click', function () {
    closeMenu[i].classList.toggle('none');
    downArrow[i].classList.toggle('rotate');
  });
}

// MOABİLE SHORTCUT BARSLARIN ÇALIŞASI
for (let i = 0; i < bars.length; i++) {
  bars[i].addEventListener('click', function () {
    bars[i].classList.add('none');
    xMark[i].classList.remove('none');
    mobileMenu[i].classList.remove('none');
  });
  for (let i = 0; i < xMark.length; i++) {
    xMark[i].addEventListener('click', function () {
      bars[i].classList.remove('none');
      xMark[i].classList.add('none');
      mobileMenu[i].classList.add('none');
    });
  }
}
