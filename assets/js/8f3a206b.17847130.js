"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[1067],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),f=s(r),m=a,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(y,i(i({ref:e},l),{},{components:r})):n.createElement(y,i({ref:e},l))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1467:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(7462),a=(r(7294),r(3905));const o={slug:"announcing-stryker-4-beta-mutation-switching",title:"Announcing Stryker 4.0 Beta",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i=void 0,u={permalink:"/blog/announcing-stryker-4-beta-mutation-switching",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2020-07-13-announcing-stryker-4-beta-mutation-switching.md",source:"@site/blog/2020-07-13-announcing-stryker-4-beta-mutation-switching.md",title:"Announcing Stryker 4.0 Beta",description:"We're excited to announce the beta of the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0.",date:"2020-07-13T00:00:00.000Z",formattedDate:"July 13, 2020",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:6.36,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],prevItem:{title:"Announcing Stryker 4.0 - Mutation Switching",permalink:"/blog/announcing-stryker-4-mutation-switching"},nextItem:{title:"Integrating Stryker.NET in your azure pipelines",permalink:"/blog/azure-pipelines-integration"}},c={authorsImageUrls:[void 0]},s=[],l={toc:s};function p({components:t,...e}){return(0,a.kt)("wrapper",(0,n.Z)({},l,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're excited to announce the beta of the next major release of the Stryker mutation testing framework for JavaScript and friends: Stryker 4.0."),(0,a.kt)("p",null,'This beta is a huge milestone because it means a fundamental shift in the way Stryker works internally. It now uses "Mutation switching", a technique that can improve performance.'))}p.isMDXComponent=!0}}]);