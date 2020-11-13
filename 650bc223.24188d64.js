(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(173)),o={title:"Plugins",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/api/plugins.md"},l={unversionedId:"stryker/api/plugins",id:"stryker/api/plugins",isDocsHomePage:!1,title:"Plugins",description:"You can extend Stryker with 6 plugin kinds:",source:"@site/docs/stryker/api/plugins.md",slug:"/stryker/api/plugins",permalink:"/docs/stryker/api/plugins",editUrl:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/api/plugins.md",version:"current"},c=[{value:"Creating a plugin",id:"creating-a-plugin",children:[]},{value:"Declaring your plugin",id:"declaring-your-plugin",children:[]},{value:"Dependency injection",id:"dependency-injection",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can extend Stryker with 6 plugin kinds:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export enum PluginKind {\n  ConfigEditor = 'ConfigEditor',\n  TestRunner = 'TestRunner',\n  TestFramework = 'TestFramework',\n  Transpiler = 'Transpiler',\n  Mutator = 'Mutator',\n  Reporter = 'Reporter',\n}\n")),Object(i.b)("p",null,"They are loaded using the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker/tree/master/packages/core#plugins-string"}),Object(i.b)("inlineCode",{parentName:"a"},"plugins")," configuration option")),Object(i.b)("p",null,"Each plugin has it's own job to do. For inspiration, check out the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker/tree/master/packages"}),"stryker monorepo"),"."),Object(i.b)("h2",{id:"creating-a-plugin"},"Creating a plugin"),Object(i.b)("p",null,"Creating plugins is best done with typescript, as that will help you a lot with type safety.\nWe provide the ",Object(i.b)("inlineCode",{parentName:"p"},"@stryker-mutator/api")," dependency on the types and basic helper functionality. Install it with: ",Object(i.b)("inlineCode",{parentName:"p"},"npm install @stryker-mutator/api"),"."),Object(i.b)("p",null,"Next, you need to create a class that ",Object(i.b)("em",{parentName:"p"},"is the actual plugin"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { Checker } from '@stryker-mutator/api/check';\nimport { File, StrykerOptions } from '@stryker-mutator/api/core';\n\nclass FooTranspiler implements Transpiler {\n  public transpile(files: ReadonlyArray<File>): Promise<ReadonlyArray<File>> {\n    // TODO: implement\n  }\n}\n")),Object(i.b)("p",null,"In this example, a Transpiler plugin is constructed. Each plugin kind has it's own interface, so it's easy to create."),Object(i.b)("p",null,"After that, you're ready to declare your plugin."),Object(i.b)("h2",{id:"declaring-your-plugin"},"Declaring your plugin"),Object(i.b)("p",null,"You can either declare it as a factory method or a class."),Object(i.b)("p",null,"A class example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import HtmlReporter from './HtmlReporter';\nimport { PluginKind, declareClassPlugin } from '@stryker-mutator/api/plugin';\n\nexport const strykerPlugins = [declareClassPlugin(PluginKind.Reporter, 'html', HtmlReporter)];\n")),Object(i.b)("p",null,"A factory method example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { declareFactoryPlugin, PluginKind } from '@stryker-mutator/api/plugin';\nimport { babelTranspilerFactory } from './BabelTranspiler';\n\nexport const strykerPlugins = [declareFactoryPlugin(PluginKind.Transpiler, 'babel', babelTranspilerFactory)];\n")),Object(i.b)("h2",{id:"dependency-injection"},"Dependency injection"),Object(i.b)("p",null,"Stryker uses ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nicojs/typed-inject#readme"}),"typed-inject")," as a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/@jansennico/advanced-typescript-type-safe-dependency-injection-873426e2cc96"}),"dependency injection framework"),".\nYou can use it as well in your plugin."),Object(i.b)("p",null,"See this example below. Here, a ",Object(i.b)("inlineCode",{parentName:"p"},"Logger"),", ",Object(i.b)("inlineCode",{parentName:"p"},"StrykerOptions")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"produceSourceMaps")," boolean is injected."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { Transpiler } from '@stryker-mutator/api/transpile';\nimport { File, StrykerOptions } from '@stryker-mutator/api/core';\nimport { tokens, commonTokens } from '@stryker-mutator/api/plugin';\n\nclass PassThroughTranspiler implements Transpiler {\n  public static inject = tokens(commonTokens.options, commonTokens.produceSourceMaps);\n  public constructor(private log: Logger, options: StrykerOptions, produceSourceMaps: boolean) {\n\n  public transpile(files: ReadonlyArray<File>): Promise<ReadonlyArray<File>> {\n    this.log.info('called with %s', files);\n    return files;\n  }\n}\n")),Object(i.b)("p",null,"This is type-safe. When you declare your plugin, TypedInject will validate that you don't inject something that cannot be resolved at runtime."),Object(i.b)("h2",{id:"whats-next"},"What's next?"),Object(i.b)("p",null,"If you need some help, please let us know on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"}),"Slack"),"."))}s.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);