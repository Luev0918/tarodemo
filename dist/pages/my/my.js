"use strict";(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[97],{5597:function(s,e,l){var a=l(7036),n=l(9501),c=l(8037),r=l(1517),i=l(2484),o=l(6553),t=l.n(o),x=l(7146),u=l(8966),h=l(1738),d=l(5834),m=l(2676),j=function(){var s=(0,x.CG)((function(s){return s.user.userInfo})),e=t().getSystemInfoSync().safeArea,l=function(){s.pkId>0&&t().navigateTo({url:"/pageUser/userInfo/userInfo"})};return(0,m.jsx)(i.G7,{className:"navbar",style:{paddingTop:e.top+10+"px"},children:(0,m.jsx)(i.G7,{className:"text",onClick:l,children:(0,m.jsx)(i.xv,{className:"logo-text",children:"\u4e2a\u4eba\u4e2d\u5fc3"})})})},v=j,N=function(){var s=(0,x.CG)((function(s){return s.user.userInfo})),e=(0,x.TL)(),l=function(){var s=(0,r.Z)((0,n.Z)().mark((function s(){var l,a;return(0,n.Z)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,(0,d.bG)();case 2:l=s.sent,0===l.code&&(a=(0,c.Z)((0,c.Z)({},l.data),{},{isDailyCheck:!0}),e((0,h.ps)(a)));case 4:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}(),a=function(){t().showModal({title:"\u4f60\u786e\u5b9a\u8981\u7b7e\u5230\u5417\uff1f",success:function(){var s=(0,r.Z)((0,n.Z)().mark((function s(e){var a;return(0,n.Z)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!e.confirm){s.next=11;break}return s.next=3,(0,d.iW)();case 3:if(a=s.sent,0!==a.code){s.next=9;break}t().showToast({title:"\u7b7e\u5230\u6210\u529f"}),l(),s.next=11;break;case 9:return t().showToast({title:a.msg,icon:"none"}),s.abrupt("return");case 11:case"end":return s.stop()}}),s)})));function e(e){return s.apply(this,arguments)}return e}()})},o=function(){t().redirectTo({url:"/pages/login/login"})};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{}),(0,m.jsx)(i.G7,{className:"my",children:(0,m.jsxs)(i.G7,{children:[(0,m.jsxs)(i.G7,{className:"userInfo",children:[(0,m.jsx)(i.G7,{className:"left",children:(0,m.jsx)(i.Ee,{className:"avatar",src:(null===s||void 0===s?void 0:s.avatar)||"https://img.yzcdn.cn/vant/cat.jpeg",mode:"aspectFill",lazyLoad:!0})}),(0,m.jsxs)(i.G7,{className:"center",children:[null!==s&&void 0!==s&&s.nickname||null!==s&&void 0!==s&&s.wxOpenId?(0,m.jsx)(i.G7,{className:"name",children:s.nickname}):null,null!==s&&void 0!==s&&s.phone||null!==s&&void 0!==s&&s.wxOpenId?(0,m.jsx)(i.G7,{className:"phone",children:s.phone}):null,null!==s&&void 0!==s&&s.nickname||null!==s&&void 0!==s&&s.wxOpenId?null:(0,m.jsx)(i.G7,{className:"noLogin",children:"\u6682\u672a\u767b\u5f55"})]}),s?(0,m.jsx)(i.C3,{url:"/pageUser/userInfo/userInfo",className:"right",children:(0,m.jsx)(u.lO,{value:"chevron-right",size:"20",color:"#fff"})}):null]}),(0,m.jsxs)(i.G7,{className:"score",children:[(0,m.jsxs)(i.G7,{className:"left",children:[(0,m.jsx)(u.lO,{value:"sketch",size:"20",color:"#946c37"}),(0,m.jsx)(i.G7,{className:"text",children:s.pkId>0?"\u6211\u7684\u79ef\u5206: ".concat(s.bonus,"\u5206"):"\u8bf7\u524d\u5f80\u767b\u5f55"})]}),s.pkId>0&&(0,m.jsx)(i.G7,{className:"right",onClick:a,children:s.isDailyCheck?"\u7b7e\u8fc7\u5230\u4e86":"\u6bcf\u65e5\u7b7e\u5230"})]}),(0,m.jsxs)(i.G7,{className:"action-info",children:[(0,m.jsxs)(i.C3,{url:"/pages/bonus/bonus",className:"row",children:[(0,m.jsxs)(i.G7,{className:"left",children:[(0,m.jsx)(u.lO,{value:"calendar",size:"20",color:"#1296db"}),(0,m.jsx)(i.xv,{className:"txt",children:"\u79ef\u5206\u660e\u7ec6"})]}),(0,m.jsx)(i.G7,{className:"right",children:(0,m.jsx)(u.lO,{value:"chevron-right",size:"20",color:"#b9b9b9"})})]}),(0,m.jsxs)(i.C3,{className:"row",url:"/pages/myResource/myResource?type=2",children:[(0,m.jsxs)(i.G7,{className:"left",children:[(0,m.jsx)(u.lO,{value:"download",size:"20",color:"#1296db"}),(0,m.jsx)(i.xv,{className:"txt",children:"\u6211\u7684\u4e0b\u8f7d"})]}),(0,m.jsx)(i.G7,{className:"right",children:(0,m.jsx)(u.lO,{value:"chevron-right",size:"20",color:"#b9b9b9"})})]}),(0,m.jsxs)(i.C3,{className:"row",url:"/pages/myResource/myResource?type=0",children:[(0,m.jsxs)(i.G7,{className:"left",children:[(0,m.jsx)(u.lO,{value:"star",size:"20",color:"#1296db"}),(0,m.jsx)(i.xv,{className:"txt",children:"\u6211\u7684\u6536\u85cf"})]}),(0,m.jsx)(i.G7,{className:"right",children:(0,m.jsx)(u.lO,{value:"chevron-right",size:"20",color:"#b9b9b9"})})]}),(0,m.jsxs)(i.C3,{className:"row",url:"/pages/myResource/myResource?type=1",children:[(0,m.jsxs)(i.G7,{className:"left",children:[(0,m.jsx)(u.lO,{value:"link",size:"20",color:"#1296db"}),(0,m.jsx)(i.xv,{className:"txt",children:"\u6211\u7684\u5206\u4eab"})]}),(0,m.jsx)(i.G7,{className:"right",children:(0,m.jsx)(u.lO,{value:"chevron-right",size:"20",color:"#b9b9b9"})})]})]}),(0,m.jsxs)(i.G7,{className:"action-info",children:[(0,m.jsxs)(i.C3,{className:"row",children:[(0,m.jsxs)(i.G7,{className:"left",children:[(0,m.jsx)(u.lO,{value:"settings",size:"20",color:"#1296db"}),(0,m.jsx)(i.xv,{className:"\u5e2e\u52a9\u4e2d\u5fc3"})]}),(0,m.jsx)(i.G7,{className:"right",children:(0,m.jsx)(u.lO,{value:"chevron-right",size:"20",color:"#b9b9b9"})})]}),(0,m.jsxs)(i.C3,{className:"row",children:[(0,m.jsxs)(i.G7,{className:"left",children:[(0,m.jsx)(u.lO,{value:"message",size:"20",color:"#1296db"}),(0,m.jsx)(i.xv,{className:"\u610f\u89c1\u53cd\u9988"})]}),(0,m.jsx)(i.G7,{className:"right",children:(0,m.jsx)(u.lO,{value:"chevron-right",size:"20",color:"#b9b9b9"})})]}),(0,m.jsxs)(i.C3,{className:"row",children:[(0,m.jsxs)(i.G7,{className:"left",children:[(0,m.jsx)(u.lO,{value:"phone",size:"20",color:"#1296db"}),(0,m.jsx)(i.xv,{className:"\u8054\u7cfb\u5ba2\u670d"})]}),(0,m.jsx)(i.G7,{className:"right",children:(0,m.jsx)(u.lO,{value:"chevron-right",size:"20",color:"#b9b9b9"})})]}),(0,m.jsxs)(i.C3,{className:"row",url:"/pageUser/setting/setting",children:[(0,m.jsxs)(i.G7,{className:"left",children:[(0,m.jsx)(u.lO,{value:"lightning-bolt",size:"20",color:"#1296db"}),(0,m.jsx)(i.xv,{className:"\u8bbe\u7f6e"})]}),(0,m.jsx)(i.G7,{className:"right",children:(0,m.jsx)(u.lO,{value:"chevron-right",size:"20",color:"#b9b9b9"})})]})]}),s.pkId>0?null:(0,m.jsx)(i.G7,{className:"action-info",children:(0,m.jsx)(i.G7,{className:"action",children:(0,m.jsx)(i.G7,{className:"button",onClick:o,children:"\u524d\u5f80\u767b\u5f55"})})})]})})]})},g=N,f={navigationBarTitleText:"\u6211\u7684",navigationStyle:"custom"};Page((0,a.R4)(g,"pages/my/my",{root:{cn:[]}},f||{}))}},function(s){var e=function(e){return s(s.s=e)};s.O(0,[107,216,592],(function(){return e(5597)}));s.O()}]);