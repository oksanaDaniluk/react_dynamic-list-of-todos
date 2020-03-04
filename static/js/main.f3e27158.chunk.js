(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=n(2),o=n(4),s=n.n(o),m=n(8),i=n(7),d=n(3),p=n(1),b=n.n(p),f=(n(15),function(e){return fetch(e).then((function(e){return e.json()}))}),E=function(e){var t=e.todo,n=t.id,a=t.title,c=t.completed,l=t.user;return r.a.createElement("tr",null,r.a.createElement("th",null,n),r.a.createElement("th",null,null===l||void 0===l?void 0:l.name),r.a.createElement("th",null,a),r.a.createElement("th",null,c?"complete":"active"))},h=function(e){var t=e.todos;return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"User"),r.a.createElement("th",null,"Task"),r.a.createElement("th",null,"Status"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(E,{key:e.id,todo:e})}))))};l.a.render(r.a.createElement((function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),o=Object(d.a)(l,2),p=o[0],E=o[1],y=Object(a.useState)(""),j=Object(d.a)(y,2),O=j[0],v=j[1],k=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,f("https://jsonplaceholder.typicode.com/todos");case 3:return t=e.sent,e.next=6,f("https://jsonplaceholder.typicode.com/users");case 6:n=e.sent,E(function(){return t.map((function(e){return Object(m.a)({},e,{user:n.find((function(t){return t.id===e.userId}))})}))}());case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of TODOs"),n?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:b()({selected:"title"===O}),type:"button",onClick:function(){return v("title")}},"sort by title"),r.a.createElement("button",{className:b()({selected:"completed"===O}),type:"button",onClick:function(){return v("completed")}},"sort by status"),r.a.createElement("button",{className:b()({selected:"user"===O}),type:"button",onClick:function(){return v("user")}},"by user name"),r.a.createElement(h,{todos:function(){switch(O){case"title":return Object(u.a)(p).sort((function(e,t){return e.title.localeCompare(t.title)}));case"completed":return Object(u.a)(p).sort((function(e,t){return Number(t.completed)-Number(e.completed)}));case"user":return Object(u.a)(p).sort((function(e,t){return e.user.name.localeCompare(t.user.name)}));default:return p}}()})):r.a.createElement("button",{type:"button",disabled:n,onClick:k,className:"button"},n?r.a.createElement(r.a.Fragment,null,"Loading..."):r.a.createElement(r.a.Fragment,null,"Load Todos")))}),null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f3e27158.chunk.js.map