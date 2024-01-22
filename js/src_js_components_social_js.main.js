(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_social_js"],{

/***/ "./src/js/components/social.js":
/*!*************************************!*\
  !*** ./src/js/components/social.js ***!
  \*************************************/
/***/ (() => {

const socialFixWrapper = document.querySelector('.social__fix-wrapper');
const pageHeight = document.documentElement.scrollHeight;
if (window.matchMedia("(min-width: 1010px)").matches) {
  window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > 150) {
      socialFixWrapper.classList.add('active');
    }
    if (window.scrollY < 149 || window.scrollY > pageHeight - 1000) {
      socialFixWrapper.classList.remove('active');
    }
  });
} else {
  socialFixWrapper.classList.add('active');
  window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > pageHeight - 1100) {
      socialFixWrapper.classList.add('desactive');
    } else {
      socialFixWrapper.classList.remove('desactive');
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=src_js_components_social_js.main.js.map