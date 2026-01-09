import{j as e}from"./jsx-runtime-DGop6S_Y.js";import{c as k}from"./index-DdzbqoOO.js";import{I as x}from"./icon-B1d87mFR.js";import{H as v}from"./heading-Cd6CitT_.js";import{P as C}from"./paragraph-CmE3imA_.js";import{B as b}from"./button-CPGO6X3v.js";import"./index-C3JiJ1qr.js";import"./iconify-BsDr7Yem.js";import"./link-CexCEl2p.js";import"./chunk-EPOLDU6W-CUVKY8ij.js";const j="_emptyState_g9gdk_1",E="_iconWrapper_g9gdk_11",T="_title_g9gdk_16",W="_description_g9gdk_20",q="_action_g9gdk_25",t={emptyState:j,iconWrapper:E,title:T,description:W,action:q};function f({icon:_="mingcute:box-line",title:S,description:i,actionLabel:s,onAction:a,className:N}){return e.jsxs("div",{className:k(t.emptyState,N),children:[e.jsx("div",{className:t.iconWrapper,children:e.jsx(x,{icon:_,size:64,color:"var(--colors-text-tertiary)"})}),e.jsx(v,{level:"h4",className:t.title,children:S}),i&&e.jsx(C,{color:"secondary",className:t.description,children:i}),s&&a&&e.jsx(b,{appearance:"primary",onClick:a,className:t.action,children:s})]})}f.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{icon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'mingcute:box-line'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},actionLabel:{required:!1,tsType:{name:"string"},description:""},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Y={title:"E-commerce/Empty",component:f,tags:["autodocs"]},o={args:{icon:"mingcute:shopping-cart-1-line",title:"Your cart is empty",description:"Looks like you haven’t added anything to your cart yet. Start shopping to find something you love!",actionLabel:"Continue Shopping",onAction:()=>console.log("Go to shop")}},r={args:{icon:"mingcute:search-3-line",title:"No results found",description:"We couldn’t find anything matching your search. Try checking your spelling or using different keywords.",actionLabel:"Clear Search",onAction:()=>console.log("Clear search")}},n={args:{icon:"mingcute:bill-line",title:"No orders yet",description:"When you place an order, it will appear here."}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const z=["EmptyCart","NoSearchResults","NoOrders"];export{o as EmptyCart,n as NoOrders,r as NoSearchResults,z as __namedExportsOrder,Y as default};
