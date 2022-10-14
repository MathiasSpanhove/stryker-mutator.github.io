"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[4664],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},936:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});n(7294);var a=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}const i={slug:"mutation-switching",title:"Mutation switching in Stryker4s",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker4s"]},r=void 0,s={permalink:"/blog/mutation-switching",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2018-10-06-mutation-switching.md",source:"@site/blog/2018-10-06-mutation-switching.md",title:"Mutation switching in Stryker4s",description:"Learn how Stryker4s uses mutation switching to improve performance.",date:"2018-10-06T00:00:00.000Z",formattedDate:"October 6, 2018",tags:[{label:"stryker4s",permalink:"/blog/tags/stryker-4-s"}],readingTime:5.5,hasTruncateMarker:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],frontMatter:{slug:"mutation-switching",title:"Mutation switching in Stryker4s",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker4s"]},prevItem:{title:"Announcing Stryker 0.34",permalink:"/blog/announcing-stryker-0-34"},nextItem:{title:"Introducing Stryker.NET and Stryker4s",permalink:"/blog/csharp-and-scala-support"}},l={authorsImageUrls:[void 0]},c=[{value:"Attempt one: Compiling each mutation",id:"attempt-one-compiling-each-mutation",level:2},{value:"Attempt two: Mutating bytecode",id:"attempt-two-mutating-bytecode",level:2},{value:"Solution: Mutation switching",id:"solution-mutation-switching",level:2},{value:"Top statements",id:"top-statements",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function m({components:e,...t}){return(0,a.kt)("wrapper",o({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Learn how Stryker4s uses mutation switching to improve performance."),(0,a.kt)("p",null,"We are very happy with Stryker's new friends! One of those new friends is Stryker4s(cala).\nScala developers can now use mutation testing to improve their tests!\nCreating a mutation testing framework for Scala comes with many challenges.\nOne of those challenges is the Scala compiler itself.\nWe all know it's not the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://scala-ci.typesafe.com/grafana/dashboard/db/scala-benchmark?from=1429139130109&to=1492531027936h&orgId=1&var-branch=2.11.x&var-branch=2.12.x&var-branch=2.13.x&var-source=scala&var-bench=HotScalacBenchmark.compile&var-host=scalabench@scalabench@"}),"fastest in its kind"),".\nOne of the main goals of Stryker is to be fast. This means we need to come up with an intelligent way to introduce the mutants into the source code."),(0,a.kt)("h2",o({},{id:"attempt-one-compiling-each-mutation"}),"Attempt one: Compiling each mutation"),(0,a.kt)("p",null,"One way of introducing mutants to a codebase is by mutating one statement, compile the code, run tests, gather the results and repeat.\nThis seems like a logical choice because it mimics the way a developer would go about it."),(0,a.kt)("p",null,"Let's look at an example."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-scala"}),"class Numbers {\n    def greaterThan(a: Int, b: Int): Boolean = {\n        a > b\n        // Mutant 1: a >= b\n        // Mutant 2: a < b\n        // Mutant 3: a == b\n    }\n}\n")),(0,a.kt)("p",null,"As you can see, there are three possible mutants:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},">")," to ",(0,a.kt)("inlineCode",{parentName:"li"},">=")),(0,a.kt)("li",{parentName:"ol"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},">")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"<")),(0,a.kt)("li",{parentName:"ol"},"Change ",(0,a.kt)("inlineCode",{parentName:"li"},">")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"=="))),(0,a.kt)("p",null,"If we apply the mutation one by one, we would need to compile the code base three times.\nIf we assume the compile time of this program is 10 seconds, we already have 30 seconds of compile time for one full mutation run.\nThis would quickly get out of hand when the codebase is bigger and generates more mutants."),(0,a.kt)("h2",o({},{id:"attempt-two-mutating-bytecode"}),"Attempt two: Mutating bytecode"),(0,a.kt)("p",null,"As you might know, Scala gets compiled to Java bytecode. This gives us an alternative way to introduce mutations in a codebase.\nWe would be able to mutate the bytecode directly, eliminating the need for recompiling."),(0,a.kt)("p",null,"The main challenge with this approach is that ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docs.scala-lang.org/overviews/core/binary-compatibility-of-scala-releases.html"}),"Scala doesn't guarantee the bytecode output for each version of the compiler")," (or even JDK version).\nEven the jump from Scala 2.12 to 2.13 produces different bytecode. This would make manipulating bytecode complicated, unpredictable and hard to maintain."),(0,a.kt)("p",null,"Furthermore, if you mutate the bytecode, it can be difficult to reproduce the exact Scala code that you changed.\nDetails, like the exact location, are not represented in bytecode.\nScala makes this extra challenging, as 1 ",(0,a.kt)("inlineCode",{parentName:"p"},".scala")," file can easily result in 100 ",(0,a.kt)("inlineCode",{parentName:"p"},".class")," files in bytecode."),(0,a.kt)("p",null,"For performance reasons, mutating bytecode might sound like a fast solution, but you would still need to load (or hot reload) the mutated class files\nfor each mutant."),(0,a.kt)("p",null,"There should be a better solution out there, right?"),(0,a.kt)("h2",o({},{id:"solution-mutation-switching"}),"Solution: Mutation switching"),(0,a.kt)("p",null,"Mutation switching to the rescue! So how is mutation switching both ",(0,a.kt)("em",{parentName:"p"},"faster")," and ",(0,a.kt)("em",{parentName:"p"},"more reliable"),' than compiling each mutation or mutating bytecode?\nThe steps are quite similar to "Compiling each mutant", but with some big differences:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"All mutants are identified for the whole codebase."),(0,a.kt)("li",{parentName:"ol"},"All mutants are applied to the codebase ",(0,a.kt)("strong",{parentName:"li"},"at the same time")," using a ",(0,a.kt)("a",o({parentName:"li"},{href:"https://docs.scala-lang.org/tour/pattern-matching.html"}),"Scala Pattern match"),"."),(0,a.kt)("li",{parentName:"ol"},"All mutants are tested one by one, with only ",(0,a.kt)("strong",{parentName:"li"},"one mutant active at a time"),", using an environment variable.")),(0,a.kt)("p",null,"Step 2 is where the magic happens. Let's take a look at the same code example as used previously, right after the mutations are applied."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-scala"}),'class Numbers {\n    def greaterThan(a: Int, b: Int): Boolean = {\n        sys.env.get("ACTIVE_MUTATION") match {\n            case Some("0") =>\n                a >= b\n            case Some("1") =>\n                a < b\n            case Some("2") =>\n                a == b\n            case _ =>\n                a > b\n        }\n    }\n}\n')),(0,a.kt)("p",null,"All possible mutations are implemented in the pattern match. An identifier is used to turn on/off, or ",(0,a.kt)("em",{parentName:"p"},"switch"),", specific mutations.\nThe default case will be used when none of the mutants are active. Now the code base only needs to be compiled once.\nThe extra time compilation takes because of its increased size is negligible compared to the overhead of compiling each mutant.\nFor example, if the compilation time for this code base\nwould be 15 seconds we will still gain 15 seconds compared to compiling each mutation."),(0,a.kt)("p",null,"We gain performance without losing flexibility. It's a win-win scenario."),(0,a.kt)("h2",o({},{id:"top-statements"}),"Top statements"),(0,a.kt)("p",null,"Mutation switching sure is great, but let's take a look at a more complex example."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-scala"}),"def isEven(number: Int): Boolean = number % 2 == 0\ndef isOdd(number: Int): Boolean = !isEven(number)\n\nval numbers: List[Int] = 1 to 100 toList\n\ndef filterOddAnd(specialNumber: Int): List[Int] = {\n  numbers\n    .filter(isOdd)\n    .filterNot(_.equals(specialNumber))\n}\n")),(0,a.kt)("p",null,"With this code base ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"filterNot")," could be mutated to their counterparts.\nThis would give us the following code base if we implement the pattern match at the direct position."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-scala"}),'def isEven(number: Int): Boolean = number % 2 == 0\ndef isOdd(number: Int): Boolean = !isEven(number)\n\nval numbers: List[Int] = 1 to 100 toList\n\ndef filterOddAnd(specialNumber: Int): List[Int] = {\n  numbers.(sys.env.get("ACTIVE_MUTATION") match {\n    case Some("0") => .filter(isOdd)\n    case _         => .filterNot(isOdd)\n  }).\n  (sys.env.get("ACTIVE_MUTATION") match {\n    case Some("1") =>  .filterNot(_.equals(specialNumber))\n    case _         =>  .filter(_.equals(specialNumber))\n  })\n}\n')),(0,a.kt)("p",null,"Because we wrapped the functions right on the spot we produced code that doesn't even compile!\nTo make the code compile we need to take a closer look at the abstract syntax tree.\nWe are searching for the parent statement in this abstract syntax tree, which is ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers")," in our case.\nIf we implement mutation switching using the parent statement, we can generate the following code."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-Scala"}),'def isEven(number: Int): Boolean = number % 2 == 0\ndef isOdd(number: Int): Boolean = !isEven(number)\n\nval numbers: List[Int] = 1 to 100 toList\n\ndef filterOddAnd(specialNumber: Int): List[Int] = {\n  sys.env.get("ACTIVE_MUTATION") match {\n    case Some("0") => numbers.filterNot(isOdd).filter(_.equals(specialNumber))\n    case Some("1") => numbers.filter(isOdd).filter(_.equals(specialNumber))\n    case _         => numbers.filter(isOdd).filterNot(_.equals(specialNumber))\n  }\n}\n')),(0,a.kt)("p",null,"This enables us to get clean, readable pattern matches and avoid compilation errors."),(0,a.kt)("h2",o({},{id:"whats-next"}),"What's next?"),(0,a.kt)("p",null,"With mutation switching in place, the road is clear for even bigger performance improvements. Right now, we're not\nkeeping the testing process alive. We simply run ",(0,a.kt)("inlineCode",{parentName:"p"},"sbt test")," with the correct mutant switched on.\nKeeping the test process alive and rerunning the tests after switching mutants is where we can really put the pedal to the metal!"),(0,a.kt)("p",null,"Interested to help? We're very much looking for contributions! Take a look at our ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker4s/issues"}),"issue tracker"),"\nor contact us on ",(0,a.kt)("a",o({parentName:"p"},{href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"}),"Slack"),"."),(0,a.kt)("h2",o({},{id:"conclusion"}),"Conclusion"),(0,a.kt)("p",null,"With the combination of mutation switching and traversing to the parent statements Stryker4s is able to apply mutations to the codebase\nin a clean and understandable fashion and keep the chances of compilation errors to a minimum.\nWe hope this blog gave some insight on mutation switching works and how Stryker4s uses this to its advantage. Happy mutating!"))}m.isMDXComponent=!0}}]);