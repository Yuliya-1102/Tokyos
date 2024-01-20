(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_delivery_js"],{

/***/ "./src/js/components/delivery.js":
/*!***************************************!*\
  !*** ./src/js/components/delivery.js ***!
  \***************************************/
/***/ (() => {

const footerModalBtn = document.querySelector('.footer__modal-btn');
const footerModal = document.querySelector('.footer__modal');
const itemConditions = document.querySelectorAll('.footer__item-conditions');
itemConditions.forEach(item => {
  item.addEventListener('click', () => {
    footerModal.classList.add('active');
  });
});
footerModalBtn.addEventListener('click', () => {
  footerModal.classList.remove('active');
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_delivery_js.main.js.map