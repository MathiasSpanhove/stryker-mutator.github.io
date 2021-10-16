"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[1618],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(r),c=a,d=k["".concat(s,".").concat(c)]||k[c]||u[c]||i;return r?n.createElement(d,l(l({ref:t},m),{},{components:r})):n.createElement(d,l({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3621:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return o},assets:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(7462),a=(r(7294),r(3905));const i={slug:"announcing-stryker-1-0",title:"Announcing Stryker 1.0",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},l=void 0,o={permalink:"/blog/announcing-stryker-1-0",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2019-02-13-announcing-stryker-1-0.md",source:"@site/blog/2019-02-13-announcing-stryker-1-0.md",title:"Announcing Stryker 1.0",description:"Stryker 1.0 is here! This is an important milestone for mutation testing in JavaScript and TypeScript.",date:"2019-02-13T00:00:00.000Z",formattedDate:"February 13, 2019",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:3.19,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],prevItem:{title:"One mutation testing HTML report",permalink:"/blog/one-mutation-testing-html-report"},nextItem:{title:"Stryker4s 0.1.0 released",permalink:"/blog/stryker4s-0-1-0-released"}},s={authorsImageUrls:[void 0]},p=[{value:"What&#39;s new",id:"whats-new",children:[]},{value:"Migrating from Stryker 0.x",id:"migrating-from-stryker-0x",children:[]},{value:"Release cycle",id:"release-cycle",children:[]},{value:"Release schedule",id:"release-schedule",children:[]}],m={toc:p};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Stryker 1.0 is here! This is an important milestone for mutation testing in JavaScript and TypeScript."),(0,a.kt)("p",null,"If you\u2019re unfamiliar with Stryker and mutation testing, now is the perfect time to try it out!\nWe've updated ",(0,a.kt)("a",{parentName:"p",href:"/stryker/quickstart"},"our quickstart"),", so go ahead and start using Stryker today.\nStryker can help you to improve your test quality by inserting bugs in your code and validating\nthat your tests can find them. The output is a comprehensive report telling you exactly what your unit tests missed."),(0,a.kt)("h2",{id:"whats-new"},"What's new"),(0,a.kt)("p",null,"Here you find a list of all the new features in Stryker 1.0 (alphabetical order):"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4669).Z}),"\n",(0,a.kt)("em",{parentName:"p"},"Nothing to see here")),(0,a.kt)("p",null,"That's right! We chose to not introduce new features. Instead, we've ",(0,a.kt)("em",{parentName:"p"},"removed all deprecated functionality"),".\nAlso, we've renamed all packages to be part of the @stryker-mutator ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/orgs/"},"organization on NPM"),"."),(0,a.kt)("h2",{id:"migrating-from-stryker-0x"},"Migrating from Stryker 0.x"),(0,a.kt)("p",null,"Please use this migration guide to update your older Stryker version. If you're feeling adventurous \ud83e\udd20\ud83d\udc0a, you can skip to step 3."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Make sure you're on the latest version of 0.x")),(0,a.kt)("p",{parentName:"li"},"Please make sure you're on the latest 0.x version first. Here is a list of all the latest versions:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grunt-stryker@0.13.17")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-api@0.24.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-babel-transpiler@0.10.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-html-reporter@0.18.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-jasmine-runner@0.4.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-jasmine@0.12.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-javascript-mutator@0.14.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-jest-runner@1.4.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-karma-runner@0.24.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-mocha-framework@0.15.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-mocha-runner@0.17.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/test-helpers@0.1.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-typescript@0.18.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-vue-mutator@0.4.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-wct-runner@0.3.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-webpack-transpiler@0.9.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker@0.35.1"))),(0,a.kt)("p",{parentName:"li"},"First update them in your package.json file, next use ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn install"),") to install the versions.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Fix all deprecation warnings")),(0,a.kt)("p",{parentName:"li"},"If you're on the latest 0.x release, run ",(0,a.kt)("inlineCode",{parentName:"p"},"npx stryker run")," and fix any deprecation warnings that are logged.\nIf Stryker runs without deprecation warnings, you're ready to upgrade")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Update your global stryker-cli")),(0,a.kt)("p",{parentName:"li"},"If you've installed the ",(0,a.kt)("inlineCode",{parentName:"p"},"stryker-cli"),", please update that one as well: ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i -g stryker-cli"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Upgrade your dependencies")),(0,a.kt)("p",{parentName:"li"},"Update your package.json file."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/core")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-api")," \u27a1 ",(0,a.kt)("em",{parentName:"li"},"none, this can be removed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-babel-transpiler")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/babel-transpiler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grunt-stryker")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/grunt-stryker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-html-reporter")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/html-reporter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-jasmine")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/jasmine-framework")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-jasmine-runner")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/jasmine-runner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-javascript-mutator")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/javascript-mutator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-jest-runner")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/jest-runner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-karma-runner")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/karma-runner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-mocha-framework")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/mocha-framework")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-mocha-runner")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/mocha-runner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-mutator-specification")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/mutator-specification")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-test-helpers")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/test-helpers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-typescript")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/typescript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-util")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/util")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-vue-mutator")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/vue-mutator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-wct-runner")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/wct-runner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stryker-webpack-transpiler")," \u27a1 ",(0,a.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/webpack-transpiler"))),(0,a.kt)("p",{parentName:"li"},"The versioning of these dependencies start at 1.0.0, so feel free to use ",(0,a.kt)("inlineCode",{parentName:"p"},"^1.0.0")," to specify the version."),(0,a.kt)("p",{parentName:"li"},"After updating your package.json, you'll need to run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn install"),") once more.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Take it for a spin")),(0,a.kt)("p",{parentName:"li"},"Stryker should now work as expected. Try it out with: ",(0,a.kt)("inlineCode",{parentName:"p"},"npx stryker run"),"."))),(0,a.kt)("h2",{id:"release-cycle"},"Release cycle"),(0,a.kt)("p",null,"From now on we'll adhere to strict ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"semantic versioning"),", or semver for short.\nThis means that it's easy to distinguish between bug fixes, new features or breaking changes just\nby looking at the version number."),(0,a.kt)("p",null,"Futhermore, we've decided to use ",(0,a.kt)("em",{parentName:"p"},"fixed versioning")," for our packages, meaning that all ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/*")," packages\nwill ",(0,a.kt)("em",{parentName:"p"},"have the same version number"),". For example, if your local ",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/core")," version is ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0"),", your\n",(0,a.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/html-reporter")," should also be at that exact version. This makes maintaining your Stryker dependencies a breeze."),(0,a.kt)("p",null,"This is comparable to how Angular or React do their versioning."),(0,a.kt)("h2",{id:"release-schedule"},"Release schedule"),(0,a.kt)("p",null,"We'll be releasing about as often as we were doing. The key difference is that we'll be extra focused on\nsemver. Since we will be dropping support for old NodeJS versions as soon as\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release#release-schedule"},"it reaches end-of-life"),",\nexpect ",(0,a.kt)("em",{parentName:"p"},"at least")," one major release a year, (however, we might do more major releases).\nSo you can expect a v2 release around April 30th, since we'll be dropping Node.JS 6 support at that time\n(the best birthday gift for me each year \ud83c\udf81)"),(0,a.kt)("p",null,"We'll also keep a healthy deprecation policy, making sure that deprecated features remain in tact for at least one major release."))}u.isMDXComponent=!0},4669:function(e,t,r){t.Z=r.p+"assets/images/tumble-weed-b22dfe541587b8f11ba104d153ad2307.jpg"}}]);