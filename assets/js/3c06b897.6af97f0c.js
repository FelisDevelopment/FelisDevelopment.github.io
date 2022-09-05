"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6079],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?t.createElement(g,o(o({ref:n},s),{},{components:r})):t.createElement(g,o({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7460:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var t=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"Range"},c=void 0,p={unversionedId:"fd_radio/range",id:"fd_radio/range",title:"Range",description:"Disable range",source:"@site/docs/fd_radio/range.md",sourceDirName:"fd_radio",slug:"/fd_radio/range",permalink:"/docs/fd_radio/range",editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/fd_radio/range.md",tags:[],version:"current",frontMatter:{title:"Range"},sidebar:"fd_radio",previous:{title:"Optional",permalink:"/docs/fd_radio/optional"}},s={},d=[{value:"Disable range",id:"disable-range",level:2},{value:"Disable range for police",id:"disable-range-for-police",level:2},{value:"Disable for specific whitelisted radio",id:"disable-for-specific-whitelisted-radio",level:2}],u={toc:d};function f(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"disable-range"},"Disable range"),(0,i.kt)("p",null,"To disable range for everyone, please update config ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.radioRangesEnabled")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Config.radioRangesEnabled = false\n")),(0,i.kt)("h2",{id:"disable-range-for-police"},"Disable range for police"),(0,i.kt)("p",null,"To disable range for police, please update config ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.disableRangeForPolice")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Config.disableRangeForPolice = false\n")),(0,i.kt)("h2",{id:"disable-for-specific-whitelisted-radio"},"Disable for specific whitelisted radio"),(0,i.kt)("p",null,"To disable range for specific whitelisted radio, please go ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.restrictedChannels"),", find specific channel and add ",(0,i.kt)("inlineCode",{parentName:"p"},"rangeDisabled = true")," to it. This will disable range for specific whitelisted radio."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"    [1] = {\n        police = true,\n        ambulance = true,\n        rangeDisabled = true\n    },\n")))}f.isMDXComponent=!0}}]);