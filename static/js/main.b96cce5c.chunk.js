(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,c){"use strict";c.r(t);var r=c(16),n=c.n(r),a=c(6),s=c.n(a),j=c(7),l=c(17),i=c(3),b=c(2),d=c(18),o=c.n(d),h=c(0),x=function(){var e=Object(b.useState)(2021),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(b.useState)(0),a=Object(i.a)(n,2),d=a[0],x=a[1],O=Object(b.useState)(0),u=Object(i.a)(O,2),g=u[0],m=u[1],f=Object(b.useState)(""),p=Object(i.a)(f,2),v=p[0],y=p[1],N=function(){var e=Object(l.a)(s.a.mark((function e(t){var r,n,a,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={style:"currency",currency:"EUR"},e.next=4,o.a.get("https://tpcvju.deta.dev/tax?year=".concat(c,"&income=").concat(d,"&kids=").concat(g));case 4:if(n=e.sent,a=n.data.data,0!==Object.keys(a).length){e.next=9;break}return y(Object(h.jsxs)("div",{className:"alert alert-danger",role:"alert",children:["\u0394\u03b5\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03b5\u03b9 \u03c4\u03cd\u03c0\u03bf\u03c2 \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03bf\u03cd \u03b3\u03b9\u03b1 \u03c4\u03bf \u03ad\u03c4\u03bf\u03c2 ",c]})),e.abrupt("return");case 9:l=Object(j.a)(Object(j.a)({},a),{},{income:a.income.toLocaleString("el-GR",r),tax:a.tax.toLocaleString("el-GR",r),eea:a.eea.toLocaleString("el-GR",r),total_taxes:a.total_taxes.toLocaleString("el-GR",r),after_taxes:a.after_taxes.toLocaleString("el-GR",r)}),y(S(l));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("table",{className:"table table-bordered",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae"}),Object(h.jsx)("th",{children:"\u03a4\u03b9\u03bc\u03ae"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u03a6\u03bf\u03c1\u03bf\u03bb\u03bf\u03b3\u03b9\u03ba\u03cc \u0388\u03c4\u03bf\u03c2"}),Object(h.jsx)("td",{align:"right",children:e.tax_year})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u03a0\u03b1\u03b9\u03b4\u03b9\u03ac"}),Object(h.jsx)("td",{align:"right",children:e.children})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u03a6\u03bf\u03c1\u03bf\u03bb\u03bf\u03b3\u03b7\u03c4\u03ad\u03bf \u0395\u03b9\u03c3\u03cc\u03b4\u03b7\u03bc\u03b1"}),Object(h.jsx)("td",{align:"right",children:e.income})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u03a6\u03cc\u03c1\u03bf\u03c2 \u0395\u03b9\u03c3\u03bf\u03b4\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2"}),Object(h.jsx)("td",{align:"right",children:e.tax})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u0395\u03b9\u03b4\u03b9\u03ba\u03cc \u0395\u03c0\u03af\u03b4\u03bf\u03bc\u03b1 \u0391\u03bb\u03bb\u03b7\u03bb\u03b5\u03b3\u03b3\u03cd\u03b7\u03c2"}),Object(h.jsx)("td",{align:"right",children:e.eea})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u03a6\u03cc\u03c1\u03bf\u03b9 \u03c3\u03c5\u03bd\u03bf\u03bb\u03b9\u03ba\u03ac"}),Object(h.jsx)("td",{align:"right",children:e.total_taxes})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u039a\u03b1\u03b8\u03b1\u03c1\u03cc \u03c0\u03bf\u03c3\u03cc"}),Object(h.jsx)("td",{align:"right",children:e.after_taxes})]})]})]})})};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{onSubmit:N,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"\u0388\u03c4\u03bf\u03c2"}),Object(h.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)},className:"form-control"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"\u0395\u03c4\u03ae\u03c3\u03b9\u03bf \u0395\u03b9\u03c3\u03cc\u03b4\u03b7\u03bc\u03b1"}),Object(h.jsx)("input",{value:d,onChange:function(e){return x(e.target.value)},className:"form-control"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"\u03a0\u03b1\u03b9\u03b4\u03b9\u03ac"}),Object(h.jsx)("input",{value:g,onChange:function(e){return m(e.target.value)},className:"form-control"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"btn btn-primary",children:"\u03a5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae"})]}),Object(h.jsx)("br",{}),v]})},O=function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"\u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc\u03c2 \u03a6\u03cc\u03c1\u03bf\u03c5 \u039c\u03b9\u03c3\u03b8\u03c9\u03c4\u03ce\u03bd"}),Object(h.jsx)(x,{})]})};n.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b96cce5c.chunk.js.map