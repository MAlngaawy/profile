(this["webpackJsonpfirst-project"]=this["webpackJsonpfirst-project"]||[]).push([[0],{29:function(e){e.exports=JSON.parse('[{"id":1,"username":"Mohammed Alngaawy","note":"Bey the vegtablies from suber market and bring it to the hpuse before 7:30 PM","done":false,"delete":false},{"id":2,"username":"Mohammed Alngaawy","note":"Bey the veho yoi saas use before 7:30 PM","done":true,"delete":false},{"id":3,"username":"Mohammed Abdo","note":"Bey theMore things to the hpuse before 7:30 PM","done":false,"delete":false}]')},32:function(e,a,t){e.exports=t.p+"static/media/avatar.d854840c.jpg"},33:function(e,a,t){e.exports=t(55)},38:function(e,a,t){},39:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(13),r=t.n(l),o=(t(38),t(39),t(7)),m=t(8);function s(){return c.a.createElement("div",{className:"right-side about"},c.a.createElement("p",null,c.a.createElement("span",null,"Hey")," my name is Mohammed Abdulmpneim i'm a frontend developer with some backend knowledge"))}function i(){return c.a.createElement("div",{className:"right-side connect"},c.a.createElement("h1",null,"Connect Here"))}var u=t(16),d=t(14),E=t(19),p=t(17),h=t(9),v=t(10),f=t(29),N=t(57);function b(){var e=f,a=Object(n.useState)(e),t=Object(p.a)(a,2),l=t[0],r=t[1],o=Object(n.useState)({id:"",username:"",note:"",done:!1,delete:!1}),m=Object(p.a)(o,2),s=m[0],i=m[1],b=Object(n.useState)("d-none"),g=Object(p.a)(b,2),j=g[0],O=g[1],y=function(e){var a=e.target.value;i(Object(E.a)({},s,Object(d.a)({id:l.length+1},e.target.name,a)))},k=function(e){r([].concat(Object(u.a)(l),[l[e.id-1].delete=!0]))},w=function(e){r([].concat(Object(u.a)(l),[l[e.id-1].done=!l[e.id-1].done]))};return c.a.createElement("div",{className:"todo-com"},c.a.createElement("div",{className:"out-side"},c.a.createElement(N.a,{color:"danger",className:j},"You Can't add an empty note, Bitch!!!"),c.a.createElement("form",null,c.a.createElement("input",{className:"name-field",type:"text",value:s.username,name:"username",placeholder:"Write Your Name",onChange:y}),c.a.createElement("input",{className:"note-field",type:"text",value:s.note,name:"note",placeholder:"The Note...",onChange:y}),c.a.createElement("label",{htmlFor:"submit",className:"add-note"}," ",c.a.createElement(h.a,{icon:v.c})," "),c.a.createElement("input",{type:"submit",id:"submit",value:"",className:"add-note-btn",onClick:function(e){e.preventDefault(),""!==s.username&&""!==s.note?(r([].concat(Object(u.a)(l),[s])),i(Object(E.a)({},s,{username:"",note:""}))):(setTimeout((function(){O("")}),100),setTimeout((function(){O("d-none")}),2e3))}}))),c.a.createElement("div",{className:"in-side"},l.filter((function(e){return!1===e.delete&&0==e.done})).map((function(e){return c.a.createElement("div",{className:"single-note",key:e.id},c.a.createElement("div",{className:"user-image"},"Ma"),c.a.createElement("div",{className:"note-content"},c.a.createElement("h4",{className:"username"},e.username),c.a.createElement("p",{className:"the-note"},e.note)),c.a.createElement("div",{className:"command"},c.a.createElement("div",{className:"done"},c.a.createElement(h.a,{className:"icon",icon:v.b,onClick:function(){return w(e)}})),c.a.createElement("div",{className:"delete"},c.a.createElement(h.a,{className:"icon",icon:v.d,onClick:function(){return k(e)}}))))})),l.filter((function(e){return 1==e.done&&0==e.delete})).map((function(e){return c.a.createElement("div",{className:"single-note done",key:e.id},c.a.createElement("div",{className:"user-image"},"Ma"),c.a.createElement("div",{className:"note-content"},c.a.createElement("h4",{className:"username"},e.username),c.a.createElement("p",{className:"the-note"},e.note)),c.a.createElement("div",{className:"command"},c.a.createElement("div",{className:"done"},c.a.createElement(h.a,{className:"icon",icon:v.a,onClick:function(){return w(e)}})),c.a.createElement("div",{className:"delete"},c.a.createElement(h.a,{className:"icon",icon:v.d,onClick:function(){return k(e)}}))))}))))}function g(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Other App Here"))}function j(){var e=Object(o.g)(),a=Object(o.f)().pathname;return c.a.createElement("div",{className:"projects right-side"},c.a.createElement("div",{className:"projects-navbar"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(m.b,{to:"".concat(e.url,"/todo-app"),className:"/projects/todo-app"===a?"active":""},"ToDO App")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"".concat(e.url,"/other"),className:"/projects/other"===a?"active":""},"Other App")))),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"".concat(e.path,"/:todo-app")}," ",c.a.createElement(b,null)," "),c.a.createElement(o.a,{path:"".concat(e.path,"/:other")}," ",c.a.createElement(g,null)," "),c.a.createElement(o.a,{path:"".concat(e.path)}," ",c.a.createElement("h1",null,"Please Add Any App")," ")))}var O=t(32),y=t.n(O),k=function(){var e=Object(o.f)().pathname;return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"avatar"},c.a.createElement("img",{src:y.a})),c.a.createElement("ul",null,c.a.createElement("li",null," ",c.a.createElement(m.b,{to:"/",className:"/"===e?"active":""}," About ")," "),c.a.createElement("li",null," ",c.a.createElement(m.b,{to:"/projects",className:"/projects"===e?"active":""}," Projects ")," "),c.a.createElement("li",null," ",c.a.createElement(m.b,{to:"/connect",className:"/connect"===e?"active":""}," connect me ")," ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(54);r.a.render(c.a.createElement((function(){return c.a.createElement(m.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(k,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{exact:!0,path:"/"},c.a.createElement(s,null)),c.a.createElement(o.a,{path:"/projects"},c.a.createElement(j,null)),c.a.createElement(o.a,{path:"/connect"},c.a.createElement(i,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.3d2778b8.chunk.js.map