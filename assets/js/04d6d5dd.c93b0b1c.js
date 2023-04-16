"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4082],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5773:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c}});var o=n(3117),r=(n(7294),n(3905));const a={title:"Installation"},l=void 0,i={unversionedId:"yacht/ESX/installation",id:"yacht/ESX/installation",title:"Installation",description:"Please carefully read installation process, otherwise fd_yacht resource will not work.",source:"@site/docs/yacht/ESX/installation.md",sourceDirName:"yacht/ESX",slug:"/yacht/ESX/installation",permalink:"/docs/yacht/ESX/installation",draft:!1,editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/yacht/ESX/installation.md",tags:[],version:"current",frontMatter:{title:"Installation"}},s={},c=[{value:"Dependecies",id:"dependecies",level:3},{value:"ESX",id:"esx",level:3},{value:"Set correct framework",id:"set-correct-framework",level:3},{value:"Items",id:"items",level:3},{value:"Loot",id:"loot",level:3},{value:"Start",id:"start",level:3},{value:"Common Issues",id:"common-issues",level:2},{value:"Questions",id:"questions",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please carefully read installation process, otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"fd_yacht")," resource will not work.")),(0,r.kt)("h3",{id:"dependecies"},"Dependecies"),(0,r.kt)("p",null,"We've tried not to use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work, you'll need to install"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overextended/qtarget"},"qtarget")," ","[mandatory]"," (ox_target is supported at this moment, if you know what you're doing, yacht heist is open source)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FelisDevelopment/fd_lib"},"fd_lib")," ","[mandatory]")),(0,r.kt)("h3",{id:"esx"},"ESX"),(0,r.kt)("p",null,"Use a compatible version of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/esx-framework/esx-legacy"},"ESX Legacy")," (1.6.0+). Resource was tested with most recent ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_recipes"},"ox_recipe")," for txAdmin."),(0,r.kt)("h3",{id:"set-correct-framework"},"Set correct framework"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"shared/config.lua")," and set your framework and target resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"Config.core = 'esx' -- available: qb or esx\nConfig.targetResource = 'qtarget' -- only qtarget and qb-target support for now\n")),(0,r.kt)("h3",{id:"items"},"Items"),(0,r.kt)("p",null,"To work, this resources requires few items to be added to your server. Since we wanted this resource to work with most of inventories, we've used old ESX methods for items, but depending on your inventory please add following items to where ever your items config is (item icons can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"items/esx")," directory):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"{\n    {\n        name = 'felispad',\n        label = 'FelisPad'\n    },\n    {\n        name = 'envelope_1',\n        label = 'Microchipped Envelope'\n    },\n    {\n        name = 'envelope_2',\n        label = 'Microchipped Envelope'\n    },\n    {\n        name = 'envelope_3',\n        label = 'Microchipped Envelope'\n    },\n    {\n        name = 'envelope_4',\n        label = 'Microchipped Envelope'\n    },\n    {\n        name = 'envelope_5',\n        label = 'Microchipped Envelope'\n    },\n    {\n        name = 'envelope_6',\n        label = 'Microchipped Envelope'\n    },\n    {\n        name = 'envelope_7',\n        label = 'Microchipped Envelope'\n    },\n    {\n        name = 'envelope_8',\n        label = 'Microchipped Envelope'\n    },\n    {\n        name = 'envelope_9',\n        label = 'Microchipped Envelope'\n    },\n    {\n        name = 'envelope_10',\n        label = 'Microchipped Envelope'\n    },\n    {\n        name = 'envelope_11',\n        label = 'Microchipped Envelope'\n    },\n    {\n        name = 'envelope_12',\n        label = 'Microchipped Envelope'\n    }\n}\n\n")),(0,r.kt)("h3",{id:"loot"},"Loot"),(0,r.kt)("p",null,"Make to configure your loot! Please take a look at ",(0,r.kt)("a",{parentName:"p",href:"/docs/yacht/loot"},"Add loot")," section."),(0,r.kt)("h3",{id:"start"},"Start"),(0,r.kt)("p",null,"Add"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ensure fd_yacht\n")),(0,r.kt)("p",null,"to your server.cfg and if you did everything as described above, please start your server and enjoy your new radio!"),(0,r.kt)("h2",{id:"common-issues"},"Common Issues"),(0,r.kt)("h3",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you have an issue or questions, please visit our discord, and open a ticket."))}d.isMDXComponent=!0}}]);