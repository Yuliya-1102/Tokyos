(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_header_js"],{

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (() => {

const headerNavItem = document.querySelectorAll('.header__nav-item');
const headerNavLink = document.querySelectorAll('.header__nav-item a');
headerNavItem.forEach(item => {
  item.addEventListener('click', function (e) {
    document.querySelector('.header__nav-mobile').classList.remove('active');
    document.querySelector('.header__nav-mobile--wrapper').classList.remove('active');
  });
});

//текущая ссылка меню выделить
headerNavLink.forEach(link => {
  let currentUrl = window.location.pathname;
  if (currentUrl.indexOf(link.getAttribute("href")) != -1) {
    link.classList.add("active");
  }
  // if (link.getAttribute("href") === currentUrl){
  //   link.classList.add("active");
  // }
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_header_js.main.js.map