(window["webpackJsonpsena-totem"]=window["webpackJsonpsena-totem"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),c=a.n(r),i=a(16),o=(a(73),a(12)),u=a(18),m=a(27),p=a.n(m),s=a(40),E=a(121),y=a(118),d=p.a.create({baseURL:"https://sena-totem.firebaseio.com/"}),b=a(4),x=a(114),h=a(115),f=a(116),D=function(e){var t=e.list.wares.map((function(e){return l.a.createElement("option",{key:e,value:e})})),a=e.list.subwares.map((function(e){return l.a.createElement("option",{key:e,value:e})})),n=e.list.exps.map((function(e){return l.a.createElement("option",{key:e,value:e})})),r=e.list.colors.map((function(e){return l.a.createElement("option",{key:e,value:e})}));return l.a.createElement(b.e,{initialValues:{type:"",name:"",color:"",quantity:"",totalPrice:""},validate:function(e){var t={};return e.type||(t.type="\u041d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u043e\u0431\u0440\u0430\u0442\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e!"),e.name||(t.name="\u041d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u043e \u0432\u043d\u0435\u0441\u0442\u0438 \u043d\u0430\u0437\u0432\u0443!"),!isNaN(e.quantity)&&(0!==e.quantity&&""!==e.quantity||"\u0422\u043e\u0432\u0430\u0440"!==e.type&&"\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440"!==e.type)||(t.quantity="\u041d\u0435\u0432\u0456\u0440\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c!"),e.totalPrice&&!isNaN(e.totalPrice)||(t.totalPrice="\u041d\u0435\u0432\u0456\u0440\u043d\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c!"),t},onSubmit:function(t,a,n){var l=a.setSubmitting;t.time=(new Date).toISOString().split("T")[0],""===t.color.trim()&&(t.color="\u043d/\u0437"),t.quantity=Number(t.quantity),t.totalPrice=Number(t.totalPrice),e.formSubmitHandler(t),l(!1)}},(function(e){var c=e.isSubmitting,i=e.values,o=e.setFieldValue;return l.a.createElement(x.a,null,l.a.createElement(h.a,null,l.a.createElement(f.a,null,l.a.createElement(b.d,null,l.a.createElement(h.a,null,l.a.createElement(f.a,null,l.a.createElement(b.b,{className:"radioInput",type:"radio",name:"type",value:"\u0422\u043e\u0432\u0430\u0440",checked:"\u0422\u043e\u0432\u0430\u0440"===i.type,onChange:function(){return o("type","\u0422\u043e\u0432\u0430\u0440")}}),l.a.createElement("label",null,"\u0422\u043e\u0432\u0430\u0440"),l.a.createElement(b.b,{className:"radioInput",type:"radio",name:"type",value:"\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440",checked:"\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440"===i.type,onChange:function(){return o("type","\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440")}}),l.a.createElement("label",null,"\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440"),l.a.createElement(b.b,{className:"radioInput",type:"radio",name:"type",value:"\u0412\u0438\u0442\u0440\u0430\u0442\u0430",checked:"\u0412\u0438\u0442\u0440\u0430\u0442\u0430"===i.type,onChange:function(){return o("type","\u0412\u0438\u0442\u0440\u0430\u0442\u0430")}}),l.a.createElement("label",null,"\u0412\u0438\u0442\u0440\u0430\u0442\u0430"),l.a.createElement("span",{className:"errorMessage"},l.a.createElement(b.a,{name:"type"})))),l.a.createElement(h.a,null,l.a.createElement(f.a,null,l.a.createElement("label",null,"\u041d\u0430\u0437\u0432\u0430"),l.a.createElement(b.b,{name:"name",list:"name"}),l.a.createElement("datalist",{id:"name"},"\u0422\u043e\u0432\u0430\u0440"===i.type&&t,"\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440"===i.type&&a,"\u0412\u0438\u0442\u0440\u0430\u0442\u0430"===i.type&&n),l.a.createElement("span",{className:"errorMessage"},l.a.createElement(b.a,{name:"name"})),l.a.createElement("label",null,"\u041a\u043e\u043b\u0456\u0440"),l.a.createElement(b.b,{name:"color",list:"color"}),l.a.createElement("datalist",{id:"color"},r),l.a.createElement("label",null,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"),l.a.createElement(b.b,{className:"input-number",name:"quantity",type:"number",disabled:"\u0412\u0438\u0442\u0440\u0430\u0442\u0430"===i.type}),l.a.createElement("span",{className:"errorMessage"},l.a.createElement(b.a,{name:"quantity"})),l.a.createElement("label",null,"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c"),l.a.createElement(b.b,{className:"input-number",name:"totalPrice",type:"number"}),l.a.createElement("span",{className:"errorMessage"},l.a.createElement(b.a,{name:"totalPrice"})),l.a.createElement("label",null,"\u0426\u0456\u043d\u0430 \u0437\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044e"),l.a.createElement(b.b,{className:"input-number",name:"price",value:isNaN(i.totalPrice/i.quantity)||"\u0412\u0438\u0442\u0440\u0430\u0442\u0430"===i.type?0:i.totalPrice/i.quantity,onChange:function(){return o("price",i.totalPrice/i.quantity)},disabled:!0}))),l.a.createElement(h.a,null,l.a.createElement(f.a,{xs:{span:3,offset:9}},l.a.createElement("button",{className:"submitData",type:"submit",disabled:c},"\u0412\u043d\u0435\u0441\u0442\u0438")))))))}))},q=a(117),P=function(e){var t=e.expData?Object.keys(e.expData).reverse().map((function(t,a){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,a+1),l.a.createElement("td",null,e.expData[t].time),l.a.createElement("td",null,e.expData[t].type),l.a.createElement("td",null,e.expData[t].name),l.a.createElement("td",null,e.expData[t].color),l.a.createElement("td",null,e.expData[t].quantity),l.a.createElement("td",null,e.expData[t].totalPrice),l.a.createElement("td",null,(e.expData[t].totalPrice/e.expData[t].quantity).toFixed(2)),l.a.createElement("td",null,l.a.createElement("button",{id:t,onClick:e.deleteRowHandler},"x")))})):null;return l.a.createElement(l.a.Fragment,null,l.a.createElement(q.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"\u0414\u0430\u0442\u0430"),l.a.createElement("th",null,"\u0422\u0438\u043f"),l.a.createElement("th",null,"\u041d\u0430\u0437\u0432\u0430"),l.a.createElement("th",null,"\u041a\u043e\u043b\u0456\u0440"),l.a.createElement("th",null,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"),l.a.createElement("th",null,"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c"),l.a.createElement("th",null,"\u0426\u0456\u043d\u0430 \u0437\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u044e"),l.a.createElement("th",null,"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"))),l.a.createElement("tbody",null,t)))},I=function(e){return Object(n.useEffect)((function(){}),[e]),l.a.createElement(l.a.Fragment,null,l.a.createElement(D,{formSubmitHandler:e.onFormSubmitHandler,list:e.list}),l.a.createElement(P,{expData:e.expData,deleteRowHandler:e.onDeleteRowHandler}))},S=function(e){var t=e.list.wares.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})),a=e.list.subwares.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})),n=e.list.colors.map((function(e){return l.a.createElement("option",{key:e,value:e},e)}));return l.a.createElement(b.e,{initialValues:{price:"",income:[{type:"",name:"",color:"\u043d/\u0437",quantity:""}]},validate:function(e){var t={};return e.price&&!isNaN(e.price)||(t.price="\u041d\u0435\u0432\u0456\u0440\u043d\u0430 \u0446\u0456\u043d\u0430!"),e.income.map((function(a,n){e.income[n].type||(t.type="\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f \u0442\u043e\u0432\u0430\u0440\u0443 \u043d\u0435 \u043e\u0431\u0440\u0430\u043d\u0430!"),e.income[n].name||(t.name="\u041d\u0430\u0437\u0432\u0430 \u0442\u043e\u0432\u0430\u0440\u0443 \u043d\u0435 \u043e\u0431\u0440\u0430\u043d\u0430!"),(isNaN(e.income[n].quantity)||0===e.income[n].quantity||""===e.income[n].quantity)&&(t.quantity="\u041d\u0435\u0432\u0456\u0440\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c!")})),t},onSubmit:function(t,a,n){var l=a.setSubmitting;t.time=(new Date).toISOString().split("T")[0],e.formSubmitHandler(t),console.log(t),l(!1)},render:function(e){var r=e.isSubmitting,c=e.values,i=e.setFieldValue;e.errors;return l.a.createElement(x.a,null,l.a.createElement(h.a,null,l.a.createElement(f.a,null,l.a.createElement(b.d,null,l.a.createElement(h.a,null,l.a.createElement(f.a,null,l.a.createElement("label",null,"\u0426\u0456\u043d\u0430",l.a.createElement(b.b,{className:"input-number",name:"price",type:"number"}),l.a.createElement("span",{className:"errorMessage"},l.a.createElement(b.a,{name:"price"})),l.a.createElement("span",{className:"errorMessage"},l.a.createElement(b.a,{name:"type"})),l.a.createElement("span",{className:"errorMessage"},l.a.createElement(b.a,{name:"name"})),l.a.createElement("span",{className:"errorMessage"},l.a.createElement(b.a,{name:"quantity"}))))),l.a.createElement(b.c,{name:"income",render:function(e){return l.a.createElement(l.a.Fragment,null,c.income&&c.income.length>0?c.income.map((function(r,o){return l.a.createElement(h.a,{key:o},l.a.createElement(f.a,null,l.a.createElement("fieldset",null,l.a.createElement(b.b,{className:"radioInput",type:"radio",name:"income.".concat(o,".type"),value:"\u0422\u043e\u0432\u0430\u0440",checked:"\u0422\u043e\u0432\u0430\u0440"===c.income[o].type,onChange:function(){return i("income.".concat(o,".type"),"\u0422\u043e\u0432\u0430\u0440")}}),l.a.createElement("label",null,"\u0422\u043e\u0432\u0430\u0440"),l.a.createElement(b.b,{className:"radioInput",type:"radio",name:"income.".concat(o,".type"),value:"\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440",checked:"\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440"===c.income[o].type,onChange:function(){return i("income.".concat(o,".type"),"\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440")}}),l.a.createElement("label",null,"\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440")),l.a.createElement("fieldset",null,l.a.createElement("label",null,"\u041d\u0430\u0437\u0432\u0430"),l.a.createElement(b.b,{component:"select",name:"income.".concat(o,".name")},"\u0422\u043e\u0432\u0430\u0440"===c.income[o].type&&t,"\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440"===c.income[o].type&&a),l.a.createElement("label",null,"\u041a\u043e\u043b\u0456\u0440"),l.a.createElement(b.b,{component:"select",name:"income.".concat(o,".color")},n),l.a.createElement("label",null,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"),l.a.createElement(b.b,{className:"input-number",name:"income.".concat(o,".quantity"),type:"number"})),l.a.createElement("button",{className:"button-x",type:"button",onClick:function(){return e.remove(o)}},"x")))})):null,l.a.createElement(h.a,null,l.a.createElement(f.a,null,l.a.createElement("button",{type:"button",onClick:function(){return e.push({type:"",name:"",color:"\u043d/\u0437",quantity:""})}},"\u0414\u043e\u0434\u0430\u0442\u0438 \u0440\u044f\u0434\u043e\u043a"))),l.a.createElement(h.a,null,l.a.createElement(f.a,{xs:{span:3,offset:9}},l.a.createElement("button",{className:"submitData",type:"submit",disabled:r},"\u0412\u043d\u0435\u0441\u0442\u0438"))))}})))))}})},g=function(e){var t=e.incData?Object.keys(e.incData).reverse().map((function(t,a){var n=e.incData[t].income.map((function(e,a){return l.a.createElement("tr",{key:"".concat(t,"_").concat(a)},l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.color),l.a.createElement("td",null,e.quantity),l.a.createElement("td",null),l.a.createElement("td",null))}));return l.a.createElement("tbody",{key:t},l.a.createElement("tr",null,l.a.createElement("td",null,a+1),l.a.createElement("td",null,e.incData[t].time),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null,e.incData[t].price),l.a.createElement("td",null,l.a.createElement("button",{id:t,onClick:e.deleteRowHandler},"x"))),n)})):null;return l.a.createElement(l.a.Fragment,null,l.a.createElement(q.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"\u0414\u0430\u0442\u0430"),l.a.createElement("th",null,"\u0422\u0438\u043f"),l.a.createElement("th",null,"\u041d\u0430\u0437\u0432\u0430"),l.a.createElement("th",null,"\u041a\u043e\u043b\u0456\u0440"),l.a.createElement("th",null,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c"),l.a.createElement("th",null,"\u0426\u0456\u043d\u0430"),l.a.createElement("th",null,"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"))),t))},v=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,{formSubmitHandler:e.onFormSubmitHandler,list:e.list}),l.a.createElement(g,{incData:e.incData,deleteRowHandler:e.onDeleteRowHandler}))},w=function(e){var t={quantityE:0,totalPriceE:0,quantityI:0,totalPriceI:0,quantityS:0,totalPriceS:0},a=e.expTable||e.incTable?Object.keys(e.expTable.ware).sort().map((function(a,n){var r={};r.name=a,r.colors=[];for(var c=0;c<e.expTable.ware[a].length;c++){var i={};if(i.color=e.expTable.ware[a][c].color,i.quantityE=e.expTable.ware[a][c].quantity,i.totalPriceE=e.expTable.ware[a][c].totalPrice,i.priceE=e.expTable.ware[a][c].price,e.incTable.ware[a]){for(var o=!1,u=0;u<e.incTable.ware[a].length;u++)e.incTable.ware[a][u].color===i.color&&(o=u);"number"==typeof o?(i.quantityI=e.incTable.ware[a][o].quantity,i.totalPriceI=e.incTable.ware[a][o].totalPrice,i.priceI=e.incTable.ware[a][o].price!==1/0?e.incTable.ware[a][o].price:0,i.quantityS=i.quantityE-i.quantityI,i.priceS=i.priceI?i.priceI:i.priceE,i.totalPriceS=i.priceS*i.quantityS):(i.quantityI=0,i.totalPriceI=0,i.priceI=0,i.quantityS=i.quantityE,i.totalPriceS=i.totalPriceE,i.priceS=i.priceE)}else i.quantityI=0,i.totalPriceI=0,i.priceI=0,i.quantityS=i.quantityE,i.totalPriceS=i.totalPriceE,i.priceS=i.priceE;r.colors.push(i)}r.quantityE=0,r.quantityI=0,r.quantityS=0,r.totalPriceE=0,r.totalPriceI=0,r.totalPriceS=0,r.colors.map((function(e){r.quantityE+=e.quantityE,r.quantityI+=e.quantityI,r.quantityS+=e.quantityS,r.totalPriceE+=e.totalPriceE,r.totalPriceI+=e.totalPriceI,r.totalPriceS+=e.totalPriceS})),r.priceE=r.totalPriceE/r.quantityE,r.priceI=0===r.totalPriceI||0===r.quantityI?0:r.totalPriceI/r.quantityI,r.priceS=r.totalPriceS/r.quantityS;var m=l.a.createElement("tr",null,l.a.createElement("th",null,n+1),l.a.createElement("th",null,r.name),l.a.createElement("th",null),l.a.createElement("th",null,r.quantityE),l.a.createElement("th",null,r.totalPriceE.toFixed(0)),l.a.createElement("th",null,r.priceE.toFixed(2)),l.a.createElement("th",null,r.quantityI),l.a.createElement("th",null,r.totalPriceI.toFixed(0)),l.a.createElement("th",null,r.priceI.toFixed(2)),l.a.createElement("th",null,r.quantityS),l.a.createElement("th",null,r.totalPriceS.toFixed(0)),l.a.createElement("th",null,r.priceS.toFixed(2))),p=r.colors.map((function(e,t){return l.a.createElement("tr",{key:"".concat(r.name,"_").concat(e.color)},l.a.createElement("td",null,"".concat(n+1,".").concat(t+1)),l.a.createElement("td",null),l.a.createElement("td",null,e.color),l.a.createElement("td",null,e.quantityE),l.a.createElement("td",null,e.totalPriceE.toFixed(0)),l.a.createElement("td",null,e.priceE.toFixed(2)),l.a.createElement("td",null,e.quantityI),l.a.createElement("td",null,e.totalPriceI.toFixed(0)),l.a.createElement("td",null,e.priceI.toFixed(2)),l.a.createElement("td",null,e.quantityS),l.a.createElement("td",null,e.totalPriceS.toFixed(0)),l.a.createElement("td",null,e.priceS.toFixed(2)))}));return t.quantityE+=r.quantityE,t.totalPriceE+=r.totalPriceE,t.quantityI+=r.quantityI,t.totalPriceI+=r.totalPriceI,t.quantityS+=r.quantityS,t.totalPriceS+=r.totalPriceS,l.a.createElement("tbody",{key:a},m,p)})):null,n=e.expTable||e.incTable?Object.keys(e.expTable.subware).sort().map((function(a,n){var r={};r.name=a,r.colors=[];for(var c=0;c<e.expTable.subware[a].length;c++){var i={};if(i.color=e.expTable.subware[a][c].color,i.quantityE=e.expTable.subware[a][c].quantity,i.totalPriceE=e.expTable.subware[a][c].totalPrice,i.priceE=e.expTable.subware[a][c].price,e.incTable.ware[a]){for(var o=!1,u=0;u<e.incTable.ware[a].length;u++)e.incTable.ware[a][u].color===i.color&&(o=u);"number"==typeof o?(i.quantityI=e.incTable.ware[a][o].quantity,i.totalPriceI=e.incTable.ware[a][o].totalPrice,i.priceI=e.incTable.ware[a][o].price!==1/0?e.incTable.ware[a][o].price:0,i.quantityS=i.quantityE-i.quantityI,i.priceS=i.priceI?i.priceI:i.priceE,i.totalPriceS=i.priceS*i.quantityS):(i.quantityI=0,i.totalPriceI=0,i.priceI=0,i.quantityS=i.quantityE,i.totalPriceS=i.totalPriceE,i.priceS=i.priceE)}else i.quantityI=0,i.totalPriceI=0,i.priceI=0,i.quantityS=i.quantityE,i.totalPriceS=i.totalPriceE,i.priceS=i.priceE;r.colors.push(i)}r.quantityE=0,r.quantityI=0,r.quantityS=0,r.totalPriceE=0,r.totalPriceI=0,r.totalPriceS=0,r.colors.map((function(e){r.quantityE+=e.quantityE,r.quantityI+=e.quantityI,r.quantityS+=e.quantityS,r.totalPriceE+=e.totalPriceE,r.totalPriceI+=e.totalPriceI,r.totalPriceS+=e.totalPriceS})),r.priceE=r.totalPriceE/r.quantityE,r.priceI=0===r.totalPriceI||0===r.quantityI?0:r.totalPriceI/r.quantityI,r.priceS=r.totalPriceS/r.quantityS;var m=l.a.createElement("tr",null,l.a.createElement("th",null,n+1),l.a.createElement("th",null,r.name),l.a.createElement("th",null),l.a.createElement("th",null,r.quantityE),l.a.createElement("th",null,r.totalPriceE.toFixed(0)),l.a.createElement("th",null,r.priceE.toFixed(2)),l.a.createElement("th",null,r.quantityI),l.a.createElement("th",null,r.totalPriceI.toFixed(0)),l.a.createElement("th",null,r.priceI.toFixed(2)),l.a.createElement("th",null,r.quantityS),l.a.createElement("th",null,r.totalPriceS.toFixed(0)),l.a.createElement("th",null,r.priceS.toFixed(2))),p=r.colors.map((function(e,t){return l.a.createElement("tr",{key:"".concat(r.name,"_").concat(e.color)},l.a.createElement("td",null,"".concat(n+1,".").concat(t+1)),l.a.createElement("td",null),l.a.createElement("td",null,e.color),l.a.createElement("td",null,e.quantityE),l.a.createElement("td",null,e.totalPriceE.toFixed(0)),l.a.createElement("td",null,e.priceE.toFixed(2)),l.a.createElement("td",null,e.quantityI),l.a.createElement("td",null,e.totalPriceI.toFixed(0)),l.a.createElement("td",null,e.priceI.toFixed(2)),l.a.createElement("td",null,e.quantityS),l.a.createElement("td",null,e.totalPriceS.toFixed(0)),l.a.createElement("td",null,e.priceS.toFixed(2)))}));return t.quantityE+=r.quantityE,t.totalPriceE+=r.totalPriceE,t.quantityI+=r.quantityI,t.totalPriceI+=r.totalPriceI,t.quantityS+=r.quantityS,t.totalPriceS+=r.totalPriceS,l.a.createElement("tbody",{key:a},m,p)})):null,r=l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"\u0412\u0441\u044c\u043e\u0433\u043e"),l.a.createElement("th",null),l.a.createElement("th",null,t.quantityE),l.a.createElement("th",null,t.totalPriceE),l.a.createElement("th",null),l.a.createElement("th",null,t.quantityI),l.a.createElement("th",null,t.totalPriceI),l.a.createElement("th",null),l.a.createElement("th",null,t.quantityS),l.a.createElement("th",null,t.totalPriceS.toFixed(2)),l.a.createElement("th",null));return l.a.createElement(l.a.Fragment,null,l.a.createElement(q.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"\u0422\u043e\u0432\u0430\u0440"),l.a.createElement("th",null,"\u041a\u043e\u043b\u0456\u0440"),l.a.createElement("th",null,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043e"),l.a.createElement("th",null,"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u0432\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043e"),l.a.createElement("th",null,"\u0421\u043e\u0431\u0456\u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u043e\u0434\u0438\u043d\u0438\u0446\u0456"),l.a.createElement("th",null,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043f\u0440\u043e\u0434\u0430\u043d\u043e"),l.a.createElement("th",null,"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u043f\u0440\u043e\u0434\u0430\u043d\u043e"),l.a.createElement("th",null,"\u0426\u0456\u043d\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u0456 \u043f\u0440\u043e\u0434\u0430\u043d\u043e"),l.a.createElement("th",null,"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0456"),l.a.createElement("th",null,"\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0456"),l.a.createElement("th",null,"\u0426\u0456\u043d\u0430 \u043e\u0434\u0438\u043d\u0438\u0446\u0456 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0456"))),a,n,l.a.createElement("tbody",null,r)))},k=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(null),u=Object(o.a)(i,2),m=u[0],p=u[1];Object(n.useEffect)((function(){var e=E(),t=s();c(e),p(t)}),[e]);var s=function(){var t={},a={};return e.incData&&e.expData?(Object.keys(e.incData).map((function(n,l){e.incData[n].income.map((function(l,r){var c={type:l.type},i=0===r?e.incData[n].price:0;if(c[l.name]={color:l.color,quantity:l.quantity,totalPrice:i,price:l.quantity/i},"\u0422\u043e\u0432\u0430\u0440"===c.type)if(t[e.incData[n].income[r].name]){for(var o=!1,u=0;u<t[e.incData[n].income[r].name].length;u++)t[e.incData[n].income[r].name][u].color===c[l.name].color&&(t[e.incData[n].income[r].name][u].quantity+=c[l.name].quantity,t[e.incData[n].income[r].name][u].totalPrice+=c[l.name].totalPrice,t[e.incData[n].income[r].name][u].price=t[e.incData[n].income[r].name][u].totalPrice/t[e.incData[n].income[r].name][u].quantity,o=!0);o||t[e.incData[n].income[r].name].push(c[l.name])}else t[e.incData[n].income[r].name]=[],t[e.incData[n].income[r].name].push(c[l.name]);else if("\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440"===c.type)if(a[e.incData[n].income[r].name]){for(var m=!1,p=0;p<a[e.incData[n].income[r].name].length;p++)a[e.incData[n].income[r].name][p].color===c[l.name].color&&(a[e.incData[n].income[r].name][p].quantity+=c[l.name].quantity,a[e.incData[n].income[r].name][p].totalPrice+=c[l.name].totalPrice,a[e.incData[n].income[r].name][p].price=a[e.incData[n].income[r].name][p].totalPrice/a[e.incData[n].income[r].name][p].quantity,m=!0);m||a[e.incData[n].income[r].name].push(c[l.name])}else a[e.incData[n].income[r].name]=[],a[e.incData[n].income[r].name].push(c[l.name])}))})),{ware:t,subware:a}):null},E=function(){var t={},a={},n={};return e.incData&&e.expData?(Object.keys(e.expData).map((function(l,r){if("\u0422\u043e\u0432\u0430\u0440"===e.expData[l].type)if(t.hasOwnProperty(e.expData[l].name)){for(var c=!1,i=0;i<t[e.expData[l].name].length;i++)e.expData[l].color===t[e.expData[l].name][i].color&&(t[e.expData[l].name][i].quantity+=e.expData[l].quantity,t[e.expData[l].name][i].totalPrice+=e.expData[l].totalPrice,t[e.expData[l].name][i].price=t[e.expData[l].name][i].totalPrice/t[e.expData[l].name][i].quantity,c=!0);if(!c){var o={};o.color=e.expData[l].color,o.quantity=e.expData[l].quantity,o.totalPrice=e.expData[l].totalPrice,o.price=e.expData[l].totalPrice/e.expData[l].quantity,t[e.expData[l].name].push(o)}}else{t[e.expData[l].name]=[];var u={};u.color=e.expData[l].color,u.quantity=e.expData[l].quantity,u.totalPrice=e.expData[l].totalPrice,u.price=e.expData[l].totalPrice/e.expData[l].quantity,t[e.expData[l].name].push(u)}if("\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440"===e.expData[l].type)if(a.hasOwnProperty(e.expData[l].name)){for(var m=!1,p=0;p<a[e.expData[l].name].length;p++)e.expData[l].color===a[e.expData[l].name][p].color&&(a[e.expData[l].name][p].quantity+=e.expData[l].quantity,a[e.expData[l].name][p].totalPrice+=e.expData[l].totalPrice,a[e.expData[l].name][p].price=a[e.expData[l].name][p].totalPrice/a[e.expData[l].name][p].quantity,m=!0);if(!m){var s={};s.color=e.expData[l].color,s.quantity=e.expData[l].quantity,s.totalPrice=e.expData[l].totalPrice,s.price=e.expData[l].totalPrice/e.expData[l].quantity,a[e.expData[l].name].push(s)}}else{a[e.expData[l].name]=[];var E={};E.color=e.expData[l].color,E.quantity=e.expData[l].quantity,E.totalPrice=e.expData[l].totalPrice,E.price=e.expData[l].totalPrice/e.expData[l].quantity,a[e.expData[l].name].push(E)}if("\u0412\u0438\u0442\u0440\u0430\u0442\u0430"===e.expData[l].type)if(n.hasOwnProperty(e.expData[l].name)){for(var y=!1,d=0;d<n[e.expData[l].name].length;d++)e.expData[l].color===n[e.expData[l].name][d].color&&(n[e.expData[l].name][d].quantity+=e.expData[l].quantity,n[e.expData[l].name][d].totalPrice+=e.expData[l].totalPrice,n[e.expData[l].name][d].price=n[e.expData[l].name][d].totalPrice/n[e.expData[l].name][d].quantity,y=!0);if(!y){var b={};b.color=e.expData[l].color,b.quantity=e.expData[l].quantity,b.totalPrice=e.expData[l].totalPrice,b.price=e.expData[l].totalPrice/e.expData[l].quantity,n[e.expData[l].name].push(b)}}else{n[e.expData[l].name]=[];var x={};x.color=e.expData[l].color,x.quantity=e.expData[l].quantity,x.totalPrice=e.expData[l].totalPrice,x.price=e.expData[l].totalPrice/e.expData[l].quantity,n[e.expData[l].name].push(x)}return""})),{ware:t,subware:a,exp:n}):null};return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,{expTable:r,incTable:m}))};a(97),a(98);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(null),m=Object(o.a)(i,2),p=m[0],b=m[1],x=Object(n.useState)(!1),h=Object(o.a)(x,2),f=h[0],D=h[1],q=Object(n.useState)({wares:[],subwares:[],exps:[],colors:[]}),P=Object(o.a)(q,2),S=P[0],g=P[1];Object(n.useEffect)((function(){d.get("/.json?auth="+e.authData.idToken).then((function(e){console.log(e),c(e.data.exp),b(e.data.inc)})).catch((function(e){console.log(e)}))}),[f]),Object(n.useEffect)((function(){if(r&&Object.keys(r).length>0){var e={wares:[],subwares:[],exps:[],colors:[]};Object.keys(r).map((function(t){switch(r[t].type){case"\u0422\u043e\u0432\u0430\u0440":e.wares.indexOf(r[t].name)>-1||e.wares.push(r[t].name);break;case"\u0421\u0443\u043f\u0443\u0442\u043d\u0456\u0439 \u0442\u043e\u0432\u0430\u0440":e.subwares.indexOf(r[t].name)>-1||e.subwares.push(r[t].name);break;case"\u0412\u0438\u0442\u0440\u0430\u0442\u0430":e.exps.indexOf(r[t].name)>-1||e.exps.push(r[t].name)}e.colors.indexOf(r[t].color)>-1||e.colors.push(r[t].color)})),e.wares.sort(),e.subwares.sort(),e.exps.sort(),e.colors.sort(),g(e)}}),[r]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{defaultActiveKey:"storage",id:"uncontrolled-tab-example"},l.a.createElement(y.a,{eventKey:"exp",title:"\u0412\u0438\u0442\u0440\u0430\u0442\u0438"},l.a.createElement(I,{expData:r,onFormSubmitHandler:function(t){d.post("/exp.json?auth="+e.authData.idToken,t).then((function(e){console.log(e);var a=T({},r,Object(s.a)({},e.data.name,t));c(a)})).catch((function(e){console.log(e),D(!0)}))},onDeleteRowHandler:function(t){var a=t.target.id;d.delete("/exp/"+a+".json?auth="+e.authData.idToken).then((function(e){console.log(e)})).catch((function(e){console.log(e),D(!0)}));var n={};for(var l in r)l!==a&&(n[l]=r[l]);c(n)},list:S})),l.a.createElement(y.a,{eventKey:"inc",title:"\u0414\u043e\u0445\u043e\u0434\u0438"},l.a.createElement(v,{incData:p,onFormSubmitHandler:function(t){d.post("/inc.json?auth="+e.authData.idToken,t).then((function(e){console.log(e);var a=T({},p,Object(s.a)({},e.data.name,t));b(a)})).catch((function(e){console.log(e),D(!0)}))},onDeleteRowHandler:function(t){var a=t.target.id;d.delete("/inc/"+a+".json?auth="+e.authData.idToken).then((function(e){console.log(e)})).catch((function(e){console.log(e),D(!0)}));var n={};for(var l in p)l!==a&&(n[l]=p[l]);b(n)},list:S})),l.a.createElement(y.a,{eventKey:"storage",title:"\u0421\u043a\u043b\u0430\u0434"},l.a.createElement(k,{expData:r,incData:p}))),!e.authData.signedIn&&l.a.createElement(u.a,{to:"/"}))},F=(a(109),function(e){return l.a.createElement(x.a,null,l.a.createElement(h.a,null,l.a.createElement(f.a,null,l.a.createElement("div",{className:"authForm"},l.a.createElement(b.e,{initialValues:{email:"",password:""},onSubmit:function(t,a){var n=a.setSubmitting;e.submitHandler(t),n(!1)}},(function(e){var t=e.isSubmitting;e.values,e.setFieldValue;return l.a.createElement(b.d,null,l.a.createElement(b.b,{type:"email",name:"email",placeholder:"Email"}),l.a.createElement(b.b,{type:"password",name:"password",placeholder:"Password"}),l.a.createElement("button",{type:"submit",disabled:t},"Log In"))}))))))}),N=a(120),H=a(119),C=a(67),R=a(66),M=a.n(R),L=(a(110),function(e){return l.a.createElement(N.a,{bg:"dark",variant:"dark"},l.a.createElement(i.b,{to:"/index",exact:!0},l.a.createElement(N.a.Brand,null,l.a.createElement(H.a,{src:M.a})," ")),l.a.createElement(C.a,{className:"mr-auto"},!e.authState&&l.a.createElement(i.b,{className:"nav-link",to:"/index",exact:!0},"Home"),e.authState&&l.a.createElement(i.b,{className:"nav-link",to:"/workarea",exact:!0},"Work Area"),e.authState&&l.a.createElement("button",{className:"logout",onClick:e.onLogout},"Log Out")))}),V=(a(111),function(){var e=Object(n.useState)({idToken:localStorage.getItem("token"),userId:localStorage.getItem("userId"),signedIn:localStorage.getItem("signedIn")}),t=Object(o.a)(e,2),a=t[0],r=t[1],c=function(){localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),localStorage.removeItem("signedIn"),r({idToken:"",userId:"",signedIn:""}),console.log("logout",a)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{authState:a.signedIn,onLogout:c}),l.a.createElement(u.d,null,l.a.createElement(u.b,{path:"/workarea"},l.a.createElement(j,{authData:a})),l.a.createElement(u.b,{path:"/"},l.a.createElement(F,{submitHandler:function(e){e.returnSecureToken=!0,p.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFX9LAlOi-6ONPEXG3hw22qJT5aIo91Z4",e).then((function(e){console.log(e);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),localStorage.setItem("signedIn",!0);var a={idToken:e.data.idToken,userId:e.data.localId,refreshToken:e.data.refreshToken,signedIn:!0};r(a),setTimeout((function(){c()}),1e3*e.data.expiresIn)})).catch((function(e){console.log(e)}))},token:a.idToken}))),a.signedIn&&l.a.createElement(u.a,{to:"/workarea"}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=l.a.createElement(i.a,null,l.a.createElement(V,null));c.a.render(A,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,t,a){e.exports=a.p+"static/media/logo.edfb4b75.jpg"},68:function(e,t,a){e.exports=a(112)},73:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.1660b22e.chunk.js.map