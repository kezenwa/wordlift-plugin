!function(n){var i={};function e(t){if(i[t])return i[t].exports;var l=i[t]={i:t,l:!1,exports:{}};return n[t].call(l.exports,l,l.exports,e),l.l=!0,l.exports}e.m=n,e.c=i,e.d=function(n,i,t){e.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,i){if(1&i&&(n=e(n)),8&i)return n;if(4&i&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var l in n)e.d(t,l,function(i){return n[i]}.bind(null,l));return t},e.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(i,"a",i),i},e.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},e.p="",e(e.s=109)}({109:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);\n/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);\n\n\n/**\n * Just boiler plate code to check if the approach is possible.\n *\n */\n\nconst tinymce = global[\"tinymce\"];\ntinymce.init({\n  selector: 'textarea',\n  setup: function (editor) {\n    editor.on('Change', function (e) {\n      console.log(e);\n      console.log('The Editor has initialized.');\n    });\n  }\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFxLXdpZGdldC9pbmRleC5qcz9jMmNlIl0sIm5hbWVzIjpbInRpbnltY2UiLCJnbG9iYWwiLCJpbml0Iiwic2VsZWN0b3IiLCJzZXR1cCIsImVkaXRvciIsIm9uIiwiZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFJQSxNQUFNQSxPQUFPLEdBQUdDLE1BQU0sQ0FBQyxTQUFELENBQXRCO0FBRUFELE9BQU8sQ0FBQ0UsSUFBUixDQUFhO0FBQUdDLFVBQVEsRUFBRSxVQUFiO0FBQ1RDLE9BQUssRUFBRSxVQUFTQyxNQUFULEVBQWlCO0FBQ3BCQSxVQUFNLENBQUNDLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLFVBQVNDLENBQVQsRUFBWTtBQUM1QkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDSCxLQUhEO0FBSUg7QUFOUSxDQUFiLEUiLCJmaWxlIjoiMTA5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBTk5PVEFUSU9OX0NIQU5HRUQsIFNFTEVDVElPTl9DSEFOR0VEfSBmcm9tIFwiLi4vY29tbW9uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtpc0Fubm90YXRpb25FbGVtZW50fSBmcm9tIFwiLi4vY29tbW9uL2hlbHBlcnNcIjtcblxuLyoqXG4gKiBKdXN0IGJvaWxlciBwbGF0ZSBjb2RlIHRvIGNoZWNrIGlmIHRoZSBhcHByb2FjaCBpcyBwb3NzaWJsZS5cbiAqXG4gKi9cbmNvbnN0IHRpbnltY2UgPSBnbG9iYWxbXCJ0aW55bWNlXCJdO1xuXG50aW55bWNlLmluaXQoeyAgc2VsZWN0b3I6ICd0ZXh0YXJlYScsXG4gICAgc2V0dXA6IGZ1bmN0aW9uKGVkaXRvcikge1xuICAgICAgICBlZGl0b3Iub24oJ0NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlIEVkaXRvciBoYXMgaW5pdGlhbGl6ZWQuJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///109\n")},25:function(module,exports){eval('var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function("return this")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === "object") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it\'s\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n')},52:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SELECTION_CHANGED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANNOTATION_CHANGED; });\n/* unused harmony export PLUGIN_NAMESPACE */\n/* unused harmony export EDITOR_STORE */\n/* unused harmony export EDITOR_ELEMENT_ID */\n/* unused harmony export WORDLIFT_STORE */\n/**\n * This file defines constants used across different files and components.\n *\n * @author David Riccitelli <david@wordlift.io>\n * @since 3.23.0\n */\n\n/**\n * WordPress\' action hook to signal that a selection has changed.\n *\n * @since 3.23.0\n * @type {string}\n */\nconst SELECTION_CHANGED = "wordlift.selectionChanged";\n/**\n * WordPress\' action hook to signal that an annotation has changed. The action\n * provides the annotation id as `{ annotationId }`. The annotation id usually\n * matches the element id that caused the action to be fired.\n *\n * @since 3.23.0\n * @type {string}\n */\n\nconst ANNOTATION_CHANGED = "wordlift.annotationChanged";\n/**\n * The plugin namespace.\n *\n * @type {string}\n */\n\nconst PLUGIN_NAMESPACE = "wordlift";\n/**\n * Define the G\'berg editor store name.\n *\n * @since 3.23.0\n * @type {string}\n */\n\nconst EDITOR_STORE = "core/editor";\n/**\n * Define the editor element id.\n *\n * @since 3.23.0\n * @type {string}\n */\n\nconst EDITOR_ELEMENT_ID = "editor";\n/**\n * Define the WordLift Store name used for {@link select} and {@link dispatch}\n * functions.\n *\n * @type {string}\n */\n\nconst WORDLIFT_STORE = "wordlift/editor";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbnN0YW50cy5qcz85YTM2Il0sIm5hbWVzIjpbIlNFTEVDVElPTl9DSEFOR0VEIiwiQU5OT1RBVElPTl9DSEFOR0VEIiwiUExVR0lOX05BTUVTUEFDRSIsIkVESVRPUl9TVE9SRSIsIkVESVRPUl9FTEVNRU5UX0lEIiwiV09SRExJRlRfU1RPUkUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7Ozs7OztBQU1PLE1BQU1BLGlCQUFpQixHQUFHLDJCQUExQjtBQUVQOzs7Ozs7Ozs7QUFRTyxNQUFNQyxrQkFBa0IsR0FBRyw0QkFBM0I7QUFFUDs7Ozs7O0FBS08sTUFBTUMsZ0JBQWdCLEdBQUcsVUFBekI7QUFFUDs7Ozs7OztBQU1PLE1BQU1DLFlBQVksR0FBRyxhQUFyQjtBQUVQOzs7Ozs7O0FBTU8sTUFBTUMsaUJBQWlCLEdBQUcsUUFBMUI7QUFFUDs7Ozs7OztBQU1PLE1BQU1DLGNBQWMsR0FBRyxpQkFBdkIiLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZmlsZSBkZWZpbmVzIGNvbnN0YW50cyB1c2VkIGFjcm9zcyBkaWZmZXJlbnQgZmlsZXMgYW5kIGNvbXBvbmVudHMuXG4gKlxuICogQGF1dGhvciBEYXZpZCBSaWNjaXRlbGxpIDxkYXZpZEB3b3JkbGlmdC5pbz5cbiAqIEBzaW5jZSAzLjIzLjBcbiAqL1xuXG4vKipcbiAqIFdvcmRQcmVzcycgYWN0aW9uIGhvb2sgdG8gc2lnbmFsIHRoYXQgYSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQuXG4gKlxuICogQHNpbmNlIDMuMjMuMFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFNFTEVDVElPTl9DSEFOR0VEID0gXCJ3b3JkbGlmdC5zZWxlY3Rpb25DaGFuZ2VkXCI7XG5cbi8qKlxuICogV29yZFByZXNzJyBhY3Rpb24gaG9vayB0byBzaWduYWwgdGhhdCBhbiBhbm5vdGF0aW9uIGhhcyBjaGFuZ2VkLiBUaGUgYWN0aW9uXG4gKiBwcm92aWRlcyB0aGUgYW5ub3RhdGlvbiBpZCBhcyBgeyBhbm5vdGF0aW9uSWQgfWAuIFRoZSBhbm5vdGF0aW9uIGlkIHVzdWFsbHlcbiAqIG1hdGNoZXMgdGhlIGVsZW1lbnQgaWQgdGhhdCBjYXVzZWQgdGhlIGFjdGlvbiB0byBiZSBmaXJlZC5cbiAqXG4gKiBAc2luY2UgMy4yMy4wXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQU5OT1RBVElPTl9DSEFOR0VEID0gXCJ3b3JkbGlmdC5hbm5vdGF0aW9uQ2hhbmdlZFwiO1xuXG4vKipcbiAqIFRoZSBwbHVnaW4gbmFtZXNwYWNlLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBQTFVHSU5fTkFNRVNQQUNFID0gXCJ3b3JkbGlmdFwiO1xuXG4vKipcbiAqIERlZmluZSB0aGUgRydiZXJnIGVkaXRvciBzdG9yZSBuYW1lLlxuICpcbiAqIEBzaW5jZSAzLjIzLjBcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFRElUT1JfU1RPUkUgPSBcImNvcmUvZWRpdG9yXCI7XG5cbi8qKlxuICogRGVmaW5lIHRoZSBlZGl0b3IgZWxlbWVudCBpZC5cbiAqXG4gKiBAc2luY2UgMy4yMy4wXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgRURJVE9SX0VMRU1FTlRfSUQgPSBcImVkaXRvclwiO1xuXG4vKipcbiAqIERlZmluZSB0aGUgV29yZExpZnQgU3RvcmUgbmFtZSB1c2VkIGZvciB7QGxpbmsgc2VsZWN0fSBhbmQge0BsaW5rIGRpc3BhdGNofVxuICogZnVuY3Rpb25zLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBXT1JETElGVF9TVE9SRSA9IFwid29yZGxpZnQvZWRpdG9yXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///52\n')},89:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAnnotationElement; });\n/**\n * This file provides helper functions.\n *\n * @author David Riccitelli <david@wordlift.io>\n * @since 3.23.0\n */\n\n/**\n * Check whether the provided HTMLElement is an annotation.\n *\n * An {@link HTMLElement} is considered an annotation if it satisfies the following\n * requirements:\n *  - it has a `span` tagName.\n *  - it has an `id` attribute.\n *  - it has a `textannotation` class name.\n *\n * @since 3.23.0\n * @param {HTMLElement} el The {@link HTMLElement}.\n * @returns {boolean} True if it\'s annotation span otherwise false.\n */\nconst isAnnotationElement = el => {\n  return "undefined" !== typeof el && "undefined" !== typeof el.tagName && "undefined" !== typeof el.id && "undefined" !== typeof el.classList && "SPAN" === el.tagName && el.classList.contains("textannotation");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2hlbHBlcnMuanM/YTJjYyJdLCJuYW1lcyI6WyJpc0Fubm90YXRpb25FbGVtZW50IiwiZWwiLCJ0YWdOYW1lIiwiaWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7O0FBYU8sTUFBTUEsbUJBQW1CLEdBQUdDLEVBQUUsSUFBSTtBQUN2QyxTQUNFLGdCQUFnQixPQUFPQSxFQUF2QixJQUNBLGdCQUFnQixPQUFPQSxFQUFFLENBQUNDLE9BRDFCLElBRUEsZ0JBQWdCLE9BQU9ELEVBQUUsQ0FBQ0UsRUFGMUIsSUFHQSxnQkFBZ0IsT0FBT0YsRUFBRSxDQUFDRyxTQUgxQixJQUlBLFdBQVdILEVBQUUsQ0FBQ0MsT0FKZCxJQUtBRCxFQUFFLENBQUNHLFNBQUgsQ0FBYUMsUUFBYixDQUFzQixnQkFBdEIsQ0FORjtBQVFELENBVE0iLCJmaWxlIjoiODkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZmlsZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBhdXRob3IgRGF2aWQgUmljY2l0ZWxsaSA8ZGF2aWRAd29yZGxpZnQuaW8+XG4gKiBAc2luY2UgMy4yMy4wXG4gKi9cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBwcm92aWRlZCBIVE1MRWxlbWVudCBpcyBhbiBhbm5vdGF0aW9uLlxuICpcbiAqIEFuIHtAbGluayBIVE1MRWxlbWVudH0gaXMgY29uc2lkZXJlZCBhbiBhbm5vdGF0aW9uIGlmIGl0IHNhdGlzZmllcyB0aGUgZm9sbG93aW5nXG4gKiByZXF1aXJlbWVudHM6XG4gKiAgLSBpdCBoYXMgYSBgc3BhbmAgdGFnTmFtZS5cbiAqICAtIGl0IGhhcyBhbiBgaWRgIGF0dHJpYnV0ZS5cbiAqICAtIGl0IGhhcyBhIGB0ZXh0YW5ub3RhdGlvbmAgY2xhc3MgbmFtZS5cbiAqXG4gKiBAc2luY2UgMy4yMy4wXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBUaGUge0BsaW5rIEhUTUxFbGVtZW50fS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGl0J3MgYW5ub3RhdGlvbiBzcGFuIG90aGVyd2lzZSBmYWxzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQW5ub3RhdGlvbkVsZW1lbnQgPSBlbCA9PiB7XG4gIHJldHVybiAoXG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGVsICYmXG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGVsLnRhZ05hbWUgJiZcbiAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgZWwuaWQgJiZcbiAgICBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgZWwuY2xhc3NMaXN0ICYmXG4gICAgXCJTUEFOXCIgPT09IGVsLnRhZ05hbWUgJiZcbiAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZXh0YW5ub3RhdGlvblwiKVxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///89\n')}});