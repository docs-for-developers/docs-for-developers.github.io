(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1441],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,s(s({ref:t},l),{},{components:n})):r.createElement(y,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7332:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return i},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],c={title:"JS Docs Comments"},p={unversionedId:"Js Docs",id:"Js Docs",isDocsHomePage:!1,title:"JS Docs Comments",description:"More info on https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html",source:"@site/docs/Js Docs.md",sourceDirName:".",slug:"/Js Docs",permalink:"/docs/Js Docs",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Js Docs.md",version:"current",frontMatter:{title:"JS Docs Comments"},sidebar:"tutorialSidebar",previous:{title:"Git Tips and Tricks",permalink:"/docs/Git Tips and Tricks"}},i=[],l={toc:i};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"More info on ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"},"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cheat Sheet at : ",(0,a.kt)("a",{parentName:"p",href:"https://devhints.io/jsdoc"},"https://devhints.io/jsdoc"))),(0,a.kt)("h1",{id:"js-docs"},"Js Docs"),(0,a.kt)("p",null,"If your class has properties that are only read from, add and then annotate a declaration in the constructor with JSDoc to specify the type. You don\u2019t even have to give a value if it will be initialized later:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'class C {\n  constructor() {\n    /** @type {number | undefined} */\n    this.prop = undefined;\n    /** @type {number | undefined} */\n    this.count;\n  }\n}\n\nlet c = new C();\nc.prop = 0; // OK\nc.count = "string";\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"Type 'string' is not assignable to type 'number'.\n")),(0,a.kt)("p",null,"Another instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {{a: number}} */\nvar obj = { a: 1 };\nobj.b = 2;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Property 'b' does not exist on type '{ a: number; }'.\n")),(0,a.kt)("p",null,"JSDoc annotated functions are excluded from this rule. Use JSDoc optional parameter syntax (","[ ]",") to express optionality. e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param {string} [somebody] - Somebody\'s name.\n */\nfunction sayHello(somebody) {\n  if (!somebody) {\n    somebody = "John Doe";\n  }\n  console.log("Hello " + somebody);\n}\n\nsayHello();\n')),(0,a.kt)("p",null,"A function whose body has a reference to the arguments reference is implicitly considered to have a var-arg parameter (i.e. (...arg: any[]) => any). Use JSDoc var-arg syntax to specify the type of the arguments."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/** @param {...number} args */\nfunction sum(/* numbers */) {\n  var total = 0;\n  for (var i = 0; i < arguments.length; i++) {\n    total += arguments[i];\n  }\n  return total;\n}\n")),(0,a.kt)("p",null,"Use JSDoc @augments to specify the types explicitly. for instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Component } from "react";\n/**\n * @augments {Component<{a: number}, State>}\n */\nclass MyComponent extends Component {\n  render() {\n    this.props.b; // Error: b does not exist on {a:number}\n  }\n}\n')),(0,a.kt)("p",null,"An unspecified type argument in JSDoc defaults to any:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/** @type{Array} */\nvar x = [];\n\nx.push(1); // OK\nx.push("string"); // OK, x is of type Array<any>\n\n/** @type{Array.<number>} */\nvar y = [];\n\ny.push(1); // OK\ny.push("string"); // Error, string is not assignable to number\n')))}u.isMDXComponent=!0}}]);