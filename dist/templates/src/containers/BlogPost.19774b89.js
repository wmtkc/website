(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n);t(136);a.default=function(){return l.a.createElement("div",{className:"banner"},l.a.createElement("span",null,"Content Not Found"))}},69:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),m=t(21),c=t(35),s=t(158),d=t.n(s),r=t(143),u=t.n(r),o=(t(136),t(63));a.default=function(){var e=Object(m.useRouteData)().post,a=[];return e.data.tags.forEach(function(t,n){a.push(l.a.createElement("em",null,t)),n<e.data.tags.length-1&&a.push(l.a.createElement("span",null,","))}),l.a.createElement(l.a.Fragment,null,e.data.published?l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"title"},e.data.title),l.a.createElement("div",{className:"header"},l.a.createElement("em",{className:"date"},u()(e.data.date,"mmmm dS, yyyy")),l.a.createElement(c.Link,{className:"navlink",to:"/blog"},"Back")),l.a.createElement(d.a,{className:"body",source:e.content,escapeHtml:!1}),l.a.createElement("em",{className:"date updated"},""!==e.data.update&&u()(e.data.update,"yyyymmddHH")-u()(e.data.date,"yyyymmddHH")>24?"Updated: "+u()(e.data.date,"mmmm dS, yyyy"):""),l.a.createElement("div",{className:"tags"},l.a.createElement("em",null,"Tags"),l.a.createElement("span",null,":"),a)):l.a.createElement(o.default,null))}}}]);