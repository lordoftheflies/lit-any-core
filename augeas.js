!function(a){function b(a,b,c){a in h||(h[a]={name:a,declarative:!0,deps:b,declare:c,normalizedDeps:b})}function c(a){return m[a]||(m[a]={name:a,dependencies:[],exports:{},importers:[]})}function d(b){if(!b.module){var e=b.module=c(b.name),f=b.module.exports,i=b.declare.call(a,function(a,b){if(e.locked=!0,"object"==typeof a)for(var c in a)f[c]=a[c];else f[a]=b;for(var d=0,g=e.importers.length;g>d;d++){var h=e.importers[d];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===e&&h.setters[i](f)}return e.locked=!1,b},b.name);e.setters=i.setters,e.execute=i.execute;for(var j=0,k=b.normalizedDeps.length;k>j;j++){var l,n=b.normalizedDeps[j],o=h[n],p=m[n];p?l=p.exports:o&&!o.declarative?l=o.esModule:o?(d(o),p=o.module,l=p.exports):l=g(n),p&&p.importers?(p.importers.push(e),e.dependencies.push(p)):e.dependencies.push(null),e.setters[j]&&e.setters[j](l)}}}function e(a){var b={};if("object"==typeof a||"function"==typeof a)if(j){var c;for(var d in a)(c=Object.getOwnPropertyDescriptor(a,d))&&l(b,d,c)}else{var e=a&&a.hasOwnProperty;for(var d in a)(!e||a.hasOwnProperty(d))&&(b[d]=a[d])}return b["default"]=a,l(b,"__useDefault",{value:!0}),b}function f(b,c){var d=h[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,j=d.normalizedDeps.length;j>e;e++){var k=d.normalizedDeps[e];-1==i.call(c,k)&&(h[k]?f(k,c):g(k))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function g(a){if(o[a])return o[a];if("@node/"==a.substr(0,6))return n(a.substr(6));var b=h[a];if(!b)throw"Module "+a+" not present.";return d(h[a]),f(a,[]),h[a]=void 0,b.declarative&&l(b.module.exports,"__esModule",{value:!0}),o[a]=b.declarative?b.module.exports:b.esModule}var h={},i=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},j=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(k){j=!1}var l;!function(){try{Object.defineProperty({},"a",{})&&(l=Object.defineProperty)}catch(a){l=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(d){}}}}();var m={},n="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,o={"@empty":{}};return function(a,c,d){return function(f){f(function(f){for(var h=0;h<c.length;h++)(function(a,b){b&&b.__esModule?o[a]=b:o[a]=e(b)})(c[h],arguments[h]);d({register:b});var i=g(a[0]);if(a.length>1)for(var h=1;h<a.length;h++)g(a[h]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)(["1"],["7"],function(a){a.register("2",["3"],function(a,b){"use strict";var c,d,e=(b&&b.id,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),f=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};return{setters:[function(a){c=a}],execute:function(){d=function(a){function b(){a.apply(this,arguments)}return e(b,a),b.prototype.objectMatches=function(a){return Array.isArray(a)},b=f([component("ags-array-template"),behavior(c.RegisteredTemplate),extend("template")],b)}(polymer.Base),d.register()}}}),a.register("4",["3"],function(a,b){"use strict";var c,d,e=(b&&b.id,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),f=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};return{setters:[function(a){c=a}],execute:function(){d=function(a){function b(){a.apply(this,arguments)}return e(b,a),b.prototype.objectMatches=function(a){return!("object"==typeof a&&!a["@value"])},b=f([behavior(c.RegisteredTemplate),extend("template"),component("ags-literal-template")],b)}(polymer.Base),d.register()}}}),a.register("5",["3"],function(a,b){"use strict";var c,d,e=(b&&b.id,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),f=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};return{setters:[function(a){c=a}],execute:function(){d=function(a){function b(){a.apply(this,arguments)}return e(b,a),b.prototype.objectMatches=function(a){var b="object"==typeof a&&!!a["@id"];return b},b=f([behavior(c.RegisteredTemplate),extend("template"),component("ags-object-template")],b)}(polymer.Base),d.register()}}}),a.register("6",["3"],function(a,b){"use strict";var c,d,e=(b&&b.id,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),f=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};return{setters:[function(a){c=a}],execute:function(){d=function(a){function b(){a.apply(this,arguments)}return e(b,a),b.prototype.objectMatches=function(a){var b=this;return this.type?Array.isArray(a["@type"])?a["@type"].some(function(a){return a===b.type}):a["@type"]===this.type:(console.warn("type property is not set for ags-type-template"),!1)},f([property()],b.prototype,"type",void 0),b=f([component("ags-type-template"),behavior(c.RegisteredTemplate),extend("template")],b)}(polymer.Base),d.register()}}}),a.register("3",["7"],function(a,b){"use strict";function c(a,b,c){var d={};return d[b.as]=c,d.predicate=this.predicate,d.params=a.params,this.stamp(d).root}var d,e,f,g,h,i,j;b&&b.id;return{setters:[function(a){d=a}],execute:function(){e=[],a("TemplateRegistryAccess",f={properties:{templates:{type:Array,notify:!0,readOnly:!0,value:e}}}),g={getStamped:function(a,b,e){var f=this;return this.templatize(b),b.compactWith?d.promises.compact(e,b.compactWith).then(function(d){return c.call(f,a,b,d)}):Promise.resolve(c.call(this,a,b,e))}},a("AgsTemplate",h={properties:{as:{type:String,value:"model"},compactWith:{type:Object,value:null},name:{type:String,value:""},predicate:{type:String,value:null},scope:{type:String,value:""}},attached:function(){this.push("templates",this),this.fire("ags-templates-changed",{templates:this.templates},{bubbles:!0})},detached:function(){this.pop("templates",this),document.dispatchEvent(new CustomEvent("ags-templates-changed",{detail:{templates:this.templates}}))},isMatch:function(a,b,c){var d,e,f;return d=this.objectMatches(a),e=this.predicateMatches(b),f=this.scopeMatches(c),d&&e&&f},objectMatches:function(a){return!0},predicateMatches:function(a){return this.predicate?this.predicate==a:!0},scopeMatches:function(a){return this.scope==a}}),a("RegisteredTemplate",i=[h,f]),a("RegisteredTemplateConsumer",j=[Polymer.Templatizer,g,f])}}}),a.register("8",["3"],function(a,b){"use strict";function c(a,b){a.appendChild(b),this._setHasBeenRendered(!0)}var d,e,f=(b&&b.id,this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),g=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};return{setters:[function(a){d=a}],execute:function(){e=function(a){function b(){a.apply(this,arguments)}return f(b,a),b.prototype.attached=function(){var a=this;document.addEventListener("ags-templates",function(){a.object&&a._draw(a.object,a.predicate,a.templateScope,a.ignoreMissing,a.params)}.bind(this))},b.prototype._draw=function(a,b,d,e,f){for(var g,h=this,i=this.templates||[],j=Polymer.dom(this.root);j.firstChild;)j.removeChild(j.firstChild);for(var k=0;k<i.length;k++){var l=i[k];if(l.isMatch&&l.isMatch(a,b,d)){g=!0,l.name&&this.setAttribute("data-template",l.name),this.getStamped(this,l,a).then(function(a){return c.call(h,j,a)});break}}if(!g&&!e){var m=document.createElement("div");m.textContent="Template Not found",c.call(this,j,m),console.warn("Template not found for",a)}},g([property()],b.prototype,"object",void 0),g([property({value:null})],b.prototype,"predicate",void 0),g([property({value:""})],b.prototype,"templateScope",void 0),g([property({value:!1})],b.prototype,"ignoreMissing",void 0),g([property({readOnly:!0,notify:!0,value:!1})],b.prototype,"hasBeenRendered",void 0),g([property({type:Object,value:{}})],b.prototype,"params",void 0),g([observe("object,predicate,templateScope,ignoreMissing,params")],b.prototype,"_draw",null),b=g([template("<style>\n            :host {\n                display: block;\n                @apply(--object-view);\n            }\n        </style>"),component("ags-view"),behavior(d.RegisteredTemplateConsumer)],b)}(polymer.Base),e.register()}}}),a.register("1",["3","2","4","5","6","8"],function(a,b){"use strict";var c,d;b&&b.id;return{setters:[function(a){c=a},function(a){},function(a){},function(a){},function(a){},function(a){}],execute:function(){a("RegisteredTemplate",d=d)}}})})(function(a){"function"==typeof define&&define.amd?define(["jsonld"],a):"object"==typeof module&&module.exports&&"function"==typeof require?module.exports=a(require("jsonld")):augeas=a(jsonld)});
//# sourceMappingURL=augeas.js.map