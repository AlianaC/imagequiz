(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),s=(a(26),a(6)),i=a(1),u=a(8),l=a(9),m=a(11),h=a(10),f=(a(27),"https://alianac-imagequiz.herokuapp.com"),d={getQuizzes:function(){return fetch(f+"/quizzes").then((function(e){return e.json()}))},getQuiz:function(e){return fetch(f+"/quiz/".concat(e)).then((function(e){return e.json()}))},saveScore:function(e,t,a){var n={username:e,quizid:t,score:a};return fetch(f+"/score",{method:"POST",headers:{"CONTENT-TYPE":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()}))}},g=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).makeFlowerGrid=function(){for(var e=n.state.flowers,t=[],a=[],c=0;c<e.length;c++){var o=e[c],i=o.name,u=o.img;4===a.length&&(t.push(r.a.createElement("tr",null,a)),a=[]);var l={pathname:"/quiz",state:{flowerName:i}};a.push(r.a.createElement("td",null,r.a.createElement(s.b,{to:l},r.a.createElement("img",{src:"/imagequiz"+u,alt:"flower"})),r.a.createElement("p",{className:"flowerName"},i)))}return t.push(r.a.createElement("tr",null,a)),t},n.body=function(){var e="",t=n.props.location;return t&&t.state&&t.state.user&&(e=t.state.user),r.a.createElement("div",null,n.state.data.length>0?r.a.createElement("div",null,n.state.data.map((function(t,a){return r.a.createElement("div",{className:"pictureDiv",key:a},r.a.createElement(s.b,{className:"qLink",to:{pathname:"quiz",state:{id:t.id,user:e}}},r.a.createElement("img",{src:"/imagequiz"+t.picture,alt:"flower"})),r.a.createElement("figcaption",{className:"flowerName"},r.a.createElement("b",null,t.name)))}))):"")},n.state={username:"",data:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.getQuizzes().then((function(t){return e.setState({data:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e="",t=this.props.location;return t&&t.state&&t.state.user&&(e=t.state.user),r.a.createElement("div",null,r.a.createElement("div",{className:"loginButton"},e.length>0?e:r.a.createElement(s.b,{to:"/login"},r.a.createElement("button",{type:"text"},"Login"))),r.a.createElement("h2",{className:"homepageHeader"},"Image Quiz Homepage"),r.a.createElement("table",{className:"flowerTable"},r.a.createElement("tbody",null,this.body())))}}]),a}(r.a.Component),p=a(20),E=(a(33),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.state.username.trim().length>0&&n.setState({authenticated:!0}),e.preventDefault()},n.onInputChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(p.a)({},a,t))},n.state={username:"",authenticated:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?r.a.createElement(i.a,{to:e}):r.a.createElement("div",{className:"loginPage"},r.a.createElement("h2",null,"Login Page"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.onInputChange}),r.a.createElement("button",{type:"submit"},"Login")))}}]),a}(r.a.Component)),v=(a(34),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).answerClicked=function(e){if(e){var t=n.state.score+1;n.setState({score:t})}var a=n.state.currQ+1;a<n.state.data.length?n.setState({currQ:a}):n.setState({showScore:!0})},n.tryAgain=function(){d.saveScore(n.props.location.state.user,n.props.location.state.id,n.state.score).catch((function(e){return console.log(e)})),n.setState({score:0,showScore:!1,currQ:0})},n.showQuestion=function(){var e=n.state.data;if(0!==e.length)return r.a.createElement("div",{className:"quizSec"},r.a.createElement("img",{src:"/imagequiz"+e[n.state.currQ].image,class:"flowerImg",alt:"flower"}),r.a.createElement("div",{className:"quizQuestions"},r.a.createElement("h4",{className:"questionText"},n.state.currQ+1,") ",e[n.state.currQ].question)),r.a.createElement("div",{className:"answerSec"},e[n.state.currQ].answers.map((function(e){return r.a.createElement("button",{className:"ansB",type:"text",onClick:function(){return n.answerClicked(e.correct)}},e.answerText)}))))},n.state={data:[],currQ:0,score:0,showScore:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location;t&&t.state&&t.state.id&&(d.getQuiz(t.state.id).then((function(t){return e.setState({data:t})})).catch((function(e){return console.log(e)})),console.log(this.state.data))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"quizHeader"},"Image Quiz"),this.state.showScore?r.a.createElement("div",{className:"scoreSec"},r.a.createElement("h4",null,"You scored ",this.state.score," out of 6"),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{type:"text",className:"endB"},"Home")),r.a.createElement("button",{type:"text",className:"endB",onClick:this.tryAgain},"Try Again")):this.showQuestion())}}]),a}(r.a.Component));a(35);var b=function(){return r.a.createElement(s.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login"},r.a.createElement(E,null)),r.a.createElement(i.b,{path:"/quiz",render:function(e){return r.a.createElement(v,e)}}),r.a.createElement(i.b,{path:"/",render:function(e){return r.a.createElement(g,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.b1d98b49.chunk.js.map