(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(190)),o={title:"Jasmine Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker/edit/master/docs/jasmine-runner.md"},s={unversionedId:"stryker/jasmine-runner",id:"stryker/jasmine-runner",isDocsHomePage:!1,title:"Jasmine Runner",description:"A plugin to use Jasmine as a test runner for node in Stryker.",source:"@site/docs/stryker/jasmine-runner.md",slug:"/stryker/jasmine-runner",permalink:"/docs/stryker/jasmine-runner",editUrl:"https://github.com/stryker-mutator/stryker/edit/master/docs/jasmine-runner.md",version:"current",sidebar:"docs",previous:{title:"Plugins",permalink:"/docs/stryker/plugins"},next:{title:"Jest Runner",permalink:"/docs/stryker/jest-runner"}},c=[{value:"Install",id:"install",children:[]},{value:"Peer dependencies",id:"peer-dependencies",children:[]},{value:"Example",id:"example",children:[]},{value:"Configuration",id:"configuration",children:[{value:"<code>jasmineConfigFile</code> string",id:"jasmineconfigfile-string",children:[]}]}],l={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A plugin to use Jasmine ",Object(i.b)("strong",{parentName:"p"},"as a test runner for node")," in Stryker."),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("p",null,"Install @stryker-mutator/jasmine-runner locally, like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i --save-dev @stryker-mutator/jasmine-runner\n")),Object(i.b)("h2",{id:"peer-dependencies"},"Peer dependencies"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"@stryker-mutator/jasmine-runner")," is a plugin for ",Object(i.b)("inlineCode",{parentName:"p"},"stryker")," to enable ",Object(i.b)("inlineCode",{parentName:"p"},"jasmine")," as a test runner.\nAs such, you should make sure you have the correct versions of its dependencies installed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"jasmine")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"@stryker-mutator/core"))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"You can configure the jasmine test runner in the ",Object(i.b)("inlineCode",{parentName:"p"},"stryker.conf.js")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"stryker.conf.json"),") file."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "coverageAnalysis": "perTest",\n  "testRunner": "jasmine",\n  "jasmineConfigFile": "spec/support/jasmine.json"\n}\n')),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("h3",{id:"jasmineconfigfile-string"},Object(i.b)("inlineCode",{parentName:"h3"},"jasmineConfigFile")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"string"),"]"),Object(i.b)("p",null,"Default: ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("p",null,"Specify your ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://jasmine.github.io/setup/nodejs.html#configuration"}),"jasmine configuration file")," to be loaded.\nLeaving this blank will result in the jasmine defaults, which are undocumented (see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js#L10-L38"}),"source code here"),")."))}u.isMDXComponent=!0},190:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return t?a.a.createElement(d,s(s({ref:n},l),{},{components:t})):a.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);