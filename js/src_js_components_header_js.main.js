(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_header_js"],{

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (() => {

const headerNavItem = document.querySelectorAll('.header__nav-item');
headerNavItem.forEach(item => {
  item.addEventListener('click', function (e) {
    let parent = e.target.parentNode;
    headerNavItem.forEach(item => {
      item.classList.remove('active');
      parent.classList.add('active');
    });
    document.querySelector('.header__nav-mobile').classList.remove('active');
    document.querySelector('.header__nav-mobile--wrapper').classList.remove('active');
  });
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_header_js.main.js.map