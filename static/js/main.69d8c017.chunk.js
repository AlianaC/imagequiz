(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(18),c=a.n(s),o=(a(26),a(6)),i=a(1),l=a(8),m=a(9),u=a(11),h=a(10),w=(a(27),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).makeFlowerGrid=function(){for(var e=r.state.flowers,t=[],a=[],s=0;s<e.length;s++){var c=e[s],i=c.name,l=c.img;4===a.length&&(t.push(n.a.createElement("tr",null,a)),a=[]);var m={pathname:"/quiz",state:{flowerName:i}};a.push(n.a.createElement("td",null,n.a.createElement(o.b,{to:m},n.a.createElement("img",{src:"/imagequiz"+l,alt:"flower"})),n.a.createElement("p",{className:"flowerName"},i)))}return t.push(n.a.createElement("tr",null,a)),t},r.state={username:"",flowers:[{name:"Daffodil",img:"/images/daffodil.png"},{name:"Cherry Blossom",img:"/images/cherryblossom.png"},{name:"Lily",img:"/images/lily.jpg"},{name:"Daisy",img:"/images/daisy.jpg"},{name:"Sunflower",img:"/images/sunflower.png"},{name:"Tulip",img:"/images/tulip.png"},{name:"Rose",img:"/images/rose.png"},{name:"Water Lily",img:"/images/waterlily.png"}]},r}return Object(m.a)(a,[{key:"render",value:function(){var e="",t=this.props.location;return t&&t.state&&t.state.user&&(e=t.state.user),n.a.createElement("div",null,n.a.createElement("div",{className:"loginButton"},e.length>0?e:n.a.createElement(o.b,{to:"/login"},n.a.createElement("button",{type:"text"},"Login"))),n.a.createElement("h2",{className:"homepageHeader"},"Image Quiz Homepage"),n.a.createElement("table",{className:"flowerTable"},n.a.createElement("tbody",null,this.makeFlowerGrid())))}}]),a}(n.a.Component)),g=a(20),T=(a(33),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onSubmit=function(e){r.state.username.trim().length>0&&r.setState({authenticated:!0}),e.preventDefault()},r.onInputChange=function(e){var t=e.target.value,a=e.target.name;r.setState(Object(g.a)({},a,t))},r.state={username:"",authenticated:!1},r}return Object(m.a)(a,[{key:"render",value:function(){var e={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?n.a.createElement(i.a,{to:e}):n.a.createElement("div",{className:"loginPage"},n.a.createElement("h2",null,"Login Page"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("label",null,"Username: "),n.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.onInputChange}),n.a.createElement("button",{type:"submit"},"Login")))}}]),a}(n.a.Component)),f=(a(34),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).answerClicked=function(e){if(e){var t=r.state.score+1;r.setState({score:t})}var a=r.state.currQ+1;a<y.length?r.setState({currQ:a}):r.setState({showScore:!0})},r.tryAgain=function(){r.setState({score:0,showScore:!1,currQ:0})},r.state={currQ:0,score:0,showScore:!1},r}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t="",a=this.props.location;return a&&a.state&&a.state.flowerName&&(t=a.state.flowerName),y="Daffodil"===t?p:"Cherry Blossom"===t?x:d,n.a.createElement("div",null,n.a.createElement("h2",{className:"quizHeader"},"Image Quiz"),this.state.showScore?n.a.createElement("div",{className:"scoreSec"},n.a.createElement("h4",null,"You scored ",this.state.score," out of 6"),n.a.createElement(o.b,{to:"/"},n.a.createElement("button",{type:"text",className:"endB"},"Home")),n.a.createElement("button",{type:"text",className:"endB",onClick:this.tryAgain},"Try Again")):n.a.createElement("div",{className:"quizSec"},n.a.createElement("img",{src:"/imagequiz"+y[this.state.currQ].image,class:"flowerImg",alt:"flower"}),n.a.createElement("div",{className:"quizQuestions"},n.a.createElement("h4",{className:"questionText"},this.state.currQ+1,") ",y[this.state.currQ].question)),n.a.createElement("div",{className:"answerSec"},y[this.state.currQ].answers.map((function(t){return n.a.createElement("button",{className:"ansB",type:"text",onClick:function(){return e.answerClicked(t.correct)}},t.answerText)})))))}}]),a}(n.a.Component)),p=[{question:"What is the name of this flower?",image:"/images/daffodil.png",answers:[{answerText:"Daisy",correct:!1},{answerText:"Daffodil",correct:!0},{answerText:"Lily",correct:!1},{answerText:"Rose",correct:!1}]},{question:"What is the name of the animal?",image:"/images/RedPanda.jpg",answers:[{answerText:"Black Bear",correct:!1},{answerText:"Red Panda",correct:!0},{answerText:"Koala",correct:!1},{answerText:"Lemur",correct:!1}]},{question:"What is the name of the insect?",image:"/images/Ladybug.jpg",answers:[{answerText:"Fly",correct:!1},{answerText:"Grasshopper",correct:!1},{answerText:"Butterfly",correct:!1},{answerText:"Ladybug",correct:!0}]},{question:"What is the name of the plant?",image:"/images/cactus.jpg",answers:[{answerText:"Orchid",correct:!1},{answerText:"Palm Tree",correct:!1},{answerText:"Aloe Vera",correct:!1},{answerText:"Cactus",correct:!0}]},{question:"What kind of fish is in the picture?",image:"/images/Clownfish.jpg",answers:[{answerText:"Clownfish",correct:!0},{answerText:"Betta Fish",correct:!1},{answerText:"Catfish",correct:!1},{answerText:"Goldfish",correct:!1}]},{question:"What kind of plant is there?",image:"/images/SucculentGarden.jpg",answers:[{answerText:"Cactus",correct:!1},{answerText:"Aloe Vera",correct:!1},{answerText:"Succulent Garden",correct:!0},{answerText:"Lilies",correct:!1}]}],x=[{question:"What is the name of the flower?",image:"/images/cherryblossom.png",answers:[{answerText:"Water Lily",correct:!1},{answerText:"Daffodil",correct:!1},{answerText:"Cherry Blossom",correct:!0},{answerText:"Rose",correct:!1}]},{question:"What is the name of the animal?",image:"/images/SeaTurtle.jpg",answers:[{answerText:"Sea Turtle",correct:!0},{answerText:"Seahorse",correct:!1},{answerText:"Shark",correct:!1},{answerText:"Whale",correct:!1}]},{question:"What type of tree is pictured?",image:"/images/LemonTree.jpg",answers:[{answerText:"Pine Tree",correct:!1},{answerText:"Palm Tree",correct:!1},{answerText:"Lemon Tree",correct:!0},{answerText:"Orange Tree",correct:!1}]},{question:"What is the name of the animal?",image:"/images/Otter.jpg",answers:[{answerText:"Sea Otter",correct:!0},{answerText:"Penguin",correct:!1},{answerText:"Walrus",correct:!1},{answerText:"Sea Lion",correct:!1}]},{question:"What is the name of the plant?",image:"/images/VenusFlyTrap.jpg",answers:[{answerText:"Orchid",correct:!1},{answerText:"Venus Fly Trap",correct:!0},{answerText:"Sunflower",correct:!1},{answerText:"Dandelion",correct:!1}]},{question:"What is the name of the animal?",image:"/images/Mongoose.jpg",answers:[{answerText:"Meerkat",correct:!1},{answerText:"Lemur",correct:!1},{answerText:"Fox",correct:!1},{answerText:"Mongoose",correct:!0}]}],d=[{question:"What is the name of this flower?",image:"/images/lily.jpg",answers:[{answerText:"Lily",correct:!0},{answerText:"Daisy",correct:!1},{answerText:"Tulip",correct:!1},{answerText:"Sunflower",correct:!1}]},{question:"What is the name of this animal",image:"/images/Moose.jpg",answers:[{answerText:"Stag",correct:!1},{answerText:"Moose",correct:!0},{answerText:"Reindeer",correct:!1},{answerText:"Goat",correct:!1}]},{question:"What is the breed of this puppy?",image:"/images/ScottishTerrier.jpg",answers:[{answerText:"Maltese",correct:!1},{answerText:"Poodle",correct:!1},{answerText:"Beagle",correct:!1},{answerText:"Scottish Terrier",correct:!0}]},{question:"What is the name of this plant?",image:"/images/AloeVera.jpg",answers:[{answerText:"Cactus",correct:!1},{answerText:"Aloe Vera",correct:!0},{answerText:"Spider Plant",correct:!1},{answerText:"Monstera",correct:!1}]},{question:"What is the name of this insect?",image:"/images/Honeybee.jpg",answers:[{answerText:"Honey Bee",correct:!0},{answerText:"Wasp",correct:!1},{answerText:"Hornet",correct:!1},{answerText:"Fly",correct:!1}]},{question:"What is the breed of this puppy?",image:"/images/ShihTzu.jpg",answers:[{answerText:"Shih Tzu",correct:!0},{answerText:"Maltese",correct:!1},{answerText:"Chihuahua",correct:!1},{answerText:"Pug",correct:!1}]}],y=p,E=f;a(35);var b=function(){return n.a.createElement(o.a,null,n.a.createElement(i.d,null,n.a.createElement(i.b,{path:"/login"},n.a.createElement(T,null)),n.a.createElement(i.b,{path:"/quiz",render:function(e){return n.a.createElement(E,e)}}),n.a.createElement(i.b,{path:"/",render:function(e){return n.a.createElement(w,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.69d8c017.chunk.js.map