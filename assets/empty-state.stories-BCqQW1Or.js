import{j as e}from"./jsx-runtime-D7NN_m21.js";import{c as k}from"./index-DLipHefI.js";import{I as x}from"./icon-Db4SmMDS.js";import{H as v}from"./heading-CG5T2z0m.js";import{P as C}from"./paragraph-C-iVGNfO.js";import{B as b}from"./button-BRYyhyxi.js";import"./iframe-BzsbkQY8.js";import"./preload-helper-C1FmrZbK.js";import"./iconify-CZpI7N4b.js";import"./link-CgLy0FMO.js";const j="_emptyState_g9gdk_1",T="_iconWrapper_g9gdk_11",W="_title_g9gdk_16",E="_description_g9gdk_20",q="_action_g9gdk_25",t={emptyState:j,iconWrapper:T,title:W,description:E,action:q};function f({icon:_="mingcute:box-line",title:S,description:i,actionLabel:s,onAction:a,className:N}){return e.jsxs("div",{className:k(t.emptyState,N),children:[e.jsx("div",{className:t.iconWrapper,children:e.jsx(x,{icon:_,size:64,color:"var(--colors-text-tertiary)"})}),e.jsx(v,{level:"h4",className:t.title,children:S}),i&&e.jsx(C,{color:"secondary",className:t.description,children:i}),s&&a&&e.jsx(b,{appearance:"primary",onClick:a,className:t.action,children:s})]})}f.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'mingcute:box-line'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},actionLabel:{required:!1,tsType:{name:"string"},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"Data Display/EmptyState",component:f,tags:["autodocs"]},o={args:{icon:"mingcute:shopping-cart-1-line",title:"Your cart is empty",description:"Looks like you haven’t added anything to your cart yet. Start shopping to find something you love!",actionLabel:"Continue Shopping",onAction:()=>console.log("Go to shop")}},r={args:{icon:"mingcute:search-3-line",title:"No results found",description:"We couldn’t find anything matching your search. Try checking your spelling or using different keywords.",actionLabel:"Clear Search",onAction:()=>console.log("Clear search")}},n={args:{icon:"mingcute:bill-line",title:"No orders yet",description:"When you place an order, it will appear here."}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    icon: 'mingcute:shopping-cart-1-line',
    title: 'Your cart is empty',
    description: 'Looks like you haven’t added anything to your cart yet. Start shopping to find something you love!',
    actionLabel: 'Continue Shopping',
    onAction: () => console.log('Go to shop')
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    icon: 'mingcute:search-3-line',
    title: 'No results found',
    description: 'We couldn’t find anything matching your search. Try checking your spelling or using different keywords.',
    actionLabel: 'Clear Search',
    onAction: () => console.log('Clear search')
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,y,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: 'mingcute:bill-line',
    title: 'No orders yet',
    description: 'When you place an order, it will appear here.'
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const Y=["EmptyCart","NoSearchResults","NoOrders"];export{o as EmptyCart,n as NoOrders,r as NoSearchResults,Y as __namedExportsOrder,P as default};
