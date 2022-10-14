"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[2015],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=a,k=m["".concat(u,".").concat(h)]||m[h]||c[h]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});n(7294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const o={slug:"announcing-stryker-0-34",title:"Announcing Stryker 0.34",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker-js"]},i=void 0,s={permalink:"/blog/announcing-stryker-0-34",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2018-12-24-announcing-stryker-0-34.md",source:"@site/blog/2018-12-24-announcing-stryker-0-34.md",title:"Announcing Stryker 0.34",description:"Stryker 0.34 is here. This new version comes with features to help you get started. It's never been this easy to mutation test your JS project!",date:"2018-12-24T00:00:00.000Z",formattedDate:"December 24, 2018",tags:[{label:"stryker-js",permalink:"/blog/tags/stryker-js"}],readingTime:3.985,hasTruncateMarker:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],frontMatter:{slug:"announcing-stryker-0-34",title:"Announcing Stryker 0.34",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker-js"]},prevItem:{title:"Stryker4s 0.1.0 released",permalink:"/blog/stryker4s-0-1-0-released"},nextItem:{title:"Mutation switching in Stryker4s",permalink:"/blog/mutation-switching"}},u={authorsImageUrls:[void 0]},l=[{value:"Command test runner",id:"command-test-runner",level:2},{value:"Zero configuration",id:"zero-configuration",level:2},{value:"Init presets",id:"init-presets",level:2},{value:"Web component tester plugin",id:"web-component-tester-plugin",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:l};function c({components:e,...t}){return(0,r.kt)("wrapper",a({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Stryker 0.34 is here. This new version comes with features to help you get started. It's never been this easy to mutation test your JS project!"),(0,r.kt)("p",null,"Install Stryker via the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"npm i stryker stryker-api --save-dev\n")),(0,r.kt)("p",null,"Or run ",(0,r.kt)("inlineCode",{parentName:"p"},"stryker init")," in the root of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"npx stryker init\n")),(0,r.kt)("p",null,"Some features we want to talk about:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"#command-test-runner"}),"Command test runner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"#zero-configuration"}),"Zero configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"#init-presets"}),"Init presets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"#web-component-tester-test-runner-plugin"}),"Web component tester test runner plugin"))),(0,r.kt)("h2",a({},{id:"command-test-runner"}),"Command test runner"),(0,r.kt)("p",null,"Stryker always was and always will be test runner agnostic. It doesn't care which test runner you use.\nHowever, it always required you to install a test runner plugin.\nAre you using Jest? Install the 'stryker-jest-runner'. Want to use mocha? Then the 'stryker-mocha-runner' is just what you need.\nThis works great if the test runner of choice is supported, but what do you do when your test runner isn't supported?\nLike ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-js/issues/243"}),"Ava.js")," or ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-js/issues/325"}),"node-tap"),"\nor ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-js/issues/430"}),"Intern")," or\nmaybe you have a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test")," command. This is why we've added the ",(0,r.kt)("inlineCode",{parentName:"p"},"'command'")," test runner."),(0,r.kt)("p",null,"Configure it in your stryker configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"// stryker.conf.js\n{\n    testRunner: 'command',\n    // Or leave out testRunner, 'command' is the default test runner\n    commandRunner: {\n        command: 'npm run mocha' // optionally choose a different command to run\n    }\n}\n")),(0,r.kt)("p",null,"Stryker ships with the command test runner, so it doesn't need additional plugins. The command test runner will simply run your ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test")," script.\nIf the exit code is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", the tests succeeded. If not, they failed."),(0,r.kt)("p",null,"Stryker is limited in the ways it can optimize for performance. For example, it starts a fresh node process for each test run.\nSo if your test runner is supported via a test runner plugin, that would still be the way to go."),(0,r.kt)("p",null,"The command test runner runs ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test")," by default. You can configure a different command with the ",(0,r.kt)("inlineCode",{parentName:"p"},"commandRunner")," configuration key."),(0,r.kt)("p",null,"Special thanks to ",(0,r.kt)("a",a({parentName:"p"},{href:"https://twitter.com/DiegoRBaquero"}),"Diego R.B.")," for inspiring us to implement this."),(0,r.kt)("h2",a({},{id:"zero-configuration"}),"Zero configuration"),(0,r.kt)("p",null,"Stryker now chooses sensible defaults for all settings. Meaning that you can now run Stryker without any configuration.\nIt will look for ","*",".js files to mutate in your ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," directories (excluding obvious test files, like app.spec.js).\nCoverage analysis will be turned off and the ",(0,r.kt)("a",a({parentName:"p"},{href:"#command-test-runner"}),"command test runner")," is used."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"npm install --save-dev stryker stryker-api\nnpx stryker run\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The default mutator Stryker uses will still be the deprecated ",(0,r.kt)("inlineCode",{parentName:"p"},"es5")," mutator (comes with Stryker). In time, we'll be migrating this to\nuse the ",(0,r.kt)("inlineCode",{parentName:"p"},"'javascript'")," mutator (supporting ESNext)."),(0,r.kt)("p",null,"With these defaults in place, it is now also easy to run Stryker without a configuration file if you want just one or two config options\nto change. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"npx stryker run --testRunner mocha --mutator javascript\n")),(0,r.kt)("p",null,"Again, special thanks to ",(0,r.kt)("a",a({parentName:"p"},{href:"https://twitter.com/DiegoRBaquero"}),"Diego R.B.")," for inspiring us to implement this."),(0,r.kt)("p",null,"With this feature in place, Stryker is now effectively a drop in replacement for ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/TheSoftwareDesignLab/mutode"}),"mutode"),"."),(0,r.kt)("h2",a({},{id:"init-presets"}),"Init presets"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"stryker init")," (either using the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-cli"}),"stryker-cli"),", or using ",(0,r.kt)("inlineCode",{parentName:"p"},"npx stryker init"),')\nyou can initialize Stryker in your repository. It asks questions via a questionnaire, like "Which test runner do you want to use?" and\n"Which test framework do you want to use?". Sometimes you might not know the answer to those questions. It also might take a lot more\nconfiguration to get you started. This is why we added a ',(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-handbook/tree/master/stryker/guides"}),"guides section to the stryker handbook"),".\nWe've now integrated those into the ",(0,r.kt)("inlineCode",{parentName:"p"},"stryker init")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"$ stryker init\n? Are you using one of these frameworks? Then select a preset configuration. (Use arrow keys)\n> angular-cli\nreact\nvueJs\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nNone/other\n")),(0,r.kt)("p",null,"Choosing for a preset immediately gets you started! It creates the configuration file and installs the correct plugins.\nChoosing ",(0,r.kt)("inlineCode",{parentName:"p"},"None/other")," here will still take you to the normal questionnaire."),(0,r.kt)("p",null,"Special thanks to ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Wmaarts"}),"wmaarts")," for adding this feature."),(0,r.kt)("h2",a({},{id:"web-component-tester-plugin"}),"Web component tester plugin"),(0,r.kt)("p",null,"With this release of Stryker, we've also released version 0.1.0 of the stryker-wct-runner. Install it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"$ npm install --save-dev stryker-wct-runner\n")),(0,r.kt)("p",null,"Configure it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"{\n  testRunner: 'wct';\n}\n")),(0,r.kt)("p",null,"With this plugin, we now support ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.polymer-project.org/"}),"Polymer")," cli projects.\nThe ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/web-component-tester"}),"web-component-tester")," runs your tests in an actual browser.\nHowever, it doesn't support any of the coverage analysis performance features for now. If you want those to be supported,\nplease open an issue. You're also welcome to take a look at the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Polymer/tools/issues/created_by/nicojs"}),"issues we've opened at Polymer side"),".\nAny help there is really appreciated."),(0,r.kt)("h2",a({},{id:"whats-next"}),"What's next?"),(0,r.kt)("p",null,"We're still focussing on getting v1 out of the door. We're reasonably certain it will happen in Q1 of next year.\nV1 will mostly be removing deprecated features. We'll also introduce a more predictable release schedule with\nstrict ",(0,r.kt)("a",a({parentName:"p"},{href:"https://semver.org/spec/v2.0.0.html"}),"Semantic Versioning")," policies. Stay tuned."),(0,r.kt)("p",null,"Input on these new features or the v1 preparations are welcome!"))}c.isMDXComponent=!0}}]);