!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=133)}({133:function(e,t,n){"use strict";n(134);var i=window.wlSettings;!function(){if("undefined"!=typeof fetch&&!(void 0!==i.jsonld_enabled&&"1"!==i.jsonld_enabled||void 0===i.postId&&void 0===i.isHome)){var e,t,n=(t=0<=(e=i).apiUrl.indexOf("?")?"&":"?",e.apiUrl+t+"action=wl_jsonld"+(void 0!==e.postId?"&id="+e.postId:"")+(void 0!==e.isHome?"&homepage=true":""));fetch(n).then((function(e){return e.text()})).then((function(e){var t=document.createElement("script");t.type="application/ld+json",t.innerText=e,document.head.appendChild(t)}))}}()},134:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(){function e(e,t,n,o,r,a){var l;if("undefined"==typeof wordliftAnalyticsConfigData)return!1;e("send","event","WordLift","Mentions",o,1,(i(l={},t,r),i(l,n,a),i(l,"nonInteraction",!0),l))}function t(e,t,n,o,r,a){var l;if("undefined"==typeof wordliftAnalyticsConfigData)return!1;e("event","Mentions",(i(l={event_category:"WordLift",event_label:o,value:1},t,r),i(l,n,a),i(l,"non_interaction",!0),l))}function n(e,t,n,i,o,r){if("undefined"==typeof wordliftAnalyticsConfigData)return!1;e.push({event:"Mentions",wl_event_action:"Mentions",wl_event_category:"WordLift",wl_event_label:i,wl_event_value:1,wl_event_uri:o,wl_index_uri:t.replace(/^\D+/g,""),wl_event_type:r,wl_index_type:n.replace(/^\D+/g,""),non_interaction:!0})}document.addEventListener("DOMContentLoaded",(function(i){if("undefined"!=typeof wordliftAnalyticsEntityData){var o=new Promise((function(e,t){return e(function(){var e=!1;window.gtag?(e=window.gtag).__wl_type="gtag":window.dataLayer?(e=window.dataLayer).__wl_type="gtm":window.ga?(e=window.ga).__wl_type="ga":window.__gaTracker&&((e=window.__gaTracker).__wl_type="ga");return e}())}));o.then((function(i){return function(i){return new Promise((function(o,r){if(void 0===i||"undefined"==typeof wordliftAnalyticsConfigData)return r();var a="dimension"+wordliftAnalyticsConfigData.entity_uri_dimension,l="dimension"+wordliftAnalyticsConfigData.entity_type_dimension,f=[];for(var d in wordliftAnalyticsEntityData)wordliftAnalyticsEntityData.hasOwnProperty(d)&&f.push(wordliftAnalyticsEntityData[d]);var u=f.length;if("ga"===i.__wl_type)for(var c=0;c<u;c++)e(i,a,l,f[c].label,f[c].uri,f[c].type);else if("gtag"===i.__wl_type)for(c=0;c<u;c++)t(i,a,l,f[c].label,f[c].uri,f[c].type);else if("gtm"===i.__wl_type)for(c=0;c<u;c++)n(i,a,l,f[c].label,f[c].uri,f[c].type);return o(!0)}))}(i)}))}}))}()}});
//# sourceMappingURL=bundle.js.map