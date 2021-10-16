"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[260],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=l(r),h=o,d=c["".concat(u,".").concat(h)]||c[h]||m[h]||a;return r?n.createElement(d,s(s({ref:e},p),{},{components:r})):n.createElement(d,s({ref:e},p))}));function h(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,s=new Array(a);s[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3050:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return i},assets:function(){return u},toc:function(){return l},default:function(){return m}});var n=r(7462),o=(r(7294),r(3905));const a={slug:"stryker4s-0-1-0-released",title:"Stryker4s 0.1.0 released",author:"Hugo van Rijswijk",author_title:"Stryker4s Team",author_url:"https://github.com/hugo-vrijswijk",author_image_url:"https://avatars2.githubusercontent.com/u/10114577?s=460&u=51abfbf6e7bd33b38b998de62b0335b89d075a60&v=4",tags:["stryker4s"]},s=void 0,i={permalink:"/blog/stryker4s-0-1-0-released",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2018-12-25-stryker4s-0-1-0-released.md",source:"@site/blog/2018-12-25-stryker4s-0-1-0-released.md",title:"Stryker4s 0.1.0 released",description:"This is the first official release of Stryker4s! Bringing easy mutation testing to Scala sbt projects. And it comes with some great features.",date:"2018-12-25T00:00:00.000Z",formattedDate:"December 25, 2018",tags:[{label:"stryker4s",permalink:"/blog/tags/stryker-4-s"}],readingTime:2.55,truncated:!0,authors:[{name:"Hugo van Rijswijk",title:"Stryker4s Team",url:"https://github.com/hugo-vrijswijk",imageURL:"https://avatars2.githubusercontent.com/u/10114577?s=460&u=51abfbf6e7bd33b38b998de62b0335b89d075a60&v=4"}],prevItem:{title:"Announcing Stryker 1.0",permalink:"/blog/announcing-stryker-1-0"},nextItem:{title:"Announcing Stryker 0.34",permalink:"/blog/announcing-stryker-0-34"}},u={authorsImageUrls:[void 0]},l=[{value:"Sbt plugin",id:"sbt-plugin",children:[]},{value:"Other features",id:"other-features",children:[]},{value:"What&#39;s next",id:"whats-next",children:[]}],p={toc:l};function m({components:t,...e}){return(0,o.kt)("wrapper",(0,n.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is the first official release of Stryker4s! Bringing easy mutation testing to Scala sbt projects. And it comes with some great features."),(0,o.kt)("p",null,"It's taken a little longer than we maybe would've liked, but we are very proud of this first release. In this blog post we'll tell you about why running with the sbt plugin is a big improvement, and some of the features you can use today for Stryker4s. Although it's still possible to use the command-runner for non-sbt projects, we decided a sbt plugin was an important for the first release."),(0,o.kt)("h2",{id:"sbt-plugin"},"Sbt plugin"),(0,o.kt)("p",null,"The biggest thing in our first release is the addition of a plugin for sbt. With this plugin, adding Stryker4s is as easy as adding the following line to your ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'addSbtPlugin("io.stryker-mutator" % "sbt-stryker4s" % "0.1.0")\n')),(0,o.kt)("p",null,"Then just run ",(0,o.kt)("inlineCode",{parentName:"p"},"sbt stryker")," and you are good to go!"),(0,o.kt)("p",null,"Not only does this plugin make it a lot easier to add Stryker4s to your project, it also dramatically improves the speed compared to the old command-runner. The reason for this is that the command-runner would simply run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"sbt test")," for each mutant. This meant that sbt would have to start a new process every single time. If you have ever used sbt before, you probably know this can take a while."),(0,o.kt)("p",null,"With the new plugin we can hook into the sbt process and keep it alive. This means sbt only has to start once, and all we have to do is tell sbt to run tests for all the mutants we found. If you've used Stryker for JavaScript before, this may sound familiar. Adding to it, we don't even have to compile between mutant runs, which also gives a speed boost. You can read more about that in our ",(0,o.kt)("a",{parentName:"p",href:"/blog/2018-10-6/mutation-switching"},"last blog post about mutation switching"),"."),(0,o.kt)("p",null,"Big thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/scelestino"},"Scelestino")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Wmaarts"},"Wmaarts")," for the help on the plugin."),(0,o.kt)("h2",{id:"other-features"},"Other features"),(0,o.kt)("p",null,"Here are some other things we recently did to improve your mutation testing experience:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We already support the new categories of mutators that are now ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker4s/pull/115"},"standardized across Stryker versions"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-handbook/blob/master/mutator-types.md#stryker4s"},"Scala-specific function mutators")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker4s/blob/master/docs/CONFIGURATION.md#excluded-mutations"},"Excluding mutations")," you might not want to test"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker4s/blob/master/docs/CONFIGURATION.md#excluded-mutations"},"Setting a minimum mutation score")," threshold for your build.")),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("p",null,"We have a lot planned for the future of Stryker4s. We'll keep looking at ways to optimize the performance, and add new features. As well as sorting out some smaller bugs with the current plugin, such as providing proper support for multi-module projects (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker4s#multi-module-projects"},"although we have a workaround"),"). We also want to provide a Maven plugin to give Maven users the same benefits and ease of use. Some other things on the roadmap are the new cross-Stryker HTML dashboard, new mutators and focusing on providing a stable working plugin for many different types of projects."),(0,o.kt)("p",null,"So, whether you might have a quiet week at work, or want to get away from the family during Christmas dinner, why not try adding mutation testing to your Scala projects? Let us know how it goes \ud83c\udf84!"))}m.isMDXComponent=!0}}]);