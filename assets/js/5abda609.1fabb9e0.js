"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[5649],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5448:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(7462),a=(r(7294),r(3905));const o={slug:"announcing-stryker-4-mutation-switching",title:"Announcing Stryker 4.0 - Mutation Switching",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i=void 0,s={permalink:"/blog/announcing-stryker-4-mutation-switching",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2020-10-07-announcing-stryker-4-mutation-switching.md",source:"@site/blog/2020-10-07-announcing-stryker-4-mutation-switching.md",title:"Announcing Stryker 4.0 - Mutation Switching",description:"We're proud to announce the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0.",date:"2020-10-07T00:00:00.000Z",formattedDate:"October 7, 2020",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:10.575,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],prevItem:{title:"Announcing StrykerJS 5.0 - Brave new Dimension",permalink:"/blog/announcing-stryker-js-5-brave-new-dimension.md"},nextItem:{title:"Announcing Stryker 4.0 Beta",permalink:"/blog/announcing-stryker-4-beta-mutation-switching"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\ude80 Getting started",id:"-getting-started",children:[]},{value:"\ud83d\udc7d Mutation switching",id:"-mutation-switching",children:[]},{value:"\ud83d\udc20 Code instrumentation",id:"-code-instrumentation",children:[]},{value:"\ud83d\udc77\u200d\u200d Build command support",id:"-build-command-support",children:[]},{value:"\u2705 Checker plugin",id:"-checker-plugin",children:[]},{value:"\u2614 Coverage analysis",id:"-coverage-analysis",children:[]},{value:"\ud83e\uddf9 Other changes",id:"-other-changes",children:[]},{value:"\ud83d\udca5 Breaking changes",id:"-breaking-changes",children:[]},{value:"\ud83d\udd2e What&#39;s next?",id:"-whats-next",children:[]},{value:"\ud83c\udf89 Thank you",id:"-thank-you",children:[]}],p={toc:u};function m({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're proud to announce the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0."),(0,a.kt)("p",null,"This release marks a fundamental shift in the way Stryker works internally. It now uses \"mutation switching\", which improves performance and usability, similar to how Stryker.NET and Stryker4s already work. This change, unfortunately, couldn't be done without breaking changes. See the breaking changes paragraph if you're interested."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\ud83c\udfa7 Listen to the ",(0,a.kt)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://thedeepdive.simplecast.com/episodes/mutation-testing-with-stryker"},'"Mutation testing with Stryker" podcast episode on InDepth.dev'))),(0,a.kt)("p",null,"If you're new to mutation testing, it's a way to measure your tests' effectiveness. Please look at ",(0,a.kt)("a",{parentName:"p",href:"https://stryker-mutator.io/example"},"our RoboBar \ud83e\udd16\ud83c\udf77 example")," and see how even 100% code coverage doesn't tell the whole story. Mutation testing is the only way to make sure you're not missing any tests."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Note: updated on 9 October 2020: add remark about TypeScript 3.7 requirement in ",(0,a.kt)("a",{parentName:"em",href:"#breaking-changes"},"Breaking changes"),"."))),(0,a.kt)("h2",{id:"-getting-started"},"\ud83d\ude80 Getting started"),(0,a.kt)("p",null,"If you're new to Stryker, please follow the ",(0,a.kt)("a",{parentName:"p",href:"/stryker/quickstart"},"quickstart guide"),"."),(0,a.kt)("p",null,"If you're already using Stryker, you can install this latest version with your package manager of choice."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @stryker-mutator/core\n")),(0,a.kt)("p",null,"Don't forget to do the same for your Stryker plugins. Please note that the following plugins have been removed and are no longer needed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"@stryker-mutator/typescript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"@stryker-mutator/jasmine-framework")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"@stryker-mutator/mocha-framework")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"@stryker-mutator/babel-transpiler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"@stryker-mutator/webpack-transpiler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"@stryker-mutator/javascript-mutator"))),(0,a.kt)("p",null,"You can remove these from your package.json."),(0,a.kt)("h2",{id:"-mutation-switching"},"\ud83d\udc7d Mutation switching"),(0,a.kt)("p",null,"Mutation switching is a way to put all mutants into your code simultaneously."),(0,a.kt)("p",null,"Let's take a look at an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function add(a, b) {\n  return a + b;\n}\n")),(0,a.kt)("p",null,"When you feed this code to Stryker, it will generate two mutants:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\ud83d\udc7d function add(a, b) { return a - b }"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"\ud83d\udc7e function add(a, b) {}")),(0,a.kt)("p",null,"Previous versions of Stryker would make two copies of your source code. One for each mutant. Stryker 4.0 will now place ",(0,a.kt)("em",{parentName:"p"},"all mutants into the code simultaneously"),", but with only ",(0,a.kt)("em",{parentName:"p"},"one mutant active at any one time"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function add(a, b) {\n  if (global.activeMutant === 0) {\n    // \ud83d\udc7e\n  } else {\n    return global.activeMutant === 1\n      ? a - b // \ud83d\udc7d\n      : a + b;\n  }\n}\n")),(0,a.kt)("p",null,"(simplified example)"),(0,a.kt)("p",null,"Stryker now runs your tests while changing (or ",(0,a.kt)("em",{parentName:"p"},"switching"),") the active mutant between runs. Mutation switching can improve performance dramatically, depending on the type of project."),(0,a.kt)("p",null,"You're probably wondering: how much performance improvement? Like all great questions, the answer is: 'it depends'. For example, when you bundle your code with webpack before running the tests, then webpack only needs to run once, a significant performance gain. On the other hand, if you're running Stryker on an ES5 project with mocha, the improvement might not be that substantial. In our experience, you can expect somewhere between 20% to 70% speed increase."),(0,a.kt)("h2",{id:"-code-instrumentation"},"\ud83d\udc20 Code instrumentation"),(0,a.kt)("p",null,"Mutation Switching yields a significant performance improvement, but it means that Stryker is required to perform some complex transformations to the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"},"Abstract Syntax Tree (AST)"),"."),(0,a.kt)("p",null,"Doing this ",(0,a.kt)("em",{parentName:"p"},"instrumentation")," means visiting each node of the AST to collect and place mutants. This instrumentation is implemented with the ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," parser and now ships with ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/core"),". We're taking advantage of Babel's support for all types of JavaScript, including TypeScript code."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note that to implement mutation switching in both TypeScript and JavaScript before the release of Babel v7 would have meant implementing it twice. We think it is incredible that the Babel maintainers chose to add TypeScript support. We're standing on the shoulders of giants here \ud83c\udf89. Without this, we probably wouldn't have done it.")),(0,a.kt)("p",null,"This instrumentation means you ",(0,a.kt)("em",{parentName:"p"},"no longer need to configure the mutator")," in your Stryker configuration. Stryker will always use the new mutation instrumenter. It supports TypeScript, JavaScript, Flow, and JSX. It even mutates script tags in ",(0,a.kt)("inlineCode",{parentName:"p"},".html")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".vue")," files. It also picks up your babel configuration out-of-the-box, so no custom configuration is needed\u2014cupcakes for everyone \ud83e\uddc1."),(0,a.kt)("h2",{id:"-build-command-support"},"\ud83d\udc77\u200d\u200d Build command support"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: not all projects need building. Simple projects might deploy JS code as is, or the test runner might take care of this step for you. For example, running your tests with ts-node or babel/register or running it with Jest or Karma with the webpack plugin.")),(0,a.kt)("p",null,"Previous versions of Stryker allowed you to configure a transpiler. For example, configuring ",(0,a.kt)("inlineCode",{parentName:"p"},'"transpilers": ["babel"]')," would allow all files to be transpiled with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/babel-transpiler")," plugin. This way of working had its disadvantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u26d4 Since every mutant needed to transpiled one by one, it was slow."),(0,a.kt)("li",{parentName:"ul"},"\u26d4 Every transpiler/bundler required a plugin. We only officially supported Webpack, Babel, and TypeScript. If you were using a different tool, you were out of luck."),(0,a.kt)("li",{parentName:"ul"},"\u26d4 It was hard to maintain the transpiler plugins since it hooked into the transpiler/bundler's API.")),(0,a.kt)("p",null,"Stryker 4.0 gets rid of the transpiler plugins. Instead, it allows you to configure a ",(0,a.kt)("inlineCode",{parentName:"p"},"buildCommand"),". Stryker will run this command once in the sandbox directory after instrumenting your code and just before starting the dry run. For example, running Stryker with ",(0,a.kt)("inlineCode",{parentName:"p"},'--buildCommand "npm run build"')," will run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," inside the sandbox directory."),(0,a.kt)("p",null,"This new way of working gets rid of all the disadvantages listed above. It will only run once, you can use whichever tool you want, and we don't have to maintain plugins\u2014a win-win-win scenario. The old transpiler plugins are no longer needed, and you can remove them from your project."),(0,a.kt)("h2",{id:"-checker-plugin"},"\u2705 Checker plugin"),(0,a.kt)("p",null,"You might know that the old ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/typescript"),' transpiler not only transpiled your code but also filtered out mutants that resulted in type errors, marking them with "compile error" in your report. Mutants with this status are considered invalid and do not influence your mutation score.'),(0,a.kt)("p",null,"Stryker 4.0 removes the transpiler plugin in favor of ",(0,a.kt)("inlineCode",{parentName:"p"},"--buildCommand"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Wondering how your TypeScript code compiles even while some mutants might create type errors? Stryker places ",(0,a.kt)("inlineCode",{parentName:"em"},"// @ts-nocheck")," atop your code files. Your TypeScript compiler will ignore any type errors produced by instrumenting your code.")),(0,a.kt)("p",null,'However, you might still want to invalidate mutants that result in a type error, so you won\'t spend any time looking at them. The new "Checker" plugin helps you here. Checker plugins can choose to invalidate mutants based on rules specific to the checker.'),(0,a.kt)("p",null,"We maintain one such checker, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/typescript-checker"),'. It will mark mutants that would result in a type error with "Compile error".'),(0,a.kt)("p",null,"Install it with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install -D @stryker-mutator/typescript-checker"),"."),(0,a.kt)("p",null,"Configure it with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "checkers": ["typescript"],\n  "tsconfigFile": "tsconfig.json"\n}\n')),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages/typescript-checker#readme"},"the TypeScript checker's readme")," for more details."),(0,a.kt)("h2",{id:"-coverage-analysis"},"\u2614 Coverage analysis"),(0,a.kt)("p",null,"Coverage analysis is a great way to speed up mutation testing. It is a means to reduce the number of tests Stryker needs to run to test a mutant. Stryker has three flavors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'"off"'),": No coverage analysis"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'"all"'),': Mutant coverage for the entire test suite is measured. Mutants without coverage are marked with "no coverage". But all tests run for mutants that are covered.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'"perTest"'),": Mutant coverage is measured per test. Stryker runs only the tests that cover a specific mutant when it tests that mutant.")),(0,a.kt)("p",null,'Running with "perTest" coverage analysis allows for significant performance improvement, usually between 40% and 60%. However, most projects were unable to take advantage of it because Stryker relied on ',(0,a.kt)("a",{parentName:"p",href:"https://istanbul.js.org/"},"istanbul code coverage")," combined with test runner hooks. It only worked in scenarios without transpiling or bundling."),(0,a.kt)("p",null,"This changes with version 4. When Stryker instruments your code with mutants, it also injects the coverage instrumentation. No need for instanbul anymore, allowing Stryker to measure mutant coverage, ",(0,a.kt)("em",{parentName:"p"},"regardless of which bundler/transpiler you are using"),". Hooking into the test runner is the only remaining requirement. All test runner plugins support these hooks, except for the ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/jest-runner")," (although we're ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/2316"},"planning to support it"),")."),(0,a.kt)("h2",{id:"-other-changes"},"\ud83e\uddf9 Other changes"),(0,a.kt)("p",null,"We also decided to take this opportunity to improve the maintainability of the Stryker code further. That's why we've decided to drop support for two more plugin types."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"strong"},"TestFramework")," plugins are removed.")),(0,a.kt)("p",null,"A test framework plugin used to be responsible for allowing Stryker to hook into the test framework to support \"perTest\" coverage analysis. In practice, this was often tightly coupled to the test runner itself. For example, the mocha test runner uses -you guessed it- the mocha test framework. It made configuring Stryker needlessly complicated. That's why we've decided to drop this plugin type and make the Test Runner plugin responsible for hooking into the test framework directly. As a result, the following dependencies are no longer needed: ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/mocha-framework")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/jasmine-framework"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"strong"},"OptionsEditor")," plugins are removed.")),(0,a.kt)("p",null,"Options editors provided a way for plugins to edit the Stryker options directly. In practice, this was used to load plugin-specific options and attach them to the StrykerOptions object for later use. Plugins should now load their needed options in their life cycle, for example, in the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," method of the plugin."),(0,a.kt)("h2",{id:"-breaking-changes"},"\ud83d\udca5 Breaking changes"),(0,a.kt)("p",null,"Here is a list of the most important breaking changes. For a full list, please see our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/blob/master/CHANGELOG.md"},"changelog"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Configuring "transpilers" is no longer supported; please use ',(0,a.kt)("inlineCode",{parentName:"li"},"--buildCommand")," instead."),(0,a.kt)("li",{parentName:"ul"},"Configuring ",(0,a.kt)("inlineCode",{parentName:"li"},"mutator")," as a string, or configuring ",(0,a.kt)("inlineCode",{parentName:"li"},"mutator.name")," is no longer supported, Stryker will always use its code instrumenter."),(0,a.kt)("li",{parentName:"ul"},"TypeScript 3.7 or higher is required if you're using TypeScript to transpile your code, either via a ",(0,a.kt)("inlineCode",{parentName:"li"},"--buildCommand")," or via a test runner plugin, like ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-jest"},"ts-jest"),", ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/karma-webpack"},"karma-webpack")," or using the ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@angular/cli"},"angular-cli"),". If you're dependent on TS <3.7, please consider upgrading, or keep using Stryker V3. This is because the mutation instrumenter heavily leans on the support of ",(0,a.kt)("inlineCode",{parentName:"li"},"// @ts-nocheck")," feature, added in TS3.7. If you're using another transpiler, like ",(0,a.kt)("a",{parentName:"li",href:"https://babeljs.io"},"babel")," or ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/TypeStrong/ts-node"},"ts-node with ",(0,a.kt)("inlineCode",{parentName:"a"},"transpileOnly")),", then Stryker will work fine."),(0,a.kt)("li",{parentName:"ul"},"Because of the requirement for TS 3.7, Angular >=9.0 is required for Angular projects."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},'"command"'),' test runner is now "best-effort". Stryker will use an environment variable to communicate which mutant should be active. Your test command should pass the environment variables to the test environment. We expect this to work for most test runners and test commands out there. One exception is Karma, but since we have the ',(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/karma-runner")," for this use case, it shouldn't be a problem."),(0,a.kt)("li",{parentName:"ul"},"Support for the Web Component Tester is dropped. Please see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/issues/2386"},"#2386")," for reasoning."),(0,a.kt)("li",{parentName:"ul"},"Exporting a ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),' from your "stryker.conf.js" file is deprecated. Please export your config as an object instead, or use a stryker.conf.json file. Please see ',(0,a.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/issues/2429"},"#2429")," for more details."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"--maxConcurrentTestRunner")," option is now deprecated, please use ",(0,a.kt)("inlineCode",{parentName:"li"},"--concurrency")," instead. Stryker will use this setting to determine how to scale checkers or test runner processes. Note that Stryker will no longer prevent you from configuring more than the number of logical cores in your machine, i.e., ",(0,a.kt)("inlineCode",{parentName:"li"},"--concurrency 9999")," might be a bad idea.")),(0,a.kt)("h2",{id:"-whats-next"},"\ud83d\udd2e What's next?"),(0,a.kt)("p",null,"Mutation switching was a considerable undertaking, but we had to do it since it allows for further performance and usability improvements. Let's discuss some here."),(0,a.kt)("p",null,"All these issues align with our project goals, which we've published in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/wiki/Roadmap"},"our roadmap"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Better Jest support")),(0,a.kt)("p",null,'With mutation switching in our backpack, implementing "perTest" coverage analysis for Jest is now on the table, allowing Stryker to run fewer tests in total. See ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/2316"},"#2316")," for more info."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hot reload")),(0,a.kt)("p",null,"Currently, Stryker will reload all code files between test runs (clearing them from the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#modules_require_cache"},"require.cache")," or doing a full page reload with Karma). However, thanks to mutation switching, the mutated code does not have to be reloaded. Instead, we can switch the active mutant and do another test run. Mocha will be the first test runner to receive this improvement. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/2413"},"#2413")," for more info."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In place mutation")),(0,a.kt)("p",null,"Stryker currently never mutates ",(0,a.kt)("em",{parentName:"p"},"your code"),' directly. Instead, it makes a copy of it in a "sandbox" directory, and it mutates your code there. The reason for this should be apparent; you don\'t want mutants to make there way into production.'),(0,a.kt)("p",null,"However, in some corner cases, the simple act of copying your code to a sandbox directory makes running the tests impossible. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/2163"},"#2163"),' for some examples. To truly make Stryker work for all JavaScript projects, we will need to allow for "in place" mutation. Don\'t worry, this will be optional, and we will make sure to let you know what Stryker is doing \ud83e\uddd0.'),(0,a.kt)("h2",{id:"-thank-you"},"\ud83c\udf89 Thank you"),(0,a.kt)("p",null,"Back in July, we released the first beta of Stryker 4. Since then, we got loads of responses resulting in the closing of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues?q=is%3Aissue+milestone%3A4.0+is%3Aclosed"},"more than 40 issues"),", some of which were pretty major \ud83d\ude05. We want to thank everyone who helped to make this release possible! In particular (in no specific order)"),(0,a.kt)("p",null,"\ud83c\udf39 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gramster"},"gramster"),(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udc90",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kmdrGroch"},"kmdrGroch"),(0,a.kt)("br",{parentName:"p"}),"\n","\ud83c\udf3c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Lakitna"},"Lakitna"),(0,a.kt)("br",{parentName:"p"}),"\n","\ud83c\udf3b",(0,a.kt)("a",{parentName:"p",href:"https://github.com/brodybits"},"brodybits"),(0,a.kt)("br",{parentName:"p"}),"\n","\ud83c\udf3a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Garethp"},"Garethp")),(0,a.kt)("p",null,"You guys are incredible!"),(0,a.kt)("p",null,"If you read through this article: thank you! You're awesome! Now stop reading and give Stryker 4 a try. And let us know what you think \ud83d\ude00."))}m.isMDXComponent=!0}}]);