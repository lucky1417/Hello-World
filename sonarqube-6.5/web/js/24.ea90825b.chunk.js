webpackJsonp([24],{1666:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(8),r=(i.n(n),i(1985)),a=i(7),s=function(e){return{component:i.i(a.getMeasuresAppComponent)(e),domains:i.i(a.getMeasuresAppHomeDomains)(e),periods:i.i(a.getMeasuresAppHomePeriods)(e)}};t.default=i.i(n.connect)(s)(r.a)},1709:function(e,t,i){"use strict";function n(){return s}t.a=n;var r=i(0),a=i.n(r),s=a.a.createElement("i",{className:"spinner spinner-margin"})},1787:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n={Reliability:{main:["bugs","new_bugs","reliability_rating"],order:["bugs","new_bugs","reliability_rating","reliability_remediation_effort","new_reliability_remediation_effort"]},Security:{main:["vulnerabilities","new_vulnerabilities","security_rating"],order:["vulnerabilities","new_vulnerabilities","security_rating","security_remediation_effort","new_security_remediation_effort"]},Maintainability:{main:["code_smells","new_code_smells","sqale_rating"],order:["code_smells","new_code_smells","sqale_rating","sqale_index","new_technical_debt","sqale_debt_ratio","new_sqale_debt_ratio","effort_to_reach_maintainability_rating_a"]},Coverage:{main:["coverage","new_coverage","tests"],order:["coverage","new_coverage","line_coverage","new_line_coverage","branch_coverage","new_branch_coverage","uncovered_lines","new_uncovered_lines","uncovered_conditions","new_uncovered_conditions","new_lines_to_cover","lines_to_cover","tests","test_success","test_errors","test_failures","skipped_tests","test_success_density","test_execution_time"]},Duplications:{main:["duplicated_lines_density","new_duplicated_lines_density"],order:["duplicated_lines_density","new_duplicated_lines_density","duplicated_blocks","new_duplicated_blocks","duplicated_lines","new_duplicated_lines","duplicated_files"]},Size:{main:["ncloc"],order:["ncloc","lines","new_lines","statements","functions","classes","files","directories"]},Complexity:{main:["complexity"],order:["complexity","function_complexity","file_complexity","class_complexity"]},Releasability:{main:["alert_status","releasability_rating"],order:["alert_status"]},Issues:{main:["violations","new_violations"],order:["violations","new_violations","blocker_violations","new_blocker_violations","critical_violations","new_critical_violations","major_violations","new_major_violations","minor_violations","new_minor_violations","info_violations","new_info_violations","open_issues","reopened_issues","confirmed_issues","false_positive_issues"]}}},1796:function(e,t,i){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function r(e,t){var r=i.i(c.partition)(e,function(e){return t.includes(e.metric.key)}),a=f(r,2),s=a[0],o=a[1];return[].concat(n(i.i(c.sortBy)(s,function(e){return t.indexOf(e.metric.key)})),n(i.i(c.sortBy)(o,function(e){return i.i(m.getLocalizedMetricName)(e.metric)})))}function a(e){var t=["blocker_violations","new_blocker_violations","critical_violations","new_critical_violations","major_violations","new_major_violations","minor_violations","new_minor_violations","info_violations","new_info_violations"];return e.filter(function(e){return!t.includes(e.metric.key)})}var s=i(0),o=i.n(s),c=i(4),l=(i.n(c),i(1798)),u=i(1787),m=i(2),f=function(){function e(e,t){var i=[],n=!0,r=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(e){r=!0,a=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw a}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e){var t=e.domain,n=e.component,s=t.measures,m=t.name,d=u.a[m]||{},_=a(s),p=d.main||[],y=i.i(c.partition)(_,function(e){return p.includes(e.metric.key)}),v=f(y,2),h=v[0],b=v[1],k=d.order||[],g=r(h,k),w=r(b,k);return o.a.createElement("div",{className:"home-measures-list clearfix"},g.length>0&&o.a.createElement(l.a,{className:"main-domain-measures",measures:g,component:n,spaces:[]}),w.length>0&&o.a.createElement(l.a,{measures:w,component:n,spaces:[]}))};t.a=d},1797:function(e,t,i){"use strict";var n=i(0),r=i.n(n),a=i(327),s=i(24),o=function(e){var t=e.measure,n=t.metric;return i.i(s.isDiffMetric)(n.key)?r.a.createElement("div",{id:"measure-"+t.metric.key+"-leak",className:"domain-measures-value domain-measures-leak"},r.a.createElement(a.a,{measure:t})):r.a.createElement("div",{id:"measure-"+t.metric.key+"-value",className:"domain-measures-value"},r.a.createElement(a.a,{measure:t}))};t.a=o},1798:function(e,t,i){"use strict";var n=i(0),r=i.n(n),a=i(9),s=i(1797),o=i(2),c=i(211),l=function(e){var t=e.measures,n=e.component,l=e.className,u=void 0===l?"domain-measures":l;return r.a.createElement("ul",{className:u},t.map(function(e){return r.a.createElement("li",{key:e.metric.key,id:"measure-"+e.metric.key},r.a.createElement(a.Link,{to:{pathname:"/component_measures/metric/"+e.metric.key,query:{id:n.key}}},r.a.createElement("div",{className:"domain-measures-name"},r.a.createElement(c.a,{query:e.metric.key,className:"little-spacer-right"}),r.a.createElement("span",{id:"measure-"+e.metric.key+"-name"},i.i(o.getLocalizedMetricName)(e.metric))),r.a.createElement(s.a,{measure:e})))}))};t.a=l},1974:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return Number(e.measures[t])||0}var o=i(0),c=i.n(o),l=i(1709),u=i(346),m=i(681),f=i(40),d=i(24),_=i(169),p=i(48),y=i(2),v=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),h=c.a.createElement(l.a,null),b=function(e){function t(){var e,i,a,s;n(this,t);for(var o=arguments.length,c=Array(o),l=0;l<o;l++)c[l]=arguments[l];return i=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.state={fetching:0,files:[]},s=i,r(a,s)}return a(t,e),v(t,[{key:"componentWillMount",value:function(){this.updateMetrics(this.props)}},{key:"componentDidMount",value:function(){this.mounted=!0,this.fetchFiles()}},{key:"componentWillUpdate",value:function(e){this.updateMetrics(e)}},{key:"componentDidUpdate",value:function(e){e.domainName!==this.props.domainName&&this.fetchFiles()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"updateMetrics",value:function(e){var t=e.metrics,i=e.domainName,n=m.a[i];this.xMetric=t.find(function(e){return e.key===n.x}),this.yMetric=t.find(function(e){return e.key===n.y}),this.sizeMetric=t.find(function(e){return e.key===n.size})}},{key:"fetchFiles",value:function(){var e=this,t=this.props.component,n=[this.xMetric.key,this.yMetric.key,this.sizeMetric.key],r={s:"metric",metricSort:this.sizeMetric.key,asc:!1,ps:500};this.mounted&&this.setState({fetching:this.state.fetching+1}),i.i(f.v)(t.key,n,r).then(function(t){var i=t.components.map(function(e){var t={};return e.measures.forEach(function(e){t[e.metric]=e.value}),Object.assign({},e,{measures:t})});e.mounted&&e.setState({files:i,fetching:e.state.fetching-1,total:i.length})})}},{key:"getTooltip",value:function(e){var t=i.i(d.formatMeasure)(s(e,this.xMetric.key),this.xMetric.type),n=i.i(d.formatMeasure)(s(e,this.yMetric.key),this.yMetric.type),r=i.i(d.formatMeasure)(s(e,this.sizeMetric.key),this.sizeMetric.type);return'<div class="text-left">'+[e.name,this.xMetric.name+": "+t,this.yMetric.name+": "+n,this.sizeMetric.name+": "+r].join("<br>")+"</div>"}},{key:"handleBubbleClick",value:function(e){["FIL","UTS"].includes(e.qualifier)?_.default.openComponent({key:e.key}):window.location=i.i(p.j)(e.refKey||e.key)}},{key:"renderBubbleChart",value:function(){var e=this,t=this.state.files.map(function(t){return{x:s(t,e.xMetric.key),y:s(t,e.yMetric.key),size:s(t,e.sizeMetric.key),link:t,tooltip:e.getTooltip(t)}}),n=function(t){return i.i(d.formatMeasure)(t,e.xMetric.type)},r=function(t){return i.i(d.formatMeasure)(t,e.yMetric.type)};return c.a.createElement(u.a,{items:t,height:500,padding:[25,60,50,60],formatXTick:n,formatYTick:r,onBubbleClick:this.handleBubbleClick.bind(this)})}},{key:"render",value:function(){return this.state.fetching?c.a.createElement("div",{className:"measure-details-bubble-chart"},c.a.createElement("div",{className:"note text-center",style:{lineHeight:"500px"}},h)):c.a.createElement("div",{className:"measure-details-bubble-chart"},c.a.createElement("div",null,this.renderBubbleChart()),c.a.createElement("div",{className:"measure-details-bubble-chart-axis x"},i.i(y.getLocalizedMetricName)(this.xMetric)),c.a.createElement("div",{className:"measure-details-bubble-chart-axis y"},i.i(y.getLocalizedMetricName)(this.yMetric)),c.a.createElement("div",{className:"measure-details-bubble-chart-axis size"},i.i(y.translateWithParameters)("component_measures.legend.size_x",i.i(y.getLocalizedMetricName)(this.sizeMetric))))}}]),t}(c.a.PureComponent);t.a=b},1975:function(e,t,i){"use strict";var n=i(8),r=(i.n(n),i(1974)),a=i(7),s=function(e){return{component:i.i(a.getMeasuresAppComponent)(e),metrics:i.i(a.getMeasuresAppAllMetrics)(e)}},o=function(){return{}};t.a=i.i(n.connect)(s,o)(r.a)},1985:function(e,t,i){"use strict";function n(e){var t=e.component,n=e.domains,r=e.params.domainName,l=n.find(function(e){return e.name===r});return a.a.createElement("section",{id:"component-measures-domain"},a.a.createElement(s.a,{domain:l,component:t}),i.i(c.f)(r)&&a.a.createElement(o.a,{domainName:r}))}t.a=n;var r=i(0),a=i.n(r),s=i(1796),o=i(1975),c=i(125)}});
//# sourceMappingURL=24.ea90825b.chunk.js.map