"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[7830],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return k}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=u(r),k=n,b=h["".concat(p,".").concat(k)]||h[k]||c[k]||o;return r?a.createElement(b,s(s({ref:t},l),{},{components:r})):a.createElement(b,s({ref:t},l))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7186:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});r(7294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}const o={slug:"webpack-support",title:"Webpack support is here",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker-js"]},s=void 0,i={permalink:"/blog/webpack-support",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2018-01-26-webpack-support.md",source:"@site/blog/2018-01-26-webpack-support.md",title:"Webpack support is here",description:"Stryker now supports bundling your code using webpack before running your tests.",date:"2018-01-26T00:00:00.000Z",formattedDate:"January 26, 2018",tags:[{label:"stryker-js",permalink:"/blog/tags/stryker-js"}],readingTime:2.33,hasTruncateMarker:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],frontMatter:{slug:"webpack-support",title:"Webpack support is here",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker-js"]},prevItem:{title:"Get your mutation score badge now!",permalink:"/blog/get-your-mutation-score-badge-now"},nextItem:{title:"TypeScript coverage analysis support",permalink:"/blog/typescript-coverage-analysis-support"}},p={authorsImageUrls:[void 0]},u=[{value:"A bundle for each mutant?",id:"a-bundle-for-each-mutant",level:2},{value:"Webpack transpiler",id:"webpack-transpiler",level:2},{value:"Can I use...",id:"can-i-use",level:2},{value:"Angular?",id:"angular",level:3},{value:"React?",id:"react",level:3},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Special thanks",id:"special-thanks",level:2}],l={toc:u};function c({components:e,...t}){return(0,a.kt)("wrapper",n({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Stryker now supports bundling your code using webpack before running your tests.\nThe installation/upgrade scenario's in this blog post can be circumvented by using the ",(0,a.kt)("a",n({parentName:"p"},{href:"https://stryker-mutator.github.io/quickstart.html"}),"Quickstart")," if you don't already use Stryker in your project."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2237).Z,width:"280",height:"310"})),(0,a.kt)("h2",n({},{id:"a-bundle-for-each-mutant"}),"A bundle for each mutant?"),(0,a.kt)("p",null,"Ok. Stryker can mutate your code. We support both JavaScript and TypeScript.\nHowever, the tests of many web projects first need to be bundled before they can be loaded in the browser for testing.\nStryker ",(0,a.kt)("a",n({parentName:"p"},{href:"/blog/road-to-stryker-1-0#open-heart-surgery"}),"mutates your source files"),",\nrather than the resulting JS bundle. This means that you still need to tell Stryker how your bundle is created."),(0,a.kt)("h2",n({},{id:"webpack-transpiler"}),"Webpack transpiler"),(0,a.kt)("p",null,"Let's say we're using ",(0,a.kt)("a",n({parentName:"p"},{href:"https://webpack.js.org"}),"Webpack")," to create that bundle. Well sir, let me bring you up-to-speed. We have just\n",(0,a.kt)("a",n({parentName:"p"},{href:"https://www.npmjs.com/package/stryker-webpack-transpiler"}),"released the stryker-webpack-transpiler")," and with it, Stryker uses ",(0,a.kt)("em",{parentName:"p"},"your webpack configuration"),"\nto create the testing bundle."),(0,a.kt)("p",null,"To use the new Webpack transpiler, start by installing the package:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"npm install --save-dev stryker-webpack-transpiler\n")),(0,a.kt)("p",null,"And configure it in your stryker.conf.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-js"}),"transpilers: ['webpack'],\nwebpack: {\n    configFile: 'webpack.config.js', // Is your webpack config file somewhere else? Please specify it here.\n    silent: true // This removes the \"ProgressPlugin\" from your config before feeding it through Stryker\n},\n")),(0,a.kt)("p",null,"For more info, please see the ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-js/blob/master/packages/stryker-webpack-transpiler/CHANGELOG.md"}),"stryker-webpack-transpiler changelog"),"\nor take a look at the ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages/stryker-webpack-transpiler#readme"}),"readme")),(0,a.kt)("p",null,"Enjoy!"),(0,a.kt)("h2",n({},{id:"can-i-use"}),"Can I use..."),(0,a.kt)("h3",n({},{id:"angular"}),"Angular?"),(0,a.kt)("p",null,"With this new support for webpack, we now start to support ",(0,a.kt)("a",n({parentName:"p"},{href:"https://angular.io"}),"Angular")," projects!\nHowever, you still need to provide a webpack configuration to Stryker. If you're using the ",(0,a.kt)("a",n({parentName:"p"},{href:"https://npmjs.com/package/@angular/cli"}),"angular cli"),"\nyou probably don't have a ",(0,a.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file lying around. In that case, head on over to ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/nicojs/angular-stryker-example"}),"nicojs/angular-stryker-example"),"\nand take a look. We have tested it on small sized projects (< 100 tests). We would love your feedback if you're using it on larger projects."),(0,a.kt)("h3",n({},{id:"react"}),"React?"),(0,a.kt)("p",null,"Unfortunately, this release does not mean that we now support mutation testing on react projects, as they don't use webpack\nfor testing. Instead, you're probably using ",(0,a.kt)("a",n({parentName:"p"},{href:"https://facebook.github.io/jest"}),"Jest")," which is responsible for loading your tests\nin a nodejs environment (using ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/tmpvar/jsdom"}),"JSDom"),")."),(0,a.kt)("p",null,"However, we are working on first class support for any project using Jest, so you won't have to wait long."),(0,a.kt)("h2",n({},{id:"whats-next"}),"What's next?"),(0,a.kt)("p",null,"Webpack support is awesome, but performance does take a big hit if we need to bundle each mutant.\nHaving the coverage analysis can help a lot with that. As of yet, we don't support coverage analysis\nwhen using a transpiler. However, ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-js/pull/559"}),"PR 559")," looks promising\nand we'll be merging that into master in about a week or so."),(0,a.kt)("p",null,"We will also be working on React support with support for the Jest test runner. You can expect that in the next\ncouple of weeks as well."),(0,a.kt)("h2",n({},{id:"special-thanks"}),"Special thanks"),(0,a.kt)("p",null,"Special thanks go out to ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/Archcry"}),"@Archcry"),". He created the webpack plugin during his internship.\nGive him some love!"))}c.isMDXComponent=!0},2237:function(e,t,r){t.Z=r.p+"assets/images/love-webpack-d7d5f412f4176b65c19769941815b7c0.png"}}]);