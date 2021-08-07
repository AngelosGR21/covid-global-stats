(this["webpackJsonpcovid-global-stats"]=this["webpackJsonpcovid-global-stats"]||[]).push([[0],{55:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(28),s=c.n(n),o=c(2),i=c(8),j=c(11),l=c.n(j),h=c(13),d=c(9),b=c(14),u=c.n(b),O=c(30),x=c(0),p=function(){return Object(x.jsx)("footer",{children:Object(x.jsxs)("p",{children:["Data retrieved from ",Object(x.jsx)("a",{href:"https://github.com/ExpDev07/coronavirus-tracker-api",children:Object(x.jsx)(O.a,{})})]})})};c(55);var f=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(!0),s=Object(d.a)(n,2),o=s[0],j=s[1],b=function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://coronavirus-tracker-api.herokuapp.com/v2/latest");case 3:t=e.sent,r(t.data.latest),j(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();if(Object(a.useEffect)((function(){b()}),[]),o)return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("h1",{children:"Loading..."})});var O=c.confirmed,f=c.deaths,m=c.recovered;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("section",{className:"home-container",children:[Object(x.jsx)("h1",{className:"home-header",children:"Global Live Stats"}),Object(x.jsx)("div",{className:"home-statistics",children:Object(x.jsxs)("header",{className:"home-headers",children:[Object(x.jsxs)("h3",{className:"home-cases",children:["Cases confirmed : ",O.toLocaleString()]}),Object(x.jsxs)("h3",{className:"home-recoveries",children:["Total recovered : ",m.toLocaleString()]}),Object(x.jsxs)("h3",{className:"home-deaths",children:["Total deaths : ",f.toLocaleString()]})]})}),Object(x.jsx)(i.b,{className:"home-link",to:"/countries",children:"View By Country"}),Object(x.jsx)(p,{})]})})},m=function(){return Object(x.jsxs)("nav",{className:"navbar",children:[Object(x.jsx)("h3",{children:"COVID-19"}),Object(x.jsx)(i.b,{to:"/",children:"Home"})]})},v=function(){var e=Object(h.a)(l.a.mark((function e(t,c,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get(t);case 3:r=e.sent,c(a?r.data[a]:r.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),console.log("Error fetching data");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,c,a){return e.apply(this,arguments)}}(),g=function(e){var t=e.countriesData,c=e.flags;return Object(x.jsx)("tbody",{children:t.map((function(e,t){var a=c.filter((function(t){return t.alpha2Code===e.country_code}));return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"image-cell",children:void 0===a[0]?"----":Object(x.jsx)("img",{className:"countries-img",alt:e.country,src:a[0].flag})}),Object(x.jsxs)("td",{children:[e.country,e.province?", ".concat(e.province," "):""]}),Object(x.jsx)("td",{children:e.country_population?e.country_population.toLocaleString():"0"}),Object(x.jsx)("td",{children:e.latest.confirmed.toLocaleString()}),Object(x.jsx)("td",{children:e.latest.deaths.toLocaleString()}),Object(x.jsx)("td",{children:e.latest.recovered.toLocaleString()}),Object(x.jsx)("td",{children:e.last_updated.slice(0,10)})]},t)}))})},N=function(e){for(var t=e.countriesPerPage,c=e.countriesData,a=e.paginate,r=e.currentPage,n=[],s=1;s<=Math.ceil(c/t);s++)n.push(s);return Object(x.jsx)("div",{children:n.map((function(e,t){return Object(x.jsx)("button",{disabled:r===e,onClick:function(){a(e),window.scrollTo({top:0,behavior:"smooth"})},href:"#",className:"countries-pages ".concat(r===e?"current-page":""),children:e},t)}))})},S=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)([]),s=Object(d.a)(n,2),o=s[0],i=s[1],j=Object(a.useState)(!0),l=Object(d.a)(j,2),h=l[0],b=l[1],u=Object(a.useState)(1),O=Object(d.a)(u,2),f=O[0],S=O[1],k=Object(a.useState)(20),y=Object(d.a)(k,1)[0];Object(a.useEffect)((function(){v("https://coronavirus-tracker-api.herokuapp.com/v2/locations",r,"locations"),v("https://restcountries.eu/rest/v2/all?fields=flag;alpha2Code",i),b(!1)}),[]);var L=f*y,D=L-y,w=c.slice(D,L);return h?Object(x.jsx)("h1",{children:"Loading..."}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m,{}),Object(x.jsxs)("section",{className:"countries-section",children:[Object(x.jsxs)("table",{children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{"aria-colspan":"1",children:"Flag"}),Object(x.jsx)("th",{"aria-colspan":"1",children:"Country Name/Province"}),Object(x.jsx)("th",{"aria-colspan":"1",children:"Population"}),Object(x.jsx)("th",{"aria-colspan":"1",children:"Cases confirmed"}),Object(x.jsx)("th",{"aria-colspan":"1",children:"Deaths"}),Object(x.jsx)("th",{"aria-colspan":"1",children:"Recovered"}),Object(x.jsx)("th",{"aria-colspan":"1",children:"Last Updated YYYY/MM/DD"})]})}),Object(x.jsx)(g,{countriesData:w,flags:o}),Object(x.jsx)("td",{colSpan:"7",className:"countries-table-footer",children:Object(x.jsx)(N,{countriesPerPage:y,countriesData:c.length,paginate:function(e){S(e)},currentPage:f})})]}),Object(x.jsx)(p,{})]})]})},k=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m,{}),Object(x.jsx)("section",{className:"error-section",children:Object(x.jsxs)("div",{className:"error-div",children:[Object(x.jsx)("h1",{children:"404 Page not found..."}),Object(x.jsx)(i.b,{to:"/countries",className:"error-link",children:"Back to Countries"})]})})]})};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(i.a,{children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)(f,{})}),Object(x.jsx)(o.a,{path:"/countries",children:Object(x.jsx)(S,{})}),Object(x.jsx)(o.a,{path:"*",children:Object(x.jsx)(k,{})})]})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.29737146.chunk.js.map