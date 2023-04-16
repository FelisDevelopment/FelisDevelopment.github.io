"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7173],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const a={title:"Installation"},i=void 0,l={unversionedId:"fd_radio/Standalone/installation",id:"fd_radio/Standalone/installation",title:"Installation",description:"Please carefully read installation process, otherwise fd_radio resource will not work.",source:"@site/docs/fd_radio/Standalone/installation.md",sourceDirName:"fd_radio/Standalone",slug:"/fd_radio/Standalone/installation",permalink:"/docs/fd_radio/Standalone/installation",draft:!1,editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/fd_radio/Standalone/installation.md",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"fd_radio",previous:{title:"Ace Permissions",permalink:"/docs/fd_radio/Standalone/ace"},next:{title:"Config",permalink:"/docs/fd_radio/config"}},s={},c=[{value:"Dependecies",id:"dependecies",level:3},{value:"Set correct framework",id:"set-correct-framework",level:3},{value:"Adjust config",id:"adjust-config",level:3},{value:"Optional",id:"optional",level:3},{value:"Start",id:"start",level:3},{value:"Common Issues",id:"common-issues",level:2},{value:"Questions",id:"questions",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please carefully read installation process, otherwise ",(0,o.kt)("inlineCode",{parentName:"p"},"fd_radio")," resource will not work.")),(0,o.kt)("h3",{id:"dependecies"},"Dependecies"),(0,o.kt)("p",null,"We've tried not use a lot of third party dependencies, so you won't need to install that many dependencies. For this resource to work, you'll need to install"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/AvarianKnight/pma-voice"},"pma-voice")," ","[mandatory (main branch)]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mkafrin/PolyZone"},"PolyZone")," ","[mandatory]")),(0,o.kt)("h3",{id:"set-correct-framework"},"Set correct framework"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"shared/config.lua")," and set your version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"Config.core = 'none' -- available: standalone, QB or ESX\n")),(0,o.kt)("h3",{id:"adjust-config"},"Adjust config"),(0,o.kt)("p",null,"Before starting, please adjust config values as you want. ",(0,o.kt)("a",{parentName:"p",href:"/docs/fd_radio/config"},"Config")),(0,o.kt)("h3",{id:"optional"},"Optional"),(0,o.kt)("p",null,"Check out optional stuff, which might make sense for your setup. ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/fd_radio/optional"},"Optional link")),(0,o.kt)("h3",{id:"start"},"Start"),(0,o.kt)("p",null,"Add"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ensure fd_radio\n")),(0,o.kt)("p",null,"to your server.cfg and if you did everything as described above, please start your server and enjoy your new radio!"),(0,o.kt)("h2",{id:"common-issues"},"Common Issues"),(0,o.kt)("h3",{id:"questions"},"Questions"),(0,o.kt)("p",null,"If you have an issue or questions, please visit our discord, and open a ticket."))}p.isMDXComponent=!0}}]);