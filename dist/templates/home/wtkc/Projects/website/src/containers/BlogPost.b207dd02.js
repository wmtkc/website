(window.webpackJsonp=window.webpackJsonp||[]).push([[1,2],{302:function(e,a){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n);t(134);a.default=function(){return l.a.createElement("div",{className:"banner"},l.a.createElement("span",null,"Content Not Found"))}},68:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t(32),m=t(186),s=t.n(m),d=t(145),u=t.n(d),o=(t(134),t(63));a.default=function(){var e=Object(r.useRouteData)().post,a=[];e.data.tags.forEach((function(t,n){a.push(l.a.createElement("em",{key:n},t)),n<e.data.tags.length-1&&a.push(l.a.createElement("span",{key:e.data.tags.length+n},","))}));return l.a.createElement(l.a.Fragment,null,e.data.published?l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"title"},e.data.title),l.a.createElement("div",{className:"header"},l.a.createElement("em",{className:"date"},u()(e.data.date,"mmmm dS, yyyy")),l.a.createElement(c.Link,{className:"navlink",to:"/blog"},"Back")),l.a.createElement(s.a,{className:"body",source:e.content,escapeHtml:!1,renderers:{link:function(e){return l.a.createElement("a",{href:e.href,rel:"noopener noreferrer",target:"_blank"},e.children)}}}),l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"tags"},l.a.createElement("em",null,"Tags"),l.a.createElement("span",null,":"),a),l.a.createElement("em",{className:"updated date"},""!==e.data.update&&u()(e.data.update,"yyyymmddHH")-u()(e.data.date,"yyyymmddHH")>24?"Updated: "+u()(e.data.update,"mmmm dS, yyyy"):""))):l.a.createElement(o.default,null))}}}]);