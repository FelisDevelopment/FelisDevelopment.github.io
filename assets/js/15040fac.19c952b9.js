"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9131],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return n?r.createElement(p,l(l({ref:t},s),{},{components:n})):r.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(4334),o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(3117),a=n(7294),o=n(4334),l=n(2466),i=n(6550),c=n(1980),u=n(7392),s=n(12);function f(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??f(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,u]=p({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,s.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var v=n(2389),h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:f}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),r=u[n].value;r!==i&&(f(t),c(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function k(e){const t=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},6535:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var r=n(3117),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={title:"Config"},c=void 0,u={unversionedId:"fd_rc/ESX/config",id:"fd_rc/ESX/config",title:"Config",description:"Config",source:"@site/docs/fd_rc/ESX/config.md",sourceDirName:"fd_rc/ESX",slug:"/fd_rc/ESX/config",permalink:"/docs/fd_rc/ESX/config",draft:!1,editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/fd_rc/ESX/config.md",tags:[],version:"current",frontMatter:{title:"Config"},sidebar:"fd_rc",previous:{title:"Remote control vehicles",permalink:"/docs/category/remote-control-vehicles"},next:{title:"Installation",permalink:"/docs/fd_rc/ESX/installation"}},s={},f=[{value:"Config",id:"config",level:2},{value:"New RC",id:"new-rc",level:2},{value:"fd_rc config",id:"fd_rc-config",level:3},{value:"Inventory item",id:"inventory-item",level:3}],d={toc:f},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("p",null,"To find out more about configuration please check descriptions below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'Config = {\n    Locale = \'en\',\n    rcs = {\n        drone = {\n            name = "drone",\n            model = `xs_prop_arena_drone_02`,\n            camOffset = { -0.125, -0.135 }, -- camera offsets\n            maxDistance = 320.0, -- max distance after which signal will be lost\n            battery = 45 -- how much battery will drone / car have in minutes\n        },\n        rc_car = {\n            name = "rc_car",\n            model = `rcbandito`,\n            camOffset = { 0.115, 0.35 }, -- camera offsets\n            maxDistance = 320.0, -- max distance after which signal will be lost\n            battery = 45, -- how much battery will drone / car have in minutes\n            isVehicle = true, -- if rc is a vehicle, like rcbandito, please enable this option\n        }\n    },\n    controls = {\n        vehicle = {\n            {194, "actions.exit"}\n        },\n        drone = {\n            {21, "actions.increase_speed"},\n            {32, "actions.forward"},\n            {33, "actions.backward"},\n            {34, "actions.left"},\n            {35, "actions.right"},\n            {38, "actions.up"},\n            {44, "actions.down"},\n            {194, "actions.exit"},\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"new-rc"},"New RC"),(0,a.kt)("p",null,"Since script is dynamic, you can add new remote control vehicles at any time."),(0,a.kt)("h3",{id:"fd_rc-config"},"fd_rc config"),(0,a.kt)("p",null,"First of all, add rc to config ",(0,a.kt)("inlineCode",{parentName:"p"},"shared/config.lua"),", please refer to example down below. It will be named ",(0,a.kt)("inlineCode",{parentName:"p"},"newdrone")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'Config =  {\n    ...,\n    rcs = {\n        ...,\n        newdrone = {\n            name = "newdrone",\n            model = `some_model`,\n            camOffset = { -0.125, -0.135 }, -- camera offsets\n            maxDistance = 320.0, -- max distance after which signal will be lost\n            battery = 45 -- how much battery will drone / car have in minutes\n        },\n    }\n}\n')),(0,a.kt)("h3",{id:"inventory-item"},"Inventory item"),(0,a.kt)("p",null,"After adding rc to config, you'll need to add item to your inventory."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ESX",label:"ESX",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Add item to ",(0,a.kt)("inlineCode",{parentName:"p"},"ox_inventory/data/items.lua;"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"    ['newdrone'] = {\n        label = 'Drone',\n        weight = 1,\n        stack = false,\n        close = true,\n        description = 'Lets have some fun.',\n        client = {\n            usetime = 1000,\n            export = 'fd_rc.itemUsed'\n        },\n        server = {\n            export = 'fd_rc.itemUsed'\n        }\n    },\n")))))}p.isMDXComponent=!0}}]);