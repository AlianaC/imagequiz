(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(18),o=a.n(s),i=(a(26),a(9)),c=a(1),l=a(7),m=a(8),u=a(11),f=a(10),h=(a(27),function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).makeFlowerGrid=function(){for(var e=r.state.flowers,t=[],a=[],s=0;s<e.length;s++){var o=e[s],c=o.name,l=o.img;4===a.length&&(t.push(n.a.createElement("tr",null,a)),a=[]);var m={pathname:"/quiz",state:{flowerName:c,flowerImg:l}};a.push(n.a.createElement("td",null,n.a.createElement(i.b,{to:m},n.a.createElement("img",{src:"/imagequiz"+l,alt:"flower"})),n.a.createElement("p",{className:"flowerName"},c)))}return t.push(n.a.createElement("tr",null,a)),t},r.state={username:"",flowers:[{name:"Daffodil",img:"/images/daffodil.png"},{name:"Cherry Blossom",img:"/images/cherryblossom.png"},{name:"Lily",img:"/images/lily.jpg"},{name:"Daisy",img:"/images/daisy.jpg"},{name:"Sunflower",img:"/images/sunflower.png"},{name:"Tulip",img:"/images/tulip.png"},{name:"Rose",img:"/images/rose.png"},{name:"Water Lily",img:"/images/waterlily.png"}]},r}return Object(m.a)(a,[{key:"render",value:function(){var e="",t=this.props.location;return t&&t.state&&t.state.user&&(e=t.state.user),n.a.createElement("div",null,n.a.createElement("div",{className:"loginButton"},e.length>0?e:n.a.createElement(i.b,{to:"/login"},n.a.createElement("button",{type:"text"},"Login"))),n.a.createElement("h3",{className:"homepageHeader"},"Image Quiz Homepage"),n.a.createElement("table",{className:"flowerTable"},n.a.createElement("tbody",null,this.makeFlowerGrid())))}}]),a}(n.a.Component)),w=a(20),g=(a(33),function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onSubmit=function(e){r.state.username.trim().length>0&&r.setState({authenticated:!0}),e.preventDefault()},r.onInputChange=function(e){var t=e.target.value,a=e.target.name;r.setState(Object(w.a)({},a,t))},r.state={username:"",authenticated:!1},r}return Object(m.a)(a,[{key:"render",value:function(){var e={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?n.a.createElement(c.a,{to:e}):n.a.createElement("div",{className:"loginPage"},n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("label",null,"Username: "),n.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.onInputChange}),n.a.createElement("button",{type:"submit"},"Login")))}}]),a}(n.a.Component)),p=(a(34),function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={questions:d,currQ:0,score:0,showScore:!1},r}return Object(m.a)(a,[{key:"render",value:function(){var e="",t="",a=this.props.location;return a&&a.state&&(a.state.flowerName&&(e=a.state.flowerName),a.state.flowerImg&&(t=a.state.flowerImg)),v="Daffodil"===e?d:"Cherry Blossom"===e?E:b,n.a.createElement("div",null,n.a.createElement("h2",{className:"quizHeader"},"Image Quiz"),n.a.createElement("div",{className:"quizSec"},n.a.createElement("img",{src:"/imagequiz"+t,class:"flowerImg",alt:"flower"}),n.a.createElement("div",{className:"quizQuestions"},n.a.createElement("h4",{className:"questionText"},v[this.state.currQ].question)),n.a.createElement("div",{className:"answerSec"},v[this.state.currQ].answers.map((function(e){return n.a.createElement("button",{className:"ansB",type:"text"},e.answerText)})))))}}]),a}(n.a.Component)),d=[{question:"What is the name of this flower?",answers:[{answerText:"Daisy",correct:!1},{answerText:"Daffodil",corret:!0},{answerText:"Lily",correct:!1},{answerText:"Rose",correct:!1}]},{question:"What is the name of this flower?",answers:[{answerText:"Daisy",correct:!1},{answerText:"Daffodil",corret:!0},{answerText:"Lily",correct:!1},{answerText:"Rose",correct:!1}]}],E=[{question:"What is the name of thy flower?2",answers:[{answerText:"Daisy",correct:!1},{answerText:"Daffodil",corret:!0},{answerText:"Lily",correct:!1},{answerText:"Rose",correct:!1}]},{question:"What is the name of thee flower?2",answers:[{answerText:"Daisy",correct:!1},{answerText:"Daffodil",corret:!0},{answerText:"Lily",correct:!1},{answerText:"Rose",correct:!1}]}],b=[{question:"What is the name of this flower?3",answers:[{answerText:"Daisy",correct:!1},{answerText:"Daffodil",corret:!0},{answerText:"Lily",correct:!1},{answerText:"Rose",correct:!1}]},{question:"What is the name of this flower?3",answers:[{answerText:"Daisy",correct:!1},{answerText:"Daffodil",corret:!0},{answerText:"Lily",correct:!1},{answerText:"Rose",correct:!1}]}],v=d,y=p;a(35);var x=function(){return n.a.createElement(i.a,null,n.a.createElement(c.d,null,n.a.createElement(c.b,{path:"/login"},n.a.createElement(g,null)),n.a.createElement(c.b,{path:"/quiz",render:function(e){return n.a.createElement(y,e)}}),n.a.createElement(c.b,{path:"/",render:function(e){return n.a.createElement(h,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.563010dd.chunk.js.map