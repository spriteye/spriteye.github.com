(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{189:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(192);function o(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return o=function(){return n},n}var u=t(190).default.div(o()),c=t(195);e.default=function(){return a.a.createElement(c.a,null,a.a.createElement(u,null,a.a.createElement(i.a,{size:"5rem"})),a.a.createElement("p",null,"소프트웨어 엔지니어 조황목입니다."),a.a.createElement("p",null,"직업이 고통이 되지 않도록 환경을 지속해서 개선하며, 시간이 지난 후에도 내가 이해할 수 있는 소프트웨어를 만들기 위해 노력합니다."))}},191:function(n,e,t){var r;n.exports=(r=t(194))&&r.default||r},192:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(190);function o(){var n=c(["\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n  "]);return o=function(){return n},n}function u(){var n=c(["\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]);return u=function(){return n},n}function c(n,e){return e||(e=n.slice(0)),n.raw=e,n}e.a=function(n){var e=n.size,t=void 0===e?"2.5rem":e,r=i.default.div(u(),t,t),c=i.default.img(o(),t,t);return a.a.createElement(r,null,a.a.createElement(c,{alt:"Hwangmok Cho",src:"/images/me.png"}))}},194:function(n,e,t){"use strict";t.r(e);t(22);var r=t(0),a=t.n(r),i=t(96);e.default=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(i.a,Object.assign({location:e,pageResources:t},t.json)):null}},195:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(193),o=t.n(i),u=t(190),c=t(198),l=function(){var n=Object(r.useState)({y:window.pageYOffset,isUp:!0}),e=n[0],t=n[1];return Object(r.useLayoutEffect)(function(){var n=function(){t(function(n){return{y:window.pageYOffset,isUp:n.y>window.pageYOffset}})};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}},[]),e};function s(){var n=d(["\n  font-size: 1.2rem;\n  color: #333;\n  opacity: .5;\n  width: 2rem;\n  display: inline-flex;\n  justify-content: center;\n\n  &:hover {\n    opacity: 1;\n  }\n"]);return s=function(){return n},n}function f(){var n=d(["\n  margin: auto;\n  padding: 0 2rem;\n  width: 50rem;\n  display: flex;\n  justify-content: space-between;\n  color: grey;\n  font-size: 0.75em;\n"]);return f=function(){return n},n}function m(){var n=d(["\n  background-color: white;\n  border-top: 1px solid #eee;\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  height: 2.5rem;\n  bottom: 0;\n  transition: bottom 0.4s ease;\n\n  &.hide {\n    bottom: -2.5rem;\n  }\n"]);return m=function(){return n},n}function d(n,e){return e||(e=n.slice(0)),n.raw=e,n}var p=function(){var n=l().isUp;return a.a.createElement(h,{className:o()({hide:!n})},a.a.createElement(v,null,"© 2019 Hwangmok Cho",a.a.createElement("div",null,a.a.createElement(g,{href:"https://github.com/spriteye",title:"GitHub"},a.a.createElement(c.b,null)),a.a.createElement(g,{href:"mailto:spriteye@gmail.com",title:"spriteye@gmail.com"},a.a.createElement(c.a,null)),a.a.createElement(g,{href:"https://www.buymeacoffee.com/mNtBzyAFU",title:"Buy me a coffee"},a.a.createElement("img",{src:"https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg",alt:"Buy me a coffee"})))))},h=u.default.footer(m()),v=u.default.div(f()),g=u.default.a(s()),w=t(66),y=t.n(w);t(191),t(9).default.enqueue,a.a.createContext({});var b=t(192);function E(){var n=O(["\n  align-items: center;\n  display: inline-flex;\n\n  &.on-about {\n    display: none;\n  }\n"]);return E=function(){return n},n}function x(){var n=O(["\n  font-family: Monoton;\n  font-size: 2rem;\n  color: hotpink;\n  align-items: center;\n  display: flex;\n"]);return x=function(){return n},n}function j(){var n=O(["\n  margin: auto;\n  padding: 0 2rem;\n  width: 50rem;\n  display: flex;\n  justify-content: space-between;\n"]);return j=function(){return n},n}function k(){var n=O(["\n  background-color: white;\n  border-bottom: 1px solid #eee;\n  position: sticky;\n  display: flex;\n  height: 3.5rem;\n  top: 0;\n  transition: top 0.4s ease;\n\n  &.hide {\n    top: -3.5rem;\n  }\n"]);return k=function(){return n},n}function O(n,e){return e||(e=n.slice(0)),n.raw=e,n}var z=function(){var n=l().isUp;return a.a.createElement(C,{className:o()({hide:!n})},a.a.createElement(N,null,a.a.createElement(S,{to:"/"},"spriteye"),a.a.createElement(q,{to:"/about",activeClassName:"on-about",partiallyActive:!0},a.a.createElement(b.a,null))))},C=u.default.header(k()),N=u.default.div(j()),S=Object(u.default)(y.a)(x()),q=Object(u.default)(y.a)(E());function B(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  margin: auto;\n  max-width: 50rem;\n  padding: 1rem 1.5rem;\n"]);return B=function(){return n},n}var H=function(n){var e=n.children;return a.a.createElement(U,null,e)},U=u.default.main(B()),G=t(197),M=t.n(G);function L(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);\n  @import url(//fonts.googleapis.com/css?family=Monoton|Nanum+Gothic&display=swap);\n\n  ","\n\n  body {\n    background-color: white;\n    font-family: 'Spoqa Han Sans', 'Nanum Gothic', sans-serif;\n    font-weight: 300;\n    font-size: 17px;\n    color: #333;\n    word-break: keep-all;\n    line-height: 1.5;\n  }\n  \n  a {\n    text-decoration: none;\n    cursor: pointer;\n  }\n"]);return L=function(){return n},n}var Y=Object(u.createGlobalStyle)(L(),M.a);e.a=function(n){var e=n.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Y,null),a.a.createElement(z,null),a.a.createElement(H,{children:e}),a.a.createElement(p,null))}}}]);
//# sourceMappingURL=component---src-pages-about-js-f4fb8b86ab0bfe3cf26b.js.map