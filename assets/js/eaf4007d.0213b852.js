"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[3486],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6667:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return a},toc:function(){return c},default:function(){return l}});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_label:"Versioning",title:"Versioning strategy",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/versioning.md",sidebar_position:4},s=void 0,a={unversionedId:"stryker4s/versioning",id:"stryker4s/versioning",isDocsHomePage:!1,title:"Versioning strategy",description:"This document describes how versioning is managed for the Stryker4s project.",source:"@site/docs/stryker4s/versioning.md",sourceDirName:"stryker4s",slug:"/stryker4s/versioning",permalink:"/docs/stryker4s/versioning",editUrl:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/versioning.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Versioning",title:"Versioning strategy",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/versioning.md",sidebar_position:4},sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/stryker4s/contributing"}},c=[{value:"The strategy",id:"the-strategy",children:[]},{value:"Versioning",id:"versioning",children:[]}],u={toc:c};function l({components:e,...t}){return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how versioning is managed for the Stryker4s project."),(0,i.kt)("h2",{id:"the-strategy"},"The strategy"),(0,i.kt)("p",null,"We choose to have one version for the complete project. The main reason for this is because Stryker4s\nwill mainly be used as a plugin for your specific used build tool. When using one specific version\nwe will be able to make changes in the core module and release everything at once. This also makes it\neasier for us to avoid backward compatibility and versions conflict issues which would be very hard to test."),(0,i.kt)("h2",{id:"versioning"},"Versioning"),(0,i.kt)("p",null,"For the actual versioning, we will be applying the standard semver guidelines.\nDon't know the semver guidelines? You can find information about it ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"here"),"."))}l.isMDXComponent=!0}}]);