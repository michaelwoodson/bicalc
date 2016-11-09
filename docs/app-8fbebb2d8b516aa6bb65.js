webpackJsonp([0],[,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.APPLY_BUDGET_ITEM="APPLY_BUDGET_ITEM",t.APPLY="APPLY",t.TOGGLE_POP_ADJUSTMENT="TOGGLE_POP_ADJUSTMENT"},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){e.type=T,l(e)}function u(e){e.type=j,l(e)}function s(e){e.type=M,l(e)}function l(e){var t=e.text,n=e.amount,o=e.options,r=e.note,a=e.source,i=e.type,u={text:t,amount:1e9*n,applied:!1,id:G++,note:r,source:a,type:i};o&&(u.options=o,o.forEach(function(e){e.value*=1e9}),u.amount=o[0].value),B.budgetItems.push(u)}function c(e,t){return e.shiftRight(t).isOdd()}Object.defineProperty(t,"__esModule",{value:!0});var d,p,f=function(){function e(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(o=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(s){r=!0,a=s}finally{try{!o&&u["return"]&&u["return"]()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=n(1),m=r(h),g=n(0),b=r(g),v=n(5),_=o(v),x=n(8),y=o(x),P=n(4),I=r(P);m["default"].use(b["default"]);var A="CBO_OUTLOOK",O="CBO_BUDGET_OPTIONS",w="BIGGEST_TAX_BREAKS",E="CARBON_TAX",C=325e6,S=.229*C*.5,T="SPENDING_CUTS",j="TAX_PREFERENCE_ADJUSTMENTS",M="TAX_INCREASES",R=0,B={population:C,budgetItems:[],populationAdjustments:[{id:R++,name:"Exclude federal employees",size:4185e3,excluded:!0,help:"Reduce federal salaries by the amount of the basic income."},{id:R++,name:"Exclude Social Security recipients",size:65764e3,excluded:!0,help:"Reduce social security payments by the amount of the basic income."},{id:R++,name:"Exclude incarcerated",size:2220300,excluded:!0,help:"Since living expenses are already paid."},{id:R++,name:"Exclude half children",size:S,excluded:!1,help:"Child population split into two so you can figure a 50% basic income for children."},{id:R++,name:"Exclude half children",size:S,excluded:!1,help:"Child population split into two so you can figure a 50% basic income for children."}],sources:(d={},a(d,A,{name:"CBO Budget and Economic Outlook: 2016 to 2026",url:"https://www.cbo.gov/sites/default/files/114th-congress-2015-2016/reports/51908-2016_Outlook_Update_OneCol-2.pdf"}),a(d,O,{name:"CBO Options for Reducing the Deficit: 2015 to 2024",url:"https://www.cbo.gov/sites/default/files/cbofiles/attachments/49638-BudgetOptions.pdf"}),a(d,w,{name:"PewResearchCenter: The biggest U.S. tax breaks",url:"http://www.pewresearch.org/fact-tank/2016/04/06/the-biggest-u-s-tax-breaks/"}),a(d,E,{name:"Carbon Tax Center: FAQs",url:"http://www.carbontax.org/faqs/"}),d)},N=592,D={spendingCuts:[{text:"Supplemental Nutrition Assistance Program",amount:71,source:A,note:"Page 76"},{text:"Supplemental Security Income",amount:56,source:A,note:"Page 76"},{text:"Unemployment compensation",amount:32,source:A,note:"Page 76, note: unemployment has its own tax that would need to be maintained."},{text:"Family support and foster care",amount:32,source:A,note:"Page 76"},{text:"Child nutrition",amount:24,source:A,note:"Page 76"},{text:"Reduce Funding for International Affairs Programs",amount:10,source:O,note:"Option 28, Page 19"},{text:"Eliminate Human Space Exploration Programs",amount:8,source:O,note:"Option 29, Page 19"},{text:"Limit Highway Funding to Expected Highway Revenues",amount:7.5,source:O,note:"Option 33, Page 21"},{text:"Reduce the Size of the Federal Workforce Through Attrition",amount:4,source:O,note:"Option 42, Page 25"},{text:"Eliminate the Add-On to Pell Grants That Is Funded With Mandatory Spending",amount:7.5,source:O,note:"Option 6, Page 8"},{text:"Eliminate Concurrent Receipt of Retirement Pay and Disability Compensation for Disabled Veterans",amount:10,source:O,note:"Option 7, Page 9"},{text:"Military (Discretionary)",options:[{text:"10%",value:.1*N},{text:"20%",value:.2*N},{text:"50%",value:.5*N},{text:"80%",value:.8*N}],source:A,note:"Page 78"}],taxPreferenceAdjustments:[{text:"Earned income, child, and other tax credits",amount:86,source:A,note:"Page 76"},{text:"End lower tax rates on dividends and long-term capital gains",amount:134.6,source:w},{text:"End deferal of active income of controlled foreign corporations",amount:108.9,source:w},{text:"End deductibility of contributions to and earnings of defined-contribution retirement plans",amount:82.7,source:w},{text:"End mortgage interest deduction for owner occupied residences",amount:77,source:w},{text:"Eliminate the deduction for state and local taxes",amount:100,source:O,note:"Option 51, Page 32"},{text:"End deductibility of contirbutions to and earnings of defined-benefit pension plans",amount:57.4,source:w},{text:"Subsidies for insurance purchased through health benefit exchanges",amount:53.5,source:w},{text:"Increase the Maximum Taxable Earnings for the Social Security Payroll Tax",amount:65,source:O,note:"Option 60, Page 39"},{text:"Use an alternative measure of inflation to index Social Security and other mandatory programs",amount:15,source:O,note:"Option 21, Page 16"},{text:"Curtail the deduction for charitable giving",amount:20,source:O,note:"Option 52, Page 32"},{text:"Include all income that U.S. citizens earn abroad in taxable income",amount:9,source:O,note:"Option 54, Page 34"},{text:"Tax Social Security and railroad retirement benefits in the same way that distributions from defined benefit pensions are taxed",amount:38,source:O,note:"Option 55, Page 35"},{text:"Eliminate certain tax preferences for education expenses",amount:12,source:O,note:"Option 58, Page 37"},{text:"Extend the period for depreciating the cost of certain investments",amount:22,source:O,note:"Option 66, Page 44"},{text:"Repeal the deduction for domestic production activities",amount:19,source:O,note:"Option 67, Page 44"}],taxIncreases:[{text:"Increase individual income tax rates",options:[{text:"1%",value:65},{text:"2%",value:130},{text:"5%",value:325},{text:"10%",value:650}],source:O,note:"Option 46, Page 29"},{text:"Increase corporate income tax rates",options:[{text:"1%",value:10},{text:"2%",value:20},{text:"5%",value:50},{text:"10%",value:100}],source:O,note:"Option 63, Page 42"},{text:"Increase excise taxes on motor fuels by 35 cents and index for inflation",amount:45,source:O,note:"Option 70, Page 46"},{text:"Increase all taxes on alcoholic beverages to $16 per proof gallon",amount:6.5,source:O,note:"Option 71, Page 46"},{text:"Increase the excise tax on cigarettes by 50 cents per pack",amount:3.2,source:O,note:"Option 79, Page 53"},{text:"Carbon tax",amount:80,source:E,note:"Faq. #15"}]},G=0;D.spendingCuts.forEach(function(e){return i(e)}),D.taxPreferenceAdjustments.forEach(function(e){return u(e)}),D.taxIncreases.forEach(function(e){return s(e)});var U=36;if(window.location.hasOwnProperty("hash")&&window.location.hash.length>7){var k=window.location.hash.substring(1).split("_");if(4===k.length){var L=f(k,4),F=L[0],z=L[1],$=L[2],J=L[3];"0"===F&&!function(){var e=(0,I["default"])(z,U);B.budgetItems.forEach(function(t,n){t.applied=c(e,n)});var t=(0,I["default"])($,U);B.budgetItems.filter(function(e){return e.hasOwnProperty("options")}).forEach(function(e,n){var o=t.shiftRight(3*n).and((0,I["default"])(7)).toJSNumber();e.amount=e.options[o].value});var n=(0,I["default"])(J,U);B.populationAdjustments.forEach(function(e,t){e.excluded=c(n,t)})}()}}t["default"]=new b["default"].Store({state:B,mutations:(p={},a(p,_.APPLY_BUDGET_ITEM,function(e,t){e.budgetItems=e.budgetItems.map(function(e){return e.id===t?Object.assign({},e,{applied:!e.applied}):e})}),a(p,_.TOGGLE_POP_ADJUSTMENT,function(e,t){e.populationAdjustments=e.populationAdjustments.map(function(e){return e.id===t?Object.assign({},e,{excluded:!e.excluded}):e})}),a(p,_.APPLY,function(e,t){e.budgetItems=e.budgetItems.map(function(e){return e.type===t.type?Object.assign({},e,{applied:t.applied}):e})}),p),actions:y,getters:{spendingCuts:function(e){return e.budgetItems.filter(function(e){return e.type===T})},taxPreferenceAdjustments:function(e){return e.budgetItems.filter(function(e){return e.type===j})},taxIncreases:function(e){return e.budgetItems.filter(function(e){return e.type===M})},adjustedPopulation:function(e){return e.population-e.populationAdjustments.filter(function(e){return e.excluded}).map(function(e){return e.size}).reduce(function(e,t){return e+t},0)},basicIncome:function(e,t){return e.budgetItems.filter(function(e){return e.applied}).map(function(e){return e.amount}).reduce(function(e,t){return e+t},0)/t.adjustedPopulation/12},hash:function(e){var t=e.budgetItems.map(function(e){return e.applied?I["default"].one.shiftLeft(e.id):I["default"].zero}).reduce(function(e,t){return e.add(t)},I["default"].zero).toString(36),n=e.budgetItems.filter(function(e){return e.hasOwnProperty("options")}).map(function(e,t){var n=e.options.findIndex(function(t){return t.value===e.amount});return(0,I["default"])(n).shiftLeft(3*t)}).reduce(function(e,t){return e.add(t)},I["default"].zero).toString(U),o=e.populationAdjustments.map(function(e){return e.excluded?I["default"].one.shiftLeft(e.id):I["default"].zero}).reduce(function(e,t){return e.add(t)},I["default"].zero).toString(36);return"0_"+t+"_"+n+"_"+o}}})},function(e,t,n){var o,r;n(18),o=n(9);var a=n(16);r=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(r=o=o["default"]),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=o},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.apply=t.togglePopAdjustment=t.applyBudgetItem=void 0;var r=n(5),a=o(r),i=function(e){return function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];var a=t.commit;return a.apply(void 0,[e].concat(o))}};t.applyBudgetItem=i(a.APPLY_BUDGET_ITEM),t.togglePopAdjustment=i(a.TOGGLE_POP_ADJUSTMENT),t.apply=i(a.APPLY)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(0),i=n(14),u=o(i);t["default"]={name:"App",data:function(){return{sources:this.$store.state.sources,helpItem:{}}},created:function(){var e=this;this.$root.$on("showhelp",function(t){e.helpItem=t,e.$refs.help.show()})},computed:r({},(0,a.mapGetters)(["spendingCuts","taxPreferenceAdjustments","taxIncreases","population","adjustedPopulation","hash"]),{population:function(){return this.$store.state.population},populationAdjustments:function(){return this.$store.state.populationAdjustments},basicIncome:function(){return this.$store.getters.basicIncome},revenueGroups:function(){return[{label:"Spending Cuts",type:"SPENDING_CUTS",items:this.spendingCuts},{label:"Tax Preference Adjustments",type:"TAX_PREFERENCE_ADJUSTMENTS",items:this.taxPreferenceAdjustments},{label:"Tax Increases",type:"TAX_INCREASES",items:this.taxIncreases}]}}),methods:r({},(0,a.mapActions)(["apply","togglePopAdjustment"]),{handleApply:function(e,t){this.apply({type:e,applied:t})},countApplied:function(e){return e.filter(function(e){return e.applied}).length},hideHelp:function(){this.$refs.help.hide()},showPopConfig:function(){this.$refs.populationModal.show()},hidePopConfig:function(){this.$refs.populationModal.hide()}}),components:{"budget-item":u["default"]},watch:{hash:function(e){window.location.hash=e}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(0);t["default"]={name:"BudgetItem",props:["budgetItem"],methods:o({},(0,r.mapActions)(["applyBudgetItem"]),{handleChange:function(e){this.applyBudgetItem(e)},help:function(e){this.$root.$emit("showhelp",e)}})}},function(e,t,n){t=e.exports=n(12)(),t.push([e.i,"\nlabel, .toggler {\n  cursor: pointer;\n}\nbody { \n  padding-top: 65px;\n}\n.active {\n  font-weight: bold;\n}\n",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},,function(e,t,n){var o,r;o=n(10);var a=n(15);r=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(r=o=o["default"]),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=o},function(module,exports){module.exports={render:function(){with(this)return _h("div",{"class":{applied:budgetItem.applied}},[_h("label",{staticClass:"view"},[_h("input",{directives:[{name:"model",rawName:"v-model",value:budgetItem.applied,expression:"budgetItem.applied"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(budgetItem.applied)?_i(budgetItem.applied,null)>-1:_q(budgetItem.applied,!0)},on:{click:function(e){handleChange(budgetItem.id)},change:function(e){var t=budgetItem.applied,n=e.target,o=!!n.checked;if(Array.isArray(t)){var r=null,a=_i(t,r);o?a<0&&(budgetItem.applied=t.concat(r)):a>-1&&(budgetItem.applied=t.slice(0,a).concat(t.slice(a+1)))}else budgetItem.applied=o}}}),"\n    "+_s(budgetItem.text)+"\n  "])," ",budgetItem.options?_h("select",{directives:[{name:"model",rawName:"v-model",value:budgetItem.amount,expression:"budgetItem.amount"}],on:{change:function(e){budgetItem.amount=Array.prototype.filter.call(e.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value})[0]}}},[_l(budgetItem.options,function(e){return _h("option",{domProps:{value:e.value}},[_s(e.text)])})]):_e()," ",_h("button",{staticClass:"btn",on:{click:function(e){e.preventDefault(),e.stopPropagation(),help(budgetItem)}}},["?"])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"container",attrs:{id:"root"}},[_h("nav",{staticClass:"navbar navbar-fixed-top navbar-light bg-faded"},[_h("span",{staticClass:"navbar-text"},["$"+_s(_f("money")(basicIncome))+" / Month"])])," ",_h("div",{staticClass:"row"},[_m(0)," ",_l(revenueGroups,function(e){return _h("div",{staticClass:"card p-1"},[_h("b-collapse-toggle",{attrs:{target:e.type}},[_h("h3",{staticClass:"toggler"},[_s(e.label)+" ("+_s(countApplied(e.items))+"/"+_s(e.items.length)+")"])])," ",_h("b-collapse",{attrs:{id:e.type}},["\n      Select: ",_h("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),t.stopPropagation(),handleApply(e.type,!0)}}},["All"])," / ",_h("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),t.stopPropagation(),handleApply(e.type,!1)}}},["None"])," ",_l(e.items,function(e){return _h("budget-item",{attrs:{budgetItem:e}})})])])})," ",_h("p",["Pop: "+_s(_f("nicenumber")(adjustedPopulation))+" of "+_s(_f("nicenumber")(population))+" ",_h("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),e.stopPropagation(),showPopConfig(e)}}},["⚙"])])," ",_h("b-modal",{ref:"help",attrs:{id:"help"}},[_h("div",{slot:"modal-header"},[_h("h3",[_s(helpItem.text)])])," ",_h("div",{slot:"modal-body"},[helpItem.options?[_m(1)," ",_h("ul",[_l(helpItem.options,function(e){return _h("li",{"class":{active:helpItem.amount===e.value}},["\n            "+_s(e.text)+" "+_s(_f("nicenumber")(e.value))+" / year\n          "])})])]:_h("h3",["\n        "+_s(_f("nicenumber")(helpItem.amount))+" / year\n      "])," "," ",helpItem.source?_h("p",["\n        Source: ",_h("a",{attrs:{href:sources[helpItem.source].url,target:"_blank"}},[_s(sources[helpItem.source].name)])," ",helpItem.note?_h("span",["("+_s(helpItem.note)+")"]):_e()]):_e()])," ",_h("div",{slot:"modal-footer"},[_h("button",{staticClass:"btn btn-primary",on:{click:function(e){e.preventDefault(),e.stopPropagation(),hideHelp(e)}}},["Got it!"])])])," ",_h("b-modal",{ref:"populationModal",attrs:{id:"population-config"}},[_h("div",{slot:"modal-header"},[_m(2)])," ",_h("div",{slot:"modal-body"},[_h("h3",["Total population: "+_s(_f("nicenumber")(population))])," ",_h("ul",[_l(populationAdjustments,function(e){return _h("li",[_h("label",[_h("input",{attrs:{type:"checkbox"},domProps:{checked:e.excluded},on:{change:function(t){togglePopAdjustment(e.id)}}}),"\n              "+_s(e.name)+" "+_s(_f("nicenumber")(e.size))+"\n            "])])})])," ",_h("h3",["Adjusted population: "+_s(_f("nicenumber")(adjustedPopulation))])])," ",_h("div",{slot:"modal-footer"},[_h("button",{staticClass:"btn btn-primary",on:{click:function(e){e.preventDefault(),e.stopPropagation(),hidePopConfig(e)}}},["Got it!"])])])])])},staticRenderFns:[function(){with(this)return _h("h1",["Basic income calculator"])},function(){with(this)return _h("h3",["Options"])},function(){with(this)return _h("h3",["Population Configuration"])}]}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=c[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(u(o.parts[a],t))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(u(o.parts[a],t));c[o.id]={id:o.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],a=r[0],i=r[1],u=r[2],s=r[3],l={css:i,media:u,sourceMap:s};n[a]?n[a].parts.push(l):t.push(n[a]={id:a,parts:[l]})}return t}function r(e,t){var n=f(),o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function u(e,t){var n,o,r;if(t.singleton){var u=m++;n=h||(h=i(t)),o=s.bind(null,n,u,!1),r=s.bind(null,n,u,!0)}else n=i(t),o=l.bind(null,n),r=function(){a(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function l(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=d(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,m=0,g=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var u=r[i],s=c[u.id];s.refs--,a.push(s)}if(e){var l=o(e);n(l,t)}for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete c[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(11);"string"==typeof o&&(o=[[e.i,o,""]]);n(17)(o,{});o.locals&&(e.exports=o.locals)},,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=o(r),i=n(2),u=o(i),s=n(7),l=o(s),c=n(6),d=o(c),p=n(3),f=o(p);a["default"].filter("nicenumber",function(e){return(0,f["default"])(e).format("0.0a")}),a["default"].filter("money",function(e){return(0,f["default"])(e).format("0,0")}),a["default"].use(u["default"]),t["default"]=new a["default"]({el:"#root",store:d["default"],render:function(e){return e(l["default"])}})}],[20]);