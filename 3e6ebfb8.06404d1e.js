(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{173:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,b=p["".concat(o,".").concat(d)]||p[d]||g[d]||i;return t?a.a.createElement(b,c(c({ref:r},l),{},{components:t})):a.a.createElement(b,c({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(6),i=(t(0),t(173)),o={title:"Angular",custom_edit_url:"https://github.com/stryker-mutator/stryker/edit/master/docs/guides/angular.md"},c={unversionedId:"stryker/guides/angular",id:"stryker/guides/angular",isDocsHomePage:!1,title:"Angular",description:"Stryker 4.0 and higher supports Angular projects using the Angular CLI starting from @angular/cli v9.0.0. Are you using an older version? Then there are some tips later in this document.",source:"@site/docs/stryker/guides/angular.md",slug:"/stryker/guides/angular",permalink:"/docs/stryker/guides/angular",editUrl:"https://github.com/stryker-mutator/stryker/edit/master/docs/guides/angular.md",version:"current",sidebar:"docs",previous:{title:"TypeScript Checker",permalink:"/docs/stryker/typescript-checker"},next:{title:"React",permalink:"/docs/stryker/guides/react"}},s=[{value:"@angular/cli 9.0.0 and higher",id:"angularcli-900-and-higher",children:[]},{value:"Install",id:"install",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Run",id:"run",children:[]}]}],l={rightToc:s};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Stryker 4.0 and higher supports Angular projects using the Angular CLI starting from @angular/cli v9.0.0. Are you using an older version? Then there are some tips later in this document."),Object(i.b)("h2",{id:"angularcli-900-and-higher"},"@angular/cli 9.0.0 and higher"),Object(i.b)("p",null,"This setup only works with @angular/cli 9.0.0 or higher. Are you using an older version of Angular? Then we highly suggest upgrading to at least version 9.0.0 of the cli. You can use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://update.angular.io/"}),"Angular Update Guide")," to help you with this. If it's not possible for you to upgrade your Angular version, please check out ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stryker/guides/legacy/stryker-3/angular"}),"the legacy guide for Stryker 3 and Angular CLI 6.1-8.2"),"."),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("p",null,"Either install the Stryker CLI globally using ",Object(i.b)("inlineCode",{parentName:"p"},"npm install --global stryker-cli"),", or use ",Object(i.b)("inlineCode",{parentName:"p"},"npx")," in front of every Stryker command.\nInstall the Stryker packages using the command ",Object(i.b)("inlineCode",{parentName:"p"},"stryker init"),"."),Object(i.b)("p",null,"Recommended other packages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"@angular/cli 9.0.0 or higher"),Object(i.b)("li",{parentName:"ul"},"@angular-devkit/build-angular 0.900.0 or higher"),Object(i.b)("li",{parentName:"ul"},"karma 4.3.0 or higher"),Object(i.b)("li",{parentName:"ul"},"typescript 3.7.2 or higher")),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"stryker init")," command also creates a ",Object(i.b)("inlineCode",{parentName:"p"},"stryker.conf.json")," or ",Object(i.b)("inlineCode",{parentName:"p"},"stryker.conf.js")," configuration in your repository\nlike the one below which is a good starting point for Angular projects.\nYou may have to change some paths or config settings like the selected browsers.\nWe highly suggest using a headless browser when testing using Stryker."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",\n  "_comment": "This config was generated using a preset. Please see website for more information: https://stryker-mutator.io/docs/guides/angular",\n  "mutate": ["src/**/*.ts", "!src/**/*.spec.ts", "!src/test.ts", "!src/environments/*.ts"],\n  "testRunner": "karma",\n  "karma": {\n    "configFile": "karma.conf.js",\n    "projectType": "angular-cli",\n    "config": {\n      "browsers": ["ChromeHeadless"]\n    }\n  },\n  "reporters": ["progress", "clear-text", "html"],\n  "concurrency": 2,\n  "concurrency_comment": "Recommended to use about half of your available cores when running stryker with angular",\n  "coverageAnalysis": "perTest"\n}\n')),Object(i.b)("p",null,"Consider adding the Stryker TypeScript checker to increase mutation testing performance and kill mutants that would result in compilation errors:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Install ",Object(i.b)("inlineCode",{parentName:"li"},"@stryker-mutator/typescript-checker")," as a development dependency:\n",Object(i.b)("inlineCode",{parentName:"li"},"npm install --save-dev @stryker-mutator/typescript-checker")),Object(i.b)("li",{parentName:"ol"},"Configure the TypeScript checker in ",Object(i.b)("inlineCode",{parentName:"li"},"stryker.conf.json"),":",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "checkers": ["typescript"],\n  "tsconfigFile": "tsconfig.json"\n}\n')),"If you experience issues, try setting the ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfigFile")," option to ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.app.json"),".")),Object(i.b)("h3",{id:"run"},"Run"),Object(i.b)("p",null,"Run Stryker using ",Object(i.b)("inlineCode",{parentName:"p"},"stryker run"),"."))}u.isMDXComponent=!0}}]);