(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={div:"Statistics_div__p8WIT",list:"Statistics_list__270Qr",item:"Statistics_item__2yDp4"}},17:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),i=n(6),s=n(7),o=n(11),r=n(10),d=n(3),l=n.n(d),b=n(1),u=n.n(b),j=n(0);function h(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(j.jsxs)("div",{className:u.a.div,children:["Statictic",Object(j.jsxs)("ul",{className:u.a.list,children:[Object(j.jsxs)("li",{className:u.a.item,children:["Good: ",Object(j.jsx)("span",{children:t})]}),Object(j.jsxs)("li",{className:u.a.item,children:["Neutral: ",Object(j.jsx)("span",{children:n})]}),Object(j.jsxs)("li",{className:u.a.item,children:["Bad: ",Object(j.jsx)("span",{children:c})]}),Object(j.jsxs)("li",{className:u.a.item,children:["Total: ",Object(j.jsx)("span",{children:a})]}),Object(j.jsxs)("li",{className:u.a.item,children:["Positive feedback: ",Object(j.jsxs)("span",{children:[0!==t?Math.round(i):0,"%"]})]})]})]})}var m=n(2),p=n.n(m);function O(e){var t=e.incGood,n=e.incNeutral,c=e.incBad;return Object(j.jsxs)("div",{className:p.a.container,children:[Object(j.jsx)("button",{className:p.a.button,type:"button",onClick:t,children:"good"}),Object(j.jsx)("button",{className:p.a.button,type:"button",onClick:n,children:"neutral"}),Object(j.jsx)("button",{className:p.a.button,type:"button",onClick:c,children:"bad"})]})}var x=n(8),v=n.n(x);function k(e){var t=e.title,n=e.children;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:v.a.title,children:t}),n]})}var f=n(9),N=n.n(f);function g(e){var t=e.message;return Object(j.jsx)("p",{className:N.a.description,children:t})}var _=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.incrementGoodFeedback=function(){e.setState((function(e){return{good:e.good+1}}))},e.incrementNeutralFeedback=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.incrementBadFeedback=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return 100*e.state.good/e.countTotalFeedback()},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return t>0||n>0||c>0?Object(j.jsxs)(k,{title:"Please leave feedback",children:[Object(j.jsx)(O,{incGood:this.incrementGoodFeedback,incNeutral:this.incrementNeutralFeedback,incBad:this.incrementBadFeedback}),Object(j.jsx)(h,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]}):Object(j.jsxs)(k,{title:"Please leave feedback",children:[Object(j.jsx)(O,{incGood:this.incrementGoodFeedback,incNeutral:this.incrementNeutralFeedback,incBad:this.incrementBadFeedback}),Object(j.jsx)(g,{message:"No feedback given"})]})}}]),n}(l.a.Component),F=_;a.a.render(Object(j.jsx)(F,{}),document.getElementById("root"))},2:function(e,t,n){e.exports={button:"FeedbackOption_button__1RBZD"}},8:function(e,t,n){e.exports={title:"Section_title__2k-CW"}},9:function(e,t,n){e.exports={description:"Notification_description__3979I"}}},[[17,1,2]]]);
//# sourceMappingURL=main.ca31a675.chunk.js.map