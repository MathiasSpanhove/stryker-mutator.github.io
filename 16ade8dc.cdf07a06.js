(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{173:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),j=r,d=b["".concat(c,".").concat(j)]||b[j]||u[j]||i;return n?a.a.createElement(d,o(o({ref:t},l),{},{components:n})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=j;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(173)),c={title:"Jest Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker/edit/master/docs/jest-runner.md"},o={unversionedId:"stryker/jest-runner",id:"stryker/jest-runner",isDocsHomePage:!1,title:"Jest Runner",description:"Installation",source:"@site/docs/stryker/jest-runner.md",slug:"/stryker/jest-runner",permalink:"/docs/stryker/jest-runner",editUrl:"https://github.com/stryker-mutator/stryker/edit/master/docs/jest-runner.md",version:"current",sidebar:"docs",previous:{title:"Jasmine Runner",permalink:"/docs/stryker/jasmine-runner"},next:{title:"Karma Runner",permalink:"/docs/stryker/karma-runner"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Peer dependencies",id:"peer-dependencies",children:[]},{value:"Configuration",id:"configuration",children:[{value:'<code>jest.projectType</code> "string"',id:"jestprojecttype-string",children:[]},{value:"<code>jest.configFile</code>] string",id:"jestconfigfile-string",children:[]},{value:"<code>jest.config</code> object",id:"jestconfig-object",children:[]},{value:"<code>jest.enableFindRelatedTests</code> boolean",id:"jestenablefindrelatedtests-boolean",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Install @stryker-mutator/jest-runner locally within your project folder, like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i --save-dev @stryker-mutator/jest-runner\n")),Object(i.b)("h2",{id:"peer-dependencies"},"Peer dependencies"),Object(i.b)("p",null,"The @stryker-mutator/jest-runner is a plugin for Stryker to enable Jest as a test runner. As such, you should make sure you have the correct versions of its dependencies installed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"jest"),Object(i.b)("li",{parentName:"ul"},"@stryker-mutator/core")),Object(i.b)("p",null,"For the minimum supported versions, see the peerDependencies section in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/stryker-mutator/stryker/master/packages/jest-runner/package.json"}),"package.json"),"."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Make sure you set the ",Object(i.b)("inlineCode",{parentName:"p"},"testRunner"),' option to "jest" and set ',Object(i.b)("inlineCode",{parentName:"p"},"coverageAnalysis"),' to "off" in your Stryker configuration.'),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "testRunner": "jest",\n  "coverageAnalysis": "off"\n}\n')),Object(i.b)("p",null,"The @stryker-mutator/jest-runner also provides a couple of configurable options using the ",Object(i.b)("inlineCode",{parentName:"p"},"jest")," property in your Stryker config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jest": {\n    "projectType": "custom",\n    "configFile": "path/to/your/custom/jestConfig.js",\n    "config": {\n      "testEnvironment": "jest-environment-jsdom-sixteen"\n    },\n    "enableFindRelatedTests": true,\n  }\n}\n')),Object(i.b)("h3",{id:"jestprojecttype-string"},Object(i.b)("inlineCode",{parentName:"h3"},"jest.projectType")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},'"string"'),"]"),Object(i.b)("p",null,"Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"custom"')),Object(i.b)("p",null,"Configure where jest should get its configuration from."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"custom"'),": use the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#jestconfig-object"}),Object(i.b)("inlineCode",{parentName:"a"},"jest.config")," custom configuration"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"create-react-app"'),": use ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/react-scripts"}),"react-scripts"),", for projects created with ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/create-react-app"}),"create-react-app"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"create-react-app-ts"'),": ",Object(i.b)("strong",{parentName:"li"},"DEPRECATED")," use ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/react-scripts-ts"}),"react-scripts-ts"),", for projects created with ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/wmonk/create-react-app-typescript"}),"create-react-app-typescript"),". DEPRECATED, please ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://create-react-app.dev/docs/adding-typescript/"}),"follow the migration guide")," and move to ",Object(i.b)("inlineCode",{parentName:"li"},"create-react-app"),".")),Object(i.b)("h3",{id:"jestconfigfile-string"},Object(i.b)("inlineCode",{parentName:"h3"},"jest.configFile"),"] ","[",Object(i.b)("inlineCode",{parentName:"h3"},"string"),"]"),Object(i.b)("p",null,"Default: ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("p",null,"The path to your Jest config file."),Object(i.b)("h3",{id:"jestconfig-object"},Object(i.b)("inlineCode",{parentName:"h3"},"jest.config")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"object"),"]"),Object(i.b)("p",null,"Default: ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")),Object(i.b)("p",null,"Custom Jest config. This will override file-based config."),Object(i.b)("h3",{id:"jestenablefindrelatedtests-boolean"},Object(i.b)("inlineCode",{parentName:"h3"},"jest.enableFindRelatedTests")," ","[",Object(i.b)("inlineCode",{parentName:"h3"},"boolean"),"]"),Object(i.b)("p",null,"Default: ",Object(i.b)("inlineCode",{parentName:"p"},"true")),Object(i.b)("p",null,"Whether to run jest with the ",Object(i.b)("inlineCode",{parentName:"p"},"--findRelatedTests")," flag. When ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", Jest will only run tests related to the mutated file per test. (See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/cli.html#--findrelatedtests-spaceseparatedlistofsourcefiles"}),Object(i.b)("em",{parentName:"a"},"--findRelatedTests")),")."))}p.isMDXComponent=!0}}]);