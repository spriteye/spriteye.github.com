(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{188:function(n,e,t){"use strict";t.r(e);t(209);var r=t(0),a=t.n(r),i=t(195);function o(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n                    _ _\n     ___ _ __  _ __(_) |_ ___ _   _  ___   _ __ ___   ___\n    / __| '_ | '__| | __/ _  | | |/ _  | '_ ' _  / _     __  |_) | |  | | ||  __/ |_| |  __/_| | | | | |  __/\n    |___/ .__/|_|  |_|_____|__, |___(_)_| |_| |_|___|\n        |_|                   |___/\n  "],["\n                    _ _\n     ___ _ __  _ __(_) |_ ___ _   _  ___   _ __ ___   ___\n    / __| '_ \\| '__| | __/ _ \\ | | |/ _ \\ | '_ ' _ \\ / _ \\\n    \\__ \\ |_) | |  | | ||  __/ |_| |  __/_| | | | | |  __/\n    |___/ .__/|_|  |_|\\__\\___|\\__, |\\___(_)_| |_| |_|\\___|\n        |_|                   |___/\n  "]);return o=function(){return n},n}e.default=function(){return console.log(String.raw(o())),a.a.createElement(i.a,null,"spriteye.me")}},191:function(n,e,t){var r;n.exports=(r=t(194))&&r.default||r},192:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(190);function o(){var n=u(["\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n  "]);return o=function(){return n},n}function _(){var n=u(["\n    width: ",";\n    height: ",";\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]);return _=function(){return n},n}function u(n,e){return e||(e=n.slice(0)),n.raw=e,n}e.a=function(n){var e=n.size,t=void 0===e?"2.5rem":e,r=i.default.div(_(),t,t),u=i.default.img(o(),t,t);return a.a.createElement(r,null,a.a.createElement(u,{alt:"Hwangmok Cho",src:"/images/me.png"}))}},194:function(n,e,t){"use strict";t.r(e);t(22);var r=t(0),a=t.n(r),i=t(96);e.default=function(n){var e=n.location,t=n.pageResources;return t?a.a.createElement(i.a,Object.assign({location:e,pageResources:t},t.json)):null}},195:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(193),o=t.n(i),_=t(190),u=t(198),c="object"==typeof window,l=function(){var n=Object(r.useState)({y:c?window.pageYOffset:0,isUp:!0}),e=n[0],t=n[1];return Object(r.useLayoutEffect)(function(){var n=function(){t(function(n){return{y:window.pageYOffset,isUp:n.y>window.pageYOffset}})};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}},[]),e};function s(){var n=d(["\n  font-size: 1.2rem;\n  color: #333;\n  opacity: .5;\n  width: 2rem;\n  display: inline-flex;\n  justify-content: center;\n\n  &:hover {\n    opacity: 1;\n  }\n"]);return s=function(){return n},n}function f(){var n=d(["\n  margin: auto;\n  padding: 0 2rem;\n  width: 50rem;\n  display: flex;\n  justify-content: space-between;\n  color: grey;\n  font-size: 0.75em;\n"]);return f=function(){return n},n}function m(){var n=d(["\n  background-color: white;\n  border-top: 1px solid #eee;\n  position: fixed;\n  display: flex;\n  width: 100vw;\n  height: 2.5rem;\n  bottom: 0;\n  transition: bottom 0.4s ease;\n\n  &.hide {\n    bottom: -2.5rem;\n  }\n"]);return m=function(){return n},n}function d(n,e){return e||(e=n.slice(0)),n.raw=e,n}var p=function(){var n=l().isUp;return a.a.createElement(g,{className:o()({hide:!n})},a.a.createElement(h,null,"© 2019 Hwangmok Cho",a.a.createElement("div",null,a.a.createElement(w,{href:"https://github.com/spriteye",title:"GitHub"},a.a.createElement(u.b,null)),a.a.createElement(w,{href:"mailto:spriteye@gmail.com",title:"spriteye@gmail.com"},a.a.createElement(u.a,null)),a.a.createElement(w,{href:"https://www.buymeacoffee.com/mNtBzyAFU",title:"Buy me a coffee"},a.a.createElement("img",{src:"https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg",alt:"Buy me a coffee"})))))},g=_.default.footer(m()),h=_.default.div(f()),w=_.default.a(s()),v=t(66),y=t.n(v);t(191),t(9).default.enqueue,a.a.createContext({});var b=t(192);function E(){var n=S(["\n  align-items: center;\n  display: inline-flex;\n\n  &.on-about {\n    display: none;\n  }\n"]);return E=function(){return n},n}function x(){var n=S(["\n  font-family: Monoton;\n  font-size: 2rem;\n  color: hotpink;\n  align-items: center;\n  display: flex;\n"]);return x=function(){return n},n}function j(){var n=S(["\n  margin: auto;\n  padding: 0 2rem;\n  width: 50rem;\n  display: flex;\n  justify-content: space-between;\n"]);return j=function(){return n},n}function k(){var n=S(["\n  background-color: white;\n  border-bottom: 1px solid #eee;\n  position: sticky;\n  display: flex;\n  height: 3.5rem;\n  top: 0;\n  transition: top 0.4s ease;\n\n  &.hide {\n    top: -3.5rem;\n  }\n"]);return k=function(){return n},n}function S(n,e){return e||(e=n.slice(0)),n.raw=e,n}var O=function(){var n=l().isUp;return a.a.createElement(z,{className:o()({hide:!n})},a.a.createElement(C,null,a.a.createElement(N,{to:"/"},"spriteye"),a.a.createElement(q,{to:"/about",activeClassName:"on-about",partiallyActive:!0},a.a.createElement(b.a,null))))},z=_.default.header(k()),C=_.default.div(j()),N=Object(_.default)(y.a)(x()),q=Object(_.default)(y.a)(E());function B(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  margin: auto;\n  max-width: 50rem;\n  padding: 1rem 1.5rem;\n"]);return B=function(){return n},n}var H=function(n){var e=n.children;return a.a.createElement(U,null,e)},U=_.default.main(B()),G=t(197),M=t.n(G);function L(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);\n  @import url(//fonts.googleapis.com/css?family=Monoton|Nanum+Gothic&display=swap);\n\n  ","\n\n  body {\n    background-color: white;\n    font-family: 'Spoqa Han Sans', 'Nanum Gothic', sans-serif;\n    font-weight: 300;\n    font-size: 17px;\n    color: #333;\n    word-break: keep-all;\n    line-height: 1.5;\n  }\n  \n  a {\n    text-decoration: none;\n    cursor: pointer;\n  }\n"]);return L=function(){return n},n}var Y=Object(_.createGlobalStyle)(L(),M.a);e.a=function(n){var e=n.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Y,null),a.a.createElement(O,null),a.a.createElement(H,{children:e}),a.a.createElement(p,null))}},209:function(n,e,t){var r=t(1),a=t(30),i=t(14);r(r.S,"String",{raw:function(n){for(var e=a(n.raw),t=i(e.length),r=arguments.length,o=[],_=0;t>_;)o.push(String(e[_++])),_<r&&o.push(String(arguments[_]));return o.join("")}})}}]);
//# sourceMappingURL=component---src-pages-index-js-6537b66e05aafb531b40.js.map