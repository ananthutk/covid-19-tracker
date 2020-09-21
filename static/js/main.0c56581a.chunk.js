(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{1408:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),r=t(124),l=t.n(r),s=(t(593),t(594),t(595),t(206)),o=t.n(s),i=t(92);var d=function(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.countryData}));return Object(c.useEffect)((function(){e((function(e){o.a.get("https://api.covidindiatracker.com/total.json").then((function(a){var t=a.data;e({type:"FETCH_COUNTRYDATA_SUCCESS",payload:t})})).catch((function(a){e(function(e){return{type:"FETCH_COUNTRYDATA_FAILURE",payload:e}}(a))}))}))}),[]),n.a.createElement("div",{className:"container mainSection"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 col-md-3 col-lg-3"},n.a.createElement("div",{className:"card subCardDiv confirmed"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",null,"Total Confirmed Cases"),n.a.createElement("div",null,a.confirmed)))),n.a.createElement("div",{className:"col-sm-12 col-md-3 col-lg-3"},n.a.createElement("div",{className:"card subCardDiv active"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",null,"Active Cases"),n.a.createElement("div",null,a.active)))),n.a.createElement("div",{className:"col-sm-12 col-md-3 col-lg-3"},n.a.createElement("div",{className:"card subCardDiv"},n.a.createElement("div",{className:"card-body recovered"},n.a.createElement("div",null,"Recovered Cases"),n.a.createElement("div",null,a.recovered)))),n.a.createElement("div",{className:"col-sm-12 col-md-3 col-lg-3"},n.a.createElement("div",{className:"card subCardDiv deaths"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",null,"Deaths"),n.a.createElement("div",null,a.deaths))))))};var u=function(){return n.a.createElement("div",null,n.a.createElement("h1",{style:{fontWeight:100,margin:"20px"}},"Covid 19 Tracker India"))},m=t(53),v=(t(617),t(317)),b=t(1417),E=t(1418),h=t(1416),f=t(1419);var p=function(e){var a=e.filteredData,t=e.pieConfirmedTotal,r=e.pieActive,l=e.pieRecovered,s=e.pieDeaths,o=Object(c.useState)("India"),i=Object(m.a)(o,2),d=i[0],u=i[1],v=Object(c.useState)(20.5937),p=Object(m.a)(v,2),k=p[0],g=p[1],O=Object(c.useState)(78.9629),j=Object(m.a)(O,2),C=j[0],S=j[1],T=Object(c.useState)(13),A=Object(m.a)(T,2),D=A[0],y=(A[1],Object(c.useState)()),N=Object(m.a)(y,2),w=N[0],R=N[1],_=Object(c.useState)(),L=Object(m.a)(_,2),U=L[0],F=L[1],H=Object(c.useState)(),M=Object(m.a)(H,2),P=M[0],I=M[1],x=Object(c.useState)(),B=Object(m.a)(x,2),W=B[0],J=B[1];Object(c.useEffect)((function(){console.log("map Data ",a),console.log("data length",a.length),a.length>1?(g(20.5937),S(78.9629),R(t),F(r),I(l),J(s)):Object.values(a).map((function(e){console.log("map state",e.state),R(e.confirmed),F(e.active),I(e.confirmed),J(e.deaths),u(e.state),function(e,a,t){switch(e){case"Maharashtra":a(19.601194),t(75.552979);break;case"Andhra Pradesh":a(15.9129),t(79.74);break;case"Tamil Nadu":a(11.1271),t(78.6569);break;case"Karnataka":a(15.3173),t(75.7139);break;case"Maharashtra":a(19.7515),t(75.7139);break;case"Uttar Pradesh":a(26.8467),t(80.9462);break;case"Delhi":a(28.7041),t(77.1025);break;case"West Bengal":a(22.9868),t(87.855);break;case"Odisha":a(20.9517),t(85.0985);break;case"Telangana":a(18.1124),t(79.0193);break;case"Bihar":a(25.0961),t(85.3131);break;case"Assam":a(26.2006),t(92.9376);break;case"Kerala":a(10.8505),t(76.2711);break;case"Gujarat":a(22.2587),t(71.1924);break;case"Rajasthan":a(27.0238),t(74.2179);break;case"Haryana":a(29.0588),t(76.0856);break;case"Madhya Pradesh":a(22.9734),t(78.6569);break;case"Punjab":a(31.1471),t(75.3412);break;case"Chhattisgarh":a(21.2514),t(81.6296);break;case"Jharkhand":a(23.6102),t(85.2799);break;case"Jammu and Kashmir":a(33.7782),t(76.5762);break;case"Uttarakhand":a(30.0668),t(79.0193);break;case"Goa":a(15.2993),t(74.124);break;case"Puducherry":a(11.9416),t(79.8083);break;case"Tripura":a(23.9408),t(91.9882);break;case"Himachal Pradesh":a(31.1048),t(77.1734);break;case"Chandigarh":a(30.7333),t(76.7794);break;case"Manipur":a(24.6637),t(93.9063);break;case"Arunachal Pradesh":a(28.218),t(94.7278);break;case"Nagaland":a(26.1584),t(94.5624);break;case"Meghalaya":a(25.467),t(91.3662);break;case"Ladakh":a(34.152588),t(77.577049);break;case"Andaman and Nicobar Islands":a(11.7401),t(92.6586);break;case"Sikkim":a(27.533),t(88.5122);break;case"Mizoram":a(23.1645),t(92.9376);break;case"Daman and Diu":a(20.4283),t(72.8397);break;case"Dadra and Nagar Haveli":a(20.1809),t(73.0169);break;case"Lakshadweep":a(8.295441),t(73.048973);break;default:a(20.5937),t(78.9629)}}(e.state,g,S)}))}));var Y=[k,C];return n.a.createElement(b.a,{center:Y,zoom:D},n.a.createElement(E.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.a.createElement(h.a,{position:Y},n.a.createElement(f.a,null,d,n.a.createElement("br",null),"total confirmed - ",w," ",n.a.createElement("br",null)," active - ",U,n.a.createElement("br",null)," recovered - ",P,n.a.createElement("br",null)," deaths - ",W)))};var k=function(){var e=Object(c.useState)({}),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(c.useState)(""),s=Object(m.a)(l,2),d=s[0],u=s[1],b=Object(c.useState)({}),E=Object(m.a)(b,2),h=E[0],f=E[1],k=Object(i.b)(),g=Object(i.c)((function(e){return{allStatesTotalData:e.allStatesTotalData,loading:e.loading}})),O=g.allStatesTotalData,j=(g.loading,Object.values(h).reduce((function(e,a){return e+a.confirmed}),0)),C=Object.values(h).reduce((function(e,a){return e+a.active}),0),S=Object.values(h).reduce((function(e,a){return e+a.recovered}),0),T=Object.values(h).reduce((function(e,a){return e+a.deaths}),0);return console.log("pieConfirmedtotal-",j,",pieActive-",C,",-pieRecovered-",S,"-pieDeaths",T),Object(c.useEffect)((function(){var e=[{values:[j,C,S,T],labels:["Total Confirmed Cases","Active Cases","Recovered Cases","Deaths"],type:"pie"}],a=[{x:["Total Confirmed Cases","Active Cases","Recovered Cases","Deaths"],y:[j,C,S,T]}];v.newPlot("pieChart",e,{height:400,width:550}),v.newPlot("barChart",a)}),[j]),Object(c.useEffect)((function(){k((function(e){console.log("all states data"),o.a.get("https://api.covidindiatracker.com/state_data.json").then((function(a){console.log("response all states  ",a.data);var t=a.data;e({type:"FETCH_ALLSTATESDATA_SUCCESS",payload:t})})).catch((function(a){console.log("error all states",a),e(function(e){return{type:"FETCH_ALLSTATESDATA_FAILURE",payload:e}}(a))}))})),console.log("allStatesData ",O)}),[]),Object(c.useEffect)((function(){console.log(O),r(O),f(O),console.log("totalData",t)}),[O]),Object(c.useEffect)((function(){console.log("totalData after updation",t),Object.values(t).map((function(e){console.log("kk",e)}))}),[t]),Object(c.useEffect)((function(){console.log("current state",d);var e=Object.values(t).filter((function(e){return e.state==d}));f(e)}),[d]),n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("label",{style:{padding:"10px"}},"Filter By State"),n.a.createElement("select",{onChange:function(e){var a;0!=(a=e.target.value)?u(a):f(O)},style:{width:"85%",padding:"10px"}},n.a.createElement("option",{value:0},"All"),Object.values(t).map((function(e){return n.a.createElement("option",{key:e.state,value:e.state},e.state," - (",e.id,")")})),"fluid")),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{id:"pieChart",className:"col-sm-12 col-md-6 col-lg-6  "}),n.a.createElement("div",{id:"barChart",className:"col-sm-12 col-md-6 col-lg-6  "}))),n.a.createElement("div",{className:"mainTableSection"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("table",null,n.a.createElement("tr",null,n.a.createElement("th",null,"State"),n.a.createElement("th",null,"Total Confirmed Cases"),n.a.createElement("th",null,"Active Cases"),n.a.createElement("th",null,"Recovered Cases"),n.a.createElement("th",null,"Deaths")),Object.values(h).map((function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,e.state),n.a.createElement("td",null,e.confirmed),n.a.createElement("td",null,e.active),n.a.createElement("td",null,e.recovered),n.a.createElement("td",null,e.deaths))}))))))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(p,{filteredData:h,pieConfirmedTotal:j,pieActive:C,pieRecovered:S,pieDeaths:T})))))};var g=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u,null),n.a.createElement(d,null),n.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=t(91),j=t(584),C=t(585),S={countryData:{}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_COUNTRYDATA_SUCCESS":case"FETCH_COUNTRYDATA_FAILURE":return a.payload;default:return e}},A={allStatesTotalData:[],loading:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_ALLSTATESDATA_SUCCESS":case"FETCH_ALLSTATESDATA_FAILURE":return a.payload;default:return e}},y=Object(O.combineReducers)({countryData:T,allStatesTotalData:D}),N=Object(O.createStore)(y,Object(j.composeWithDevTools)(Object(O.applyMiddleware)(C.a)));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,{store:N},n.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},588:function(e,a,t){e.exports=t(1408)},593:function(e,a,t){},594:function(e,a,t){},595:function(e,a,t){},617:function(e,a,t){},908:function(e,a){}},[[588,1,2]]]);
//# sourceMappingURL=main.0c56581a.chunk.js.map