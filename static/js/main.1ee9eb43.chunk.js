(this.webpackJsonpgeojson=this.webpackJsonpgeojson||[]).push([[0],{36:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var a,r,i,o,c,u,s,l,p=n(0),d=n.n(p),x=n(24),b=n.n(x),f=(n(36),n(5)),j=n.n(f),h=n(7),g=n(6),m=n(25),v=n.n(m),O=n(26),k=n.n(O),w=function(t){return t.map(String)},y=function(){var t=Object(h.a)(j.a.mark((function t(e){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://www.openstreetmap.org/api/0.6/map?bbox=".concat(w(e)));case 2:return n=t.sent,a=k()(n.data),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=n(27),C=n(3),L=n(4),F=n(1),z=L.a.form(a||(a=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  position: absolute;\n  z-index: 10;\n  top: 10px;\n  left: 10px;\n  background: white;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  align-items: center;\n"]))),M=L.a.div(r||(r=Object(C.a)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),A=L.a.input(i||(i=Object(C.a)(["\n  position: relative;\n  width: 85px;\n  height: 25px;\n  font-size: 16px;\n  text-align: center;\n  border: 1px solid #1b8cc4;\n  border-radius: 5px;\n  transition: 0.3s;\n  :hover {\n    box-shadow: #1b8cc4 0px 3px 8px;\n  }\n"]))),B=L.a.div(o||(o=Object(C.a)(["\n  height: 50px;\n  width: 100px;\n  margin: 5px;\n  border: 1px solid black;\n"]))),E=L.a.div(c||(c=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),P=L.a.button(u||(u=Object(C.a)(["\n  margin: 20px 0px;\n  background: #1b8cc4;\n  border-radius: 5px;\n  border: none;\n  padding: 10px;\n  color: white;\n  transition: 0.3s;\n  cursor: default;\n  :hover {\n    background: #0c4561;\n  }\n"]))),T=function(t){var e=t.submit,n=p.useState(""),a=Object(g.a)(n,2),r=a[0],i=a[1],o=p.useState(""),c=Object(g.a)(o,2),u=c[0],s=c[1],l=p.useState(""),d=Object(g.a)(l,2),x=d[0],b=d[1],f=p.useState(""),j=Object(g.a)(f,2),h=j[0],m=j[1];return Object(F.jsxs)(z,{onSubmit:function(t){t.preventDefault(),e([parseFloat(r),parseFloat(u),parseFloat(x),parseFloat(h)])},children:[Object(F.jsx)(M,{id:"top-text",children:"enter Boundary Box manually"}),Object(F.jsx)(A,{"data-testid":"max-lat",placeholder:"Max Lat",name:"max-lat",type:"text",value:h,onChange:function(t){m(t.target.value)}}),Object(F.jsxs)(E,{children:[Object(F.jsx)(A,{"data-testid":"min-lng",placeholder:"Min Lng",name:"min-lng",type:"text",value:r,onChange:function(t){return i(t.target.value)}}),Object(F.jsx)(B,{}),Object(F.jsx)(A,{"data-testid":"max-lng",placeholder:"Max Lng",name:"max-lng",type:"text",value:x,onChange:function(t){return b(t.target.value)}})]}),Object(F.jsx)(A,{"data-testid":"min-lat",placeholder:"Min Lat",type:"text",value:u,onChange:function(t){return s(t.target.value)}}),Object(F.jsx)(P,{"data-testid":"bbox-submit",type:"submit",children:"Search"}),Object(F.jsx)(M,{id:"bottom-text",children:"...or just click the map!"})]})},W=n(71),J=function(t){var e=t.features,n=t.activeFeature,a=t.featureClicked,r=t.mapState,i=t.latLngToPixel;return Object(F.jsx)("svg",{width:r.width,height:r.height,style:{top:0,left:0},children:e.map((function(t){return t.geometry.coordinates.map((function(e,o){return Object(F.jsx)(D,{mapState:r,latLngToPixel:i,coordsArray:e,colour:t.id===n?"red":"#1b8cc4",activeFeatureStrokeWidth:t.id===n?8:5,onClick:function(){a(t.id)}},"".concat(t.id,"-").concat(o))}))}))})},D=function(t){var e=t.coordsArray,n=t.colour,a=t.activeFeatureStrokeWidth,r=t.onClick,i=t.mapState,o=t.latLngToPixel,c=i,u=c.center,s=c.zoom,l=(p.useMemo((function(){return Object(W.a)().domain([1,18]).range([2,5])}),[]),"");if(e.length<2)return null;for(var d=0;d<e.length;d++){var x=o([e[d][1],e[d][0]],u,s);l+="".concat(x[0],",").concat(x[1]," ")}return l?Object(F.jsx)("polyline",{"data-testid":"poly-line",onClick:function(){return r()},points:l,stroke:n,fill:"none",strokeWidth:a}):null},I=L.a.div(s||(s=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  position: absolute;\n  z-index: 10;\n  top: 325px;\n  left: 10px;\n  background: white;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  align-items: center;\n"]))),N=L.a.div(l||(l=Object(C.a)(["\n  font-size: 20px;\n"]))),Z=function(t){var e=t.name;return Object(F.jsx)(I,{children:Object(F.jsx)(N,{children:e||"No specified name"})})},q=function(t,e,n,a){return"https://api.maptiler.com/maps/streets/256/".concat(n,"/").concat(t,"/").concat(e).concat(a>=2?"@2x":"",".png?key=").concat("tLsFLpESk6ikup9Az8ia")},G=function(t){return t-.05/69},H=function(t){return t+.05/69};var K=function(){var t=d.a.useState([-.14379,51.50008,-.14235,51.50152]),e=Object(g.a)(t,2),n=e[0],a=e[1],r=d.a.useState(),i=Object(g.a)(r,2),o=i[0],c=i[1],u=d.a.useState(),s=Object(g.a)(u,2),l=s[0],p=s[1];d.a.useEffect((function(){function t(){return(t=Object(h.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:n=t.sent,c(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(n)}),[n]);var x=null===o||void 0===o?void 0:o.features.find((function(t){return t.id===l}));return Object(F.jsxs)("div",{style:{height:"100vh",width:"100vw"},children:[Object(F.jsx)(T,{submit:function(t){return a(t)}}),l&&x?Object(F.jsx)(Z,{name:x.properties.name}):null,Object(F.jsx)(S.a,{defaultCenter:[51.50061,-.14752],defaultZoom:16.5,provider:q,onClick:function(t){var e,r=t.latLng;a([G((e=r)[1]),G(e[0]),H(e[1]),H(e[0])]),console.log(n,o.features)},children:o?Object(F.jsx)(J,{features:o.features,activeFeature:l,featureClicked:p}):null})]})};b.a.render(Object(F.jsx)(d.a.StrictMode,{children:Object(F.jsx)(K,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.1ee9eb43.chunk.js.map