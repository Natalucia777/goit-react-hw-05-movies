"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[741],{6741:function(q,e,t){t.r(e),t.d(e,{default:function(){return S}});var V,r,n=t(5861),i=t(9439),o=t(7757),g=t.n(o),a=t(2791),A=t(4324),s=t(7689),p=t(1087),k=t(1207),U=t(385),c=t(168),Q=t(6444),l=Q.ZP.section(V||(V=(0,c.Z)(["\n  border-bottom: 1px solid gray;\n"]))),u=t(184),C=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(l,{children:[(0,u.jsx)("p",{children:"About the film"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading"}),children:(0,u.jsx)(s.j3,{})})]})},B=t(2534),K=Q.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid gray;\n"]))),F=function(q){var e=q.movie;return(0,u.jsxs)(K,{children:[(0,u.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w200".concat(e.poster_path):B,alt:e.original_title,width:"200"}),(0,u.jsxs)("ul",{children:[(0,u.jsxs)("li",{children:[(0,u.jsxs)("h1",{children:[e.original_title," (",e.releaseYear,")"]}),(0,u.jsxs)("p",{children:["User Score: ",e.votePercentage,"%"]})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("h2",{children:"Overview"}),(0,u.jsx)("p",{children:e.overview})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("h2",{children:"Genres"}),(0,u.jsx)("p",{children:e.genres})]})]})]})};var S=function(){var q,e,t=(0,a.useState)(!1),V=(0,i.Z)(t,2),r=V[0],o=V[1],c=(0,a.useState)(null),Q=(0,i.Z)(c,2),l=Q[0],B=Q[1],K=(0,a.useState)({}),S=(0,i.Z)(K,2),I=S[0],d=S[1],J=(0,s.UO)().movieId,h=(0,s.TH)(),R=(0,a.useRef)(null!==(q=null===(e=h.state)||void 0===e?void 0:e.from)&&void 0!==q?q:"/");return(0,a.useEffect)((function(){function q(){return(q=(0,n.Z)(g().mark((function q(){var e,t,V,r,n,i,a,A,s;return g().wrap((function(q){for(;;)switch(q.prev=q.next){case 0:return o(!0),B(null),q.prev=2,q.next=5,(0,k.s_)(J);case 5:e=q.sent,t=e.genres,V=e.original_title,r=e.overview,n=e.poster_path,i=e.release_date,a=e.vote_average,A=i.slice(0,4),s=Math.round(10*a),d({genres:t.map((function(q){return q.name})).join(" "),original_title:V,overview:r,poster_path:n,releaseYear:A,votePercentage:s}),q.next=20;break;case 17:q.prev=17,q.t0=q.catch(2),"ERR_CANCELED"!==q.t0.code&&B("Try reloading the page!");case 20:return q.prev=20,o(!1),q.finish(20);case 23:case"end":return q.stop()}}),q,null,[[2,17,20,23]])})))).apply(this,arguments)}!function(){q.apply(this,arguments)}()}),[J]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.rU,{to:R.current,children:(0,u.jsxs)("button",{children:[(0,u.jsx)(A.ZhP,{}),"Go back"]})}),r?(0,u.jsx)(U.Z,{children:"Loading"}):(0,u.jsx)(F,{movie:I}),l&&(0,u.jsx)(U.Z,{children:l}),(0,u.jsx)(C,{})]})}},1207:function(q,e,t){t.d(e,{EL:function(){return s},M1:function(){return A},WJ:function(){return o},gH:function(){return a},s_:function(){return g}});var V=t(5861),r=t(7757),n=t.n(r),i=t(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"7b381c0941b126eabbbca88209330c37"}}),o=function(){var q=(0,V.Z)(n().mark((function q(){var e;return n().wrap((function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,i.get("trending/movie/day?");case 2:return e=q.sent,console.log(e.data),q.abrupt("return",e.data);case 5:case"end":return q.stop()}}),q)})));return function(){return q.apply(this,arguments)}}(),g=function(){var q=(0,V.Z)(n().mark((function q(e){var t;return n().wrap((function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,i.get("/movie/".concat(e));case 2:return t=q.sent,console.log(t.data),q.abrupt("return",t.data);case 5:case"end":return q.stop()}}),q)})));return function(e){return q.apply(this,arguments)}}(),a=function(){var q=(0,V.Z)(n().mark((function q(e){var t,V,r;return n().wrap((function(q){for(;;)switch(q.prev=q.next){case 0:return t=e.search,V=e.abortCtrl,q.next=3,i.get("/search/movie?query=".concat(t),{signal:V.signal});case 3:return r=q.sent,console.log(r.data),q.abrupt("return",r.data);case 6:case"end":return q.stop()}}),q)})));return function(e){return q.apply(this,arguments)}}(),A=function(){var q=(0,V.Z)(n().mark((function q(e){var t;return n().wrap((function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,i.get("/movie/".concat(e,"/credits"));case 2:return t=q.sent,console.log(t.data),q.abrupt("return",t.data);case 5:case"end":return q.stop()}}),q)})));return function(e){return q.apply(this,arguments)}}(),s=function(){var q=(0,V.Z)(n().mark((function q(e){var t;return n().wrap((function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,i.get("/movie/".concat(e,"/reviews"));case 2:return t=q.sent,console.log(t.data),q.abrupt("return",t.data);case 5:case"end":return q.stop()}}),q)})));return function(e){return q.apply(this,arguments)}}()},2534:function(q){q.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=741.daa6ca41.chunk.js.map