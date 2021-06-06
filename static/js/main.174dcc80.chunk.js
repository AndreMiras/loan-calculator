(this["webpackJsonploan-calculator"]=this["webpackJsonploan-calculator"]||[]).push([[0],{203:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),o=a.n(r),s=(a(89),a(21)),l=(a(90),a(205)),j=a(206),i=a(81),d=a(16),b=a(83),x=a(82),h=a(39),u=a(207),O=a(209),m=a(2),g=function(){return Object(m.jsx)(u.a,{bg:"dark",variant:"dark",expand:"sm",children:Object(m.jsxs)(l.a,{children:[Object(m.jsxs)(u.a.Brand,{href:"/loan-calculator",children:[Object(m.jsx)(h.a,{icon:["fas","calculator"]})," Loan Calculator"]}),Object(m.jsx)(u.a.Toggle,{}),Object(m.jsx)(u.a.Collapse,{children:Object(m.jsxs)(O.a,{className:"mr-auto",children:[Object(m.jsxs)(O.a.Link,{href:"/loan-calculator",children:[Object(m.jsx)(h.a,{icon:["fas","home"]})," Home"]}),Object(m.jsxs)(O.a.Link,{href:"https://github.com/AndreMiras/loan-calculator",children:[Object(m.jsx)(h.a,{icon:["fab","github-alt"]})," About"]})]})})]})})},f=a(84),p=a(210),y=function(e,t,a){var n=(100*e/a).toFixed(2),c=(100*t/a).toFixed(2);return["Principal (".concat(n,"%)"),"Interest (".concat(c,"%)")]},C=function(e,t,a){return{labels:y(e,t,a),datasets:[{label:"Loan distribution",data:[e,t],backgroundColor:["rgba(54, 162, 235, 0.2)","rgba(255, 99, 132, 0.2)"]}]}},I=function(e){var t=e.amount,a=e.totalInterest,n=e.total;return Object(m.jsxs)(p.a,{children:[Object(m.jsx)(p.a.Header,{className:"d-none d-md-block",children:"Loan Distribution"}),Object(m.jsx)(p.a.Body,{children:Object(m.jsx)(f.a,{data:C(t,a,n),type:"doughnut"})})]})},N=a(208),v=function(e){var t=e.controlId,a=e.label,n=e.placeholder,c=e.text,r=e.onChange;return Object(m.jsxs)(N.a.Group,{className:"row",controlId:t,children:[Object(m.jsx)(N.a.Label,{className:"col-sm-7 col-form-label",children:a}),Object(m.jsx)(i.a,{sm:5,children:Object(m.jsx)(N.a.Control,{type:"number",placeholder:n,onChange:function(e){return r(function(e){return Number(e.target.value)}(e))}})}),Object(m.jsx)(i.a,{xs:12,children:Object(m.jsx)(N.a.Text,{className:"text-muted d-none d-md-block",children:c})})]})},L=function(e){var t=e.onChange;return Object(m.jsx)(v,{controlId:"loan-amount",label:"Loan Amount",placeholder:"200000",text:"The amount to borrow",onChange:t})},T=function(e){var t=e.onChange;return Object(m.jsx)(v,{controlId:"loan-term",label:"Loan Term",placeholder:"20",text:"The loan repayment period in years.",onChange:t})},k=function(e){var t=e.onChange;return Object(m.jsx)(v,{controlId:"loan-interest-rate",label:"Interest Rate",placeholder:"1.9",text:"The percentage interest rate.",onChange:t})},F=function(e){var t=e.onAmount,a=e.onTerm,n=e.onInterest;return Object(m.jsxs)(p.a,{children:[Object(m.jsx)(p.a.Header,{className:"d-none d-md-block",children:"Loan Form"}),Object(m.jsx)(p.a.Body,{children:Object(m.jsxs)(N.a,{children:[Object(m.jsx)(L,{onChange:t}),Object(m.jsx)(T,{onChange:a}),Object(m.jsx)(k,{onChange:n})]})})]})},P=function(e){var t=e.monthlyPayment,a=e.amount,n=e.totalInterest,c=e.total;return Object(m.jsxs)(p.a,{children:[Object(m.jsx)(p.a.Header,{className:"d-none d-md-block",children:"Loan Result"}),Object(m.jsxs)(p.a.Body,{children:[Object(m.jsx)(p.a.Title,{className:"text-center",children:"Monthly Payment"}),Object(m.jsx)("h3",{className:"text-center",children:t.toFixed(2)}),Object(m.jsx)("hr",{}),Object(m.jsxs)(j.a,{children:[Object(m.jsx)(i.a,{xs:6,children:"Principal paid:"}),Object(m.jsx)(i.a,{xs:6,className:"text-right",children:a.toFixed(2)}),Object(m.jsx)(i.a,{xs:6,children:"Interest paid:"}),Object(m.jsx)(i.a,{xs:6,className:"text-right",children:n.toFixed(2)}),Object(m.jsx)(i.a,{xs:12,children:Object(m.jsx)("hr",{})}),Object(m.jsx)(i.a,{xs:6,children:"Total paid:"}),Object(m.jsx)(i.a,{xs:6,className:"text-right",children:c.toFixed(2)})]})]})]})},A=function(e,t,a){var n=function(e,t,a){return e*(a/=100)/12/(1-1/Math.pow(1+a/12,12*t))}(e,t,a),c=n*t*12;return{monthlyPayment:n,totalInterest:c-e,total:c}};d.b.add(x.a,b.a);var B=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),o=Object(s.a)(r,2),d=o[0],b=o[1],x=Object(n.useState)(0),h=Object(s.a)(x,2),u=h[0],O=h[1],f=A(a,d,u),p=f.monthlyPayment,y=f.totalInterest,C=f.total;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(g,{}),Object(m.jsx)(l.a,{children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(i.a,{sm:12,md:6,lg:4,className:"mt-3",children:Object(m.jsx)(F,{onAmount:c,onTerm:b,onInterest:O})}),Object(m.jsx)(i.a,{sm:12,className:"mt-3",children:Object(m.jsx)(P,{monthlyPayment:p,amount:a,totalInterest:y,total:C})}),Object(m.jsx)(i.a,{className:"mt-3",children:Object(m.jsx)(I,{amount:a,totalInterest:y,total:C})})]})})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,211)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),w()},89:function(e,t,a){}},[[203,1,2]]]);
//# sourceMappingURL=main.174dcc80.chunk.js.map