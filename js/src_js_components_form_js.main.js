(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_form_js"],{

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/***/ (() => {

const formItem = document.querySelectorAll('.form__item');
const formBtnNext = document.querySelectorAll('.form__item-btn--next');
const sendBtn = document.getElementById('form__send');
const formThanks = document.querySelector('.form__thanks');
const thanksBtn = document.querySelector('.form__thanks-btn');
const itemInput = document.querySelectorAll('.form__item-input');

//дилегирование
const formContent = document.querySelector('.form__content');
let i = 1;
formContent.addEventListener('click', event => {
  let target = event.target;
  if (target.classList.contains('form__item-btn--next')) {
    formItem.forEach(item => {
      item.classList.remove('active');
    });
    formItem[i].classList.add('active');
    i++;
  }
  if (target.closest('.form__thanks-btn')) {
    formThanks.classList.remove('active');
    i = 0;
    formItem[i].classList.add('active');
    i++;
  }
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_form_js.main.js.map