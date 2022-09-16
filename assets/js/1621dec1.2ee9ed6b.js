"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3865],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=m(t),p=o,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var m=2;m<i;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2411:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return m},toc:function(){return u}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),l=["components"],r={title:"Add loot"},s=void 0,m={unversionedId:"yacht/loot",id:"yacht/loot",title:"Add loot",description:"Config",source:"@site/docs/yacht/loot.md",sourceDirName:"yacht",slug:"/yacht/loot",permalink:"/docs/yacht/loot",editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/yacht/loot.md",tags:[],version:"current",frontMatter:{title:"Add loot"},sidebar:"yacht",previous:{title:"Getting started",permalink:"/docs/yacht/"}},c={},u=[{value:"Config",id:"config",level:3},{value:"Add item which will be given all the time.",id:"add-item-which-will-be-given-all-the-time",level:3},{value:"Add item which has a chance.",id:"add-item-which-has-a-chance",level:3}],d={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"config"},"Config"),(0,i.kt)("p",null,"Basically, adding new loot is pretty easy. There's 3 safes, which can have different loot with chances, or items which will be given everytime.\nPlease take a look in ",(0,i.kt)("inlineCode",{parentName:"p"},"shared/config.lua")," at ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.loot"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Config.loot = {\n    ['safe_1'] = {\n        {\n            ['item'] = 'money',\n            ['amount'] = { 10000, 20000 } -- used in math.random\n        },\n        {\n            ['chances'] = { 1, 1 },\n            ['lucky'] = 1, -- if number is equal to the one from randomized from 'changes'\n            ['item'] = 'goldbar',\n            ['amount'] = { 1, 2 } -- used in math.random\n        }\n    },\n    ['safe_2'] = {\n        {\n            ['chances'] = { 1, 1 },\n            ['lucky'] = 1, -- if number is equal to the one from randomized from 'changes'\n            ['item'] = 'goldbar',\n            ['amount'] = { 1, 2 } -- used in math.random\n        }\n    },\n    ['safe_3'] = {\n        {\n            ['chances'] = { 1, 1 },\n            ['lucky'] = 1, -- if number is equal to the one from randomized from 'changes'\n            ['item'] = 'goldbar',\n            ['amount'] = { 1, 2 } -- used in math.random\n        }\n    },\n}\n")),(0,i.kt)("p",null,"As you can see, there's couple type of items there. Let me explain a bit more."),(0,i.kt)("h3",{id:"add-item-which-will-be-given-all-the-time"},"Add item which will be given all the time."),(0,i.kt)("p",null,"If you want to add an item which will be given all the time, you need to add a simple table without any ",(0,i.kt)("inlineCode",{parentName:"p"},"chances"),". In this example we'll add item ",(0,i.kt)("inlineCode",{parentName:"p"},"bandage")," which will be given every time user loots safe. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"{\n    ['item'] = 'bandage', -- item name\n    ['amount'] = { 1, 5 } -- amount will always be randomised, so please use two values, if you want hardcoded amount, please use same number in both values\n}\n")),(0,i.kt)("p",null,"After item is formatted, please add it to ",(0,i.kt)("inlineCode",{parentName:"p"},"safe_1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"safe_2")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"safe_3"),". In this example we'll add to ",(0,i.kt)("inlineCode",{parentName:"p"},"safe_1"),". So final config will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Config.loot = {\n    ['safe_1'] = {\n        {\n            ['item'] = 'money',\n            ['amount'] = { 10000, 20000 }\n        },\n        {\n            ['item'] = 'bandage',\n            ['amount'] = { 1, 5 } -- amount will always be randomised, so please two values, if you want hardcoded amount, please use same number every time\n        },\n        {\n            ['chances'] = { 1, 1 },\n            ['lucky'] = 1,\n            ['item'] = 'goldbar',\n            ['amount'] = { 1, 2 }\n        }\n    },\n    ['safe_2'] = {\n        {\n            ['chances'] = { 1, 1 },\n            ['lucky'] = 1,\n            ['item'] = 'goldbar',\n            ['amount'] = { 1, 2 }\n        }\n    },\n    ['safe_3'] = {\n        {\n            ['chances'] = { 1, 1 },\n            ['lucky'] = 1,\n            ['item'] = 'goldbar',\n            ['amount'] = { 1, 2 }\n        }\n    },\n}\n")),(0,i.kt)("h3",{id:"add-item-which-has-a-chance"},"Add item which has a chance."),(0,i.kt)("p",null,"If you want to add an item which has a chance to be given, you need to add a simple table with ",(0,i.kt)("inlineCode",{parentName:"p"},"chances")," key. In this example we'll add item ",(0,i.kt)("inlineCode",{parentName:"p"},"rolex")," which will be given if user is lucky. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"{\n    {\n        ['chances'] = { 1, 3 }, -- math.radom will be used with these values\n        ['lucky'] = 1, -- if this number is equal to the one randomized from 'changes'\n        ['item'] = 'rolex', -- item name\n        ['amount'] = { 1, 2 } -- amount will always be randomised, so please use two values, if you want hardcoded amount, please use same number in both values\n    }\n}\n")),(0,i.kt)("p",null,"After item is formatted, please add it to ",(0,i.kt)("inlineCode",{parentName:"p"},"safe_1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"safe_2")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"safe_3"),". In this example we'll add to ",(0,i.kt)("inlineCode",{parentName:"p"},"safe_2"),". So final config will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Config.loot = {\n    ['safe_1'] = {\n        {\n            ['item'] = 'money',\n            ['amount'] = { 10000, 20000 }\n        },\n        {\n            ['chances'] = { 1, 1 },\n            ['lucky'] = 1,\n            ['item'] = 'goldbar',\n            ['amount'] = { 1, 2 }\n        }\n    },\n    ['safe_2'] = {\n        {\n            ['chances'] = { 1, 1 },\n            ['lucky'] = 1,\n            ['item'] = 'goldbar',\n            ['amount'] = { 1, 2 }\n        },\n        {\n            ['chances'] = { 1, 3 }, -- math.radom will be used with these values\n            ['lucky'] = 1, -- if this number is equal to the one randomized from 'changes'\n            ['item'] = 'rolex',\n            ['amount'] = { 1, 2 } -- amount will always be randomised, so please use two values, if you want hardcoded amount, please use same number in both values\n        }\n    },\n    ['safe_3'] = {\n        {\n            ['chances'] = { 1, 1 },\n            ['lucky'] = 1,\n            ['item'] = 'goldbar',\n            ['amount'] = { 1, 2 }\n        }\n    },\n}\n")))}p.isMDXComponent=!0}}]);