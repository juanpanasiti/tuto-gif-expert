(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=(n(16),n(2)),o=n(9),u=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],u=r[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return!e.includes(i)&&i.trim()?(u(""),[i].concat(Object(o.a)(e))):(console.error("El elemento ya existe en el arreglo o est\xe1 vac\xedo"),e)}))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){u(e.target.value)}})})},j=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,c,r,i,s,o=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]?o[1]:10,!t){e.next=12;break}return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=").concat(n,"&api_key=0qcjQZHcsfhdgfFO9gFnON5Z4WxhxnU2"),e.next=5,fetch(a);case 5:return c=e.sent,e.next=8,c.json();case 8:return r=e.sent,i=r.data,s=i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.id,n=e.title,c=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:c,width:"150px",alt:n}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:n})," ",Object(a.jsx)("br",{})," ",Object(a.jsx)("small",{children:t})]})]})},p=function(e){var t=e.category,n=function(e,t){var n=Object(c.useState)({data:[],loading:!0}),a=Object(s.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){f(e,t).then((function(e){i({data:e,loading:!1})}))}),[e,t]),r}(t,e.limit),r=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(a.jsx)("div",{className:"card-grid",children:null===r||void 0===r?void 0:r.map((function(e){return Object(a.jsx)(m,Object(j.a)({},e),e.id)}))})]})},x=function(){var e=Object(c.useState)([""]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)(u,{setCategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(p,{category:e},e)}))})]})};i.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6419e1ea.chunk.js.map