(this["webpackJsonpspaceviewer-app"]=this["webpackJsonpspaceviewer-app"]||[]).push([[0],{220:function(e,t,a){e.exports=a(408)},225:function(e,t,a){},253:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),c=a.n(l),o=(a(225),a(226),a(112)),i=a.n(o),s=a(210),u=a(113),m=a(116),d=a(114),p=a.n(d),E=a(192),f=a.n(E),v=a(115),g=a.n(v),w=a(415),h=a(209),y=a(418),k=a(417),D=a(83);a(253);function b(){var e=Object(u.a)(["\n  max-height: 200px;\n  overflow-y: auto;\n"]);return b=function(){return e},e}function C(){var e=Object(u.a)(["\n  padding: 3rem;\n"]);return C=function(){return e},e}var j=m.a.div(C()),x=m.a.div(b()),A=function(e){var t=e.item;return r.a.createElement(w.a,{trigger:r.a.createElement(h.a,{src:t.previewUrl,rounded:!0,size:"small"})},r.a.createElement(w.a.Header,null,t.title),r.a.createElement(w.a.Content,{image:!0},r.a.createElement(h.a,{size:"large",rounded:!0,src:t.previewUrl}),r.a.createElement(w.a.Description,null,r.a.createElement(y.a,null,"ID"),r.a.createElement("p",null,t.nasaId),r.a.createElement(y.a,null,"Source"),r.a.createElement("p",null,t.center),r.a.createElement(y.a,null,"Date created"),r.a.createElement("p",null,g()(t.dateCreated).format("M/DD/YYYY"),"\xa0\xa0(",g()(t.dateCreated).fromNow(),")"),r.a.createElement(y.a,null,"Description"),r.a.createElement(x,null,r.a.createElement("p",null,t.longDescription)))))},I=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){!function(){var e,t;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(f.a.get("https://images-assets.nasa.gov/popular.json"));case 2:e=a.sent,t=e.data.collection.items.map((function(e){return{title:e.data[0].title,keyWords:e.data[0].keywords,shortDescription:e.data[0].description_508,longDescription:e.data[0].description,previewUrl:e.links[0]&&e.links[0].href,center:e.data[0].center,nasaId:e.data[0].nasa_id,dateCreated:e.data[0].date_created}})),l(t);case 5:case"end":return a.stop()}}))}()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(j,null,r.a.createElement(k.a,{celled:!0,striped:!0},r.a.createElement(k.a.Header,null,r.a.createElement(k.a.Row,null,r.a.createElement(k.a.HeaderCell,{colSpan:"2"},"NASA Images"))),r.a.createElement(k.a.Body,null,a.map((function(e){return r.a.createElement(k.a.Row,{key:p.a.generate()},r.a.createElement(k.a.Cell,{style:{verticalAlign:"top"}},r.a.createElement(A,{item:e})),r.a.createElement(k.a.Cell,{style:{verticalAlign:"top"}},r.a.createElement("h3",null,e.title),e.keyWords&&e.keyWords.map((function(e){return r.a.createElement(D.a,{key:p.a.generate()},e)})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null," ",e.shortDescription)))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[220,1,2]]]);
//# sourceMappingURL=main.ef3f482b.chunk.js.map