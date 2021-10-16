"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[4365],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8548:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(7462),o=(r(7294),r(3905));const a={title:"Troubleshooting",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/troubleshooting.md"},i=void 0,s={unversionedId:"stryker-js/troubleshooting",id:"stryker-js/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Below you'll find an ever-growing list of issues that you might occur when running StrykerJS on your project for the first time.",source:"@site/docs/stryker-js/troubleshooting.md",sourceDirName:"stryker-js",slug:"/stryker-js/troubleshooting",permalink:"/docs/stryker-js/troubleshooting",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/troubleshooting.md",tags:[],version:"current",frontMatter:{title:"Troubleshooting",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/troubleshooting.md"},sidebar:"docs",previous:{title:"TypeScript Checker",permalink:"/docs/stryker-js/typescript-checker"},next:{title:"Angular",permalink:"/docs/stryker-js/guides/angular"}},l=[{value:"Build command fails",id:"build-command-fails",children:[]},{value:"Initial test run fails",id:"initial-test-run-fails",children:[]},{value:"No tests executed - Jest runner",id:"no-tests-executed---jest-runner",children:[]},{value:"All mutants survive - Jest runner",id:"all-mutants-survive---jest-runner",children:[]},{value:"Jest crashes with a multi project configuration",id:"jest-crashes-with-a-multi-project-configuration",children:[]},{value:"Stryker generates mutants that survive, but are not compiled by TypeScript",id:"stryker-generates-mutants-that-survive-but-are-not-compiled-by-typescript",children:[]},{value:"Error when running StrykerJS: <code>Committing semi space failed. Allocation failed - JavaScript heap out of memory</code>",id:"error-when-running-strykerjs-committing-semi-space-failed-allocation-failed---javascript-heap-out-of-memory",children:[]},{value:"Mutating fails: Cannot use the decorators and decorators-legacy plugin together",id:"mutating-fails-cannot-use-the-decorators-and-decorators-legacy-plugin-together",children:[]}],u={toc:l};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below you'll find an ever-growing list of issues that you might occur when running StrykerJS on your project for the first time."),(0,o.kt)("h3",{id:"build-command-fails"},"Build command fails"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"}," ERROR Stryker Unexpected error occurred while running Stryker Error: Command failed with exit code 1:\n my-build-command\n"))),(0,o.kt)("p",null,"If you're running into issues with your ",(0,o.kt)("inlineCode",{parentName:"p"},"buildCommand"),", try to execute it by hand to make sure it works. For example, if your ",(0,o.kt)("inlineCode",{parentName:"p"},"buildCommand")," is ",(0,o.kt)("inlineCode",{parentName:"p"},'"tsc -b path/to/tsconfig.json"'),", try to run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx tsc  -b path/to/tsconfig.json")," yourself, did it have the desired effect?"),(0,o.kt)("p",null,"If that works, the next step would be to try the command yourself ",(0,o.kt)("em",{parentName:"p"},"inside the Stryker sandbox directory"),". Please ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,o.kt)("inlineCode",{parentName:"p"},".stryker-tmp/sandbox-xxxxx")," directory and try the command there. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd .stryker-tmp/sandbox-12345678\nnode ../../node_modules/typescript/bin/tsc -b path/to/tsconfig.json\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": since the sandbox dir doesn't have you node_modules, you will need to specify the full path to the TypeScript compiler."),(0,o.kt)("h3",{id:"initial-test-run-fails"},"Initial test run fails"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"One or more tests resulted in an error\n[...] Cannot assign to 'stryNS_9fa48' because it is not a variable [...]\n"))),(0,o.kt)("p",null,"The initial test run might fail when you're using ts-jest or ts-node. The reason for this is that Stryker will mutate your code and, by doing so, introduce type errors into your code. Stryker tries to ignore these errors by adding ",(0,o.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/#ts-nocheck-in-typescript-files"},(0,o.kt)("inlineCode",{parentName:"a"},"// @ts-nocheck"))," in your source files. However, this is only done for TypeScript-like files inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"lib"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"src"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," directories by default. If you have your code somewhere else, you will need to override ",(0,o.kt)("a",{parentName:"p",href:"/docs/stryker-js/configuration#disabletypechecks-false--string"},"disableTypeChecks")," yourself:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "disableTypeChecks": "app/**/*.{js,ts,jsx,tsx,html,vue}"\n}\n')),(0,o.kt)("p",null,"Another cause might be that you're using TypeScript lower then v3.7. In that case, you should update TypeScript to at least v3.7 or higher. Alternatively you can try to switch to another transpiler, like ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-typescript"},"babel"),", but honestly, updating TypeScript should be your first choice."),(0,o.kt)("h3",{id:"no-tests-executed---jest-runner"},"No tests executed - Jest runner"),(0,o.kt)("p",null,"You might run into issues like this when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/jest-runner"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"No tests found, exiting with code 1\nRun with `--passWithNoTests` to exit with code 0\n"))),(0,o.kt)("p",null,"You will need to override the ",(0,o.kt)("inlineCode",{parentName:"p"},"tempDirName")," to a directory without a ",(0,o.kt)("inlineCode",{parentName:"p"},".")," in front of it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "tempDirName": "stryker-tmp"\n}\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/1691"},"#1691")," for more info."),(0,o.kt)("h3",{id:"all-mutants-survive---jest-runner"},"All mutants survive - Jest runner"),(0,o.kt)("p",null,"When running with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/jest-runner")," on windows you might run into the issue where all mutants survive unexpectedly:"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"[...]\n#3. [Survived] ArithmeticOperator\nC:\\z\\github\\stryker-mutator\\stryker-js\\e2e\\test\\jest-node\\src\\sum.js:5:10\n-     return a - b;\n+     return a + b;\nRan all tests for this mutant.\n\nRan 0.00 tests per mutant on average.\n----------|---------|----------|-----------|------------|----------|---------|\nFile      | % score | # killed | # timeout | # survived | # no cov | # error |\n----------|---------|----------|-----------|------------|----------|---------|\nAll files |    0.00 |        0 |         0 |          4 |        0 |       0 |\n sum.js   |    0.00 |        0 |         0 |          4 |        0 |       0 |\n----------|---------|----------|-----------|------------|----------|---------|\n"))),(0,o.kt)("p",null,"The root cause for this is that Jest doesn't support running in a hidden directory on windows, like StrykerJS does by default (the sandbox directory is located in ",(0,o.kt)("inlineCode",{parentName:"p"},".stryker-tmp"),", a hidden directory). See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/9728"},"issue 9728")," for more info."),(0,o.kt)("p",null,"Known workarounds:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Change the ",(0,o.kt)("a",{parentName:"li",href:"/docs/stryker-js/configuration#tempdirname-string"},(0,o.kt)("inlineCode",{parentName:"a"},"tempDirName"))," to a non-hidden directory, for example ",(0,o.kt)("inlineCode",{parentName:"li"},"--tempDirName stryker-tmp"),"."),(0,o.kt)("li",{parentName:"ol"},"You can also choose to run Stryker in place, using ",(0,o.kt)("a",{parentName:"li",href:"/docs/stryker-js/configuration#inplace-boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"--inPlace")))),(0,o.kt)("h3",{id:"jest-crashes-with-a-multi-project-configuration"},"Jest crashes with a multi project configuration"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"}," ERROR DryRunExecutor One or more tests resulted in an error:\n        Test runner crashed. Tried twice to restart it without any luck. Last time the error message was:\nError: Jest: Cannot use configuration as an object without a file path.\n    at readConfig (C:\\z\\github\\jest-issue\\node_modules\\jest-config\\build\\index.js:188:13)\n"))),(0,o.kt)("p",null,"This can happen when you have multiple ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#projects-arraystring--projectconfig"},(0,o.kt)("inlineCode",{parentName:"a"},'"projects"'))," defined in your Jest configuration. Currently, the jest-runner uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"runCli")," of Jest, which doesn't support this. However, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/pull/11307"},"the PR that adds support for this just merged"),", so future releases of Jest should work. "),(0,o.kt)("p",null,'Until then, the only known workaround is to configure Jest without using "projects" \ud83e\udd37\u200d\u2642\ufe0f.'),(0,o.kt)("h3",{id:"stryker-generates-mutants-that-survive-but-are-not-compiled-by-typescript"},"Stryker generates mutants that survive, but are not compiled by TypeScript"),(0,o.kt)("p",null,"If you are using TypeScript, it may happen that StrykerJS generates a mutant that survives, but is not compilable by TypeScript."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("p",null,"In your production TS code, you have the following statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let typesWithLabelsObjects: ComponentData[] = new Array<ComponentData>();\n")),(0,o.kt)("p",null,"and one of the mutants generated by StrykerJS is the following ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayMutation")," one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let typesWithLabelsObjects: ComponentData[] = new Array([]);\n")),(0,o.kt)("p",null,"However, if you try to introduce such a change to your TypeScript code manually, the TypeScript's compiler will not compile this. In our example, you'd get the following compilation error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Type 'any[][]' is not assignable to type 'ComponentData[]'.\n  Type 'any[]' is missing the following properties from type 'ComponentData': type, labelts(2322)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solution"),":"),(0,o.kt)("p",null,"To solve that, you need to add a ",(0,o.kt)("a",{parentName:"p",href:"https://stryker-mutator.io/docs/stryker-js/typescript-checker/#configuring"},"typescript-checker plugin")," to StrykerJS. Install it with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install --save-dev @stryker-mutator/typescript-checker")," and then add the following options to your stryker's config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "checkers": ["typescript"],\n  "tsconfigFile": "tsconfig.json"\n}\n')),(0,o.kt)("p",null,"After adding this and running ",(0,o.kt)("inlineCode",{parentName:"p"},"npx stryker run")," you may get errors similar to this one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"node_modules/@types/react/index.d.ts:3075:13 - error TS2717: Subsequent property declarations must have the same type.  Property 'rt' must be of type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>', but here has type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.\n")),(0,o.kt)("p",null,"If that happens, add ",(0,o.kt)("inlineCode",{parentName:"p"},'"skipLibCheck": true')," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," file.\n",(0,o.kt)("strong",{parentName:"p"},"Note"),": adding ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript-checker")," to StykerJS makes types safety better and you get less false negative results, but it comes with a performance cost. Mutating may take more time with the checker plugin."),(0,o.kt)("h3",{id:"error-when-running-strykerjs-committing-semi-space-failed-allocation-failed---javascript-heap-out-of-memory"},"Error when running StrykerJS: ",(0,o.kt)("inlineCode",{parentName:"h3"},"Committing semi space failed. Allocation failed - JavaScript heap out of memory")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("p",null,"When running Stryker mutations, you may get an error similar to the following one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"16:58:25 (17452) INFO ConfigReader Using stryker.conf.json\n16:58:26 (17452) INFO InputFileResolver Found 2 of 2557 file(s) to be mutated.\n16:58:27 (17452) INFO Instrumenter Instrumented 2 source file(s) with 118 mutant(s)\n16:58:28 (17452) INFO ConcurrencyTokenProvider Creating 6 checker process(es) and 5 test runner process(es).\n16:59:40 (17452) INFO DryRunExecutor Starting initial test run. This may take a while.\n16:59:53 (17452) INFO DryRunExecutor Initial test run succeeded. Ran 72 tests in 13 seconds (net 250 ms, overhead 12910 ms).\nMutation testing  [  ] 12% (elapsed: ~1m, remaining: ~7m) 15/118 tested (0 survived, 10 timed out)\n<--- Last few GCs ---\x3e\n[17452:0000022998429D50]    75135 ms: Scavenge 302.2 (313.0) -> 295.2 (313.0) MB, 0.8 / 0.2 ms  (average mu = 0.992, current mu = 0.975) task\n[17452:0000022998429D50]   125511 ms: Scavenge 302.0 (313.0) -> 295.9 (313.2) MB, 1.3 / 0.0 ms  (average mu = 0.992, current mu = 0.975) task\n[17452:0000022998429D50]   149148 ms: Scavenge 296.5 (301.2) -> 296.0 (301.7) MB, 2.3 / 0.2 ms  (average mu = 0.992, current mu = 0.975) allocation failure\n<--- JS stacktrace ---\x3e\nFATAL ERROR: Committing semi space failed. Allocation failed - JavaScript heap out of memory\n 1: 00007FF61D741DDF napi_wrap+109135\n 2: 00007FF61D6E6D06 v8::internal::OrderedHashTable<v8::internal::OrderedHashSet,1>::NumberOfElementsOffset+33350\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solution"),":"),(0,o.kt)("p",null,"To solve that, you need to limit the number of workers. In the example about, 11 workers were created in total (6 checker processes and 5 test runner processes). In order to solve this issue, you may try to set ",(0,o.kt)("inlineCode",{parentName:"p"},"--concurrency")," setting in your stryker config. In case of the sample issue, adding ",(0,o.kt)("inlineCode",{parentName:"p"},'"concurrency": 4')," to ",(0,o.kt)("inlineCode",{parentName:"p"},"stryker.conf.json")," solved the problem."),(0,o.kt)("h3",{id:"mutating-fails-cannot-use-the-decorators-and-decorators-legacy-plugin-together"},"Mutating fails: Cannot use the decorators and decorators-legacy plugin together"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"ERROR Stryker Unexpected error occurred while running Stryker Error: Cannot use the decorators and decorators-legacy plugin together\n   at validatePlugins (okay_all in src\\node_modules\\@babel\\parser\\lib\\index.js:10194:13)\n   at getParser (okay_all in src\\node_modules\\@babel\\parser\\lib\\index.js:14528:5)\n   at parse (okay_all in src\\node_modules\\@babel\\parser\\lib\\index.js:14511:12)\n   at parser (okay_all in src\\node_modules\\@babel\\core\\lib\\parser\\index.js:52:34)\n   at parser.next (<anonymous>)\n   at Object.parse (okay_all in src\\node_modules\\@babel\\core\\lib\\parse.js:31:37)\n   at parse.next (<anonymous>)\n   at step (okay_all in src\\node_modules\\gensync\\index.js:261:32)\n   at okay_all in src\\node_modules\\gensync\\index.js:273:13\n   at async.call.result.err.err (okay_all in src\\node_modules\\gensync\\index.js:223:11)\n"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solution"),":"),(0,o.kt)("p",null,"Stryker JS uses ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/"},"babel")," to parse and mutate your files. It does so by readingthe ",(0,o.kt)("inlineCode",{parentName:"p"},".babelrc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js")," files you have, but applies its own default plugins first. In rare circumstances, those default plugins are incompatible with your babel configuration."),(0,o.kt)("p",null,"Override the default babel plugins to solve this issue. For example, leaving it empty allows your own babel plugins to be used, without defaults from StrykerJS conflicting with it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "mutator": {\n    "plugins": []\n  }\n}\n')),(0,o.kt)("p",null,"Alternatively, you can start with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/blob/0c98f98649cecd7e7222cc5f168afbe1071099e5/packages/instrumenter/src/parsers/js-parser.ts#L8-L32"},"default list defined in StrykerJS")," and start removing some of them until you get a working list."))}p.isMDXComponent=!0}}]);