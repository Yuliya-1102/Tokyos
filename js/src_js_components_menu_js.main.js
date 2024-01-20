(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_menu_js"],{

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/***/ (() => {

// плавное появление
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = {
  threshold: [0.2]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

// переключение меню
let menuNavigationItem = document.querySelectorAll('.menu__navigation-item');
let menuItem = document.querySelectorAll('.menu__item-wrapper');
menuNavigationItem.forEach(item => {
  item.addEventListener('click', function (event) {
    let target = event.target;
    let dataHandler = target.dataset.tabsMenuHandler;
    menuNavigationItem.forEach(elem => {
      elem.classList.remove('active');
    });
    target.classList.add('active');
    menuItem.forEach(item => {
      item.classList.remove('active');
      let dataField = item.dataset.tabsMenuField;
      if (dataHandler === dataField) {
        item.classList.add('active');
      }
    });
  });
});

// modal
const menu = document.querySelector('.menu');
const menuModal = document.querySelector('.menu__modal');
menu.addEventListener('click', event => {
  let target = event.target;

  //открытие и закрытие модального окна ЗАКАЗАТЬ
  if (target.classList.contains('menu__cards-btn')) {
    menuModal.classList.add('active');
  }
  if (target.classList.contains('menu__modal-btn')) {
    menuModal.classList.remove('active');
  }

  // выбор ингридиентов
  if (target.closest('.menu__cards-icon')) {
    let parent = event.target.parentNode;
    parent.classList.toggle('active');
  }
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_menu_js.main.js.map