"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1050],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6503:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const i={title:"First Persom shooting from vehicle"},l=void 0,a={unversionedId:"fd_hud/Optional/firstPersonAim",id:"fd_hud/Optional/firstPersonAim",title:"First Persom shooting from vehicle",description:"First person shooting",source:"@site/docs/fd_hud/Optional/firstPersonAim.md",sourceDirName:"fd_hud/Optional",slug:"/fd_hud/Optional/firstPersonAim",permalink:"/docs/fd_hud/Optional/firstPersonAim",draft:!1,editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/fd_hud/Optional/firstPersonAim.md",tags:[],version:"current",frontMatter:{title:"First Persom shooting from vehicle"},sidebar:"fd_hud",previous:{title:"Compass as an item",permalink:"/docs/fd_hud/Optional/compass"},next:{title:"Pilot license",permalink:"/docs/fd_hud/Optional/pilot"}},s={},c=[{value:"First person shooting",id:"first-person-shooting",level:2},{value:"Installation",id:"installation",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"first-person-shooting"},"First person shooting"),(0,o.kt)("p",null,"This resource adds ability to force first person shooting from vehicle. To enable functionality please enable it in config, and restart your server. It'll force first person shooting from any vehicle."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable it in config. ",(0,o.kt)("inlineCode",{parentName:"li"},"shared/config.lua"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"config.VehicleFirstPersonAim = true\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Restart your server")))}f.isMDXComponent=!0}}]);