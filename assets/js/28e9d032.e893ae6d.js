"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3411],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(4334),o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(3117),a=n(7294),o=n(4334),l=n(2466),i=n(6550),u=n(1980),s=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:n,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var h=n(2389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},6824:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(3117),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={title:"Installation"},u=void 0,s={unversionedId:"fd_rc/QBCore/installation",id:"fd_rc/QBCore/installation",title:"Installation",description:"Please carefully read installation process, otherwise fd_rc resource will not work.",source:"@site/docs/fd_rc/QBCore/installation.md",sourceDirName:"fd_rc/QBCore",slug:"/fd_rc/QBCore/installation",permalink:"/docs/fd_rc/QBCore/installation",draft:!1,editUrl:"https://github.com/FelisDevelopment/FelisDevelopment.github.io/tree/main/docs/fd_rc/QBCore/installation.md",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"fd_rc",previous:{title:"Config",permalink:"/docs/fd_rc/QBCore/config"},next:{title:"Specific framework",permalink:"/docs/fd_rc/"}},c={},d=[{value:"Dependecies",id:"dependecies",level:2},{value:"Framework Specific",id:"framework-specific",level:3},{value:"Config",id:"config",level:2},{value:"Items",id:"items",level:2},{value:"Icons",id:"icons",level:3},{value:"Items",id:"items-1",level:3},{value:"Start",id:"start",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"Questions",id:"questions",level:3}],p={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please carefully read installation process, otherwise ",(0,a.kt)("inlineCode",{parentName:"p"},"fd_rc")," resource will not work.")),(0,a.kt)("h2",{id:"dependecies"},"Dependecies"),(0,a.kt)("h3",{id:"framework-specific"},"Framework Specific"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"qbcore",label:"QBCore",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Resource is compatible with QBCore, you can get it at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/qbcore-framework"},"QBCore Framework Repository"),". However, it's tested only with newest version."),(0,a.kt)("p",null,"Additionally you'll need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/BerkieBb/qb-target"},"qb-target")," ","[mandatory]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/qbcore-framework/qb-menu"},"qb-menu")," ","[mandatory]")),(0,a.kt)("p",null,"Please make sure to ensure it before ",(0,a.kt)("inlineCode",{parentName:"p"},"fd_rc")," resource, and don't forget to set your core resource in ",(0,a.kt)("inlineCode",{parentName:"p"},"shared/config.lua"),"."))),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("p",null,"Depending on your framework please set appropriate framework core resource configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"shared/config.lua"),"."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"qbcore",label:"QBCore",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"    core_resource = 'qb-core'\n")))),(0,a.kt)("h2",{id:"items"},"Items"),(0,a.kt)("h3",{id:"icons"},"Icons"),(0,a.kt)("p",null,"First of all, please move icons from ",(0,a.kt)("inlineCode",{parentName:"p"},"images/")," folder to your inventory resource and add items to inventory config as specified below."),(0,a.kt)("h3",{id:"items-1"},"Items"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"qbcore",label:"QBCore",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Add items to ",(0,a.kt)("inlineCode",{parentName:"p"},"shared/items.lua")," or where your ",(0,a.kt)("inlineCode",{parentName:"p"},"QBShared.Items")," is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'    ["drone"] = {\n        ["name"] = "drone",\n        ["label"] = "Drone",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "drone.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Lets have some fun."\n    },\n\n    ["rc_car"] = {\n        ["name"] = "rc_car",\n        ["label"] = "Remote Control Car",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "rc_car.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "It\'s not for kids."\n    },\n\n    ["rc_controller"] = {\n        ["name"] = "rc_controller",\n        ["label"] = "Remote Controller",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "rc_controller.png",\n        ["unique"] = true,\n        ["useable"] = true,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "It\'s not for kids."\n    },\n\n    ["rc_batteries"] = {\n        ["name"] = "rc_batteries",\n        ["label"] = "RC Batteries",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "rc_batteries.png",\n        ["unique"] = false,\n        ["useable"] = false,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Recharge your drone or car."\n    },\n\n    ["rc_repair_kit"] = {\n        ["name"] = "rc_repair_kit",\n        ["label"] = "RC Repair Kit",\n        ["weight"] = 0,\n        ["type"] = "item",\n        ["image"] = "rc_repair_kit.png",\n        ["unique"] = false,\n        ["useable"] = false,\n        ["shouldClose"] = true,\n        ["combinable"] = nil,\n        ["description"] = "Repair your RC."\n    },\n')))),(0,a.kt)("h2",{id:"start"},"Start"),(0,a.kt)("p",null,"If you did everything as described above, please start your server and enjoy remote control vehicles!"),(0,a.kt)("h2",{id:"common-issues"},"Common Issues"),(0,a.kt)("h3",{id:"questions"},"Questions"),(0,a.kt)("p",null,"If you have an issue or questions, please visit our discord, and open a ticket."))}f.isMDXComponent=!0}}]);