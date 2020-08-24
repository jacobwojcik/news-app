(this.webpackJsonpnews_app=this.webpackJsonpnews_app||[]).push([[0],{26:function(n,e,t){n.exports=t(38)},38:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(22),c=t.n(o),l=t(13),i=t(3),u=t(2),m=t(1),s={colors:{primary:"rgb(255, 255, 255)",dark:"rgb(200,200,200)",black:"black"},fonts:{small:16,medium:20,large:24},media:{phone:"@media (max-width:768px )",tablet:"@media (max-width:1024px),"}};function f(){var n=Object(u.a)(['\n@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap");\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  font-family: "Open Sans", sans-serif;\n  background-color: rgb(250, 246, 246);\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n  color: inherit;\n  &:hover {\n    opacity: 0.8;\n  }\n}\n']);return f=function(){return n},n}var p=Object(m.b)(f()),d=function(n){var e=n.children;return a.a.createElement(m.a,{theme:s},a.a.createElement(a.a.Fragment,null,a.a.createElement(p,null),e))};function h(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-around;\n  width: 70%;\n"]);return h=function(){return n},n}function b(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: ",";\n  color: ",";\n  padding: 1em 2em;\n  border-bottom: 1px solid ",";\n"]);return b=function(){return n},n}var g=m.c.header(b(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.dark})),E=m.c.nav(h()),v=function(){return a.a.createElement(g,{id:"header"},a.a.createElement("h1",null,"News"),a.a.createElement(E,null,a.a.createElement("li",null,a.a.createElement(l.b,{to:""},"Our news")),a.a.createElement("li",null,a.a.createElement(l.b,{to:"/random"},"Random news"))))},x=t(9),w=t.n(x),y=t(14),k=t(15);function j(){var n=Object(u.a)(["\n  cursor: pointer;\n  background-color: ",";\n  font-size: ","px;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 1em 2.5em;\n"]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n  width: 400px;\n  margin: 20px 10px;\n  border: 1px solid ",";\n  height: 600px;\n  background-color: white;\n  transition: 200ms;\n  padding: 1em;\n  overflow: hidden;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-around;\n  h1 {\n    text-align: center;\n  }\n  img {\n    width: 100%;\n  }\n  :hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n  p:last-of-type {\n    text-align: center;\n  }\n"]);return O=function(){return n},n}var S=m.c.div(O(),(function(n){return n.theme.colors.dark})),T=m.c.button(j(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fonts.medium})),z=function(n){var e=n.title,t=n.author,r=n.urlToImage,o=n.description,c=n.url;return a.a.createElement(S,null,a.a.createElement("h1",null,e),a.a.createElement("img",{src:r,alt:"Pics not found :("}),a.a.createElement("p",null,o),a.a.createElement("p",null,"Author: ",t),a.a.createElement(T,{as:"a",href:c,target:"_blank"},"Read more"))};function I(){var n=Object(u.a)(["\n  min-height: 90vh;\n  padding: 2em;\n"]);return I=function(){return n},n}var _=m.c.section(I());function B(){var n=Object(u.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  align-items: center;\n  row-gap: 1em;\n"]);return B=function(){return n},n}var F=m.c.ul(B()),K=function(){var n=Object(r.useState)([]),e=Object(k.a)(n,2),t=e[0],o=e[1];Object(r.useEffect)((function(){c()}),[]);var c=function(){var n=Object(y.a)(w.a.mark((function n(){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://newsapi.org/v2/top-headlines?country=us&pageSize=16&apiKey=2fbcc91b204d434fb09c1ed52893aaa0").then((function(n){return n.json()})).then((function(n){return o(n.articles)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return a.a.createElement(_,null,a.a.createElement(F,null,t.map((function(n){var e=n.title,t=n.author,r=n.urlToImage,o=n.description,c=n.url;return a.a.createElement("li",{key:e},a.a.createElement(z,{title:e,author:t,urlToImage:r,description:o,url:c}))}))))};function C(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 1em;\n  transition: 100ms ease-in-out;\n  background-color: ",";\n  border: none;\n\n  outline: none;\n  width: 100%;\n  height: 100%;\n  :hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n"]);return C=function(){return n},n}function G(){var n=Object(u.a)(["\n  cursor: pointer;\n  width: 10%;\n  font-size: ","px;\n  padding: 0.5em;\n  outline: none;\n  background-color: ",";\n  color: ",";\n  border: none;\n  border-bottom: 2px solid ",";\n  :hover {\n    opacity: 0.8;\n  }\n"]);return G=function(){return n},n}function J(){var n=Object(u.a)(["\n  padding: 0.5em;\n  font-size: ","px;\n  outline: none;\n  border: none;\n  border-bottom: 2px solid ",";\n  width: 80%;\n  background-color: transparent;\n"]);return J=function(){return n},n}function N(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]);return N=function(){return n},n}function P(){var n=Object(u.a)(["\n  display: flex;\n  flex-flow: column;\n  justify-content: space-around;\n  width: 50%;\n  height: 200px;\n  padding: 2em 1em;\n"]);return P=function(){return n},n}function R(){var n=Object(u.a)(["\n  background-color: rgb(231, 225, 225);\n  text-align: center;\n"]);return R=function(){return n},n}var W=m.c.footer(R()),Y=m.c.div(P()),A=m.c.ul(N()),D=m.c.input(J(),(function(n){return n.theme.fonts.medium}),(function(n){return n.theme.colors.black})),H=m.c.button(G(),(function(n){return n.theme.fonts.medium}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.black})),M=m.c.button(C(),(function(n){return n.theme.colors.primary})),$=function(){return a.a.createElement(W,null,a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(Y,null,a.a.createElement("h1",null,"Follow #us"),a.a.createElement(A,null,a.a.createElement("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("li",null,"Github")),a.a.createElement("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("li",null,"Twitter")),a.a.createElement("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("li",null,"Facebook")))),a.a.createElement(Y,null,a.a.createElement("h1",null,"Newsletter"),a.a.createElement("form",null,a.a.createElement(D,{placeholder:"Please enter your email address here"}),a.a.createElement(H,{type:"submit"},"OK")),a.a.createElement("p",null,"Our terms"))),a.a.createElement(M,{as:"a",href:"#header"},a.a.createElement("h1",null,"Back to top!")))},q=function(){return a.a.createElement(d,null,a.a.createElement(v,null),a.a.createElement(K,null),a.a.createElement($,null))},L=t(19);function Q(){var n=Object(u.a)(["\n  width: 80%;\n  height: 200px;\n  text-align: center;\n  select {\n    padding: 0.5em;\n    margin: 1em 0;\n    width: 80%;\n    font-size: ","px;\n    outline: none;\n    border: none;\n    border-bottom: 2px solid ",";\n    background-color: transparent;\n  }\n  button {\n    margin: 1em 0;\n    width: 20%;\n    font-size: ","px;\n    padding: 0.5em;\n    outline: none;\n    background-color: ",";\n    color: white;\n    border: none;\n    border-bottom: 2px solid ",";\n    :hover {\n      opacity: 0.8;\n    }\n  }\n"]);return Q=function(){return n},n}function U(){var n=Object(u.a)(["\n  padding: 1em 2em;\n  display: flex;\n  flex-flow: column;\n  min-height: 65vh;\n  justify-content: center;\n  align-items: center;\n"]);return U=function(){return n},n}var V=m.c.section(U()),X=m.c.form(Q(),(function(n){return n.theme.fonts.medium}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.fonts.medium}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.black})),Z=function(){var n=Object(r.useState)({newsType:"Business",articles:[]}),e=Object(k.a)(n,2),t=e[0],o=e[1],c=function(){var n=Object(y.a)(w.a.mark((function n(){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://newsapi.org/v2/top-headlines?country=us&pageSize=3&category=".concat(t.newsType,"&apiKey=2fbcc91b204d434fb09c1ed52893aaa0")).then((function(n){return n.json()})).then((function(n){return o(n.articles)}));case 2:console.log(t);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return a.a.createElement(V,null,a.a.createElement(X,null,a.a.createElement("h1",null,"Select category of your 3 news"),a.a.createElement("select",{value:t.newsType,onChange:function(n){o(Object(L.a)(Object(L.a)({},t),{},{newsType:n.target.value}))}},a.a.createElement("option",null,"Business"),a.a.createElement("option",null,"Entertainment"),a.a.createElement("option",null,"General"),a.a.createElement("option",null,"Health"),a.a.createElement("option",null,"Science"),a.a.createElement("option",null,"Sports"),a.a.createElement("option",null,"Technology")),a.a.createElement("button",{onClick:function(n){n.preventDefault(),c()}},"Submit")),a.a.createElement(F,null,t.length>0&&t.map((function(n){var e=n.title,t=n.author,r=n.urlToImage,o=n.description,c=n.url;return a.a.createElement("li",null,a.a.createElement(z,{title:e,author:t,urlToImage:r,description:o,url:c}))}))))},nn=function(){return a.a.createElement(d,null,a.a.createElement(v,null),a.a.createElement(Z,null),a.a.createElement($,null))};var en=function(){return a.a.createElement(l.a,null,a.a.createElement(i.a,{path:"/",exact:!0,component:q}),a.a.createElement(i.a,{path:"/random",component:nn}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(en,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.cf1726f3.chunk.js.map