(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(2),r=a.n(l),o=(a(13),a(3)),m=a(4),s=a(5),u=a(7),c=a(6),g=(a(14),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).login=function(){n.setState({showLoginForm:!0})},n.onSubmit=function(e){n.state.username.trim().length>0&&n.setState({authenticated:!0}),e.preventDefault()},n.onInputChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(o.a)({},a,t))},n.makeFlowerGrid=function(){for(var e=n.state.flowers,t=[],a=[],l=0;l<e.length;l++){var r=e[l],o=r.name,m=r.img;4==a.length&&(t.push(i.a.createElement("tr",null,a)),a=[]),a.push(i.a.createElement("td",null,i.a.createElement("img",{src:"/imagequiz"+m,alt:"flower"}),i.a.createElement("p",{className:"flowerName"},o)))}return t.push(i.a.createElement("tr",null,a)),t},n.state={username:"",showLoginForm:!1,authenticated:!1,flowers:[{name:"Daffodil",img:"/images/daffodil.png"},{name:"Cherry Blossom",img:"/images/cherryblossom.png"},{name:"Lily",img:"/images/lily.jpg"},{name:"Daisy",img:"/images/daisy.jpg"},{name:"Sunflower",img:"/images/sunflower.png"},{name:"Tulip",img:"/images/tulip.png"},{name:"Rose",img:"/images/rose.png"},{name:"Water Lily",img:"/images/waterlily.png"}]},n}return Object(s.a)(a,[{key:"render",value:function(){return!this.state.authenticated&&this.state.showLoginForm?i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.onSubmit},i.a.createElement("label",null,"Username: "),i.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.onInputChange}),i.a.createElement("button",{type:"submit"},"Login"))):i.a.createElement("div",null,i.a.createElement("div",{className:"loginButton"},this.state.authenticated?this.state.username:i.a.createElement("button",{onClick:this.login},"Login")),i.a.createElement("div",null,i.a.createElement("h3",null,"Hello, From My Homepage")),i.a.createElement("table",{className:"flowerTable"},i.a.createElement("tbody",null,this.makeFlowerGrid())))}}]),a}(i.a.Component));a(15);var h=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.78a988ab.chunk.js.map