"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[5282],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,y=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3001:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(7462),o=(r(7294),r(3905));const a={slug:"announcing-stryker-4-mutation-switching",title:"Announcing Stryker 4.0 - Mutation Switching",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i=void 0,u={permalink:"/blog/announcing-stryker-4-mutation-switching",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2020-10-07-announcing-stryker-4-mutation-switching.md",source:"@site/blog/2020-10-07-announcing-stryker-4-mutation-switching.md",title:"Announcing Stryker 4.0 - Mutation Switching",description:"We're proud to announce the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0.",date:"2020-10-07T00:00:00.000Z",formattedDate:"October 7, 2020",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:10.575,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],prevItem:{title:"Announcing StrykerJS 5.0 - Brave new Dimension",permalink:"/blog/announcing-stryker-js-5-brave-new-dimension.md"},nextItem:{title:"Announcing Stryker 4.0 Beta",permalink:"/blog/announcing-stryker-4-beta-mutation-switching"}},c={authorsImageUrls:[void 0]},s=[],l={toc:s};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're proud to announce the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0."),(0,o.kt)("p",null,"This release marks a fundamental shift in the way Stryker works internally. It now uses \"mutation switching\", which improves performance and usability, similar to how Stryker.NET and Stryker4s already work. This change, unfortunately, couldn't be done without breaking changes. See the breaking changes paragraph if you're interested."))}p.isMDXComponent=!0}}]);