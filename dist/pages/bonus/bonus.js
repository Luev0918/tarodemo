"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[980],{5928:function(e,t,n){var s=n(7036),a=n(9501),r=n(8037),c=n(1054),l=n(1517),i=n(5234),o=n(2484),u=n(7146),d=n(6553),h=n.n(d),x=n(5271),f=n(8966),p=n(2676),m=function(e){var t=e.info;return(0,p.jsxs)(o.G7,{className:"list",children:[(0,p.jsxs)(o.G7,{className:"left",children:[(0,p.jsx)(f.lO,{className:"icons",value:"calendar",size:"30",color:"#3d94fe"}),(0,p.jsxs)(o.G7,{className:"info",children:[(0,p.jsx)(o.xv,{className:"title",children:t.content}),(0,p.jsx)(o.xv,{className:"tips",children:t.createTime})]})]}),(0,p.jsx)(o.xv,{className:"right",children:(0,p.jsx)(o.xv,{style:{color:t.bonus>0?"green":"red"},children:t.bonus>0?"+ ".concat(t.bonus):t.bonus})})]})},j=m,N=function(e){var t=e.info;return(0,p.jsxs)(o.G7,{className:"list",children:[(0,p.jsxs)(o.G7,{className:"left",children:[(0,p.jsx)(f.lO,{className:"icons",value:"medal",size:"30",color:"#f67f67"}),(0,p.jsxs)(o.G7,{className:"info",children:[(0,p.jsx)(o.xv,{className:"title",children:t.title}),(0,p.jsx)(o.xv,{className:"tips",children:t.createTime})]})]}),(0,p.jsxs)(o.G7,{className:"right",children:[(0,p.jsxs)(o.G7,{className:"bonus",children:[t.price,"\u79ef\u5206"]}),(0,p.jsx)(o.G7,{className:"txt",children:"\u5151\u6362\u6210\u529f"})]})]})},v=N,Z=n(5834),G=n(455),g=function(e){return(0,G.d)({method:"POST",url:"/user/bonus/page",data:e})},b=n(1738);function w(){var e=(0,u.CG)((function(e){return e.user.userInfo})),t=(0,x.useState)({page:1,limit:10,type:1}),n=(0,i.Z)(t,2),s=n[0],d=n[1],f=(0,x.useState)({list:[],total:0}),m=(0,i.Z)(f,2),N=m[0],G=m[1],w=(0,x.useState)({list:[],total:0}),T=(0,i.Z)(w,2),k=T[0],y=T[1],S=(0,x.useState)(!1),O=(0,i.Z)(S,2),C=O[0],L=O[1],B=(0,x.useState)(!1),I=(0,i.Z)(B,2),P=(I[0],I[1]),z=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!C){e.next=2;break}return e.abrupt("return",h().showToast({icon:"none",title:"\u6ca1\u6709\u66f4\u591a\u6570\u636e~"}));case 2:return e.next=4,g(s);case 4:t=e.sent,0===t.code&&(G((function(e){return{list:[].concat((0,c.Z)(e.list),(0,c.Z)(t.data.list)),total:t.data.total}})),P(t.data.list.length>0),N.list.length<N.total?d((function(e){return(0,r.Z)((0,r.Z)({},e),{},{page:e.page+1})})):L(!0));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=(0,u.TL)(),J=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,Z.bG)();case 2:t=e.sent,0===t.code&&A((0,b.ps)(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!C){e.next=2;break}return e.abrupt("return",h().showToast({icon:"none",title:"\u6ca1\u6709\u66f4\u591a\u6570\u636e~"}));case 2:return e.next=4,(0,Z.OZ)(s);case 4:t=e.sent,0===t.code&&(y((function(e){return{list:[].concat((0,c.Z)(e.list),(0,c.Z)(t.data.list)),total:t.data.total}})),P(t.data.list.length>0),k.list.length<k.total?d((function(e){return(0,r.Z)((0,r.Z)({},e),{},{page:e.page+1})})):L(!0));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(e){L(!1),1===e?z():W()};(0,x.useEffect)((function(){Y(s.type)}),[s.type]);var E=function(e){F(),d((function(t){return(0,r.Z)((0,r.Z)({},t),{},{type:e})}))},F=function(){d({type:1,page:1,limit:10}),G({list:[],total:0}),y({list:[],total:0}),L(!1)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.G7,{className:"page",children:(0,p.jsx)(o.xv,{children:"\u79ef\u5206\u660e\u7ec6"})}),(0,p.jsxs)(o.G7,{className:"scorePage",children:[(0,p.jsxs)(o.G7,{className:"myScore",children:[(0,p.jsxs)(o.G7,{className:"header",children:[(0,p.jsxs)(o.G7,{className:"bonus",children:[e.bonus,(0,p.jsx)(o.xv,{className:"txt",children:"\u5206"})]}),(0,p.jsx)(o.G7,{className:"btn",onClick:J,children:"\u5237\u65b0\u79ef\u5206"})]}),(0,p.jsx)(o.G7,{className:"tips",children:"\u53ef\u7528\u79ef\u5206"})]}),(0,p.jsxs)(o.G7,{className:"infoCard",children:[(0,p.jsxs)(o.G7,{className:"header",children:[(0,p.jsx)(o.G7,{className:"select ".concat(1===s.type?"active":""),onClick:function(){return E(1)},children:"\u79ef\u5206\u6536\u652f\u660e\u7ec6"}),(0,p.jsx)(o.G7,{className:"select ".concat(2===s.type?"active":""),onClick:function(){return E(2)},children:"\u79ef\u5206\u5151\u6362\u8bb0\u5f55"})]}),1===s.type?(0,p.jsx)(o.pf,{scrollY:!0,scrollWithAnimation:!0,onScrollToLower:z,lowerThreshold:50,enableBackToTop:!0,className:"scroll-view",children:N.list.map((function(e){return(0,p.jsx)(j,{info:e},e.pkId)}))}):(0,p.jsx)(o.pf,{className:"exchangeList",scrollY:!0,scrollWithAnimation:!0,onScrollToLower:z,lowerThreshold:50,enableBackToTop:!0,children:k.list.map((function(e){return(0,p.jsx)(v,{info:e},e.pkId)}))}),(0,p.jsx)(o.G7,{className:"loading-text",children:C?"\u6ca1\u6709\u66f4\u591a\u6570\u636e~":"\u6b63\u5728\u52a0\u8f7d..."})]})]})]})}var T={navigationBarTitleText:"\u79ef\u5206\u660e\u7ec6"};Page((0,s.R4)(w,"pages/bonus/bonus",{root:{cn:[]}},T||{}))}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[107,216,592],(function(){return t(5928)}));e.O()}]);