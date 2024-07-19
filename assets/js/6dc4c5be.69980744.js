"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5932],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8279:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var a=n(3117),r=(n(7294),n(3905));const o={title:"Installation"},i=void 0,l={unversionedId:"fd_radio/ESX/installation",id:"fd_radio/ESX/installation",title:"Installation",description:"Please carefully read installation process, otherwise fd_radio resource will not work.",source:"@site/docs/fd_radio/ESX/installation.md",sourceDirName:"fd_radio/ESX",slug:"/fd_radio/ESX/installation",permalink:"/docs/fd_radio/ESX/installation",draft:!1,editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/fd_radio/ESX/installation.md",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"fd_radio",previous:{title:"Radio",permalink:"/docs/category/radio"},next:{title:"Installation",permalink:"/docs/fd_radio/QB/installation"}},d={},s=[{value:"Dependecies",id:"dependecies",level:2},{value:"ESX",id:"esx",level:2},{value:"Set correct framework",id:"set-correct-framework",level:3},{value:"Adjust config",id:"adjust-config",level:2},{value:"Optional",id:"optional",level:2},{value:"Items",id:"items",level:2},{value:"Single Item",id:"single-item",level:3},{value:"Multiple items",id:"multiple-items",level:3},{value:"Start",id:"start",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"Questions",id:"questions",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=u("Tabs"),p=u("TabItem"),m={toc:s},f="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please carefully read installation process, otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"fd_radio")," resource will not work.")),(0,r.kt)("h2",{id:"dependecies"},"Dependecies"),(0,r.kt)("p",null,"We've tried not to use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work, you'll need to install"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AvarianKnight/pma-voice"},"pma-voice")," ","[mandatory (main branch)]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/overextended/ox_lib"},"ox_lib")," ","[mandatory]")),(0,r.kt)("h2",{id:"esx"},"ESX"),(0,r.kt)("p",null,"Use a compatible version of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/esx-framework/esx-legacy"},"ESX Legacy")," (Should be compatible with any version). Resource was tested with most recent ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_recipes"},"ox_recipe")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/esx-framework/ESX-recipes"},"esx-recipe")," for txAdmin."),(0,r.kt)("h3",{id:"set-correct-framework"},"Set correct framework"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"shared/config.lua")," and set your framework."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"Config.core = 'esx' -- available: standalone, QB or ESX\n")),(0,r.kt)("h2",{id:"adjust-config"},"Adjust config"),(0,r.kt)("p",null,"Before starting, please adjust config values as you want. ",(0,r.kt)("a",{parentName:"p",href:"/docs/fd_radio/config"},"Config")),(0,r.kt)("h2",{id:"optional"},"Optional"),(0,r.kt)("p",null,"Check out optional stuff, which might make sense for your setup. ",(0,r.kt)("a",{parentName:"p",href:"/docs/fd_radio/optional"},"Optional link")),(0,r.kt)("h2",{id:"items"},"Items"),(0,r.kt)("h3",{id:"single-item"},"Single Item"),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(p,{value:"ox",label:"OX Inventory",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Add items to ",(0,r.kt)("inlineCode",{parentName:"p"},"ox_inventory/data/items.lua"),";"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"    ['radio'] = {\n        label = 'Radio',\n        weight = 200,\n        client = {\n            export = \"fd_radio.useRadio\",\n        }\n    },\n    ['radio_jammer'] = {\n        label = 'Jammer',\n        weight = 200,\n        client = {\n            export = \"fd_radio.useJammer\",\n        }\n    },\n    ['radio_antenna'] = {\n        label = \"Radio Antenna\",\n        weight = 200,\n    },\n")))),(0,r.kt)("h3",{id:"multiple-items"},"Multiple items"),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(p,{value:"ox",label:"OX Inventory",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Add items to ",(0,r.kt)("inlineCode",{parentName:"p"},"ox_inventory/data/items.lua"),";"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"    ['radio_default'] = {\n        label = 'Radio Black',\n        weight = 200,\n        client = {\n            export = \"fd_radio.useRadioDefault\",\n        }\n    },\n    ['radio_red'] = {\n        label = 'Radio Red',\n        weight = 200,\n        client = {\n            export = \"fd_radio.useRadioRed\",\n        }\n    },\n    ['radio_blue'] = {\n        label = 'Radio Blue',\n        weight = 200,\n        client = {\n            export = \"fd_radio.useRadioBlue\",\n        }\n    },\n    ['radio_green'] = {\n        label = 'Radio Green',\n        weight = 200,\n        client = {\n            export = \"fd_radio.useRadioGreen\",\n        }\n    },\n    ['radio_yellow'] = {\n        label = 'Radio Yellow',\n        weight = 200,\n        client = {\n            export = \"fd_radio.useRadioYellow\",\n        }\n    },\n    ['radio_white'] = {\n        label = 'Radio White',\n        weight = 200,\n        client = {\n            export = \"fd_radio.useRadioWhite\",\n        }\n    },\n\n    ['radio_jammer'] = {\n        label = 'Jammer',\n        weight = 200,\n        client = {\n            export = \"fd_radio.useJammer\",\n        }\n    },\n\n    ['radio_antenna'] = {\n        label = \"Radio Antenna\",\n        weight = 200,\n    },\n")))),(0,r.kt)("h2",{id:"start"},"Start"),(0,r.kt)("p",null,"Add"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ensure fd_radio\n")),(0,r.kt)("p",null,"to your server.cfg and if you did everything as described above, please start your server and enjoy your new radio!"),(0,r.kt)("h2",{id:"common-issues"},"Common Issues"),(0,r.kt)("h3",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you have an issue or questions, please visit our discord, and open a ticket."))}k.isMDXComponent=!0}}]);