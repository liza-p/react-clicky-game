(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),i=t.n(r),l=(t(9),t(1));t(10);var o=function(e){return c.a.createElement("nav",{className:"navbar container-fluid navbar-expand-lg navbar-light bg-light"},c.a.createElement("div",{className:"row",style:{width:"100%"}},c.a.createElement("div",{className:"col-4"},c.a.createElement("a",{className:"navbar-brand",href:"#"},"Clicky Game")),c.a.createElement("div",{className:"col-4 navbar-brand mr-0"},e.message),c.a.createElement("div",{className:"col-4 navbar-brand mr-0"},"Score ",e.score)))};t(11);function m(e){return c.a.createElement("div",{className:"col-12 col-sm-3"},c.a.createElement("div",{className:"card mb-4"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:"img/"+e.card.img,className:"card-img-top p-2",alt:"",style:{width:"150px",height:"150px"},onClick:function(){return e.onSelect(e.card.id)}}))))}function s(e){return c.a.createElement("div",{className:"container",style:{width:"800px"}},c.a.createElement("div",{className:"row"},e.imgCards.map((function(a){return c.a.createElement(m,{key:a.id,card:a,onSelect:e.onSelect})}))))}var d=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"jumbotron jumbotron-fluid pt-0"},c.a.createElement("div",{className:"container"},c.a.createElement("img",{src:"img/central-perk.jpg",style:{height:"200px"}}),c.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!"))),c.a.createElement(s,{imgCards:e.imgCards,onSelect:e.onSelect}))},g=(t(12),[]);var u=function(){var e=Object(n.useState)([{id:1,img:"chandler.png"},{id:2,img:"emily.png"},{id:3,img:"gunther.jpeg"},{id:4,img:"janice.jpg"},{id:5,img:"joey.jpg"},{id:6,img:"monica.png"},{id:7,img:"mrtreeger.jpg"},{id:8,img:"phoebe.jpg"},{id:9,img:"rachel.jpg"},{id:10,img:"richard.jpg"},{id:11,img:"ross.jpg"},{id:12,img:"rossMom.jpg"}]),a=Object(l.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)("Click an image to begin!"),m=Object(l.a)(i,2),s=m[0],u=m[1],p=Object(n.useState)(0),v=Object(l.a)(p,2),h=v[0],b=v[1];return c.a.createElement("div",{className:"App"},c.a.createElement(o,{message:s,score:h}),c.a.createElement(d,{imgCards:t,onSelect:function(e){if(g.includes(e))return u("You've been bamboozled!"),b(0),void(g=[]);u("Unbelievable, eleven is correct!"),b(h+1),g.push(e);var a=t.slice();a.forEach((function(e,t){var n=Math.floor(Math.random()*a.length),c=a[t];a[t]=a[n],a[n]=c})),r(a)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.10d695ba.chunk.js.map