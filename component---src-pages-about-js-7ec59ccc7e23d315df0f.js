(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{189:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(192);function o(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return o=function(){return n},n}var c=t(190).default.div(o()),u=t(195);e.default=function(){return a.a.createElement(u.a,null,a.a.createElement(c,null,a.a.createElement(i.a,{size:"5rem"})),a.a.createElement("p",null,"소프트웨어 엔지니어 조황목입니다."),a.a.createElement("p",null,"직업이 고통이 되지 않도록 환경을 지속해서 개선하며, 시간이 지난 후에도 내가 이해할 수 있는 소프트웨어를 만들기 위해 노력합니다."))}},191:function(n,e,t){var r;n.exports=(r=t(194))&&r.default||r},192:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(190);function o(){var n=u(["\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n  "]);return o=function(){return n},n}function c(){var n=u(["\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]);return c=function(){return n},n}function u(n,e){return e||(e=n.slice(0)),n.raw=e,n}e.a=function(n){var e=n.size,t=void 0===e?"2.5rem":e,r=i.default.div(c(),t,t),u=i.default.img(o(),t,t);return a.a.createElement(r,null,a.a.createElement(u,{alt:"Hwangmok Cho",src:"/images/me.png"}))}},194:function(n,e,t){"use strict";t.r(e);t(22);var r=t(0),a=t.n(r),i=t(96);e.default=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(i.a,Object.assign({location:e,pageResources:t},t.json)):null}},195:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(193),o=t.n(i),c=t(190),u=t(198),l="object"==typeof window,s=function(){var n=Object(r.useState)({y:l?window.pageYOffset:0,isUp:!0}),e=n[0],t=n[1];return Object(r.useLayoutEffect)(function(){var n=function(){t(function(n){return{y:window.pageYOffset,isUp:n.y>window.pageYOffset}})};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}},[]),e};function f(){var n=p(["\n  font-size: 1.2rem;\n  color: #333;\n  opacity: .5;\n  width: 2rem;\n  display: inline-flex;\n  justify-content: center;\n\n  &:hover {\n    opacity: 1;\n  }\n"]);return f=function(){return n},n}function m(){var n=p(["\n  margin: auto;\n  padding: 0 2rem;\n  width: 50rem;\n  display: flex;\n  justify-content: space-between;\n  color: grey;\n  font-size: 0.75em;\n"]);return m=function(){return n},n}function d(){var n=p(["\n  background-color: white;\n  border-top: 1px solid #eee;\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  height: 2.5rem;\n  bottom: 0;\n  transition: bottom 0.4s ease;\n\n  &.hide {\n    bottom: -2.5rem;\n  }\n"]);return d=function(){return n},n}function p(n,e){return e||(e=n.slice(0)),n.raw=e,n}var h=function(){var n=s().isUp;return a.a.createElement(v,{className:o()({hide:!n})},a.a.createElement(w,null,"© 2019 Hwangmok Cho",a.a.createElement("div",null,a.a.createElement(g,{href:"https://github.com/spriteye",title:"GitHub"},a.a.createElement(u.b,null)),a.a.createElement(g,{href:"mailto:spriteye@gmail.com",title:"spriteye@gmail.com"},a.a.createElement(u.a,null)),a.a.createElement(g,{href:"https://www.buymeacoffee.com/mNtBzyAFU",title:"Buy me a coffee"},a.a.createElement("img",{src:"https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg",alt:"Buy me a coffee"})))))},v=c.default.footer(d()),w=c.default.div(m()),g=c.default.a(f()),y=t(66),b=t.n(y);t(191),t(9).default.enqueue,a.a.createContext({});var E=t(192);function x(){var n=z(["\n  align-items: center;\n  display: inline-flex;\n\n  &.on-about {\n    display: none;\n  }\n"]);return x=function(){return n},n}function j(){var n=z(["\n  font-family: Monoton;\n  font-size: 2rem;\n  color: hotpink;\n  align-items: center;\n  display: flex;\n"]);return j=function(){return n},n}function k(){var n=z(["\n  margin: auto;\n  padding: 0 2rem;\n  width: 50rem;\n  display: flex;\n  justify-content: space-between;\n"]);return k=function(){return n},n}function O(){var n=z(["\n  background-color: white;\n  border-bottom: 1px solid #eee;\n  position: sticky;\n  display: flex;\n  height: 3.5rem;\n  top: 0;\n  transition: top 0.4s ease;\n\n  &.hide {\n    top: -3.5rem;\n  }\n"]);return O=function(){return n},n}function z(n,e){return e||(e=n.slice(0)),n.raw=e,n}var C=function(){var n=s().isUp;return a.a.createElement(N,{className:o()({hide:!n})},a.a.createElement(S,null,a.a.createElement(q,{to:"/"},"spriteye"),a.a.createElement(B,{to:"/about",activeClassName:"on-about",partiallyActive:!0},a.a.createElement(E.a,null))))},N=c.default.header(O()),S=c.default.div(k()),q=Object(c.default)(b.a)(j()),B=Object(c.default)(b.a)(x());function H(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  margin: auto;\n  max-width: 50rem;\n  padding: 1rem 1.5rem;\n"]);return H=function(){return n},n}var U=function(n){var e=n.children;return a.a.createElement(G,null,e)},G=c.default.main(H()),M=t(197),L=t.n(M);function Y(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);\n  @import url(//fonts.googleapis.com/css?family=Monoton|Nanum+Gothic&display=swap);\n\n  ","\n\n  body {\n    background-color: white;\n    font-family: 'Spoqa Han Sans', 'Nanum Gothic', sans-serif;\n    font-weight: 300;\n    font-size: 17px;\n    color: #333;\n    word-break: keep-all;\n    line-height: 1.5;\n  }\n  \n  a {\n    text-decoration: none;\n    cursor: pointer;\n  }\n"]);return Y=function(){return n},n}var A=Object(c.createGlobalStyle)(Y(),L.a);e.a=function(n){var e=n.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,null),a.a.createElement(C,null),a.a.createElement(U,{children:e}),a.a.createElement(h,null))}}}]);
//# sourceMappingURL=component---src-pages-about-js-7ec59ccc7e23d315df0f.js.map