(this["webpackJsonpuni-talks"]=this["webpackJsonpuni-talks"]||[]).push([[0],{31:function(e,t,a){e.exports=a(55)},36:function(e,t,a){},37:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(21),o=a.n(i),l=(a(36),a(22)),s=a(23),c=a(14),u=a(28),m=a(27),d=(a(37),a(16));a(46);d.initializeApp({apiKey:"AIzaSyDoFhVwAx4cYngh96KNDY7RjQCKB9SuOzE",authDomain:"uni-talks.firebaseapp.com",databaseURL:"https://uni-talks.firebaseio.com",projectId:"uni-talks",storageBucket:"uni-talks.appspot.com",messagingSenderId:"56556087798",appId:"1:56556087798:web:7d510019da467ab550ffd7",measurementId:"G-RSC283PWF6"});var h=d,p=a(24),f=a.n(p),g=a(29),v=a(15),E=a(56),b=a(57),C=a(58);function x(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"enter-message"},r.a.createElement("input",{id:"messagesend",type:"text",onChange:function(e){i(e.target.value)},value:a}),r.a.createElement("button",{style:{border:"none",color:"#C4C4C4",borderRadius:"50%",padding:"10px",background:"#646566",fontSize:"25px",marginLeft:"1%"},className:"far fa-paper-plane",onClick:function(){if(console.log(h.auth().currentUser.uid),""!==a){var e=h.database().ref("Message"),t={text:a,name:h.auth().currentUser.providerData[0]};e.push(t)}else alert("Please test some message")}}))}var S=a(26);function k(){var e=Object(n.useState)(),t=Object(v.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){h.database().ref("Message").on("value",(function(e){var t=e.val(),a=[];for(var n in t)a.push(Object(g.a)({id:n},t[n]));i(a)}))}),[]),r.a.createElement("div",null,r.a.createElement(E.a,{id:"box",fluid:!0},r.a.createElement(S.a,null,a?a.map((function(e){return r.a.createElement(b.a,{key:e.id,style:{marginTop:"10px"}},e.name.photoURL?r.a.createElement(C.a,{xs:1},r.a.createElement("img",{src:e.name.photoURL,alt:"Avatar",className:"avatar"})):r.a.createElement(C.a,{className:"fas fa-user-circle",style:{fontSize:"40px",color:"#C4C4C4"},xs:1}),r.a.createElement(C.a,{className:"text-left",xs:11},r.a.createElement("p",{style:{background:"#4E555E",padding:"3px 10px",fontSize:"20px",color:"#C4C4C4",borderRadius:"10px"}},e.text," ")))})):r.a.createElement("div",{style:{fontSize:"40px",color:"white",textAlign:"center",margin:"10% 42%"}},r.a.createElement(b.a,null,"Waiting For"),r.a.createElement(b.a,null,"Go Justitech"),r.a.createElement(b.a,null,"Message")))),a?r.a.createElement(x,null):"")}var y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).uiConfig={signInFlow:"popup",signInOptions:[h.auth.GoogleAuthProvider.PROVIDER_ID,h.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},n.componentDidMount=function(){h.auth().onAuthStateChanged((function(e){n.setState({isSignedIn:!!e}),console.log("user",e)}))},n.state={isSignedIn:!1,value:""},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return console.log(h.auth().currentUser),r.a.createElement("div",null,this.state.isSignedIn?r.a.createElement(E.a,{fluid:!0},"asif"===this.state.value?r.a.createElement(k,null):r.a.createElement("form",{style:{color:"white",margin:"15% 45%"},onSubmit:this.handleSubmit},r.a.createElement("h3",{style:{fontSize:"16px",paddingLeft:"22px"}},"GoJustitech Pin"),r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{onClick:function(){return h.auth().signOut()}},"Sign out!"))):r.a.createElement(f.a,{uiConfig:this.uiConfig,firebaseAuth:h.auth()}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.a856cbe3.chunk.js.map