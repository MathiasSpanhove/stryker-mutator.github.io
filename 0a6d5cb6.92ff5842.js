(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{190:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return n?o.a.createElement(m,s(s({ref:t},b),{},{components:n})):o.a.createElement(m,s({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(190)),i={title:"NodeJS",custom_edit_url:"https://github.com/stryker-mutator/stryker/edit/master/docs/guides/nodejs.md"},s={unversionedId:"stryker/guides/nodejs",id:"stryker/guides/nodejs",isDocsHomePage:!1,title:"NodeJS",description:"Stryker can run Mutation Testing on all NodeJS projects. Either by using one of the test runner plugins or with the command test runner. It also supports a custom buildCommand. This command is useful to compile TypeScript or babel code or to bundle your code.",source:"@site/docs/stryker/guides/nodejs.md",slug:"/stryker/guides/nodejs",permalink:"/docs/stryker/guides/nodejs",editUrl:"https://github.com/stryker-mutator/stryker/edit/master/docs/guides/nodejs.md",version:"current",sidebar:"docs",previous:{title:"VueJS",permalink:"/docs/stryker/guides/vuejs"},next:{title:"Create a plugin",permalink:"/docs/stryker/guides/create-a-plugin"}},c=[{value:"About transpiling",id:"about-transpiling",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Build command",id:"build-command",children:[]},{value:"Test runner",id:"test-runner",children:[]}]},{value:"Run",id:"run",children:[]},{value:"Troubleshooting FAQ",id:"troubleshooting-faq",children:[{value:"Build command fails",id:"build-command-fails",children:[]},{value:"Initial test run fails",id:"initial-test-run-fails",children:[]},{value:"No tests executed - jest runner",id:"no-tests-executed---jest-runner",children:[]}]}],b={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Stryker can run Mutation Testing on all NodeJS projects. Either by using one of the test runner plugins or with the command test runner. It also supports a custom ",Object(a.b)("inlineCode",{parentName:"p"},"buildCommand"),". This command is useful to compile TypeScript or babel code or to bundle your code."),Object(a.b)("h2",{id:"about-transpiling"},"About transpiling"),Object(a.b)("p",null,"There are multiple scenarios of transpiling code when running your tests. "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Ahead-of-time"),Object(a.b)("br",{parentName:"li"}),"Use ",Object(a.b)("inlineCode",{parentName:"li"},"tsc")," or ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/en/babel-cli"}),Object(a.b)("inlineCode",{parentName:"a"},"@babel/cli"))," to compile your code before testing or use ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://webpack.js.org/api/cli/"}),"webpack")," or another bundler to create a bundle before running tests. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Just-in-time"),Object(a.b)("br",{parentName:"li"}),"Use ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/package/ts-node"}),Object(a.b)("inlineCode",{parentName:"a"},"ts-node"))," or ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/en/babel-register/"}),Object(a.b)("inlineCode",{parentName:"a"},"@babel/register"))," as a just-in-time compiler to compile your code on the fly.")),Object(a.b)("p",null,"Both scenarios are supported, however using just-in-time transpiling during mutation testing is not recommended because it means running the compiler a large number of times. Since ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://stryker-mutator.io/blog/announcing-stryker-4-mutation-switching"}),"Stryker uses mutation switching"),", compiling only once is preferred. Don't worry; this guide will help you configuring Stryker correctly."),Object(a.b)("p",null,"If you manage your code's compilation through a ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file, this guide ensures that your TypeScript code uses that configuration."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This guide does not cover using ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator/typescript-checker"),". Please review the page ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/stryker/typescript-checker"}),"here")," if you want to include the typescript checker.")),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Please follow this configuration guide. Place the configuration examples inside your ",Object(a.b)("inlineCode",{parentName:"p"},"stryker.conf.json")," file."),Object(a.b)("h3",{id:"build-command"},"Build command"),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n   "buildCommand": "tsc -b path/to/tsconfig.json"\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You generally don't have to configure a ",Object(a.b)("inlineCode",{parentName:"p"},"buildCommand")," if you're using the Jest test runner.")),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"buildCommand")," to configure a command that Stryker can run in its sandbox, just after your code is mutated. If you're using a bundler, you will need to change this command by a command that creates a bundle, like ",Object(a.b)("inlineCode",{parentName:"p"},'"webpack --config webpack.test.config.js"'),". You can also use a script you've defined in package.json, for example ",Object(a.b)("inlineCode",{parentName:"p"},'"npm run build"'),". "),Object(a.b)("p",null,"Don't worry about your ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/PATH_(variable)"}),"PATH environment variable"),"; Stryker will make sure your local dependencies are available there before executing the build command inside the sandbox. "),Object(a.b)("p",null,"If you're using ",Object(a.b)("inlineCode",{parentName:"p"},"ts-node")," or ",Object(a.b)("inlineCode",{parentName:"p"},"@babel/register")," to just-in-time compile during unit testing, then it's a good idea to configure your build command-equivalent here. Some examples:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"For ts-node: ",Object(a.b)("inlineCode",{parentName:"li"},"tsc -b path/to/tsconfig.json")),Object(a.b)("li",{parentName:"ul"},"For @babel/register: ",Object(a.b)("inlineCode",{parentName:"li"},"babel src --out-dir lib"),"\n(using the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/en/babel-cli"}),"@babel/cli"),")")),Object(a.b)("p",null,"Be sure to test them out yourself first."),Object(a.b)("h3",{id:"test-runner"},"Test runner"),Object(a.b)("p",null,"Next, configure the test runner you're using. If you're using a different test runner than described here, you can still use the default ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/stryker/configuration#testrunner-string"}),"command test runner")),Object(a.b)("h4",{id:"mocha"},"Mocha"),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "coverageAnalysis": "perTest",\n  "mochaOptions": {\n    "config": "path/to/your/.mocharc.js/file",\n    "spec": [ "dist/test/**/*.spec.js"]\n  },\n  "testRunner": "mocha"\n}\n')),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"mochaOptions")," to configure the mocha test runner. If your project uses a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://mochajs.org/#-config-path"}),"mocha config file"),", you can specify it in ",Object(a.b)("inlineCode",{parentName:"p"},"mochaOptions.config"),"; use other settings to override settings in the config file. "),Object(a.b)("p",null,"If you're using a ",Object(a.b)("inlineCode",{parentName:"p"},"buildCommand"),", be sure to configure the ",Object(a.b)("em",{parentName:"p"},"js output files in the ",Object(a.b)("inlineCode",{parentName:"em"},"mochaOptions.spec")," instead of the ts input files"),", otherwise mocha won't be able to find your test files."),Object(a.b)("p",null,"If you choose to keep using your just-in-time compiler and accept the performance penalty, you can use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/stryker/mocha-runner#mochaoptionsrequire-string"}),"mochaOptions.require")," to configure your ",Object(a.b)("inlineCode",{parentName:"p"},"ts-node")," or ",Object(a.b)("inlineCode",{parentName:"p"},"@babel/register")," transpiler. Also, you may want to override the ts-node configuration options via environment variables. You can do so using environment variables, for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "test:mutation": "cross-env TS_NODE_PROJECT=path/to/your/tsconfig.json stryker run"\n  }\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/cross-env"}),Object(a.b)("inlineCode",{parentName:"a"},"cross-env"))," is a tool to help you set environment variables across platforms.")),Object(a.b)("h4",{id:"jest"},"Jest"),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "coverageAnalysis": "perTest",\n  "jest": {\n    "projectType": "custom",\n    "configFile": "path/to/your/custom/jestConfig.js"\n   },\n  "tempDirName": "stryker-tmp",\n  "testRunner": "jest"\n}\n')),Object(a.b)("p",null,"Jest has two ways to provide TypeScript compilation, either ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/getting-started#using-typescript"}),"using babel")," (default) or using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/ts-jest"}),"ts-jest"),". For both, you ",Object(a.b)("em",{parentName:"p"},"don't need to configure the ",Object(a.b)("inlineCode",{parentName:"em"},"buildCommand")),". "),Object(a.b)("h2",{id:"run"},"Run"),Object(a.b)("p",null,"Run Stryker as per usual, either using a custom script in package.json or using ",Object(a.b)("inlineCode",{parentName:"p"},"npx"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'npx stryker run\n# OR, if your script is called "test:mutation"\nnpm run test:mutation \n')),Object(a.b)("h4",{id:"jasmine"},"Jasmine"),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "coverageAnalysis": "perTest",\n  "jasmineConfigFile": "spec/support/jasmine.json",\n  "testRunner": "jasmine"\n}\n')),Object(a.b)("h2",{id:"troubleshooting-faq"},"Troubleshooting FAQ"),Object(a.b)("h3",{id:"build-command-fails"},"Build command fails"),Object(a.b)("p",null,"If you're running into issues with your ",Object(a.b)("inlineCode",{parentName:"p"},"buildCommand"),", try to execute it by hand to make sure it works. For example, if your ",Object(a.b)("inlineCode",{parentName:"p"},"buildCommand")," is ",Object(a.b)("inlineCode",{parentName:"p"},'"tsc -b path/to/tsconfig.json"'),", try to run ",Object(a.b)("inlineCode",{parentName:"p"},"npx tsc  -b path/to/tsconfig.json")," yourself, did it have the desired effect?"),Object(a.b)("p",null,"If that works, the next step would be to try the command yourself ",Object(a.b)("em",{parentName:"p"},"inside the Stryker sandbox directory"),". Please ",Object(a.b)("inlineCode",{parentName:"p"},"cd")," into the ",Object(a.b)("inlineCode",{parentName:"p"},".stryker-tmp/sandbox-xxxxx")," directory and try the command there. For example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"cd .stryker-tmp/sandbox-12345678\nnode ../../node_modules/typescript/bin/tsc -b path/to/tsconfig.json\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: since the sandbox dir doesn't have you node_modules, you will need to specify the full path to the TypeScript compiler.")),Object(a.b)("h3",{id:"initial-test-run-fails"},"Initial test run fails"),Object(a.b)("p",null,"You might run into issues like this:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"One or more tests resulted in an error\n","[...]"," Cannot assign to 'stryNS_9fa48' because it is not a variable ","[...]")),Object(a.b)("p",null,"The initial test run might fail when you're using ts-jest or ts-node. The reason for this is that Stryker will mutate your code and, by doing so, introduce type errors into your code. Stryker tries to ignore these errors by adding ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/#ts-nocheck-in-typescript-files"}),Object(a.b)("inlineCode",{parentName:"a"},"// @ts-nocheck"))," in your source files. However, this is only done for TypeScript-like files inside your ",Object(a.b)("inlineCode",{parentName:"p"},"lib"),", ",Object(a.b)("inlineCode",{parentName:"p"},"src"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"test")," directories by default. If you have your code somewhere else, you will need to override ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/stryker/configuration#disabletypechecks-false--string"}),"disableTypeChecks")," yourself:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "disableTypeChecks": "app/**/*.{js,ts,jsx,tsx,html,vue}"\n}\n')),Object(a.b)("h3",{id:"no-tests-executed---jest-runner"},"No tests executed - jest runner"),Object(a.b)("p",null,"You might run into issues like this when using the ",Object(a.b)("inlineCode",{parentName:"p"},"@stryker-mutator/jest-runner"),":"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"No tests found, exiting with code 1\nRun with ",Object(a.b)("inlineCode",{parentName:"p"},"--passWithNoTests")," to exit with code 0")),Object(a.b)("p",null,"You will need to override the ",Object(a.b)("inlineCode",{parentName:"p"},"tempDirName")," to a directory without a ",Object(a.b)("inlineCode",{parentName:"p"},".")," in front of it."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n   "tempDirName": "stryker-tmp"\n}\n')),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker/issues/1691"}),"#1691")," for more info."))}l.isMDXComponent=!0}}]);