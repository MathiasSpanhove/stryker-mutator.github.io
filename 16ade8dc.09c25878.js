(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),j=r,m=p["".concat(i,".").concat(j)]||p[j]||u[j]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=j;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(190)),i={title:"Jest Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker/edit/master/docs/jest-runner.md"},s={unversionedId:"stryker/jest-runner",id:"stryker/jest-runner",isDocsHomePage:!1,title:"Jest Runner",description:"Installation",source:"@site/docs/stryker/jest-runner.md",slug:"/stryker/jest-runner",permalink:"/docs/stryker/jest-runner",editUrl:"https://github.com/stryker-mutator/stryker/edit/master/docs/jest-runner.md",version:"current",sidebar:"docs",previous:{title:"Jasmine Runner",permalink:"/docs/stryker/jasmine-runner"},next:{title:"Karma Runner",permalink:"/docs/stryker/karma-runner"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Peer dependencies",id:"peer-dependencies",children:[]},{value:"Configuration",id:"configuration",children:[{value:'<code>jest.projectType</code> "string"',id:"jestprojecttype-string",children:[]},{value:"<code>jest.configFile</code>] string",id:"jestconfigfile-string",children:[]},{value:"<code>jest.config</code> object",id:"jestconfig-object",children:[]},{value:"<code>jest.enableFindRelatedTests</code> boolean",id:"jestenablefindrelatedtests-boolean",children:[]}]},{value:"Coverage analysis",id:"coverage-analysis",children:[{value:"Coverage reporting",id:"coverage-reporting",children:[]},{value:"Test filtering",id:"test-filtering",children:[]}]}],l={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Install @stryker-mutator/jest-runner locally within your project folder, like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i --save-dev @stryker-mutator/jest-runner\n")),Object(o.b)("h2",{id:"peer-dependencies"},"Peer dependencies"),Object(o.b)("p",null,"The @stryker-mutator/jest-runner is a plugin for Stryker to enable Jest as a test runner. As such, you should make sure you have the correct versions of its dependencies installed:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"jest"),Object(o.b)("li",{parentName:"ul"},"@stryker-mutator/core")),Object(o.b)("p",null,"For the minimum supported versions, see the peerDependencies section in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/stryker-mutator/stryker/master/packages/jest-runner/package.json"}),"package.json"),"."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Make sure you set the ",Object(o.b)("inlineCode",{parentName:"p"},"testRunner"),' option to "jest".'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "testRunner": "jest"\n}\n')),Object(o.b)("p",null,"The @stryker-mutator/jest-runner also provides a couple of configurable options using the ",Object(o.b)("inlineCode",{parentName:"p"},"jest")," property in your Stryker config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "jest": {\n    "projectType": "custom",\n    "configFile": "path/to/your/custom/jestConfig.js",\n    "config": {\n      "testEnvironment": "jest-environment-jsdom-sixteen"\n    },\n    "enableFindRelatedTests": true,\n  }\n}\n')),Object(o.b)("h3",{id:"jestprojecttype-string"},Object(o.b)("inlineCode",{parentName:"h3"},"jest.projectType")," ","[",Object(o.b)("inlineCode",{parentName:"h3"},'"string"'),"]"),Object(o.b)("p",null,"Default: ",Object(o.b)("inlineCode",{parentName:"p"},'"custom"')),Object(o.b)("p",null,"Configure where jest should get its configuration from."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"custom"'),": use the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#jestconfig-object"}),Object(o.b)("inlineCode",{parentName:"a"},"jest.config")," custom configuration"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"create-react-app"'),": use ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/react-scripts"}),"react-scripts"),", for projects created with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebook/create-react-app"}),"create-react-app"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"create-react-app-ts"'),": ",Object(o.b)("strong",{parentName:"li"},"DEPRECATED")," use ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/react-scripts-ts"}),"react-scripts-ts"),", for projects created with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/wmonk/create-react-app-typescript"}),"create-react-app-typescript"),". DEPRECATED, please ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://create-react-app.dev/docs/adding-typescript/"}),"follow the migration guide")," and move to ",Object(o.b)("inlineCode",{parentName:"li"},"create-react-app"),".")),Object(o.b)("h3",{id:"jestconfigfile-string"},Object(o.b)("inlineCode",{parentName:"h3"},"jest.configFile"),"] ","[",Object(o.b)("inlineCode",{parentName:"h3"},"string"),"]"),Object(o.b)("p",null,"Default: ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")),Object(o.b)("p",null,"The path to your Jest config file."),Object(o.b)("h3",{id:"jestconfig-object"},Object(o.b)("inlineCode",{parentName:"h3"},"jest.config")," ","[",Object(o.b)("inlineCode",{parentName:"h3"},"object"),"]"),Object(o.b)("p",null,"Default: ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")),Object(o.b)("p",null,"Custom Jest config. This will override file-based config."),Object(o.b)("h3",{id:"jestenablefindrelatedtests-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"jest.enableFindRelatedTests")," ","[",Object(o.b)("inlineCode",{parentName:"h3"},"boolean"),"]"),Object(o.b)("p",null,"Default: ",Object(o.b)("inlineCode",{parentName:"p"},"true")),Object(o.b)("p",null,"Whether to run jest with the ",Object(o.b)("inlineCode",{parentName:"p"},"--findRelatedTests")," flag. When ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", Jest will only run tests related to the mutated file per test. (See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/cli.html#--findrelatedtests-spaceseparatedlistofsourcefiles"}),Object(o.b)("em",{parentName:"a"},"--findRelatedTests")),")."),Object(o.b)("h2",{id:"coverage-analysis"},"Coverage analysis"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@stryker-mutator/jest-runner")," plugin supports coverage analysis and test filtering, meaning you can run with ",Object(o.b)("inlineCode",{parentName:"p"},"--coverageAnalysis perTest")," for optimal performance."),Object(o.b)("h3",{id:"coverage-reporting"},"Coverage reporting"),Object(o.b)("p",null,"When using ",Object(o.b)("inlineCode",{parentName:"p"},'"all"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'"perTest"')," coverage analysis, this plugin reports mutant coverage by hooking into the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration.html#testenvironment-string"}),"jest's test environment"),". The test environment setting is overridden based on the ",Object(o.b)("inlineCode",{parentName:"p"},'"testEnvironment"')," configuration option in your jest config:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Jest test environment"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Jest runner's override"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"node"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@stryker-mutator/jest-runner/jest-env/node")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"jsdom"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@stryker-mutator/jest-runner/jest-env/jsom")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"jest-environment-jsdom-sixteen"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"@stryker-mutator/jest-runner/jest-env/jsom-sixteen")))),Object(o.b)("p",null,"As long as you're using one of these test environments, you won't have to do anything."),Object(o.b)("p",null,"However, if you choose to override the jest-environment on a file-by-file basis using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration.html#testenvironment-string"}),"jest's ",Object(o.b)("inlineCode",{parentName:"a"},"@jest-environment")," docblock"),", you will have to do the work. "),Object(o.b)("p",null,"This:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * @jest-environment jsdom\n */\n")),Object(o.b)("p",null,"Becomes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * @jest-environment @stryker-mutator/jest-runner/jest-env/jsom \n */\n")),Object(o.b)("p",null,"Don't worry; using Stryker's alternative is harmless during regular unit testing."),Object(o.b)("p",null,"If you're using a custom test environment, you'll need to mixin the Stryker functionality yourself:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// my-custom-jest-environment.js\nconst { mixinJestEnvironment} = require('@stryker-mutator/jest-runner');\nconst NodeEnvironment = require('jest-environment-node');\n\nclass MyCustomTestEnvironment extends NodeEnvironment {\n  // custom magic here \u2728\n}\n\nmodule.exports = mixinJestEnvironment(MyCustomTestEnvironment);\n")),Object(o.b)("h3",{id:"test-filtering"},"Test filtering"),Object(o.b)("p",null,"When using ",Object(o.b)("inlineCode",{parentName:"p"},'"perTest"')," coverage analysis, the ",Object(o.b)("inlineCode",{parentName:"p"},"@stryker-mutator/jest-runner")," will hook into the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration.html#testrunner-string"}),"jest test runner"),". Both the default ",Object(o.b)("inlineCode",{parentName:"p"},'"jasmine2"')," as well as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/jest-circus"}),"jest-circus")," are supported here. "),Object(o.b)("p",null,"If you're using a different test runner, you're out of luck. Please downgrade to using ",Object(o.b)("inlineCode",{parentName:"p"},'"all"')," coverage analysis. If you think we should support your test runner, please let us know by opening an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker/issues/new?assignees=&labels=%F0%9F%9A%80+Feature+request&template=feature_request.md&title="}),"issue"),", or by joining our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"}),"slack channel"),"."))}b.isMDXComponent=!0}}]);