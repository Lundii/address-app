(this["webpackJsonpadddress-app"]=this["webpackJsonpadddress-app"]||[]).push([[0],{23:function(n,e,t){n.exports=t.p+"static/media/mapimg4.36e2c096.jpg"},26:function(n,e,t){n.exports=t.p+"static/media/mapimg5.5de1602a.png"},31:function(n,e,t){n.exports=t(43)},43:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(22),o=t.n(c),i=t(10),u=t(11),l=t(1),f=t(2),s=t(23),p=t.n(s);function b(){var n=Object(l.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  filter: blur(1px);\n  -webkit-filter: blur(1px);\n  height: 640px;\n  width: 360px;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n"]);return b=function(){return n},n}function d(){var n=Object(l.a)(["\n  width: 100%;\n  position: relative;\n"]);return d=function(){return n},n}var g=f.a.div(d()),m=f.a.div(b(),p.a),v=t(4),O=Object(r.createContext)(),h=function(n){var e=Object(r.useState)({searchQuery:"",queryResult:{},details:{},page:1,itemsPerPage:20,totalPages:1,error:""}),t=Object(v.a)(e,2),c=t[0],o=t[1];return a.a.createElement(O.Provider,{value:[c,o]},n.children)},j=t(7),x=t.n(j),y=t(12),w=t(8);function E(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function k(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?E(t,!0).forEach((function(e){Object(w.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):E(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var P=function(n,e){var t=n.target.value;e((function(n){return k({},n,{searchQuery:t})})),n.preventDefault()},z=function(){var n=Object(y.a)(x.a.mark((function n(e,t){var r,a,c,o,i,u,l,f,s,p;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.searchQuery,a=e.page,c=e.itemsPerPage,o=(a-1)*c,t((function(n){return k({},n,{queryResult:{},error:""})})),n.next=5,fetch("https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?fq=type:adres&q=".concat(r,"&start=").concat(o,"&rows=").concat(c,"&fq=*:*"));case 5:return i=n.sent,n.next=8,i.json();case 8:if(u=n.sent,l=u.response,f=l.docs,s=l.numFound,p=Math.ceil(s/c),!f||f.length){n.next=13;break}return n.abrupt("return",t((function(n){return k({},n,{error:"No result found"})})));case 13:t((function(n){return k({},n,{totalPages:p,queryResult:k({},u.response)})}));case 14:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),D=t(26),C=t.n(D);function S(){var n=Object(l.a)(["\n  height: 24px;\n  background-image: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n"]);return S=function(){return n},n}function Q(){var n=Object(l.a)(["\n  margin-left: 10px;\n  padding: 10px;\n  width: 35px;\n  padding: 10px;\n  background-color: black;\n  border-radius: 10px;\n  cursor: pointer;\n"]);return Q=function(){return n},n}function q(){var n=Object(l.a)(["\n  padding: 10px;\n  border: 0;\n  border-radius: 10px;\n  background-color: rgba(253, 253, 255);\n  font-family: 'Quicksand', sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n"]);return q=function(){return n},n}function B(){var n=Object(l.a)(["\n  display: flex;\n  margin: 0 auto;\n  }\n"]);return B=function(){return n},n}function R(){var n=Object(l.a)(["\n  margin: 10px auto;\n  background-color: rgba(0, 0, 0, 0.65);\n  padding: 10px;\n  color: white;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  border-radius: 10px;\n"]);return R=function(){return n},n}function I(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 190px;\n"]);return I=function(){return n},n}function L(){var n=Object(l.a)(["\n  margin: 0 auto;\n"]);return L=function(){return n},n}var M=f.a.div(L()),N=f.a.div(I()),G=f.a.h4(R()),J=f.a.div(B()),V=f.a.input(q()),W=f.a.div(Q()),F=f.a.div(S(),C.a);function $(){var n=Object(l.a)(["\n"]);return $=function(){return n},n}function A(){var n=Object(l.a)(["\n  height: 20px;\n  width: 20px;\n  padding: 5px 0 0 10px;\n"]);return A=function(){return n},n}function H(){var n=Object(l.a)(["\n  width: 150px;\n  font-size: 12px;\n"]);return H=function(){return n},n}function K(){var n=Object(l.a)(["\n  padding: 5px;\n  margin: 0 0 0 auto;\n"]);return K=function(){return n},n}function T(){var n=Object(l.a)(["\n  font-family: 'Bitter', serif;\n  margin: 7px;\n  padding: 7 px;\n  color: white;\n"]);return T=function(){return n},n}function U(){var n=Object(l.a)(["\n  width: 100px;\n  margin: 7px;\n  padding: 7px;\n  background-color: rgba(0, 0, 0, 0.65);\n  color: white;\n  font-family: 'Bitter', serif;\n  font-weight: 500;\n"]);return U=function(){return n},n}function X(){var n=Object(l.a)(["\n  height: 50px;\n  height: ",";\n  width: 100%;\n  padding: 1px;\n  box-sizing: border-box;\n  display: flex;\n  background-color: ",";\n"]);return X=function(){return n},n}function Y(){var n=Object(l.a)(["\n  text-decoration: none;\n"]);return Y=function(){return n},n}var Z=Object(f.a)(i.b)(Y()),_=f.a.div(X(),(function(n){return n.home?"50px":"38px"}),(function(n){return n.home?"rgba(0,0,0,0)":"#262626"})),nn=f.a.h4(U()),en=f.a.label(T()),tn=Object(f.a)(J)(K()),rn=Object(f.a)(V)(H()),an=Object(f.a)(F)(A()),cn=(Object(f.a)(W)($()),function(n){var e=n.path,t=Object(r.useContext)(O),c=Object(v.a)(t,2),o=c[0],i=c[1];return"search"===e?a.a.createElement(_,null,a.a.createElement(Z,{to:"/"},a.a.createElement(en,null,"NL Geodata")),a.a.createElement(tn,null,a.a.createElement(rn,{placeholder:"enter search word",onChange:function(n){P(n,i)}}),a.a.createElement(Z,{to:"/search"},a.a.createElement(an,{onClick:function(){z(o,i)}})))):a.a.createElement(_,{home:!0},a.a.createElement(Z,{to:"/"},a.a.createElement(nn,null,"NL Geodata")))}),on=Object(u.f)((function(){var n=Object(r.useContext)(O),e=Object(v.a)(n,2),t=e[0],c=e[1];return a.a.createElement(M,null,a.a.createElement(N,null,a.a.createElement(G,null,"Search for addresses"),a.a.createElement(J,null,a.a.createElement(V,{placeholder:"enter search word",onChange:function(n){P(n,c)}}),a.a.createElement(i.b,{to:"/search"},a.a.createElement(W,{onClick:function(){z(t,c)}},a.a.createElement(F,null))))))})),un=function(){return a.a.createElement(g,null,a.a.createElement(m,null),a.a.createElement(cn,null),a.a.createElement(on,null))};function ln(){var n=Object(l.a)(["\n  margin-left: auto;\n"]);return ln=function(){return n},n}function fn(){var n=Object(l.a)(["\n  font-size: 12px;\n  font-weight: 100;\n  font-family: 'Quicksand', sans-serif;\n"]);return fn=function(){return n},n}function sn(){var n=Object(l.a)(["\n  font-size: 14px;\n  padding-top: 4px;\n  font-family: 'Bitter', serif;\n"]);return sn=function(){return n},n}function pn(){var n=Object(l.a)(["\n  width: 288px;\n  height: 75px;\n  background-color: rgb(32, 32, 96);\n  padding: 10px;\n  margin: 0 auto;\n  margin-top: 16px;\n  box-sizing: border-box;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  cursor: pointer;\n"]);return pn=function(){return n},n}function bn(){var n=Object(l.a)(["\n  text-decoration: none;\n"]);return bn=function(){return n},n}var dn=Object(f.a)(i.b)(bn()),gn=f.a.div(pn()),mn=f.a.label(sn()),vn=Object(f.a)(mn)(fn()),On=Object(f.a)(vn)(ln()),hn=function(n){var e=n.id,t=n.city,r=n.street,c=n.score;return a.a.createElement(dn,{to:"/search/".concat(e)},a.a.createElement(gn,null,a.a.createElement(mn,null,r),a.a.createElement(vn,null,t),a.a.createElement(On,null,c)))};function jn(){var n=Object(l.a)(["\n  width: 40px;\n  margin: 8px 0 0 11px;\n  text-align: center;\n  font-size: 12px;\n  border: 0;\n  border-bottom: 1px solid black;\n"]);return jn=function(){return n},n}function xn(){var n=Object(l.a)(["\n  display: flex;\n"]);return xn=function(){return n},n}function yn(){var n=Object(l.a)(["\n"]);return yn=function(){return n},n}function wn(){var n=Object(l.a)(["\n  margin: 4px;\n  margin-left: auto;\n"]);return wn=function(){return n},n}function En(){var n=Object(l.a)(["\n  font-size: 12px;\n  padding-top: 10px;\n  font-weight: 300;\n  margin: 4px;\n"]);return En=function(){return n},n}function kn(){var n=Object(l.a)(["\n  font-size: 14px;\n  color: black;\n  font-family: 'Quicksand', sans-serif;\n  font-weight: 600;\n"]);return kn=function(){return n},n}function Pn(){var n=Object(l.a)(["\n  padding: 8px;\n  box-sizing: border-box;\n"]);return Pn=function(){return n},n}var zn=f.a.div(Pn()),Dn=f.a.div(kn()),Cn=Object(f.a)(Dn)(En()),Sn=Object(f.a)(Cn)(wn()),Qn=Object(f.a)(Cn)(yn()),qn=f.a.div(xn()),Bn=f.a.input(jn());function Rn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function In(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Rn(t,!0).forEach((function(e){Object(w.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Rn(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var Ln=function(){var n=Object(r.useContext)(O),e=Object(v.a)(n,2),t=e[0],c=e[1],o=t.searchQuery,i=t.page,u=t.itemsPerPage,l=t.totalPages;Object(r.useEffect)((function(){(function(){var n=Object(y.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:z(t,c);case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[i,u]);var f=function(){var n=Object(y.a)(x.a.mark((function n(e,t){var r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.target.value,c((function(n){return In({},n,{error:""})})),e.persist(),!("itemsPerPage"===t&&r<10)){n.next=5;break}return n.abrupt("return",c((function(n){return In({},n,{error:"Items per page must be at least 10"})})));case 5:if(!("itemsPerPage"===t&&r>l)){n.next=7;break}return n.abrupt("return",c((function(n){return In({},n,{error:"Exceeded the total amount of pages"})})));case 7:if(!("page"===t&&r<1)){n.next=9;break}return n.abrupt("return",c((function(n){return In({},n,{error:"Page must be at least 1"})})));case 9:c((function(n){var e;return In({},n,(e={},Object(w.a)(e,"".concat(t),r),Object(w.a)(e,"queryResult",{}),e))})),e.preventDefault();case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return a.a.createElement(zn,null,a.a.createElement(Dn,null,"Search result for ",o),a.a.createElement(qn,null,a.a.createElement(Cn,null,"Items per page"),a.a.createElement(Bn,{type:"number",min:"10",defaultValue:u,onChange:function(n){f(n,"itemsPerPage")}}),a.a.createElement(Sn,null,"Pages"),a.a.createElement(Bn,{type:"number",min:"1",defaultValue:i,onChange:function(n){f(n,"page")}}),a.a.createElement(Qn,null,"of ",l)))};function Mn(){var n=Object(l.a)(["\n  font-family: 'Bitter', serif;\n  margin: 12px;\n"]);return Mn=function(){return n},n}function Nn(){var n=Object(l.a)(["\n  height: 80%;\n  width: 100%;\n  overflow-y: scroll;\n"]);return Nn=function(){return n},n}function Gn(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: white;\n"]);return Gn=function(){return n},n}var Jn=f.a.div(Gn()),Vn=f.a.div(Nn()),Wn=f.a.label(Mn()),Fn=function(){var n,e=Object(r.useContext)(O),t=Object(v.a)(e,1)[0].queryResult;return t&&t.docs&&(n=t.docs.map((function(n,e){var t=n.weergavenaam.split(",");return a.a.createElement(hn,{id:n.id,key:e,street:t[0],city:t[1],score:n.score})}))),a.a.createElement(Jn,null,a.a.createElement(cn,{path:"search"}),a.a.createElement(Ln,null),a.a.createElement(Vn,null,n||a.a.createElement(Wn,null,"Loading...")))};function $n(){var n=Object(l.a)(["\n"]);return $n=function(){return n},n}function An(){var n=Object(l.a)(["\n  font-family: 'Quicksand', sans-serif;\n  color: white;\n  font-size: 14px;\n  padding: 5px;\n"]);return An=function(){return n},n}function Hn(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 50% 50%;\n"]);return Hn=function(){return n},n}function Kn(){var n=Object(l.a)(["\n  margin: 15px;\n  padding: 15px;\n  background-color: rgb(32, 32, 96);\n  height: 520px;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n"]);return Kn=function(){return n},n}var Tn=f.a.div(Kn()),Un=f.a.div(Hn()),Xn=f.a.div(An()),Yn=Object(f.a)(Xn)($n());function Zn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function _n(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Zn(t,!0).forEach((function(e){Object(w.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Zn(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var ne=function(n){var e=n.id,t=Object(r.useContext)(O),c=Object(v.a)(t,2),o=c[0],i=c[1],u=o.details;Object(r.useEffect)((function(){(function(){var n=Object(y.a)(x.a.mark((function n(){var t,r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?id=".concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:r=n.sent,i((function(n){return _n({},n,{details:r.response})}));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);var l;return u.docs&&u.docs.length&&(l=function(){var n=u.docs;return Object.keys(n[0]).map((function(e,t){return a.a.createElement(Un,{key:t},a.a.createElement(Xn,null,e),a.a.createElement(Yn,null,n[0]["".concat(e)]))}))}()),a.a.createElement(Tn,null,l)};function ee(){var n=Object(l.a)(["\n  font-family: 'Bitter', serif;\n  font-size: 16px;\n  color: black;\n  margin: 12px;\n"]);return ee=function(){return n},n}function te(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  box-sizing: border-box;\n"]);return te=function(){return n},n}var re=f.a.div(te()),ae=f.a.div(ee()),ce=function(n){var e=n.match.params.id;return a.a.createElement(re,null,a.a.createElement(cn,{path:"search"}),a.a.createElement(ae,null,"More Information"),a.a.createElement(ne,{id:e}))};function oe(){var n=Object(l.a)(["\n  width: 100%;\n  padding: 12px;\n  color: white;\n  border: 0;\n  border-radius: 10px;\n  cursor: pointer;\n  background-color: rgb(32, 32, 96)\n"]);return oe=function(){return n},n}function ie(){var n=Object(l.a)(["\n  padding: 10px;\n  font-family: 'Quicksand', sans-serif;\n  color: red;\n"]);return ie=function(){return n},n}function ue(){var n=Object(l.a)(["\n  font-size: 17px;\n  font-family: 'Bitter', serif;\n  padding: 10px;\n  text-align: center;\n"]);return ue=function(){return n},n}function le(){var n=Object(l.a)(["\n  position: absolute;\n  width: 200px;\n  height: 130px;\n  background-color: rgb(229,229,229);\n  top: 200px;\n  left: 80px;\n  z-index: 100;\n  display: ","\n"]);return le=function(){return n},n}var fe=f.a.div(le(),(function(n){return n.error.length?"block":"none"})),se=f.a.div(ue()),pe=f.a.div(ie()),be=f.a.input(oe());function de(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}var ge=function(){var n=Object(r.useContext)(O),e=Object(v.a)(n,2),t=e[0],c=e[1],o=t.error,i=function(){c((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?de(t,!0).forEach((function(e){Object(w.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):de(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},n,{error:""})}))};return a.a.createElement(fe,{error:o},a.a.createElement(se,null,"Message"),a.a.createElement(pe,null,o),a.a.createElement(be,{type:"button",value:"close",onClick:function(){i()}}))};function me(){var n=Object(l.a)(["\n  width: 360px;\n  height: 640px;\n  margin: 0 auto;\n  position: relative;\n"]);return me=function(){return n},n}var ve=f.a.div(me());var Oe=function(){return a.a.createElement(h,null,a.a.createElement(i.a,{basename:"/"},a.a.createElement(ve,null,a.a.createElement(ge,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:un}),a.a.createElement(u.a,{exact:!0,path:"/search",component:Fn}),a.a.createElement(u.a,{path:"/search/:id",component:ce})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.e8127bbb.chunk.js.map